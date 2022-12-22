import { singlePost } from "./scripts/singlePost.js";

const gridContainer = document.getElementById("posts-container");
const posts = Array.from(gridContainer.children);

posts.forEach((post) => {
  const image = post.firstChild.nextSibling;
  const aspectRatio = image.naturalHeight / image.naturalWidth;
  const calculatedHeight = Math.floor((300 * aspectRatio) / 10) + 9;
  post.setAttribute("style", `--span:${calculatedHeight}`);
  image.style.width = "300px";

  if (aspectRatio < 1) {
    image.style.objectFit = "fill";
  } else {
    image.style.objectFit = "cover";
  }
});
