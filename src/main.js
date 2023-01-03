import { singlePost } from "./scripts/singlePost.js";
import singlePostSkeleton from "./scripts/singlePostSkeleton.js";
import { getGallery } from "./scripts/getGallery.js";

const gridContainer = document.getElementById("posts-container");

const grid = async () => {
  await getGallery();
};

grid();
