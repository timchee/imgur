const arrowup = document.getElementById("scroll-btn");

window.addEventListener('scroll', function() {
  const scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;
  if (scrollPosition > 0) {
    arrowup.style.bottom="20px";
  } else {
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


//////////// route //////////////

function toggle(IDS) {
  var sel = document.getElementById('pg').getElementsByClassName('pg');
  var a = document.getElementById('pages-container').getElementsByTagName('a');
  for (var i=0; i<sel.length; i++) { 
    if (sel[i].id != IDS) { sel[i].style.display = 'none'; }
    if (sel[i].id == IDS) { sel[i].style.display = 'block'; }
  }

  for (var i=0; i<a.length; i++) { 
    if (a[i].id != IDS) { a[i].classList.remove('active-page');}
    if (a[i].id == IDS) { a[i].classList.add('active-page');}
  }
  return false;
}