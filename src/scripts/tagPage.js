import { addTagImages } from "./modules/addGalleryImages.js";
import { addTag } from "./modules/addTagDetails.js";
import { addModal, uploadOnDrag, uploadFromPC, uploadByURL } from "./modules/modal.js";
import { addHeader } from "./modules/header.js";
import { addFloatingHeader } from "./modules/floatingHeader.js";
import changeLayout from "./modules/changeLayout.js";
import { changeAutoplayMode, addAutoplayBtn } from "./modules/changeAutoplayMode.js";
import { addFooter } from "./modules/footer.js";

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
