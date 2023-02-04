import { addHeader, handleHeader } from "./modules/header.js";
import { addModal } from "./modules/modal.js"
import { avatarImages } from "./modules/avatarImages.js";
import { addTagImages } from "./modules/addGalleryImages.js";

addHeader();
addModal();

addTagImages("https://api.npoint.io/bc13239283496e6574a7");
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
if (user === null) {
    user = 'user'
}

let profileImage = document.querySelector('.profile-img')
let usernameEl = document.querySelector('.profile-username ')



let userComments = document.querySelector(".user-comments");

let comments;



 const getCommentsApi = async ()=>{
    const response = await fetch('https://api.npoint.io/2da4f077d06b9a86d910')
    const json = await response.json()
    json.forEach(comment=>{
        const html=`
            <div class="comment-container">
                <div class="comment-img">
                    <img src="${comment.image_url}" alt="">
                    </div>
                    <div class="comment">
                    <div class="comment-text">
                        <p class="text-white">${comment.caption}</p>
                    </div>
                    <div class="comment-items">
                        <div class="comment-details">
                        <div class="flex align-center">
                            <div class="comment-vote"></div>
                            <p>${comment.points}</p>
                        </div>
                        
                        <p>3 days</p>
                        <button class="text-white">Reply</button>
                        </div>
                        <div class="comment-dropdown"><p></p></div>
                    </div>
                </div>
            </div>
        `;
        userComments.innerHTML+= html;
    })
 }

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


await getCommentsApi()
