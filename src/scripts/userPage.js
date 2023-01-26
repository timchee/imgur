import { addHeader, handleHeader } from "./header.js";
import { addModal, uploadOnDrag, uploadFromPC, uploadByURL } from "../scripts/modal.js"
import { avatarImages } from "./avatarImages.js";

addHeader();
addModal();
uploadOnDrag();
uploadFromPC();
uploadByURL();
// handleHeader()
let container = document.querySelector('.header-container')
let header = document.querySelector('.header')
let imgur = document.querySelector(".Navbar-logo-container")
let search = document.querySelector(".search-form")
let floatingSearch = document.querySelector(".floating-search")
let newPostBtn = document.querySelector(".new-post")  
let giftBtn = document.querySelector('.gift')
let chatBtn = document.querySelector('.chat')
let bellBtn = document.querySelector('.notification')
let username = document.querySelector(".username")
let logoImg = document.querySelector(".logoImg")
let pagesContainer = document.querySelector('#pages-container')
let nav = document.querySelector('.nav')
let options = {
    threshold: '0.2'
}
const containerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            header.classList.add('sticky')
            header.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(https://imgur.com/user/pukec/cover)'
            imgur.classList.add('invisible')
            newPostBtn.classList.add('invisible')
            search.classList.add('invisible')
            giftBtn.classList.add('invisible')
            chatBtn.classList.add('invisible')
            bellBtn.classList.add('invisible')
            username.classList.add('invisible')
            logoImg.classList.remove('hidden')
            pagesContainer.classList.add('sticky')
            pagesContainer.classList.add('z-50')
            nav.classList.add('shadow-lg')

        } else {
            header.classList.remove('sticky')
            header.style.backgroundImage = ''
            imgur.classList.remove('invisible')
            newPostBtn.classList.remove('invisible')
            search.classList.remove('invisible')
            giftBtn.classList.remove('invisible')
            chatBtn.classList.remove('invisible')
            bellBtn.classList.remove('invisible')
            username.classList.remove('invisible')
            logoImg.classList.add('hidden')
            pagesContainer.classList.remove('sticky')
            pagesContainer.classList.remove('z-50')
            nav.classList.remove('shadow-lg')
        }
    })
}, options)

containerObserver.observe(container)


let url = sessionStorage.getItem("url");
let user = sessionStorage.getItem("username")
let profileImage = document.querySelector('.profile-img')
let usernameEl = document.querySelector('.profile-username ')

// const getUsername = ()=>{
//     let nameUser = window.location.search;
//     nameUser=nameUser.split("=")[1]
//     if (nameUser!=="") {
//         usernameEl.innerHTML=nameUser
//     }
// }

let nameUser = window.location.search;



const addAvatar = () => {
    const firstLetter = user.toUpperCase().charCodeAt(0) - 65;
    url = avatarImages[firstLetter];
    sessionStorage.setItem("url", url);
    profileImage.style.backgroundImage = `url(${url})`;
    usernameEl.innerText = user;
    
    if (nameUser!=="") {
        nameUser=nameUser.split("=")[1]
        usernameEl.innerHTML=nameUser
        const firstLetter = nameUser.toUpperCase().charCodeAt(0) - 65;
        url = avatarImages[firstLetter];
        profileImage.style.backgroundImage = `url(${url})`;
    }
}
  
addAvatar()



// console.log(url)