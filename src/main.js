import { addGalleryImages } from "./scripts/addGalleryImages.js";
import { addModal, uploadOnDrag, uploadFromPC, uploadByURL } from "./scripts/modal.js";
import { addHeader, handleHeader } from "./scripts/header.js";
import { addTags } from "./scripts/addTags.js";
// import { addFloatingHeader } from "./scripts/floatingHeader.js";
import changeLayout from "./scripts/changeLayout.js";
import {
  changeAutoplayMode,
  addAutoplayBtn,
} from "./scripts/changeAutoplayMode.js";
import { addFooter } from "./scripts/footer.js";
// import { Tag } from "./scripts/tag.js";
if (localStorage.getItem("autoplayEnabled") == null) {
  localStorage.setItem("autoplayEnabled", false);
}
// import hiddenTags from "./scripts/tags.js";
// import tagSkeleton from "./scripts/tagSkeleton.js"
// import hiddenTags from "./scripts/tags.js";
// import tagSkeleton from "./scripts/tagSkeleton.js"

addGalleryImages("https://api.npoint.io/bc13239283496e6574a7");
// addFooter()
addHeader();
handleHeader()
addTags();
// addFloatingHeader();
addModal();
uploadOnDrag();
uploadFromPC();
uploadByURL();
addAutoplayBtn();
addFooter()