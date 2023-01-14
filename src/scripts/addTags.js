import { Tag } from "./tag.js";

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
    // console.log(tag.name);
    const gradientStartColor = Math.floor(Math.random() * 6) + 1;
    tagsDiv.innerHTML += `
        <imgur-tag
        id="${tag.id}"
        src="https://i.imgur.com/${tag.background_hash}_d.jpg?maxwidth=800&shape=thumb&fidelity=high"
        title="${tag.display_name}"
        title-color="bg-tagColor-${gradientStartColor}"
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
  tagsDiv.classList.remove("h-36");
  tagsDiv.classList.add("h-[1360px]");
  tagsDiv.classList.add("sm:h-[600px]");
  mainDiv.classList.remove("top-48");
  mainDiv.classList.add("top-[1260px]");
  mainDiv.classList.add("sm:top-[520px]");
  console.log(tagsDiv);
};

const hideTags = () => {
  const tagsDiv = document.getElementById("tags");
  const mainDiv = document.getElementsByTagName("main")[0];
  const moreTagsBtn = document.getElementById("moreTags");
  const lessTagsBtn = document.getElementById("lessTags");
  moreTagsBtn.classList.remove("hidden");
  lessTagsBtn.classList.add("hidden");
  tagsDiv.classList.remove("h-[1360px]");
  tagsDiv.classList.remove("sm:h-[600px]");
  tagsDiv.classList.add("h-36");
  mainDiv.classList.remove("top-[1260px]");
  mainDiv.classList.remove("sm:top-[520px]");
  mainDiv.classList.add("top-44");
};
