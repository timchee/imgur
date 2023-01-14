
import { addGalleryImages } from "./addGalleryImages.js";
import { addHeader } from "./header.js";
import { singleSidebarPost } from "./sidebarPost.js";
import { getData } from "./addGalleryImages.js";
// import{ addModal, uploadOnDrag, uploadFromPC, uploadByURL } from "./modal"


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
const upvoteBanner = document.querySelector("#upvote-banner");
upvoteBtn.addEventListener(
  "click",
  (e) => {
    e.stopPropagation();
    upvoteBanner.classList.toggle("hidden");
    downvoteBanner.classList.add("hidden");
    favoriteBanner.classList.add("hidden");

    body.addEventListener("click", (event) => {
      event.stopPropagation();
      console.log(body);
      upvoteBanner.classList.add("hidden");
    });
  },
  { capture: false }
);

const downvoteBanner = document.querySelector("#downvote-banner");
downvoteBtn.addEventListener(
  "click",
  (e) => {
    e.stopPropagation();
    downvoteBanner.classList.toggle("hidden");
    upvoteBanner.classList.add("hidden");
    favoriteBanner.classList.add("hidden");

    body.addEventListener("click", (event) => {
      event.stopPropagation();
      console.log(body);
      downvoteBanner.classList.add("hidden");
    });
  },
  { capture: false }
);

const favoriteBanner = document.querySelector("#favorite-banner");
favoriteBtn.addEventListener(
  "click",
  (e) => {
    e.stopPropagation();
    favoriteBanner.classList.toggle("hidden");
    upvoteBanner.classList.add("hidden");
    downvoteBanner.classList.add("hidden");

    body.addEventListener("click", (event) => {
      event.stopPropagation();
      console.log(body);
      favoriteBanner.classList.add("hidden");
    });
  },
  { capture: false }
);


// addModal()
// uploadOnDrag();
// uploadFromPC();
// uploadByURL();




const hd = document.querySelector(".pp-header");
const logo = document.querySelector(".logoImg");
const imgur = document.querySelector(".Navbar-logo-container")
const btn = document.querySelector(".new-post");
const search = document.querySelector(".search-form")
const title = document.querySelector(".post-title");
const floatTitle = document.querySelector(".floating-title")


let threshold = {
  rootMargin: '-160px'
}
const headerObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    
    if (!entry.isIntersecting) { 
      hd.classList.add('sticky');
      hd.classList.add('shadow-lg')
        logo.classList.remove('hidden'); 
        imgur.classList.add('invisible')
        btn.classList.add('invisible')
    } else {
      hd.classList.remove('sticky')
      hd.classList.remove('shadow-lg')
        logo.classList.add('hidden');
        imgur.classList.remove('invisible')
        btn.classList.remove('invisible')
    }

  })
}, threshold)

headerObserver.observe(title)


let options = {
    rootMargin: '-100px'
}
const postObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            search.style.transform = 'translateY(60px)'
            floatTitle.style.transform = 'translateY(-60px)'

        } else {
            search.classList.add('visible')
            search.style.transform = 'translateY(0px)'
            floatTitle.style.transform = 'translateY(60px)'
        }
    })
}, options)

postObserver.observe(title)


