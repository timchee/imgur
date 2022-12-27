import { singlePost } from "./scripts/singlePost.js";
import { getGallery } from "./scripts/getGallery.js";

const gridContainer = document.getElementById("posts-container");

const grid = async () => {
  await getGallery();
  const posts = Array.from(gridContainer.children);

  posts.forEach((post) => {
    const image = post.firstChild.nextSibling;
    const aspectRatio = image.dataset.height / image.dataset.width;
    const calculatedHeight = Math.floor((300 * aspectRatio) / 10) + 9;
    post.setAttribute("style", `--span:${calculatedHeight}`);
    image.style.width = "300px";

    if (aspectRatio < 1) {
      image.style.objectFit = "fill";
    } else {
      image.style.objectFit = "cover";
    }
  });
};

getGallery();
grid();

const img = document.getElementById("hello");
