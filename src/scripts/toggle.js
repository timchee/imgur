const navi = document.getElementById('nav');
const about = document.getElementById('pg3');

function toggle(IDS) {
  var sel = document.getElementById('pg').getElementsByClassName('pg');
  var a = document.getElementById('pages-container').getElementsByTagName('a');
  if (IDS === 'pg3') { navi.style.display="none";} 
  else {navi.style.display="flex";}
  for (var i=0; i<sel.length; i++) { 
    if (sel[i].id != IDS) { sel[i].style.display = 'none'; }
    if (sel[i].id == IDS) { sel[i].style.display = 'block'; }
  }

  for (var i=0; i<a.length; i++) { 
    if (a[i].id != IDS) { a[i].classList.remove('active-page');a[i].classList.remove('font-bold');}
    if (a[i].id == IDS) { a[i].classList.add('active-page');a[i].classList.add('font-bold');}
  }
  return false;
}