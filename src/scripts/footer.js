const footer = document.querySelector('.footer');
const arrowup = document.getElementById("scroll-btn");

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


const scrollBtns = document.querySelectorAll(".scroll-btn");


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
  
scrollBtns.forEach(button => scrollToTop(button))

  

// const footer = document.querySelector(".footer");
const footerItems = document.querySelectorAll(".footer-items>a");
const footerMenu = document.querySelector(".footer-menu");
const ellipsis = document.querySelector(".ellipsis");
const menuItems = document.querySelector(".footer-menu").children;
const arr = Array.from(menuItems)

let options = {
  rootMargin: '0px -200px 0px 0px',
}

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

footerItems.forEach(item => {
  footerItemsObserver.observe(item)
})

ellipsis.addEventListener("click", () => {
  if (footerMenu.style.visibility != "visible") {
    footerMenu.style.visibility = "visible";
  } else {
    footerMenu.style.visibility = "hidden";
    foo
  }
})
