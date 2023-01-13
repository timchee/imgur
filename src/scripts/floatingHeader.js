const header = document.querySelector(".header-container");
const mainHeader = document.querySelector(".main-header");
const floatingHeader = document.querySelector(".floating-header");
const floatingNav = document.querySelector(".floating-nav");
const floatingImg = document.querySelector(".floating-img");
const floatingAvatar = document.querySelector(".floating-avatar");
const floatingSearch = document.querySelector(".floating-search");
const mainSection = document.querySelector("main");
let previousScrollTop = 0;
const floatingHeaderHtml = `
<nav
class="flex w-full md:px-4 sm:gap-4 h-auto py-5 justify-between items-center sticky top-0 left-0"
>
<button class="min-w-10 min-h-10" >
  <a href="http://localhost:5500/src/index.html">
    <img src="https://s.imgur.com/images/favicon-32x32.png" alt="" class="floating-img" />
  </a>
</button>
  <input type="button" class="floating-avatar open-menu avatar bg-btnColor-1 bg-[url('https://imgur.com/user/vjenditapllana/avatar')] bg-contain self-end rounded-full w-9 h-9">
  <menu class="profile-menu w-64 sm:w-36 text-white text-lg bg-dropdown rounded-md  absolute top-20 right-2  hidden flex-col z-30">
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
        <a href="">
          Posts
        </a>
      </li>
      <li class="hover:bg-searchBar px-6 py-1">
        <a href="">
          Favorites
        </a>
      </li>
      <li class="hover:bg-searchBar px-6 py-1">
        <a href="">
          Comments
        </a>
      </li>
      <li class="hover:bg-searchBar px-6 py-1">
        <a href="">
          About
        </a>
      </li>
      <li class="hover:bg-searchBar px-6 py-1">
        <a href="">
        Images
      </a>
    </li>
    </ul>
    <ul class="bg-settings overflow-hidden flex py-2 sm:py-0 sm:flex-col rounded-b-md text-sm">
      <li class="hover:bg-searchBar px-6 py-1">
        <a href="" class="flex items-center gap-2">
        <span class="material-symbols-outlined text-sm">
          settings
          </span>
        Settings
      </a>
    </li>
      <li class="hover:bg-searchBar px-6 py-1">
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
  rootMargin: '-30px 0px 0px 0px'
}
const headerObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      mainHeader.classList.remove("sticky");
      floatingHeader.classList.remove("invisible");
      floatingHeader.classList.add("bg-bgColor");
      floatingHeader.classList.add("shadow-lg");
      floatingHeader.classList.add("shadow-[#000]");
    } else {
      mainHeader.classList.add("sticky");
      floatingHeader.classList.add("invisible");
      floatingHeader.classList.remove("bg-bgColor");
      floatingHeader.classList.remove("shadow-[#000]");
    }
  });
}, options);



const tags = document.querySelector("#tags");

const addListeners = () => {
  window.addEventListener("scroll", function () {
    const scrollTop = window.scrollY;
    if (tags.classList.contains('h-[160px]')) {
      if (scrollTop < 340) {
        floatingSearch.classList.remove("lg:flex");
        floatingSearch.classList.add("lg:invisible");
      } else {
        floatingSearch.classList.add("lg:flex");
        floatingSearch.classList.remove("lg:invisible");
      }
    } else {

      if (scrollTop < 830) {
        floatingSearch.classList.remove("lg:flex");
        floatingSearch.classList.add("lg:invisible");
      } else {
        floatingSearch.classList.add("lg:flex");
        floatingSearch.classList.remove("lg:invisible");
      }
    }
  });


  window.addEventListener("scroll", function () {
    // get the current scroll position
    const scrollTop = window.scrollY;

    if (tags.classList.contains('h-[160px]')) {
      // check if the element is scrolling downwards
      if (scrollTop <= 200) {
        header.style.transform = `translate3d(0, -${window.scrollY}px, 0)`;
      } 
    } else {
      // check if the element is scrolling upwards
      // check if the element is scrolling downwards
      if (scrollTop <= 100) {
        header.style.transform = `translate3d(0, -${window.scrollY}px, 0)`;
      } 

    }
    // update the previous scroll position
    previousScrollTop = scrollTop;
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
  let btns = document.querySelectorAll(".open-menu");
  let profileMenus = document.querySelectorAll(".profile-menu");
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      profileMenus.forEach((menu) => {
        showAndHide(menu);
      });
    });
  });

  profileMenus.forEach((menu) => {
    menu.style.display = "none";
  });
  addListeners();
};
