const changeLayoutBtn = document.getElementById("change-layout-btn");
const container = document.getElementById("posts-container");

const changeLayout = () => {
  container.classList.toggle("dense-grid");
  container.classList.toggle("flex-container");
};

changeLayoutBtn.addEventListener("click", changeLayout);
