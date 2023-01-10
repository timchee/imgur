import { addData } from "./addPostDetails.js";

const getPostId = () => {
  return window.location.search.split("=")[1];
};

const getPostById = async (postId) => {
  const response = await fetch("https://api.npoint.io/bc13239283496e6574a7");
  const responseJson = await response.json();
  const data = responseJson.data;
  let post = "Post not found";
  let prevId = null;
  let nextId;
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === postId) {
      if (data[i - 1]) {
        [post, prevId, nextId] = [data[i], data[i - 1].id, data[i + 1].id];
      } else {
        [post, nextId] = [data[i], data[i + 1].id];
      }
    }
  }
  return [post, prevId, nextId];
};

const nextAndPreviousBtns = (nextPostId, previousPostId) => {
  const nextPostBtns = Array.from(document.getElementsByClassName("next-btn"));
  nextPostBtns.forEach((nextPostBtn) => {
    nextPostBtn.href = `./gallery.html?postId=${nextPostId}`;
  });
  const prevPostBtns = Array.from(
    document.getElementsByClassName("previous-btn")
  );
  prevPostBtns.forEach((prevPostBtn) => {
    if (previousPostId == null) {
      prevPostBtn.classList.add("hidden");
    } else {
      prevPostBtn.href = `./gallery.html?postId=${previousPostId}`;
    }
  });
};
const init = async () => {
  const postId = getPostId();
  const [post, previousPostId, nextPostId] = await getPostById(postId);
  const {
    account_url,
    comment_count,
    datetime,
    downs,
    images,
    images_count,
    points,
    score,
    tags,
    title,
    ups,
    views,
  } = post;

  nextAndPreviousBtns(nextPostId, previousPostId);
  addData(
    title,
    account_url,
    images,
    post,
    datetime,
    views,
    comment_count,
    ups - downs,
    tags
  );
  const showTags = document.getElementById("showTags");
  showTags.innerHTML = `&#8226 ${tags.length} Tags`;
  showTags.addEventListener("click", () => {
    const tagsDiv = document.getElementById("tags");
    tagsDiv.classList.toggle("hidden");
    tagsDiv.classList.toggle("flex");
  });
};

init();
