
function toggle(IDS) {
  var sel = document.getElementById('pg').getElementsByClassName('pg');
  console.log(sel)
  var a = document.getElementById('pages-container').getElementsByTagName('a');
  console.log(a)
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