import { addGalleryImages } from "./scripts/addGalleryImages.js";
import { addModal, uploadOnDrag, uploadFromPC, uploadByURL } from "./scripts/modal.js";
import { addHeader } from "./scripts/header.js";
import { addFloatingHeader } from "./scripts/floatingHeader.js";
import changeLayout from "./scripts/changeLayout.js";
import {
  changeAutoplayMode,
  addAutoplayBtn,
} from "./scripts/changeAutoplayMode.js";

if (localStorage.getItem("autoplayEnabled") == null) {
  localStorage.setItem("autoplayEnabled", false);
}
// import hiddenTags from "./scripts/tags.js";
// import tagSkeleton from "./scripts/tagSkeleton.js"

addGalleryImages("https://api.npoint.io/bc13239283496e6574a7");
addHeader();
addFloatingHeader();
addModal();
uploadOnDrag();
uploadFromPC();
uploadByURL();
addAutoplayBtn();