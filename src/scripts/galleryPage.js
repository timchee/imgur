import { addGalleryImages } from "./modules/addGalleryImages.js";
import { addHeader } from "./modules/header.js";
import { singleSidebarPost } from "./modules/sidebarPost.js";
import { getData } from "./modules/addGalleryImages.js";
import { addFooter } from "./modules/footer.js";
import {
  addModal
} from "./modules/modal.js";
import { addEngagementBar } from "./modules/engagementBar.js";
import { avatarImages } from "./modules/avatarImages.js";
import { addScrollButton } from "./modules/scrollToTop.js";

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

const loggedIn = sessionStorage.getItem("loggedIn");
if (loggedIn) {
  document.querySelector("#sign-in-to-comment").classList.add("hidden");
  document.querySelector("#leave-a-comment").classList.remove("hidden");
}

addEngagementBar();
addGalleryImages("https://api.npoint.io/bc13239283496e6574a7");
await addSidebarPosts();
addModal();

const hd = document.querySelector(".pp-header");
const logo = document.querySelector(".logoImg");
const imgur = document.querySelector(".Navbar-logo-container");
const btn = document.querySelector(".new-post");
const search = document.querySelector(".search-form");
const title = document.querySelector(".post-title");
const floatTitle = document.querySelector(".floating-title");
const nextBtn = document.querySelector(
  ".floating-title>div:nth-child(2) a:last-child>span"
);

//show title, username and buttons in header when title moves out of view
let rootMargin = {
  rootMargin: "-160px",
};
const headerObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      hd.classList.add("sticky");
      hd.classList.add("shadow-lg");
      logo.classList.remove("hidden");
      imgur.classList.add("invisible");
      btn.classList.add("invisible");
    } else {
      hd.classList.remove("sticky");
      hd.classList.remove("shadow-lg");
      logo.classList.add("hidden");
      imgur.classList.remove("invisible");
      btn.classList.remove("invisible");
    }
  });
}, rootMargin);

headerObserver.observe(title);

let options = {
  rootMargin: "-85px",
};
const postObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      search.classList.add("invisible");
      floatTitle.classList.remove("invisible");
      search.style.transform = "translateY(40px)";
      floatTitle.style.transform = "translateY(-20px)";
      nextBtn.classList.add("flex");
      nextBtn.classList.remove("hidden");
    } else {
      floatTitle.classList.add("invisible");
      search.classList.remove("invisible");
      search.style.transform = "translateY(0px)";
      floatTitle.style.transform = "translateY(40px)";
      nextBtn.classList.remove("flex");
      nextBtn.classList.add("hidden");
    }
  });
}, options);

postObserver.observe(title);
addFooter();
addScrollButton()

const postCommentBtn = document.querySelector("#post-comment");
const textarea = document.querySelector("textarea");
textarea.addEventListener("input", () => {
  if (textarea.value == "") {
    postCommentBtn.classList.add("bg-gray-700");
    postCommentBtn.classList.remove("bg-btnColor-1");
    postCommentBtn.setAttribute("disabled", "");
  } else {
    postCommentBtn.classList.remove("bg-gray-700");
    postCommentBtn.classList.add("bg-btnColor-1");
    postCommentBtn.removeAttribute("disabled");
  }
});
postCommentBtn.addEventListener("click", () => {
  const commentsDiv = document.getElementById("comments");
  const username = sessionStorage.getItem("username");
  const firstLetter = username.toUpperCase().charCodeAt(0) - 65;
  const commentHtml = `
  <div class="flex px-1 my-2 py-2 gap-2 text-xs sm:rounded-xl sm:hover:bg-gray-800">
    <img src=${avatarImages[firstLetter]} class="bg-btnColor-1 shrink-0 w-6 h-6 rounded-full sm:top-0"></img>
    <div class="flex flex-col gap-2">
      <p class="pt-1 text-gray-200 font-bold tracking-wide sm:text-btnColor-1 sm: sm:top-1">${username}</p>
      <div class="sm:mt-2 sm:left-0 font-medium text-sm tracking-wide first-letter:uppercase">${textarea.value}</div>
      <div class="flex items-center gap-6 py-1">
        <p class="text-gray-900"> <img src="../assets/upvote.svg" class="w-4 h-4" /></p>
        <p class="text-white text-xs font-medium">0</p>
        <img src="../assets/downvote.svg" class="w-4 h-4" />
      </div>
    </div>
  </div>
  <div class="bg-gray-900 h-px w-full sm:bg-gray-500"></div>`;
  commentsDiv.innerHTML = commentHtml + commentsDiv.innerHTML;

  textarea.value = "";
});
