import { avatarImages } from "./avatarImages.js";

const commentsDiv = document.getElementById("comments");
const collapseAllBtn = document.getElementById("collapse-all");
const loadMoreCommentsBtn = document.getElementById("load-more-comments");
const expandAllBtns = Array.from(document.getElementsByClassName("expandAll"));
const postId = window.location.search.split("=")[1];

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
  expandAllBtns.forEach((eb) => {
    eb.classList.add("hidden");
    eb.classList.remove("flex");
  });
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
const getComments = async () => {
  const data = await fetch(`../data/comments${postId}.json`);
  const comments = await data.json();
  return comments;
};

const addImage = (url) => {
  let temp = url.split(".");
  let imageHtml;
  const extension = temp[temp.length - 1];
  if (extension == "mp4") {
    imageHtml = `
      <video class="rounded h-[120px] mr-3" autoplay loop muted>
      <source src="${url}" type="video/mp4">
      </video>
      `;
  } else if (extension == "jpg") {
    imageHtml = `
      <img src="${url}" class="rounded h-[120px] mr-3">
      `;
  }
  return imageHtml;
};

const createCommentBody = async (comment) => {
  const hasImageAndText = comment.text != null && comment.image != null;
  const hasImage = comment.image != null;
  let commentBody;
  if (hasImageAndText) {
    const image = addImage(comment.image);
    commentBody = `${image}
   <p class="pt-2">${comment.text}</p>
    `;
  } else if (hasImage) {
    commentBody = addImage(comment.image);
  } else {
    commentBody = comment.text;
  }
  return commentBody;
};

const createComment = async (comment) => {
  const username = comment.name;
  const firstLetter = username.toUpperCase().charCodeAt(0) - 65; //firstletter is used to choose avatar for the user
  let commentBody = await createCommentBody(comment.body);
  const votes = comment.votes;
  let avatar = avatarImages[firstLetter];
  if (comment.avatar) {
    avatar = comment.avatar;
  }

  const commentHtml = `
    <div>
    <div class="flex px-1 my-2 py-2 gap-2 text-xs sm:rounded-xl sm:hover:bg-gray-800">
      <img src=${avatar} class="bg-btnColor-1 shrink-0 w-6 h-6 rounded-full sm:top-0"></img>
      <div class="flex flex-col gap-2">
        <p class="pt-1 text-gray-200 font-bold tracking-wide sm:text-btnColor-1 sm: sm:top-1">${username}</p>
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
const addInitialComments = async (comments, comment_count) => {
  let addedComments = [];
  for (const comment of comments) {
    if (comment.postId == postId) {
      let newComment = await createComment(comment, comment_count);
      commentsDiv.innerHTML += newComment;
      addedComments.push(newComment);
    }
  }
  return addedComments;
};

//If there are more than 30 unloaded comments, adds 30 more comments,
//otherwise adds the comments left unloaded
const addMoreComments = async (allComments, commentsLoaded) => {
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
    if (comment.postId == postId) {
      commentsDiv.innerHTML += await createComment(comment, allComments.length);
    }
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
const addRemainingComments = async (allComments, startIndex, comment_count) => {
  const comments = allComments.slice(startIndex);
  for (const comment of comments) {
    if (comment.postId == postId) {
      commentsDiv.innerHTML += await createComment(comment, comment_count);
    }
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
  comment_count,
  commentsAdded
) => {
  expandAllBtns.forEach((expandButton) => {
    expandButton.addEventListener("click", () => {
      hideExpandBtn();
      showCollapseBtn();
      addRemainingComments(allComments, commentsLoaded, comment_count);
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
      comment_count
    );
    commentsLoaded += count;
  });
};

export const addComments = async () => {
  const allComments = await getComments();
  const initialCommentsLoaded = 5;
  let commentsLoaded = initialCommentsLoaded;
  //Add initial comments
  const commentsAdded = await addInitialComments(
    allComments.slice(0, initialCommentsLoaded)
  );
  addEventListeners(
    allComments,
    commentsLoaded,
    allComments.length,
    commentsAdded
  );
};
