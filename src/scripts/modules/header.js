import { avatarImages } from "./avatarImages.js";
let href;
let url = sessionStorage.getItem("url");
let username = sessionStorage.getItem("username");
if (window.location.pathname[5] == undefined) {
  href = ``;
} else {
  href = `../`;
}

//handle url
let userHref;
if (window.location.href.includes("pages")) {
  userHref = "user.html";
} else {
  userHref = "pages/user.html";
}

let loginHref;
let signUpHref;
if (window.location.href.includes("pages")) {
  loginHref = "login.html";
  signUpHref = "signUp.html";
} else {
  loginHref = "pages/login.html";
  signUpHref = "pages/signUp.html";
}

const headerHtml = `     
<div class="flex gap-x-5 items-center w-2/3">
  <div class="nav-menu flex sm:hidden flex-col gap-1">
    <div class="bg-white h-1 w-6 rounded-sm"></div>
    <div class="bg-white h-1 w-6 rounded-sm"></div>
    <div class="bg-white h-1 w-6 rounded-sm"></div>
  </div>

  <div class="Navbar-logo-container">
    <a aria-current="page" class="Navbar-logo active" href="${href}">
      <svg
        width="94"
        height="34"
        viewBox="0 0 94 34"
        class="icon stroke fill"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Imgur</title>
        <path
          d="M86.8012 17.336C86.8012 15.6108 86.981 15.0039 88.5637 14.3332C89.1292 14.0977 89.7077 13.9104 90.2587 13.7321C91.9506 13.1844 93.3833 12.7206 93.3833 11.2023C93.3833 9.86081 92.0884 8.71123 90.5059 8.71123C89.175 8.71123 87.8441 9.28632 86.6572 10.4038C85.9738 9.31751 85.0747 8.80659 83.9599 8.80659C82.0176 8.80659 81.1185 9.98884 81.1185 12.4487V22.5745C81.1185 25.0344 82.0176 26.2484 83.9599 26.2484C85.9018 26.2484 86.8012 25.0344 86.8012 22.5745V17.336Z"
          fill="#ffffff"
        ></path>
        <path
          d="M61.085 19.1569C61.085 23.9801 64.1422 26.5359 69.6448 26.5359C75.148 26.5359 78.2051 23.9801 78.2051 19.1569V12.4487C78.2051 9.98884 77.342 8.80659 75.3995 8.80659C73.4576 8.80659 72.5582 9.98884 72.5582 12.4487V18.1345C72.5582 20.4984 71.9469 21.8081 69.6448 21.8081C67.3433 21.8081 66.7314 20.4984 66.7314 18.1345V12.4487C66.7314 9.98884 65.8326 8.80659 63.9264 8.80659C61.9841 8.80659 61.085 9.98884 61.085 12.4487V19.1569Z"
          fill="#ffffff"
        ></path>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M48.245 33.3078C52.2732 33.3078 55.2229 31.9981 56.877 29.5382C57.9919 27.9092 58.2077 25.6094 58.2077 22.5745V12.4487C58.2077 9.98884 57.3086 8.80659 55.3663 8.80659C54.5036 8.80659 53.4964 9.34959 52.8485 10.4038C51.6982 9.19008 50.2589 8.61499 48.317 8.61499C43.4974 8.61499 39.5052 12.4166 39.5052 17.5276C39.5052 22.6387 43.2456 26.2802 47.7057 26.2802C49.9351 26.2802 51.6262 25.4814 52.8485 23.9163C52.8485 24.0322 52.8582 24.1398 52.8675 24.2432C52.8762 24.339 52.8845 24.4313 52.8845 24.5234C52.8845 27.2705 51.2304 28.7718 48.4607 28.7718C46.6897 28.7718 45.3742 28.2995 44.3043 27.9153C43.5708 27.652 42.9527 27.43 42.3822 27.43C40.9796 27.43 39.9367 28.3565 39.9367 29.6342C39.9367 31.6152 43.0655 33.3078 48.245 33.3078ZM45.3676 17.5276C45.3676 15.0039 46.9864 13.4067 49.0726 13.4067C51.1583 13.4067 52.8125 15.0039 52.8125 17.5276C52.8125 20.0829 51.1944 21.7442 49.0726 21.7442C46.9506 21.7442 45.3676 20.1149 45.3676 17.5276Z"
          fill="#ffffff"
        ></path>
        <path
          d="M31.5924 22.5745C31.5924 25.0344 32.4558 26.2484 34.3975 26.2484C36.34 26.2484 37.2388 25.0344 37.2388 22.5745V15.3553C37.2388 11.011 34.7573 8.74302 30.8371 8.74302C28.4996 8.74302 26.8446 9.41375 25.1184 11.1069C23.7877 9.54178 21.9172 8.74302 19.4717 8.74302C17.5655 8.74302 16.1268 9.25424 14.9396 10.4038C14.2563 9.31751 13.3575 8.80659 12.2426 8.80659C10.3 8.80659 9.40124 9.98884 9.40124 12.4487V22.5745C9.40124 25.0344 10.3 26.2484 12.2426 26.2484C14.1842 26.2484 15.0836 25.0344 15.0836 22.5745V16.8251C15.0836 14.3332 15.8753 13.0556 17.925 13.0556C19.7595 13.0556 20.4788 14.3332 20.4788 16.8887V22.5745C20.4788 25.0344 21.3776 26.2484 23.3202 26.2484C25.2624 26.2484 26.1615 25.0344 26.1615 22.5745V16.8251C26.1615 14.3332 26.9526 13.0556 29.0026 13.0556C30.8371 13.0556 31.5924 14.3332 31.5924 16.8887V22.5745Z"
          fill="#ffffff"
        ></path>
        <path
          d="M6.23549 12.4487C6.23549 9.98884 5.33669 8.80659 3.43046 8.80659C1.48851 8.80659 0.589111 9.98884 0.589111 12.4487V22.5745C0.589111 25.0344 1.48851 26.2484 3.43046 26.2484C5.373 26.2484 6.23549 25.0344 6.23549 22.5745V12.4487Z"
          fill="#ffffff"
        ></path>
        <path
          d="M3.51952 0.756104C1.58599 0.756104 0 2.1078 0 3.75626C0 5.43752 1.54695 6.7561 3.51952 6.7561C5.45305 6.7561 7 5.43752 7 3.75626C7 2.1078 5.45305 0.756104 3.51952 0.756104Z"
          fill="#1BB76E"
        ></path>
      </svg>
    </a>
  </div>
  <menu class="menu absolute hidden top-16 left-0 h-auto p-4 gap-4 sm:h-full sm:p-0 sm:static sm:flex w-full sm:gap-4 sm:justify-between md:justify-around lg:justify-between bg-gray-800 sm:bg-transparent flex-col sm:flex-row">
    <button
      class="btn flex sm:flex new-post items-center gap-x-2 w-auto py-2  sm:mb-0 sm:py-1 px-4 bg-btnColor-1 hover:bg-btnColor-2 rounded-sm text-white font-medium relative"
    >
      <img
        src="https://s.imgur.com/desktop-assets/desktop-assets/icon-new-post.13ab64f9f36ad8f25ae3544b350e2ae1.svg"
        class="lg:relative "
      />
      <p class="inline-block sm:hidden md:inline-block text-sm font-semibold">New post</p>
    </button>
    <form class="search-form flex flex-col h-10 overflow-visible items-center sm:w-5/6 md:w-7/12 relative z-10">
    <div class="flex h-10 items-center w-full relative z-10">
      <input
        type="search"
        placeholder="Images, #tags, @users oh my!"
        class="w-full h-full px-2  bg-searchBar text-white placeholder-inputTextColor rounded-sm"
      />
      <button
        type="submit"
        class="text-white h-full px-2 flex items-center absolute right-0"
      >
        <span class="material-symbols-outlined"> search </span>
      </button>
      </div>
      <div class="autocomplete-box z-[100] hidden flex-col items-center absolute top-12 w-full h-auto py-4 gap-4 bg-gray-800 text-white placeholder-inputTextColor rounded-sm">
        <h3 class="postsLabel font-semibold self-start pl-4">Posts</h3>
        <ul class="posts flex flex-col gap-2 px-4 w-full">
        </ul>
        <h3 class="tagsLabel font-semibold self-start pl-4">Tags</h3>
        <ul class="tags flex flex-col gap-2 px-4 w-full">
        </ul>
        <h3 class="usersLabel font-semibold self-start pl-4">Users</h3>
        <ul class="users flex flex-col gap-2 px-4 w-full">
        </ul>
      </div>
    </form>
  </menu>
</div>

<div class="gap-x-5 flex" id="buttons">
  <button class="text-white hover:text-btnColor-1 font-sans font-semibold hidden sm:block" >
    <a href="${loginHref}" >

    <p class="whitespace-nowrap">Sign in</p>
      
    </a>
  </button>
  <button
    class="btn bg-btnColor-1 hover:bg-btnColor-2 w-auto flex items-center px-2  sm:py-1 sm:px-6 rounded-sm text-white font-semibold text-sm"
  >
    <a href="${signUpHref}" class="whitespace-nowrap flex items-center">
      <span class="material-symbols-outlined sm:hidden" >
        login
      </span>
      <p class="whitespace-nowrap hidden sm:block">Sign up</p>   
    </a>
  </button>
</div>
<div class=" icons gap-x-5 items-center hidden ">
  <button class="gift hidden md:flex items-start">
    <span class="material-symbols-outlined text-white transition ease-in-out duration-500 hover:text-settings">
      redeem
      </span>
  </button>
  <button class="chat hidden md:flex items-start pt-1.5">
    <span class="material-symbols-outlined text-white transition ease-in-out duration-500 hover:text-settings ">
      chat_bubble
      </span>
  </button>
  <button class="notification hidden md:flex items-start pt-1.5">
    <span class="material-symbols-outlined text-white transition ease-in-out duration-500 hover:text-settings">
      notifications
      </span>
  </button>
  <div class="open-menu gap-4 items-center hidden group">
  <h2 class="username hidden sm:block text-white  cursor-pointer font-sans font-medium text-start">${username}</h2>
  <input type="button"
    class="avatar bg-btnColor-1 cursor-pointer group-hover:scale-105 bg-contain self-end rounded-full w-9 h-9"
  > 
  </input>
</div>
  <menu class="profile-menu w-64 sm:w-36 text-white text-lg bg-dropdown rounded-md  absolute top-20 right-2  hidden flex-col z-50">
    <div class="h-24 bg-cover flex flex-col sm:hidden  p-4 rounded-t-md" style="background-image: url(&quot;https://imgur.com/user/vjenditapllana/cover&quot;);">
    <div class="flex items-center justify-between">
      <input type="button"
      class="avatar avatarMobile sm:hidden bg-btnColor-1]  bg-contain rounded-full w-9 h-9"  
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
    <h2 class="sm:hidden text-white font-sans font-medium text-start">${username}</h2>
    </div>
    <ul class="grid grid-cols-2 w-64 h-32 sm:w-auto sm:h-auto sm:flex sm:flex-col py-1">
      <li class="hover:bg-searchBar px-6 py-1">
        <a href="${userHref}">
          Profile
        </a>
      </li>
    </ul>
    <ul class="bg-settings overflow-hidden flex py-2 sm:py-0 sm:flex-col rounded-b-md text-sm">
      <li class="hover:bg-searchBar px-6 py-1" id="sign-out">
         <p class="flex items-center gap-2">
          <span class="material-symbols-outlined text-sm">
            mode_off_on
            </span>
          Sign out
        </p>
      </li>
    </ul>
  </menu>
</div>`;

