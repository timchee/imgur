document.getElementById("moreTags").addEventListener("click", hiddenTags);
var vis = document.getElementById("hiddenTags");

function hiddenTags() {
  if (vis.classList.contains("hidden")) {
    vis.classList.remove("hidden")
  }else{
    vis.classList.add("hidden")
}
}

export default hiddenTags;

///////////////////////////////////////////////////////////////////

const l = console.log;

const getTagId = () => {
  return window.location.search.split("=")[1];
};

const getTagById = async (tagId) => {
  const response = await fetch("https://www.npoint.io/docs/09a6463f3ba39454361b");
  const responseJson = await response.json();
  const data = responseJson.data;
  data.tags.forEach((element) => {
    if (element.id === tagId) {
      tag = element;
    }
  });
  return tag;
};



const changeInnerText = (element, newText) => {
  element.innerText = newText;
};

const init = async () => {
  const tagId = getTagId();
  const tag = await getTagById(tagId);
  const {
    id,
    name,
    display_name,
    followers,
    total_items,
    background_hash
  } = tag;


};

init();

////////////////////////////////////////////

