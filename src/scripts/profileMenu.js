const showAndHide = (item) => {
  if (item.style.display != "flex") {
    item.style.display = "flex";
  } else {
    item.style.display = "none";
  }
};

const openCloseProfileMenu = () => {
  let btns = document.querySelectorAll(".open-menu");
  let profileMenus = document.querySelectorAll(".profile-menu");
  console.log(profileMenus);
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      profileMenus.forEach((menu) => {
        showAndHide(menu);
      });
    });
  });
  profileMenus.forEach((menu) => {
    menu.style.display = "none";
  });
};

export default openCloseProfileMenu;
