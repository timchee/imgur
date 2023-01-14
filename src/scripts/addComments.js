import { avatarImages } from "./avatarImages.js";

const getComments = async (comment_count) => {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/comments?_limit=${comment_count}`
  );
  const comments = await data.json();
  return comments;
};

const createComment = (comment, randomNumber, comment_count) => {
  const username = comment.email.split("@")[0];
  const firstLetter = username.toUpperCase().charCodeAt(0) - 65;
  const votes =
    Math.floor(
      randomNumber * (comment_count - comment.id + comment.postId) * 10
    ) + 1;
  const random = Math.random();
  const hasImageAndText = random < 0.1;
  const hasImage = random < 0.3;
  let commentBody;
  if (hasImageAndText) {
    commentBody = `
      <img src="https://i.imgur.com/N7KHgAB.jpg"" class="rounded h-[120px] mr-3"><p class="pt-2 first-letter:uppercase">${comment.body}</>
      `;
  } else if (hasImage) {
    commentBody = `
      <img src="https://i.imgur.com/N7KHgAB.jpg"" class="rounded h-[120px] mr-3">
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

const addInitialComments = (comments, comment_count) => {
  const commentsDiv = document.getElementById("comments");
  const randomNumber = Math.random();
  comments.forEach((comment) => {
    commentsDiv.innerHTML += createComment(
      comment,
      randomNumber,
      comment_count
    );
  });
  return randomNumber;
};

const addMoreComments = (
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
  comments.forEach((comment) => {
    commentsDiv.innerHTML += createComment(
      comment,
      randomNumber,
      comment_count
    );
  });
  if (commentsLoaded + addedCommentCount >= comment_count) {
    const loadMoreCommentsBtn = document.getElementById("load-more-comments");
    loadMoreCommentsBtn.classList.add("hidden");
  }

  return addedCommentCount;
};

const addRemainingComments = (
  allComments,
  startIndex,
  randomNumber,
  comment_count
) => {
  const commentsDiv = document.getElementById("comments");
  const comments = allComments.slice(startIndex);
  comments.forEach((comment) => {
    commentsDiv.innerHTML += createComment(
      comment,
      randomNumber,
      comment_count
    );
  });
};

export const addComments = async (comment_count) => {
  const allComments = await getComments(comment_count);
  const initialCommentsLoaded = 10;
  let commentsLoaded = initialCommentsLoaded;
  const randomNumber = addInitialComments(
    allComments.slice(0, initialCommentsLoaded),
    comment_count
  );
  const expandAllBtns = Array.from(
    document.getElementsByClassName("expandAll")
  );
  expandAllBtns.forEach((expandButton) => {
    expandButton.addEventListener("click", () => {
      addRemainingComments(
        allComments,
        initialCommentsLoaded,
        randomNumber,
        comment_count
      );
    });
  });

  const loadMoreCommentsBtn = document.getElementById("load-more-comments");
  loadMoreCommentsBtn.addEventListener("click", () => {
    const count = addMoreComments(
      allComments,
      commentsLoaded,
      randomNumber,
      comment_count
    );
    commentsLoaded += count;
  });
};
