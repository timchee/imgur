import { addGalleryImages } from "./addGalleryImages.js";
import { addHeader } from "./header.js";
import { singleSidebarPost } from "./sidebarPost.js";
import { getData } from "./addGalleryImages.js";

let postIds = [];
const addSidebarPosts = async () => {
  const dataArray = await getData("https://api.npoint.io/bc13239283496e6574a7");
  const postsArray = dataArray.slice(0, 100);
  const sidebarPostsDiv = document.getElementById("sidebar-posts");
  sidebarPostsDiv.innerHTML = "";
  postsArray.forEach((post) => {
    if (post.images) {
      sidebarPostsDiv.innerHTML += singleSidebarPost(
        post.id,
        post.images[0].id,
        post.title
      );
      postIds.push(post.id);
    }
  });
};

addHeader();
addGalleryImages("https://api.npoint.io/bc13239283496e6574a7");
await addSidebarPosts();

const upvoteBtn = document.querySelector(".upvote");
const downvoteBtn = document.querySelector(".downvote");
const favoriteBtn = document.querySelector(".favorite");

const body = document.querySelector("body");
// body.addEventListener("click", (event) => {
// event.stopPropagation();
//   console.log(body);
//   if (!upvoteBanner.classList.contains("hidden")) {
//     upvoteBanner.classList.add("hidden");
//   }
// });

const upvoteBanner = document.querySelector("#upvote-banner");
upvoteBtn.addEventListener(
  "click",
  (e) => {
    e.stopPropagation();
    upvoteBanner.classList.toggle("opacity-0");
    downvoteBanner.classList.add("opacity-0");
    favoriteBanner.classList.add("opacity-0");

    body.addEventListener("click", (event) => {
      event.stopPropagation();
      console.log(body);
      upvoteBanner.classList.add("opacity-0");
    });
  },
  { capture: false }
);

const downvoteBanner = document.querySelector("#downvote-banner");
downvoteBtn.addEventListener(
  "click",
  (e) => {
    e.stopPropagation();
    downvoteBanner.classList.toggle("opacity-0");
    upvoteBanner.classList.add("opacity-0");
    favoriteBanner.classList.add("opacity-0");

    body.addEventListener("click", (event) => {
      event.stopPropagation();
      console.log(body);
      downvoteBanner.classList.add("opacity-0");
    });
  },
  { capture: false }
);

const favoriteBanner = document.querySelector("#favorite-banner");
favoriteBtn.addEventListener(
  "click",
  (e) => {
    e.stopPropagation();
    favoriteBanner.classList.toggle("opacity-0");
    upvoteBanner.classList.add("opacity-0");
    downvoteBanner.classList.add("opacity-0");

    body.addEventListener("click", (event) => {
      event.stopPropagation();
      console.log(body);
      favoriteBanner.classList.add("opacity-0");
    });
  },
  { capture: false }
);
