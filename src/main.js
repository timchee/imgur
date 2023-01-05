import { addGalleryImages } from "./scripts/addGalleryImages.js";
import changeLayout from "./scripts/changeLayout.js";
import {
  changeAutoplayMode,
  addAutoplayBtn,
} from "./scripts/changeAutoplayMode.js";

if (localStorage.getItem("autoplayEnabled") == null) {
  localStorage.setItem("autoplayEnabled", true);
}
addGalleryImages("https://api.npoint.io/bc13239283496e6574a7");
const input = document.querySelector("#paste");
console.log(input.value)

input.addEventListener('focus', () => {
    input.value = "";
})
input.addEventListener('blur', () => {
    input.value = "Paste image or URL";
})


const inputFile = document.querySelector('#file-input');

inputFile.addEventListener('change', () => {
    inputFile.files[0];
});

const dropInput = document.querySelector('#drop-input');

inputFile.addEventListener('change', () => {
    inputFile.files[0];
});




addAutoplayBtn();
