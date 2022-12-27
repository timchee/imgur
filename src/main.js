import { singlePost } from "./scripts/singlePost.js";
import { getGallery } from "./scripts/getGallery.js";

const gridContainer = document.getElementById("posts-container");

const grid = async () => {
  await getGallery();
  const posts = Array.from(gridContainer.children);
  const titleElements = Array.from(document.getElementsByClassName("title"));
  const titles = titleElements.map((titleEl) => titleEl.innerText);

  for (let i = 0; i < titles.length; i++) {
    if (titles[i].length > 78) {
      posts[i].classList.add("extra-long-title");
    } else if (titles[i].length > 39) {
      posts[i].classList.add("long-title");
    }
  }

  posts.forEach((post) => {
    const image = post.firstChild.nextSibling;
    const aspectRatio = image.dataset.height / image.dataset.width;
    const postClassList = Array.from(post.classList);
    let title;
    let calculatedHeight = Math.floor((300 * aspectRatio) / 5);
    postClassList.forEach((postClass) => {
      if (postClass == "long-title") calculatedHeight += 6;
      else if (postClass == "extra-long-title") calculatedHeight += 8;
      else calculatedHeight += 5;
    });
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
const string = "So THAT’s why I randomly got adopted bym.";
console.log(string.length);
