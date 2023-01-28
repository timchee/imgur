import { addGalleryImages } from "./scripts/modules/addGalleryImages.js";
import {
  addModal,
  uploadOnDrag,
  uploadFromPC,
  uploadByURL,
} from "./scripts/modules/modal.js";
import { addHeader, handleHeader } from "./scripts/modules/header.js";
import { addTags } from "./scripts/modules/addTags.js";
// import { addFloatingHeader } from "./scripts/floatingHeader.js";
import changeLayout from "./scripts/modules/changeLayout.js";
import {
  changeAutoplayMode,
  addAutoplayBtn,
} from "./scripts/modules/changeAutoplayMode.js";
import { addFooter } from "./scripts/modules/footer.js";
import { searchByPost, searchByTag, searchByUser } from "./scripts/search.js";
// import { Tag } from "./scripts/tag.js";
if (localStorage.getItem("autoplayEnabled") == null) {
  localStorage.setItem("autoplayEnabled", false);
}
addGalleryImages("https://api.npoint.io/bc13239283496e6574a7");
addHeader();
handleHeader()
addTags();
addModal();
uploadOnDrag();
uploadFromPC();
uploadByURL();
addAutoplayBtn();
addFooter()
searchByPost()
searchByTag()
searchByUser()




// searchInput.addEventListener("blur", e => {
//   autocomplete.classList.add('hidden')
// })

// const node = document.createElement("li");
// const textnode = document.createTextNode("Water");
// node.appendChild(textnode);
// document.getElementById("myList").appendChild(node);

//by tags, by user