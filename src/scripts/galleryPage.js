import { addGalleryImages } from "./addGalleryImages.js";
import { addHeader } from "./header.js";
import { singleSidebarPost } from "./sidebarPost.js";
import { getData } from "./addGalleryImages.js";

let postIds = [];
const addSidebarPosts = async () => {
  const dataArray = await getData("https://api.npoint.io/bc13239283496e6574a7");
  const postsArray = dataArray.slice(0, 20);
  const sidebarPostsDiv = document.getElementById("sidebar-posts");
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
console.log(postIds);
