const footerHtml = `    <div class="footer-items w-3/4">
<p class=""><b>	&copy; 2022 Imgur, Inc </b></p>
<a href="https://imgurinc.com/about">About</a>
<a href="https://imgur.com/tos">Terms</a>
<a href="https://imgur.com/privacy">Privacy</a>
<a href="https://imgur.com/rules">Rules</a>
<a href="https://help.imgur.com/hc/en-us">Help</a>
<a href="https://imgur.com/emerald">Emerald</a>
<a href="https://www.imgurstore.com">Store</a>
<a href="https://imgurinc.com/advertise">Advertise</a>
<a href="https://blog.imgur.com">Blog</a>
<a href="https://imgurinc.com/community-resources">Wellness</a>
<a href="https://imgur.com/ccpa">CCPA</a>
<a href="https://apidocs.imgur.com">API</a>
</div>

<div class="flex">
<div id="ellipsis" class="ellipsis bg-gray-800 items-center gap-1 px-2.5 lg:hidden absolute z-10  top-0 bottom-0 hidden">
  <div class="circle h-1.5 w-1.5 bg-gray-200 rounded-full"></div>
  <div class="circle h-1.5 w-1.5 bg-gray-200 rounded-full"></div>
  <div class="circle h-1.5 w-1.5 bg-gray-200 rounded-full"></div>

  <div class="footer-menu invisible px-4 py-2 rounded-md w-auto h-auto absolute bottom-11 -left-5 text-white"></div>
</div>

<button class="footer-app absolute right-0 top-0">
  <a href="https://imgurinc.com/mobileapps"><b>Get the App</b></a>
</button>
</div>`

const footer = document.querySelector('.footer');
const arrowup = document.getElementById("scroll-btn");

export const addFooter = () => {
  
  const footerDiv = document.querySelector(".footer")
  footerDiv.innerHTML += footerHtml;
  showHideFooter()
  
  const footerItems = document.querySelectorAll(".footer-items>a");
  const ellipsis = document.querySelector("#ellipsis");
  const footerMenu = document.querySelector(".footer-menu");
  const scrollBtns = document.querySelectorAll(".scroll-btn");
  

  observeFooter(ellipsis, footerMenu, footerItems)
  addResponsiveMenu(ellipsis, footerMenu)
  scrollBtns.forEach(button => {
    if (button != null) {
      scrollToTop(button)
    }
  })
}


const showHideFooter = () => {
  window.addEventListener('scroll', function() {
    const scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;
    if (scrollPosition > 0) {
      footer.style.bottom="-60px";
      arrowup.style.bottom="20px";
    } else {
      footer.style.bottom="0px";
      arrowup.style.bottom="-60px";
    }
  });
} 
  

let options = {
  rootMargin: '0px -200px 1000px 0px',
}


  const observeFooter = (ellipsis, footerMenu, footerItems) => {
    const hideObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        let attribute = entry.target.getAttribute('href')
        let a = `<a href="${attribute}">${entry.target.innerHTML}</a>`
        if (!entry.isIntersecting) {
          ellipsis.style.display = 'flex'
          footerMenu.innerHTML += a
        }
        else if (entry.target.innerHTML == 'API') {
          ellipsis.style.display = 'none'              
        }
    
        })
    }, options);

    footerItems.forEach(item => hideObserver.observe(item))

  }

const addResponsiveMenu = (ellipsis, footerMenu) => {
  ellipsis.addEventListener("click", (e) => {
    e.stopPropagation()
    if (footerMenu.style.visibility != "visible") {
      footerMenu.style.visibility = "visible";
    } else {
      footerMenu.style.visibility = "hidden";
    }
  })
  window.addEventListener('click', () => {
    if (footerMenu.style.visibility == "visible") {
      footerMenu.style.visibility = "hidden";
    }
  })
}

const scrollToTop = (element) => {
  element.addEventListener("click", function scrollToTop() {
    var scrollInterval = setInterval(function() {
      if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        window.scrollBy(0, -200);
      } else {
        clearInterval(scrollInterval);
      }
    }, 10);
  });
}



