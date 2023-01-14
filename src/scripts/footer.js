const footerHtml = `    <div class="footer-items w-3/4">
<p class=""><b>	&copy; 2022 Imgur, Inc </b></p>
<a href="" class="">About</a>
<a href="" class="">Terms</a>
<a href="" class="">Privacy</a>
<a href="" class="">Rules</a>
<a href="" class="">Help</a>
<a href="" class="">Emerald</a>
<a href="" class="">Store</a>
<a href="" class="">Advertise</a>
<a href="" class="">Blog</a>
<a href="" class="">Wellness</a>
<a href="" class="">CCPA</a>
<a href="" class="">API</a>
</div>

<div class="flex">
<div id="ellipsis" class="ellipsis bg-gray-800 items-center gap-1 px-2.5 lg:hidden absolute  right-[166px] z-10  top-0 bottom-0 hidden">
  <div class="circle h-1.5 w-1.5 bg-gray-200 rounded-full"></div>
  <div class="circle h-1.5 w-1.5 bg-gray-200 rounded-full"></div>
  <div class="circle h-1.5 w-1.5 bg-gray-200 rounded-full"></div>

  <div class="footer-menu invisible px-4 py-2 rounded-md w-auto h-auto absolute bottom-11 -left-5 text-white">
  </div>
</div>

<div class="footer-app md:hidden absolute right-0 top-0">
  <a href=""><b>Get the App</b></a>
</div>
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
  scrollBtns.forEach(button => scrollToTop(button))
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
  

// const menuItems = document.querySelector(".footer-menu").children;
// console.log(menuItems)
// const arr = Array.from(menuItems)

let options = {
  rootMargin: '0px -200px 0px 0px',
}


const observeFooter = (ellipsis, footerMenu, footerItems) => {
 const footerItemsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      
      if (!entry.isIntersecting) {
        ellipsis.style.display = "flex";
        var a = document.createElement("a");
        footerMenu.append(a);
        a.setAttribute("href", "")
        a.innerHTML = entry.target.innerHTML;
      }
  
      // if (entry.isIntersecting) {
      //   // console.log(entry.target)
      //   if (arr.length) {
      //     // console.log(arr)
      //     arr.forEach(menuItem => {
      //         if (menuItem.innerHTML == entry.target.innerHTML) {
      //           console.log(menuItem)
      //           // footerMenu.remove(menuItem)
      //           // console.log(menuItems[i]) 
      //         } 
      //       })
      //   }
      // }
      })
  }, options);

  footerItems.forEach(item => footerItemsObserver.observe(item))

}

const addResponsiveMenu = (ellipsis, footerMenu) => {
  ellipsis.addEventListener("click", () => {
    if (footerMenu.style.visibility != "visible") {
      footerMenu.style.visibility = "visible";
    } else {
      footerMenu.style.visibility = "hidden";
      foo
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



