import { Tag } from "./tag.js";

export const addTags = async () => {
  const dataArray = await getTags();
  createTags(dataArray);
};

const getTags = async () => {
  const data = await fetch("https://api.npoint.io/c84c906dc1ecf067f09a");
  const json = await data.json();
  return json.data.tags;
};

const createTags = (dataArray) => {
  const tagsDiv = document.getElementById("tags");
  console.log(tagsDiv);
  dataArray.forEach((tag) => {
    const gradientStartColor = Math.floor(Math.random() * 6) + 1;
    tagsDiv.innerHTML += `
        <imgur-tag
        id="${tag.id}"
        src="https://i.imgur.com/${tag.background_hash}_d.jpg?maxwidth=800&shape=thumb&fidelity=high"
        title="${tag.display_name}"
        title-color="bg-tagColor-${gradientStartColor}"
        posts="${tag.total_items}"
      ></imgur-tag>`;
  });
};
