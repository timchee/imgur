import { addGalleryImages } from "./scripts/addGalleryImages.js";
import { addModal } from "./scripts/modal.js";
import { addHeader } from "./scripts/header.js";
import { addFloatingHeader } from "./scripts/floatingHeader.js";
import changeLayout from "./scripts/changeLayout.js";
import {
  changeAutoplayMode,
  addAutoplayBtn,
} from "./scripts/changeAutoplayMode.js";

if (localStorage.getItem("autoplayEnabled") == null) {
  localStorage.setItem("autoplayEnabled", true);
}

addGalleryImages("https://api.npoint.io/bc13239283496e6574a7");
addHeader();
addFloatingHeader();
addModal();

addAutoplayBtn();
