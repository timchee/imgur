import { avatarImages } from "./avatarImages.js";

const giphyApiKey = "XPfrR6YI2QZyv3SDaYGKVcWcuSzXcU6Q";
const commentsDiv = document.getElementById("comments");
const collapseAllBtn = document.getElementById("collapse-all");
const loadMoreCommentsBtn = document.getElementById("load-more-comments");
const expandAllBtns = Array.from(document.getElementsByClassName("expandAll"));

const hideLoadMoreCommentsBtn = () => {
  const loadMoreCommentsBtn = document.getElementById("load-more-comments");
  loadMoreCommentsBtn.classList.add("hidden");
};

const showExpandBtn = () => {
  const expandButton = expandAllBtns[0];
  expandButton.classList.remove("hidden");
  expandButton.classList.add("flex");
};
const hideExpandBtn = () => {
  const expandButton = expandAllBtns[0];
  expandButton.classList.add("hidden");
  expandButton.classList.remove("flex");
};

const showCollapseBtn = () => {
  collapseAllBtn.classList.add("flex");
  collapseAllBtn.classList.remove("hidden");
};

const hideCollapseBtn = () => {
  collapseAllBtn.classList.remove("flex");
  collapseAllBtn.classList.add("hidden");
};

//Gets comments from endpoint
const getComments = async (comment_count) => {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/comments?_limit=${comment_count}`
  );
  const comments = await data.json();
  return comments;
};

//Gets a random gif from endpoint
const getRandomGif = async () => {
  const data = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${giphyApiKey}&tag=funny`
  );
  const json = await data.json();
  return json.data.images.downsized.url;
};

//Randomly generates a comment body
//A comment has a probability of 0.1 to have a gif and text, and a probability of 0.2 to have only gif and no text
const generateCommentBody = async (commentText) => {
  const random = Math.random();
  const hasImageAndText = random < 0.1;
  const hasImage = random < 0.2;
  let commentBody;
  if (hasImageAndText) {
    const url = await getRandomGif();
    commentBody = `
     <img src="${url}"
     m6" class="rounded h-[120px] mr-3"><p class="pt-2">${commentText}</p>
      `;
  } else if (hasImage) {
    const url = await getRandomGif();
    commentBody = `
    <img src="${url}"
    mf" class="rounded h-[120px] mr-3">
      `;
  } else {
    commentBody = commentText;
  }
  return commentBody;
};

//Creates a comment
//randomNumber and comment_count are used to generate a random number of votes for the comment
const createComment = async (comment, randomNumber, comment_count) => {
  const username = comment.email.split("@")[0];
  const firstLetter = username.toUpperCase().charCodeAt(0) - 65; //firstletter is used to choose avatar for the user
  let commentBody = await generateCommentBody(comment.body);
  const votes =
    Math.floor(
      randomNumber * (comment_count - comment.id + comment.postId) * 10
    ) + 1;

  const commentHtml = `
    <div class="comment">
    <div class="flex px-1 my-2 py-2 gap-2 text-xs sm:rounded-xl sm:hover:bg-gray-800">
      <img src=${avatarImages[firstLetter]} class="bg-btnColor-1 shrink-0 w-6 h-6 rounded-full sm:top-0"></img>
      <div class="flex flex-col gap-2">
        <p class="pt-1 text-gray-200 font-bold tracking-wide sm:text-btnColor-1 sm: sm:top-1 lowercase">${username}</p>
        <div class="sm:mt-2 sm:left-0 font-medium text-sm tracking-wide first-letter:uppercase">${commentBody}</div>
        <div class="flex items-center gap-6 py-1">
          <p class="text-gray-900"> <img src="../assets/upvote.svg" class="w-4 h-4" /></p>
          <p class="text-white text-xs font-medium">${votes}</p>
          <img src="../assets/downvote.svg" class="w-4 h-4" />
        </div>
      </div>
    </div>
    <div class="bg-gray-900 h-px w-full sm:bg-gray-500"></div>
  </div>
    `;
  return commentHtml;
};

//Creates first comments, adds them to the comments div and returns the comments created
const addInitialComments = async (comments, comment_count, randomNumber) => {
  let addedComments = [];
  for (const comment of comments) {
    let newComment = await createComment(comment, randomNumber, comment_count);
    commentsDiv.innerHTML += newComment;
    addedComments.push(newComment);
  }
  return addedComments;
};

//If there are more than 30 unloaded comments, adds 30 more comments,
//otherwise adds the comments left unloaded
const addMoreComments = async (allComments, commentsLoaded, randomNumber) => {
  let commentCount; //Nr. of comments that will be added
  if (commentsLoaded + 30 < allComments.length) {
    commentCount = 30;
  } else {
    commentCount = allComments.length - commentsLoaded;
  }
  const comments = allComments.slice(
    commentsLoaded,
    commentsLoaded + commentCount
  );
  for (const comment of comments) {
    commentsDiv.innerHTML += await createComment(
      comment,
      randomNumber,
      allComments.length
    );
  }

  //If there are no more unloaded comments
  if (commentsLoaded + commentCount >= allComments.length) {
    hideLoadMoreCommentsBtn();
    hideExpandBtn();
    showCollapseBtn();
  }
  return commentCount;
};

//Adds all unloaded comments
const addRemainingComments = async (
  allComments,
  startIndex,
  randomNumber,
  comment_count
) => {
  const comments = allComments.slice(startIndex);
  for (const comment of comments) {
    commentsDiv.innerHTML += await createComment(
      comment,
      randomNumber,
      comment_count
    );
  }
  hideLoadMoreCommentsBtn();
};

//Leaves only the initial comments
const removeComments = (comments) => {
  commentsDiv.innerHTML = "";
  comments.forEach((comment) => {
    commentsDiv.innerHTML += comment;
  });
};

//Adds event listeners to expand all button, collapse all button and load more comments button
const addEventListeners = (
  allComments,
  commentsLoaded,
  randomNumber,
  comment_count,
  commentsAdded
) => {
  expandAllBtns.forEach((expandButton) => {
    expandButton.addEventListener("click", () => {
      hideExpandBtn();
      showCollapseBtn();
      addRemainingComments(
        allComments,
        commentsLoaded,
        randomNumber,
        comment_count
      );
    });
  });

  collapseAllBtn.addEventListener("click", () => {
    showExpandBtn();
    hideCollapseBtn();
    removeComments(commentsAdded);
    loadMoreCommentsBtn.classList.remove("hidden");
    commentsLoaded = 5;
  });

  loadMoreCommentsBtn.addEventListener("click", async () => {
    const count = await addMoreComments(
      allComments,
      commentsLoaded,
      randomNumber,
      comment_count
    );
    commentsLoaded += count;
  });
};

//Main function
export const addPlaceholderComments = async (comment_count) => {
  const allComments = await getComments(comment_count);
  const initialCommentsLoaded = 5;
  const randomNumber = Math.random(); //this random number is used for generating random comment votes
  let commentsLoaded = initialCommentsLoaded;
  //Add initial comments
  const commentsAdded = await addInitialComments(
    allComments.slice(0, initialCommentsLoaded),
    comment_count,
    randomNumber
  );
  addEventListeners(
    allComments,
    commentsLoaded,
    randomNumber,
    comment_count,
    commentsAdded
  );
};
