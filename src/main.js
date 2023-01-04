import { addGalleryImages } from "./scripts/addGalleryImages.js";
import changeLayout from "./scripts/changeLayout.js";

addGalleryImages("https://api.npoint.io/bc13239283496e6574a7");

const autoplayBtn = document.getElementById("autoplay-btn");

const changeAutoplayMode = () => {
  const gridContainer = document.getElementById("posts-container");
  const posts = Array.from(gridContainer.children);
  posts.forEach((post) => {
    const imageDiv = post.firstChild.nextSibling;
    const isVideo = imageDiv.dataset.animated;
    const objectFit = imageDiv.dataset.objectfit;
    const width = imageDiv.dataset.width;
    const height = imageDiv.dataset.height;
    const link = `https://i.imgur.com/${imageDiv.dataset.imageid}.jpg`;
    if (isVideo == "true") {
      post.firstChild.nextSibling.innerHTML = `<img src="${link}" id="image" class="image ${objectFit}" width="300px" data-height="${height}" data-width="${width}"/>`;
      console.log(post.firstChild.nextSibling.innerHTML);
    }
  });
};

autoplayBtn.addEventListener("click", changeAutoplayMode);
console.log(autoplayBtn);
