//The functions in this script are used in the homepage
import { Tag } from "../tag.js";

//Gets tags from the endpoint, adds them to the homepage and then
//gives functionality to the more/less buttons
export const addTags = async () => {
  const dataArray = await getTags();
  createTags(dataArray);
  const moreTagsBtn = document.getElementById("moreTags");
  const lessTagsBtn = document.getElementById("lessTags");
  moreTagsBtn.addEventListener("click", showMoreTags);
  lessTagsBtn.addEventListener("click", hideTags);
};

const getTags = async () => {
  const data = await fetch("https://api.npoint.io/c84c906dc1ecf067f09a");
  const json = await data.json();
  return json.data.tags;
};

const createTags = (dataArray) => {
  const tagsDiv = document.getElementById("tags");
  dataArray.forEach((tag) => {
    const color = Math.floor(Math.random() * 6) + 1;
    tagsDiv.innerHTML += `
        <imgur-tag
        id="${tag.id}"
        src="https://i.imgur.com/${tag.background_hash}_d.jpg?maxwidth=800&shape=thumb&fidelity=high"
        title="${tag.display_name}"
        title-color="bg-tagColor-${color}"
        posts="${tag.total_items}"
        name="${tag.name}"
      ></imgur-tag>`;
  });
};

const showMoreTags = () => {
  const tagsDiv = document.getElementById("tags");
  const mainDiv = document.getElementsByTagName("main")[0];
  const moreTagsBtn = document.getElementById("moreTags");
  const lessTagsBtn = document.getElementById("lessTags");

  moreTagsBtn.classList.add("hidden");
  lessTagsBtn.classList.remove("hidden");
  tagsDiv.classList.remove("h-[160px]");
  tagsDiv.classList.add("sm:h-[640px]");
  mainDiv.classList.remove("md:top-64");
  mainDiv.classList.add("md:top-[728px]");
  mainDiv.classList.add("sm:top-[520px]");
  mainDiv.classList.add("top-[3160px]");
};

const hideTags = () => {
  const tagsDiv = document.getElementById("tags");
  const mainDiv = document.getElementsByTagName("main")[0];
  const moreTagsBtn = document.getElementById("moreTags");
  const lessTagsBtn = document.getElementById("lessTags");

  moreTagsBtn.classList.remove("hidden");
  lessTagsBtn.classList.add("hidden");
  tagsDiv.classList.add("h-[160px]");
  tagsDiv.classList.remove("sm:h-[640px]");
  mainDiv.classList.add("md:top-64");
  mainDiv.classList.remove("md:top-[728px]");
  mainDiv.classList.remove("sm:top-[520px]");
  mainDiv.classList.remove("top-[3160px]");

};
