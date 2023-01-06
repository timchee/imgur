const headerHtml = `     
<div class="flex gap-x-5 items-center w-2/3">
  <div class="nav-menu flex sm:hidden flex-col gap-1">
    <div class="bg-white h-1 w-6 rounded-sm"></div>
    <div class="bg-white h-1 w-6 rounded-sm"></div>
    <div class="bg-white h-1 w-6 rounded-sm"></div>
  </div>

  <div class="Navbar-logo-container">
    <a aria-current="page" class="Navbar-logo active" href="">
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
    <form class="search-form flex h-10 items-center sm:w-5/6 md:w-7/12 relative z-10">
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
    </form>
  </menu>
</div>

<div class="gap-x-5 hidden">
  <button class="text-white font-sans font-medium">Sign in</button>
  <button
    class="btn bg-btnColor-1 w-auto py-1 px-6 rounded-sm text-white font-medium text-sm"
  >
    Sign up
  </button>
</div>
<div class="flex gap-x-5 items-center ">
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
  <div class="open-menu flex gap-4 items-center">
  <h2 class="hidden sm:block text-white font-sans font-medium text-start">username</h2>
  <input type="button"
    class="avatar bg-btnColor-1 bg-[url('https://imgur.com/user/vjenditapllana/avatar')] bg-contain self-end rounded-full w-9 h-9"  
  > 
  </input>
</div>
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
</div>`;

export const addHeader = () => {
  const headerDiv = document.getElementById("header");
  headerDiv.innerHTML += headerHtml;
  const showAndHide = (item) => {
    if (item.style.display != "flex") {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  };
  let btns = document.querySelectorAll(".open-menu");
  let profileMenus = document.querySelectorAll(".profile-menu");
  console.log(btns.length);
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      profileMenus.forEach((menu) => {
        console.log(menu.style.display);
        showAndHide(menu);
      });
    });
  });

  profileMenus.forEach((menu) => {
    menu.style.display = "none";
  });

  let menuBtn = document.querySelector(".nav-menu");
  let mobileMenu = document.querySelector(".menu");
  menuBtn.addEventListener("click", () => {
    showAndHide(mobileMenu);
  });
};
