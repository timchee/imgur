const footerHtml = `    <div class="hidden sm:flex footer-items w-3/4">
<p class=""><b>	&copy; 2023 Imgur, Inc </b></p>
<a class="hidden sm:block" href="https://imgurinc.com/about">About</a>
<a class="hidden sm:block" href="https://imgur.com/tos">Terms</a>
<a class="hidden sm:block" href="https://imgur.com/privacy">Privacy</a>
<a class="hidden md:block" href="https://imgur.com/rules">Rules</a>
<a class="hidden md:block" href="https://help.imgur.com/hc/en-us">Help</a>
<a class="hidden lg:block" href="https://imgur.com/emerald">Emerald</a>
<a class="hidden lg:block" href="https://www.imgurstore.com">Store</a>
<a class="hidden lg:block" href="https://imgurinc.com/advertise">Advertise</a>
<a class="hidden lg:block" href="https://blog.imgur.com">Blog</a>
<a class="hidden xl:block" href="https://imgurinc.com/community-resources">Wellness</a>
<a class="hidden xl:block" href="https://imgur.com/ccpa">CCPA</a>
<a class="hidden xl:block" href="https://apidocs.imgur.com">API</a>
</div>

<div class="hidden sm:flex">
<div id="ellipsis" class="ellipsis bg-gray-800 items-center gap-1 px-2.5 lg:hidden absolute z-10  top-0 bottom-0 hidden">
  <div class="circle h-1.5 w-1.5 bg-gray-200 rounded-full"></div>
  <div class="circle h-1.5 w-1.5 bg-gray-200 rounded-full"></div>
  <div class="circle h-1.5 w-1.5 bg-gray-200 rounded-full"></div>

  <div class="footer-menu invisible px-4 py-2 rounded-md w-auto h-auto absolute bottom-11 -left-5 text-white">
  <a class="md:hidden" href="https://imgur.com/rules">Rules</a>
  <a class="md:hidden" href="https://help.imgur.com/hc/en-us">Help</a>
  <a class="hidden lg:block" href="https://imgur.com/emerald">Emerald</a>
  <a class=" lg:hidden" href="https://www.imgurstore.com">Store</a>
  <a class=" lg:hidden" href="https://imgurinc.com/advertise">Advertise</a>
  <a class=" lg:hidden" href="https://blog.imgur.com">Blog</a>
  <a class=" xl:hidden" href="https://imgurinc.com/community-resources">Wellness</a>
  <a class=" xl:hidden" href="https://imgur.com/ccpa">CCPA</a>
  <a class=" xl:hidden" href="https://apidocs.imgur.com">API</a>
  </div>
  </div>
</div>

<button class="footer-app absolute right-0 top-0">
  <a href="https://imgurinc.com/mobileapps"><b>Get the App</b></a>
</button>
</div>`;

const footer = document.querySelector(".footer");
const arrowup = document.getElementById("scroll-btn");

export const addFooter = () => {
  const footerDiv = document.querySelector(".footer");
  footerDiv.innerHTML += footerHtml;
  showHideFooter();

  const footerItems = document.querySelectorAll(".footer-items>a");
  const ellipsis = document.querySelector("#ellipsis");
  const footerMenu = document.querySelector(".footer-menu");
  const scrollBtns = document.querySelectorAll(".scroll-btn");

  observeFooter(ellipsis, footerMenu, footerItems);
  addResponsiveMenu(ellipsis, footerMenu);
  scrollBtns.forEach((button) => {
    if (button != null) {
      scrollToTop(button);
    }
  });
};

const showHideFooter = () => {
  window.addEventListener("scroll", function () {
    const scrollPosition =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (scrollPosition > 0) {
      footer.style.bottom = "-60px";
      arrowup.style.bottom = "20px";
    } else {
      footer.style.bottom = "0px";
      arrowup.style.bottom = "-60px";
    }
  });
};

let options = {
  rootMargin: "0px -200px 1000px 0px",
};

const observeFooter = (ellipsis, footerMenu, footerItems) => {
  const hideObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        ellipsis.style.display = "flex";
      } else if (entry.target.innerHTML == "API") {
        ellipsis.style.display = "none";
      }
    });
  }, options);

  footerItems.forEach((item) => hideObserver.observe(item));
};

const addResponsiveMenu = (ellipsis, footerMenu) => {
  ellipsis.addEventListener("click", (e) => {
    e.stopPropagation();
    if (footerMenu.style.visibility != "visible") {
      footerMenu.style.visibility = "visible";
    } else {
      footerMenu.style.visibility = "hidden";
    }
  });
  window.addEventListener("click", () => {
    if (footerMenu.style.visibility == "visible") {
      footerMenu.style.visibility = "hidden";
    }
  });
};

const scrollToTop = (element) => {
  element.addEventListener("click", function scrollToTop() {
    var scrollInterval = setInterval(function () {
      if (
        document.body.scrollTop > 0 ||
        document.documentElement.scrollTop > 0
      ) {
        window.scrollBy(0, -200);
      } else {
        clearInterval(scrollInterval);
      }
    }, 10);
  });
};
