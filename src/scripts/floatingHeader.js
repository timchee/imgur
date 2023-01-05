const header = document.querySelector(".header-container")
const mainHeader = document.querySelector(".main-header");
const floatingHeader = document.querySelector(".floating-header");
const floatingNav = document.querySelector(".floating-nav");
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
            mainHeader.classList.remove("sticky")
            floatingHeader.classList.remove("invisible")
            floatingHeader.classList.add("bg-bgColor")
            floatingHeader.classList.add("shadow-lg")
            floatingHeader.classList.add("shadow-[#000]")
        } else {
            mainHeader.classList.add("sticky")
            floatingHeader.classList.add("invisible")
            floatingHeader.classList.remove("bg-bgColor")
            floatingHeader.classList.remove("shadow-[#000]")
            }

        })
})
headerObserver.observe(header)
    

// const floatingHeaderObserver = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             console.log(entry.target)
//         if (entry.isIntersecting) {
//             floatingSearch.classList.add("transition")
//             floatingSearch.classList.add("invisible")
//         } else {
//             floatingSearch.classList.remove("invisible")
//         }
//         })
// })

// floatingHeaderObserver.observe(mainHeader)

let previousScrollTop = 0;

window.addEventListener('scroll', function() {
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
})

window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY;
    if (scrollTop < 294) {
        floatingSearch.classList.remove('lg:flex')
        floatingSearch.classList.add('lg:invisible')
    } else {
        floatingSearch.classList.add('lg:flex')
        floatingSearch.classList.remove('lg:invisible')
    }
})
