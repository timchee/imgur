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


  document.getElementById("scroll-btn").addEventListener("click", function scrollToTop() {
    var scrollInterval = setInterval(function() {
      if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        window.scrollBy(0, -200);
      } else {
        clearInterval(scrollInterval);
      }
    }, 10);
  });