let floatNav= document.querySelector(".floating-nav");
let floatBtn = document.querySelector(".floating-avatar");
let floatMenu = document.querySelector(".floating-menu");

export const addHeader = () => {
  const headerDiv = document.getElementById("header");
  headerDiv.innerHTML += headerHtml;

  let btn = document.querySelector(".open-menu");
  let avatar = document.querySelector(".avatar");
  let avatarMobile = document.querySelector(".avatarMobile");
  let profileMenu = document.querySelector(".profile-menu");
  let menuBtn = document.querySelector(".nav-menu");
  let mobileMenu = document.querySelector(".menu");
  const buttons = document.querySelector("#buttons");
  const icons = document.querySelector(".icons");

  showAndHide(btn, profileMenu);
  showAndHide(menuBtn, mobileMenu);
  if (floatBtn != null && floatMenu != null) {
    showAndHide(floatBtn, floatMenu);
  }
  goToUserPage(avatar);
  checkState(buttons, btn, icons);
  document.getElementById("sign-out").addEventListener("click", signOut);
  if (username !== null) {
    addAvatar(avatar);
    addAvatar(avatarMobile);
  }
};

export const handleHeader = () => {
  let header = document.querySelector(".header");
  let imgur = document.querySelector(".Navbar-logo-container");
  let search = document.querySelector(".search-form");
  let floatingSearch = document.querySelector(".floating-search");
  let newPostBtn = document.querySelector(".new-post");
  let giftBtn = document.querySelector(".gift");
  let chatBtn = document.querySelector(".chat");
  let bellBtn = document.querySelector(".notification");
  let username = document.querySelector(".username");
  let logoImg = document.querySelector(".logoImg");
  let headerContainer = document.querySelector(".header-container");
  const tags = document.querySelector("#tags");
  let tagContainer = document.querySelector(".tag-container");

  observeHeader(
    imgur,
    header,
    headerContainer,
    newPostBtn,
    search,
    giftBtn,
    chatBtn,
    bellBtn,
    username,
    logoImg,
    floatNav
  );
  addListeners(tagContainer, headerContainer, floatingSearch);
};

