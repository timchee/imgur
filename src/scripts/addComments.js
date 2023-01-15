import { avatarImages } from "./avatarImages.js";

const giphyApiKey = "XPfrR6YI2QZyv3SDaYGKVcWcuSzXcU6Q";

const getComments = async (comment_count) => {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/comments?_limit=${comment_count}`
  );
  const comments = await data.json();
  return comments;
};

const getGif = async () => {
  const data = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${giphyApiKey}&tag=funny`
  );
  const json = await data.json();
  return json.data.images.downsized.url;
};

const createComment = async (comment, randomNumber, comment_count) => {
  const url = await getGif();
  const username = comment.email.split("@")[0];
  const firstLetter = username.toUpperCase().charCodeAt(0) - 65;
  const votes =
    Math.floor(
      randomNumber * (comment_count - comment.id + comment.postId) * 10
    ) + 1;
  const random = Math.random();
  const hasImageAndText = random < 0.1;
  const hasImage = random < 0.2;
  let commentBody;
  if (hasImageAndText) {
    commentBody = `
     <img src="${url}"
     m6" class="rounded h-[120px] mr-3"><p class="pt-2">${comment.body}</p>
      `;
  } else if (hasImage) {
    commentBody = `
    <img src="${url}"
    mf" class="rounded h-[120px] mr-3">
      `;
  } else {
    commentBody = comment.body;
  }
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

const addInitialComments = async (comments, comment_count) => {
  const commentsDiv = document.getElementById("comments");
  const randomNumber = Math.random();
  let addedComments = [];
  for (const comment of comments) {
    let newComment = await createComment(comment, randomNumber, comment_count);
    commentsDiv.innerHTML += newComment;
    addedComments.push(newComment);
  }
  return [randomNumber, addedComments];
};

const addMoreComments = async (
  allComments,
  commentsLoaded,
  randomNumber,
  comment_count
) => {
  const commentsDiv = document.getElementById("comments");
  let addedCommentCount;
  if (commentsLoaded + 30 < comment_count) {
    addedCommentCount = 30;
  } else {
    addedCommentCount = comment_count - commentsLoaded;
  }
  const comments = allComments.slice(
    commentsLoaded,
    commentsLoaded + addedCommentCount
  );
  for (const comment of comments) {
    commentsDiv.innerHTML += await createComment(
      comment,
      randomNumber,
      comment_count
    );
  }

  if (commentsLoaded + addedCommentCount >= comment_count) {
    const loadMoreCommentsBtn = document.getElementById("load-more-comments");
    const expandButton = Array.from(
      document.getElementsByClassName("expandAll")
    )[0];
    const collapseAllBtn = document.getElementById("collapse-all");
    loadMoreCommentsBtn.classList.add("hidden");
    expandButton.classList.add("hidden");
    expandButton.classList.remove("flex");
    collapseAllBtn.classList.remove("hidden");
    collapseAllBtn.classList.add("flex");
  }

  return addedCommentCount;
};

const addRemainingComments = async (
  allComments,
  startIndex,
  randomNumber,
  comment_count
) => {
  const commentsDiv = document.getElementById("comments");
  const comments = allComments.slice(startIndex);
  for (const comment of comments) {
    commentsDiv.innerHTML += await createComment(
      comment,
      randomNumber,
      comment_count
    );
  }
  const loadMoreCommentsBtn = document.getElementById("load-more-comments");
  loadMoreCommentsBtn.classList.add("hidden");
};

const removeComments = (comments) => {
  const commentsDiv = document.getElementById("comments");
  commentsDiv.innerHTML = "";
  comments.forEach((comment) => {
    commentsDiv.innerHTML += comment;
  });
};

export const addComments = async (comment_count) => {
  const allComments = await getComments(comment_count);
  const initialCommentsLoaded = 5;
  let commentsLoaded = initialCommentsLoaded;
  const [randomNumber, commentsAdded] = await addInitialComments(
    allComments.slice(0, initialCommentsLoaded),
    comment_count
  );
  const expandAllBtns = Array.from(
    document.getElementsByClassName("expandAll")
  );
  const collapseAllBtn = document.getElementById("collapse-all");
  const loadMoreCommentsBtn = document.getElementById("load-more-comments");

  expandAllBtns.forEach((expandButton) => {
    expandButton.addEventListener("click", () => {
      expandButton.classList.add("hidden");
      expandButton.classList.remove("flex");
      collapseAllBtn.classList.remove("hidden");
      collapseAllBtn.classList.add("flex");
      addRemainingComments(
        allComments,
        commentsLoaded,
        randomNumber,
        comment_count
      );
    });
  });

  collapseAllBtn.addEventListener("click", () => {
    expandAllBtns[0].classList.remove("hidden");
    expandAllBtns[0].classList.add("flex");
    collapseAllBtn.classList.remove("flex");
    collapseAllBtn.classList.add("hidden");
    removeComments(commentsAdded);
    loadMoreCommentsBtn.classList.remove("hidden");
    commentsLoaded = 10;
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
