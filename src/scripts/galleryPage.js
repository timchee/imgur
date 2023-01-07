import { addGalleryImages } from "./addGalleryImages.js";
import { addHeader } from "./header.js";
import { singleSidebarPost } from "./sidebarPost.js";
import { getData } from "./addGalleryImages.js";

const addSidebarPosts = async () => {
  const dataArray = await getData("https://api.npoint.io/bc13239283496e6574a7");
  const postsArray = dataArray.slice(0, 20);
  const sidebarPostsDiv = document.getElementById("sidebar-posts");
  postsArray.forEach((post) => {
    if (post.images) {
      sidebarPostsDiv.innerHTML += singleSidebarPost(
        post.images[0].id,
        post.title
      );
    }
  });
};

addHeader();
addGalleryImages("https://api.npoint.io/bc13239283496e6574a7");
addSidebarPosts();