//Open and close menu
const showAndHide = (button, menu) => {
  button.addEventListener("click", (e) => {
    e.stopPropagation();
    if (!menu.classList.contains("flex")) {
      menu.classList.add("flex");
      menu.classList.remove("hidden");
    } else {
      menu.classList.remove("flex");
      menu.classList.add("hidden");
    }
  });

  window.addEventListener("click", () => {
    if (menu.classList.contains("flex")) {
      menu.classList.remove("flex");
      menu.classList.add("hidden");
    }
  });
};

let options = {
  rootMargin: "-50px",
};

//Snap header in or out of view, show and hide elements when header container moves in or out of viewport
const observeHeader = (
  imgur,
  header,
  headerContainer,
  newPostBtn,
  search,
  giftBtn,
  chatBtn,
  bellBtn,
  username,
  logoImg,
  floatNav
) => {
  const headerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        header.classList.add("background");
        imgur.classList.add("invisible");
        newPostBtn.classList.add("invisible");
        search.classList.add("invisible");
        giftBtn.classList.add("invisible");
        chatBtn.classList.add("invisible");
        bellBtn.classList.add("invisible");
        username.classList.add("invisible");
        logoImg.classList.remove("hidden");
        floatNav.classList.add("z-40")
        if (sessionStorage.getItem("loggedIn") !== "true") {
          buttons.classList.add("hidden");
        }
      } else {
        header.classList.remove("background");
        imgur.classList.remove("invisible");
        newPostBtn.classList.remove("invisible");
        search.classList.remove("invisible");
        giftBtn.classList.remove("invisible");
        chatBtn.classList.remove("invisible");
        bellBtn.classList.remove("invisible");
        username.classList.remove("invisible");
        logoImg.classList.add("hidden");
        floatNav.classList.remove("z-40")
        if (sessionStorage.getItem("loggedIn") !== "true") {
          buttons.classList.remove("hidden");
        }
      }
    });
  }, options);
  headerObserver.observe(headerContainer);
};

