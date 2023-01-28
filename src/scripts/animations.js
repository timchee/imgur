let animationDiv = document.querySelector('.animation-div')

setTimeout(() => {
  animationDiv.style.display = "none";
  document.body.classList.remove("overflow-hidden")
}, 6200);


const  playAnimationOnFirstLoad = () => {
  if (!sessionStorage.getItem('pageLoaded')) {
    animationDiv.style.display = 'flex'
    document.body.classList.add("overflow-hidden")
    sessionStorage.setItem('pageLoaded', true);
  }
}
playAnimationOnFirstLoad()
