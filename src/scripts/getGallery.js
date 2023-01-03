import { singlePost } from "./singlePost.js";
import singlePostSkeleton from "./singlePostSkeleton.js";

const clientId = "277f11fb00514f9";
const myHeaders = new Headers();
myHeaders.append("Authorization", `Client-ID ${clientId}`);
const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

const getData = () => {};

export const getGallery = async () => {
  // const response = await fetch(
  //   "https://api.imgur.com/3/gallery/hot/viral/day/1",
  //   requestOptions
  // );
  // const responseJson = await response.json();

  let response = await fetch(`./data/gallery.json`);
  if (response.ok == false) {
    response = await fetch(`../data/gallery.json`);
  }
  const responseJson = await response.json();
  const dataArray = responseJson.data;
  let postsArray = [];
  let imagesArray = [];
  //   console.log(dataArray);
  dataArray.forEach((post) => {
    let { id, images, title, ups, downs, comment_count, views } = post;
    if (views > 1000) {
      views = Math.floor(views / 1000) + "K";
    }
    if (post.images != undefined && postsArray.length < 10) {
      const image = images[0];
      imagesArray.push(image);
      let { link, height, width, animated } = image;
      // const aspectRatio = height / width;
      // let calculatedHeight = Math.floor((300 * aspectRatio) / 5);

      console.log();
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
  console.log(postsArray.length);

  const gridContainer = document.getElementById("posts-container");
  // console.log(gridContainer.children);
  postsArray.forEach((post) => {
    // console.log(post);
    gridContainer.innerHTML += post;
  });

  const posts = Array.from(gridContainer.children);
  console.log(imagesArray.length, "eonew");
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
    console.log(image);
  }
};