const addListeners = (tagContainer, headerContainer, floatingSearch) => {

  //Show or hide search when navigation in main section becomes sticky/static
  window.addEventListener("scroll", function () {
    const scrollTop = window.scrollY;
    if (tagContainer.clientHeight == "248") {
      if (scrollTop < 330) {
        floatingSearch.classList.remove("lg:flex");
        floatingSearch.classList.add("lg:invisible");
      } else {
        floatingSearch.classList.add("lg:flex");
        floatingSearch.classList.remove("lg:invisible");
      }
    } else if (tagContainer.clientHeight == "728") {
      if (scrollTop < 770) {
        floatingSearch.classList.remove("lg:flex");
        floatingSearch.classList.add("lg:invisible");
      } else {
        floatingSearch.classList.add("lg:flex");
        floatingSearch.classList.remove("lg:invisible");
      }
    }
  });

  //Translate header container vertically according to scrollY
  window.addEventListener("scroll", function () {
    // get the current scroll position
    const scrollTop = window.scrollY;

    // check if the element is scrolling downwards
    if (scrollTop <= 180) {
      headerContainer.style.transform = `translate3d(0, -${window.scrollY}px, 0)`;
    }
  });
};


//Redirect to user page on second click of the avatar button
let clickCount = 0;
const goToUserPage = (avatar) => {
  avatar.addEventListener("click", () => {
    clickCount++;
    if (clickCount === 2) {
      window.location.href = userHref;
    }
  });
};

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

//Switch between sign in/up buttons or username and avatar when logged in/out
const checkState = (buttons, avatar, icons) => {
  if (sessionStorage.getItem("loggedIn") === "true") {
    buttons.classList.add("hidden");
    icons.classList.remove("hidden");
    icons.classList.add("flex");
    avatar.classList.remove("hidden");
    avatar.classList.add("flex");
  }
};

//Change avatar based on username
const addAvatar = (avatar) => {
  const firstLetter = username.toUpperCase().charCodeAt(0) - 65;
  url = avatarImages[firstLetter];
  sessionStorage.setItem("url", url);
  avatar.style.backgroundImage = `url(${url})`;
};
