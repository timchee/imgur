const modalHtml = `
<div class="w-3/5 h-2/5 shadow-md flex relative">
<div class="x w-10 h-10 bg-modalCl hover:bg-settings cursor-pointer rounded-full shadow-lg absolute -top-5 -right-5 flex items-center justify-center">
  <span class="material-symbols-outlined text-3xl text-white">
    close
    </span>
</div>
<div class="modal w-full h-full rounded-md bg-modalCl shadow-md flex">
  <div class="drop w-1/2 h-full bg-tagColor-2 flex rounded-l-md justify-center items-center relative overflow-hidden">
      <div class="stars absolute -top-4 -right-8 h-20 w-40 flex">
        <div class="star h-12 w-12 relative top-24 -left-16 rounded-sm opacity-40"></div>
        <div class="star h-4 w-4 relative top-10 -left-40"></div>
        <div class="star h-4 w-4 relative top-24 left-8"></div>
        <div class="star h-4 w-4 relative top-12 -left-16"></div>
      </div>
      <div class="comet bg-white h-12 w-4 opacity-80 absolute rounded-full rotate-45"></div>
      <label for="drop-input" class="flex items-center gap-1 z-20" onclick="">
        <img src="../assets/bg.png" alt="" class="absolute bottom-0 left-0 h-44 aspect-auto z-50">
        <h1 class="text-white text-base border-2 border-white border-opacity-50 border-dashed py-4 px-12 rounded-md font-semibold relative z-10">Drop images here</h1>
      </label>
      <input type="file" id="drop-input" name="drop-input" class="h-full w-full bg-btnColor-1 absolute z-10 rounded-md hidden">
  </div>
  <div class="add w-1/2 h-full p-10 self-center flex flex-col items-center  justify-between text-white">
    <div class="h-auto flex flex-col justify-between items-center gap-4">
      <label for="file-input" class="flex items-center gap-1" onclick="show">
        <img src="https://s.imgur.com/desktop-assets/desktop-assets/icon-photo.1ded6245836b46ed24022036f33a84e8.svg" alt="">
        <h2 class="text-gray-200 font-semibold">Choose Photo/Video</h2>
        </label>
      <input type="file" id="file-input" class="hidden"/>
      <div class="flex items-center w-32 justify-between">
        <span class="h-[1px] w-10 bg-gray-200 inline-block"></span>
        <p class="inline-block text-[12px] font-semibold">or</p>
        <span class="h-[1px] w-10 bg-gray-200 inline-block"></span>
      </div>
      <input type="url" name="paste" id="paste" placeholder="" value="Paste image or URL" class="px-20 py-2 flex justify-center text-sm text-center bg-gray-900 rounded-sm">
    </div>
    <div class="extras flex w-3/4 justify-between">
        <div class="flex flex-col items-center text-sm gap-2 transition ease-in-out hover:opacity-75">
          <div class="w-8 h-8 bg-[url(https://s.imgur.com/desktop-assets/desktop-assets/meme.d410b11bc6ba72ecb8b3992971fba0a8.svg)] rounded-sm"></div>
          <p>Meme Gen</p>
        </div>
        <a href="https://imgur.com/vidgif" class="flex flex-col items-center text-sm gap-2 transition ease-in-out hover:opacity-75">
            <div class="w-8 h-8 rounded-sm bg-[url(https://s.imgur.com/desktop-assets/desktop-assets/vid2gif.30286dc6c4e6d0c822073e0228dc3a4f.svg)] bg-contain">
            </div>
            <p>Video to GIF</p>
        </a>
        <div class="flex flex-col items-center text-sm gap-2 transition ease-in-out hover:opacity-75">
          <div class="w-8 h-8 rounded-sm bg-[url(https://s.imgur.com/desktop-assets/desktop-assets/browse.fcd082e3eb7f93767b2b9edb7b3f1c2a.svg)]"></div>
          <p>My Uploads</p>
        </div>
    </div>
  </div>
</div>
</div>
<h2 class="text-white text-xs"> By creating a post, you agree to Imgur's
<a href="http://" class="text-textGreen font-semibold"> Terms of Service </a>
 and
 <a href="http://" class="text-textGreen font-semibold"> Privacy Policy </a>
</h2>
`;

export const addModal = () => {
  const modalDiv = document.getElementById("modal");
  modalDiv.innerHTML += modalHtml;
  const input = document.querySelector("#paste");
  //   console.log(input.value);

  input.addEventListener("focus", () => {
    input.value = "";
  });
  input.addEventListener("blur", () => {
    input.value = "Paste image or URL";
  });

  const inputFile = document.querySelector("#file-input");

  inputFile.addEventListener("change", () => {
    inputFile.files[0];
  });

  //   const dropInput = document.querySelector("#drop-input");

  inputFile.addEventListener("change", () => {
    inputFile.files[0];
  });

  const showAndHide = (item) => {
    if (item.style.display != "flex") {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  };

  let newPostBtn = document.querySelector(".new-post");
  let overlayModal = document.querySelector(".overlay");
  let modal = document.querySelector(".modal");

  newPostBtn.addEventListener("click", () => {
    showAndHide(overlayModal);
  });

  overlayModal.addEventListener("click", () => {
    showAndHide(overlayModal);
  });

  modal.addEventListener("click", (event) => {
    event.stopPropagation();
  });
};
