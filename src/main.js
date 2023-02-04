import { addGalleryImages } from "./scripts/modules/addGalleryImages.js";
import { addModal } from "./scripts/modules/modal.js";
import { addHeader, handleHeader } from "./scripts/modules/header.js";
import { addTags } from "./scripts/modules/addTags.js";
import changeLayout from "./scripts/modules/changeLayout.js";
import {
  changeAutoplayMode,
  addAutoplayBtn,
} from "./scripts/modules/changeAutoplayMode.js";
import { addFooter } from "./scripts/modules/footer.js";
import { addSearch } from "./scripts/modules/search.js";
import { addScrollButton } from "./scripts/modules/scrollToTop.js";
if (localStorage.getItem("autoplayEnabled") == null) {
  localStorage.setItem("autoplayEnabled", false);
}
addGalleryImages("https://api.npoint.io/bc13239283496e6574a7");
addHeader();
handleHeader()
addTags();
addModal();
addAutoplayBtn();
addFooter()
addSearch()
addScrollButton()