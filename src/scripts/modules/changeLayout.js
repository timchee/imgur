const changeLayoutBtn = document.getElementById("change-layout-btn");
const container = document.getElementById("posts-container");
const waterfallBtn = document.querySelector(".waterfall");
const uniformBtn = document.querySelector(".uniform");

const changeLayout = () => {
  container.classList.toggle("dense-grid");
  container.classList.toggle("flex-container");
  
  if (waterfallBtn.style.display != "flex") {
    waterfallBtn.style.display = "flex"
    uniformBtn.style.display = "none"
} else {
  waterfallBtn.style.display = "none"
  uniformBtn.style.display = "flex"
  }
};

changeLayoutBtn.addEventListener("click", changeLayout);

export default changeLayout;
