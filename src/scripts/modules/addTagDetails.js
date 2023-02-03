//The functions in this script are used in the tag page

let [tagId, featured, postId] = document.location.search.split("&");
tagId = tagId.split("=")[1];
featured = featured.split("=")[1];
if (postId) {
  postId = postId.split("=")[1];
}
//Main function
//If a tag is featured it is in the tags.json file, else it is in the gallery.json file
export const addTag = async () => {
  let tag;
  if (featured == "true") {
    tag = await getFeaturedTagById(tagId);
    addTagDetails(tag);
  } else {
    tag = await getTagById(tagId, postId);
    addTagDetails(tag);
  }
};

const getFeaturedTagById = async (tagId) => {
  const response = await fetch("https://api.npoint.io/c84c906dc1ecf067f09a");
  const responseJson = await response.json();
  const tags = responseJson.data.tags;
  let t = "Tag not found";
  tags.forEach((tag) => {
    if (tag.name == tagId) {
      t = tag;
    }
  });
  return t;
};

export const getPostById = async (postId) => {
  const response = await fetch("https://api.npoint.io/bc13239283496e6574a7");
  const responseJson = await response.json();
  const data = responseJson.data;
  let post = "Post not found";
  data.forEach((p) => {
    if (p.id === postId) {
      post = p;
    }
  });
  return post;
};

const getTagById = async (tagId, postId) => {
  const post = await getPostById(postId);
  const postTags = post.tags;
  let tag = "Tag not found";
  postTags.forEach((t) => {
    if (t.name === tagId) {
      tag = t;
    }
  });
  return tag;
};

//Adds header background, tag name, tag description and number of posts
const addTagDetails = (tag) => {
  const header = document.querySelector(".header-container");
  const floatingHeader = document.querySelector(".floating-header");
  const title = document.getElementById("tag-title");
  const desc = document.getElementById("tag-desc");
  const postsCount = document.getElementById("posts-count");
  postsCount.innerHTML = tag.total_items;
  if (tag.description) {
    desc.innerHTML = tag.description;
  } else {
    desc.innerHTML = "";
  }
  header.classList.remove("bg-bgColor");
  header.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.3) 20%),url(https://i.imgur.com/${tag.background_hash}.jpg?maxwidth=800&shape=thumb&fidelity=high)`;
  header.style.backgroundSize = "cover";
  floatingHeader.classList.remove("bg-bgColor");
  floatingHeader.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.3) 20%),url(https://i.imgur.com/${tag.background_hash}.jpg?maxwidth=800&shape=thumb&fidelity=high)`;
  title.innerHTML = tag.display_name;
  title.classList.remove("animate-pulse");
  title.classList.remove("bg-[rgba(0,0,0,.1)]");
  title.classList.remove("w-96");
};
