let animationDiv = document.querySelector('.animation-div')

setTimeout(() => {
    animationDiv.style.display = "none";
  }, 7000);
  

const  playAnimationOnFirstLoad = () => {
  if (!sessionStorage.getItem('pageLoaded')) {
    animationDiv.style.display = 'flex'
    sessionStorage.setItem('pageLoaded', true);
  }
}
playAnimationOnFirstLoad()
