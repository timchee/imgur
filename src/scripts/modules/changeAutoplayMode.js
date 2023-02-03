const enableAutoplayBtn = document.getElementById("enable-autoplay-btn");
const disableAutoplayBtn = document.getElementById("disable-autoplay-btn");

export const changeAutoplayMode = () => {
  let autoplayEnabled = localStorage.getItem("autoplayEnabled");
  if (autoplayEnabled == "true") {
    localStorage.setItem("autoplayEnabled", false);
  } else {
    localStorage.setItem("autoplayEnabled", true);
  }

  enableAutoplayBtn.classList.toggle("hidden");
  disableAutoplayBtn.classList.toggle("hidden");
  const gridContainer = document.getElementById("posts-container");
  const posts = Array.from(gridContainer.children);
  posts.forEach((post) => {
    const imageDiv = post.firstChild.nextSibling;
    const isVideo = imageDiv.dataset.animated;
    const objectFit = imageDiv.dataset.objectfit;
    const width = imageDiv.dataset.width;
    const height = imageDiv.dataset.height;
    const imageLink = `https://i.imgur.com/${imageDiv.dataset.imageid}.jpg`;
    const videoLink = `https://i.imgur.com/${imageDiv.dataset.imageid}.mp4`;
    if (isVideo == "true") {
      if (autoplayEnabled == "true") {
        post.firstChild.nextSibling.innerHTML = `<img src="${imageLink}" id="image" class="image ${objectFit} w-full sm:w-[300px]"  data-height="${height}" data-width="${width}"/><div class="absolute top-4 right-4 uppercase font-medium  tracking-widest bg-tagColor-5 px-2 py-1 rounded-sm text-xs drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)]">video</div>`;
      } else {
        post.firstChild.nextSibling.innerHTML = `
        <video id="image" class="image ${objectFit} w-full sm:w-[300px]"  data-height="${height}" data-width="${width}" autoplay loop muted>
        <source src=${videoLink} type="video/mp4">
        </video>`;
      }
    }
  });
};

export const addAutoplayBtn = () => {
  let autoplayEnabled = localStorage.getItem("autoplayEnabled");
  if (autoplayEnabled != "true") {
    enableAutoplayBtn.classList.toggle("hidden");
    disableAutoplayBtn.classList.toggle("hidden");
  }
};

enableAutoplayBtn.addEventListener("click", changeAutoplayMode);
disableAutoplayBtn.addEventListener("click", changeAutoplayMode);
