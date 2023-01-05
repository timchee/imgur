const header = document.querySelector(".header-container")
const mainHeader = document.querySelector(".main-header");
const floatingHeader = document.querySelector(".floating-header");
const floatingImg = document.querySelector(".floating-img");
const floatingAvatar = document.querySelector(".floating-avatar");
const floatingSearch = document.querySelector(".floating-search");
const mainSection = document.querySelector("main");

const headerOptions = {
    root: document.querySelector('#root'),
    rootMargin: '100px',
    threshold: 0.5   
}
const headerObserver = new IntersectionObserver(function (
    entries,
    headerOptions
    ) {
        entries.forEach(entry => {
            // console.log(entry.target)
        if (!entry.isIntersecting) {
            // mainHeader.classList.add("z-20")
            mainHeader.classList.add("invisible")
            floatingHeader.classList.remove("hidden")
            floatingHeader.classList.add("bg-bgColor")
            floatingHeader.classList.add("flex")
        } else {
            // mainHeader.classList.remove("z-20")
            mainHeader.classList.remove("invisible")
            floatingHeader.classList.add("hidden")
            floatingHeader.classList.remove("bg-bgColor")
            floatingHeader.classList.remove("flex")
            }

        })
    })

let previousScrollTop = 0;

window.addEventListener('scroll', function() {
    // get the current scroll position
    const scrollTop = window.scrollY;
    // check if the element is scrolling upwards
    if (scrollTop < previousScrollTop && scrollTop < 0) {
        console.log(this.window.scrollY)
        header.style.transform = `translateY(-${window.scrollY}px)`;  
    } else if(scrollTop <= 160) {
        header.style.transform = `translateY(-${window.scrollY}px)`;  
        console.log(this.window.scrollY)
    }
    
    // update the previous scroll position
    previousScrollTop = scrollTop;
})

headerObserver.observe(header)