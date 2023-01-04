import singlePostSkeleton from "./singlePostSkeleton.js";

export const addGalleryImages = async (url) => {
  const dataArray = await getData(url);
  const [postsArray, imagesArray] = createPostsSkeletons(dataArray);
  const gridContainer = document.getElementById("posts-container");
  postsArray.forEach((post) => {
    gridContainer.innerHTML += post;
  });
  addImagesToSkeletons(imagesArray);
};

//Gets gallery images from endpoint
const getData = async (url) => {
  let response = await fetch(url);
  const responseJson = await response.json();
  const dataArray = responseJson.data;
  return dataArray;
};

//Creates a post skeleton for each element in the dataArray
export const createPostsSkeletons = (dataArray) => {
  let postsArray = [];
  let imagesArray = [];
  dataArray.forEach((post) => {
    let { id, images, title, ups, comment_count, views } = post;
    if (views > 1000) {
      views = Math.floor(views / 1000) + "K";
    }
    if (images != undefined && postsArray.length < 30) {
      const image = images[0];
      imagesArray.push(image);
      let { height, width, animated } = image;
      postsArray.push(
        singlePostSkeleton(
          id,
          height,
          width,
          title,
          ups,
          comment_count,
          views,
          animated
        )
      );
    }
  });

  return [postsArray, imagesArray];
};

//Based on the animated value adds a video or an image to post skeletons
const addImagesToSkeletons = (imagesArray) => {
  const gridContainer = document.getElementById("posts-container");
  const posts = Array.from(gridContainer.children);
  for (let i = 0; i < posts.length; i++) {
    const image = posts[i].firstChild.nextSibling;
    const objectFit = image.dataset.objectfit;
    const isVideo = image.dataset.animated;
    if (isVideo == "true") {
      setTimeout(() => {
        image.innerHTML = `
            <video id="image" class="image ${objectFit}" width="300px" data-height="${imagesArray[i].height}" data-width="${imagesArray[i].width}" autoplay muted>
            <source src=${imagesArray[i].link} type="video/mp4">
            </video>`;
      }, 200);
    } else {
      setTimeout(() => {
        image.innerHTML = `<img src="${imagesArray[i].link}" id="image" class="image ${objectFit}" width="300px" data-height="${imagesArray[i].height}" data-width="${imagesArray[i].width}"/>`;
      }, 1000);
    }
    setTimeout(() => {
      image.style = "";
    }, 2000);
  }
};
