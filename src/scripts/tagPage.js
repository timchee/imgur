import { addTagImages } from "./addGalleryImages.js";
import { addTag } from "./addTagDetails.js";
import { addModal, uploadOnDrag, uploadFromPC, uploadByURL } from "./modal.js";
import { addHeader } from "./header.js";
import { addFloatingHeader } from "./floatingHeader.js";
import changeLayout from "./changeLayout.js";
import { changeAutoplayMode, addAutoplayBtn } from "./changeAutoplayMode.js";
import { addFooter } from "./footer.js";

if (localStorage.getItem("autoplayEnabled") == null) {
  localStorage.setItem("autoplayEnabled", false);
}
addTag();
addTagImages("https://api.npoint.io/bc13239283496e6574a7");
addHeader();
addFloatingHeader();
addModal();
uploadOnDrag();
uploadFromPC();
uploadByURL();
addAutoplayBtn();
addFooter();
