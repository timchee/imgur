import { singlePost } from "./singlePost.js";

const clientId = "277f11fb00514f9";
const myHeaders = new Headers();
myHeaders.append("Authorization", `Client-ID ${clientId}`);
const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

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
  //   console.log(dataArray);
  dataArray.forEach((post) => {
    let { id, images, title, ups, downs, comment_count, views } = post;
    if (views > 1000) {
      views = Math.floor(views / 1000) + "K";
    }
    if (images && postsArray.length < 30) {
      const image = images[0];
      let { link, height, width, animated } = image;
      postsArray.push(
        singlePost(
          id,
          link,
          animated,
          height,
          width,
          title,
          ups - downs,
          comment_count,
          views
        )
      );
    }
  });

  const gridContainer = document.getElementById("posts-container");
  postsArray.forEach((post) => {
    gridContainer.innerHTML += post;
  });
};
