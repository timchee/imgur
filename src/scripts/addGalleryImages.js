import singlePostSkeleton from "./singlePostSkeleton.js";

export const addGalleryImages = async (url) => {
  const dataArray = await getData(url);
  const [postsArray, imagesArray] = createPostsSkeletons(dataArray);
  const gridContainer = document.getElementById("posts-container");
  postsArray.forEach((post) => {
    gridContainer.innerHTML += post;
  });
  addLazyLoadedImages(imagesArray);
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
    if (images != undefined && postsArray.length < 10) {
      const image = images[0];
      imagesArray.push({ id: post.id, image });
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

const addLazyLoadedImages = (imagesArray, container) => {
  const gridContainer = document.getElementById("posts-container");
  const posts = Array.from(gridContainer.children);
  const lazyLoad = (post) => {
    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const imageId = entry.target.id;
          const imageDiv = entry.target.firstChild.nextSibling;
          const objectFit = imageDiv.dataset.objectfit;
          const isVideo = imageDiv.dataset.animated;
          const image = getImage(imageId, imagesArray);
          if (isVideo == "true") {
            imageDiv.innerHTML = `
                  <video id="image" class="image ${objectFit}" width="300px" data-height="${image.height}" data-width="${image.width}" autoplay muted>
                  <source src=${image.link} type="video/mp4">
                  </video>`;
          } else {
            imageDiv.innerHTML = `<img src="${image.link}" id="image" class="image ${objectFit}" width="300px" data-height="${image.height}" data-width="${image.width}"/>`;
          }
          observer.disconnect();
        }
      });
    });
    io.observe(post);
  };
  posts.forEach(lazyLoad);
};

//Gets an image based on its id
const getImage = (id, imagesArray) => {
  let image = "not found";
  imagesArray.forEach((element) => {
    if (element.id == id) {
      image = element.image;
    }
  });
  return image;
};
