import { avatarImages } from "./avatarImages.js";
let url = sessionStorage.getItem("url");
let username = sessionStorage.getItem("username");
const header = document.querySelector(".header-container");
const mainHeader = document.querySelector(".main-header");
const floatingHeader = document.querySelector(".floating-header");
const floatingSearch = document.querySelector(".floating-search");
let previousScrollTop = 0;


const floatingHeaderHtml = `
<nav
class="flex w-full md:px-4 sm:gap-4 h-auto py-5 justify-between items-center sticky top-0 left-0"
>
<button class="min-w-10 min-h-10" >
  <a href="./../">
    <img src="https://s.imgur.com/images/favicon-32x32.png" alt="" class="floating-img" />
  </a>
</button>
  <input type="button" class="floating-avatar bg-btnColor-1 bg-contain self-end rounded-full w-9 h-9">
    <menu class="floating-menu w-64 sm:w-36 text-white text-lg bg-dropdown rounded-md  absolute top-20 right-2  hidden flex-col z-30">
    <div class="h-24 bg-cover flex flex-col sm:hidden  p-4 rounded-t-md" style="background-image: url(&quot;https://imgur.com/user/vjenditapllana/cover&quot;);">
    <div class="flex items-center justify-between">
      <input type="button"
      class="avatar sm:hidden bg-btnColor-1 bg-[url('https://imgur.com/user/vjenditapllana/avatar')]  bg-contain rounded-full w-9 h-9"  
    ></input>
    <div class="flex gap-4 items-center">
      <button class="chat sm:hidden items-start pt-1.5">
        <span class="material-symbols-outlined text-white transition ease-in-out duration-500 hover:text-settings ">
          chat_bubble
          </span>
      </button>
      <button class="notification sm:hidden items-start pt-1.5">
        <span class="material-symbols-outlined text-white transition ease-in-out duration-500 hover:text-settings">
          notifications
          </span>
      </button>
    </div>
    </div>
    <h2 class="sm:hidden text-white font-sans font-medium text-start">username</h2>
    </div>
    <ul class="grid grid-cols-2 w-64 h-32 sm:w-auto sm:h-auto sm:flex sm:flex-col py-1">
      <li class="hover:bg-searchBar px-6 py-1">
      <a href="./user.html">
          Profile
        </a>
      </li>
    </ul>
    <ul class="bg-settings overflow-hidden flex py-2 sm:py-0 sm:flex-col rounded-b-md text-sm">
      <li class="hover:bg-searchBar px-6 py-1" id="log-out">
         <a href="" class="flex items-center gap-2">
          <span class="material-symbols-outlined text-sm">
            mode_off_on
            </span>
          Sign out
        </a>
      </li>
    </ul>
  </menu>
</nav>
`;


let options = {
  rootMargin: "-30px 0px 0px 0px",
};

//Snap floating header in or out of view, hide or show elements
//when the header container move in or out of view
const headerObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    let floatBtn = document.querySelector(".floating-avatar");
    if (!entry.isIntersecting) {
      mainHeader.classList.remove("sticky");
      floatingHeader.classList.remove("invisible");
      floatingHeader.classList.add("bg-bgColor");
      floatingHeader.classList.add("shadow-lg");
      floatingHeader.classList.add("shadow-[#000]");
      if (sessionStorage.getItem("loggedIn") !== "true") {
        floatBtn.classList.add("hidden");
      }
    } else {
      mainHeader.classList.add("sticky");
      floatingHeader.classList.add("invisible");
      floatingHeader.classList.remove("bg-bgColor");
      floatingHeader.classList.remove("shadow-[#000]");
    }
  });
}, options);

// Show search in floating header when navigation bar in main section becomes sticky
const addListeners = () => {
  window.addEventListener("scroll", function () {
    const scrollTop = window.scrollY;
    if (scrollTop < 322) {
      floatingSearch.classList.remove("lg:flex");
      floatingSearch.classList.add("lg:invisible");
    } else {
      floatingSearch.classList.add("lg:flex");
      floatingSearch.classList.remove("lg:invisible");
    }
  });

  //Translate header container vertically according to scrollY
  window.addEventListener("scroll", function () {

    // get the current scroll position
    const scrollTop = window.scrollY;
    // check if the element is scrolling upwards
    if (scrollTop < previousScrollTop && scrollTop < 0) {
      // console.log(this.window.scrollY)
      header.style.transform = `translateY(-${window.scrollY}px)`;
    }
    // check if the element is scrolling downwards
    else if (scrollTop <= 200) {
      header.style.transform = `translateY(-${window.scrollY}px)`;
      // console.log(this.window.scrollY)
    }
    // update the previous scroll position
    previousScrollTop = scrollTop;
  });
};

//Redirect to user page on second click of the avatar button
let clickCount = 0;
const goToUserPage = (avatar) => {
  avatar.addEventListener("click", () => {
    clickCount++;
    console.log(clickCount);
    if (clickCount === 2) {
      window.location.href = "http://localhost:5500/src/pages/user.html";
    }
  });
};

export const addFloatingHeader = () => {
  floatingHeader.innerHTML += floatingHeaderHtml;
  headerObserver.observe(header);
  const showAndHide = (item) => {
    if (item.style.display != "flex") {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  };
  let floatBtn = document.querySelector(".floating-avatar");
  let floatMenu = document.querySelector(".floating-menu");
  floatBtn.addEventListener("click", () => {
    showAndHide(floatMenu);
  });

  addListeners();
  goToUserPage(floatBtn);

  if (sessionStorage.getItem("loggedIn") === "false") {
    floatBtn.classList.add("hidden");
  }

  document.getElementById("log-out").addEventListener("click", signOut);
  if (url != null) {
    addAvatar(floatBtn);
  }
};

let href = window.location.href;

const signOut = (buttons, avatar, icons) => {
  sessionStorage.removeItem("loggedIn");
  sessionStorage.removeItem("username");
  sessionStorage.removeItem("url");
  window.location = `${href}`;
  buttons.classList.remove("hidden");
  avatar.classList.add("hidden");
  buttons.classList.add("flex");
  icons.classList.add("hidden");
};

const addAvatar = (avatar) => {
  const firstLetter = username.toUpperCase().charCodeAt(0) - 65;
  url = avatarImages[firstLetter];
  sessionStorage.setItem("url", url);
  avatar.style.backgroundImage = `url(${url})`;
  console.log(avatar);
};
