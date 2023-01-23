const modalHtml = `
<div class="modal-container w-full h-auto shadow-md flex relative">
<div class="x w-10 h-10 bg-modalCl hover:bg-settings cursor-pointer rounded-full shadow-lg absolute -top-5 -right-5 z-10 flex items-center justify-center">
  <span class="material-symbols-outlined text-3xl text-white">
    close
    </span>
</div>
<div class="modal w-full h-full sm:h-full rounded-md bg-modalCl shadow-md flex flex-col sm:flex-row overflow-hidden">
  <div class="drop w-full h-[200px] md:w-1/2 flex sm:h-[280px] md:h-full  rounded-l-md justify-center items-center relative overflow-hidden">
      <div class="stars absolute -top-4 -right-8 h-20 w-40 flex">
        <div class="star h-12 w-12 relative top-24 -left-16 rounded-sm opacity-40"></div>
        <div class="star h-4 w-4 relative top-10 -left-40"></div>
        <div class="star h-4 w-4 relative top-24 left-8"></div>
        <div class="star h-4 w-4 relative top-12 -left-16"></div>
      </div>
      <div class="comet h-20 w-2"></div>
      <label for="drop-input" class="flex items-center gap-1 z-20" onclick="">
        <img src="../assets/bg.png" alt="" class="absolute bottom-0 left-0 h-24 sm:h-44 aspect-auto z-50">
        <h1 class="text-white text-sm sm:text-base border-2 border-white border-opacity-50 border-dashed py-4 px-12 rounded-md font-semibold relative z-10">Drop images here</h1>
      </label>
      <input type="file" id="drop-input" name="drop-input" class="input h-full w-full bg-btnColor-1 absolute z-10 rounded-md hidden">
  </div>
  <div class="add w-full md:w-1/2 h-[280px] md:h-full px-0 py-10 md:p-10 self-center flex flex-col items-center  justify-between gap-6 text-white">
    <div class="h-auto flex flex-col justify-between items-center gap-4">
      <label for="file-input" class="flex items-center gap-1" onclick="show">
        <img src="https://s.imgur.com/desktop-assets/desktop-assets/icon-photo.1ded6245836b46ed24022036f33a84e8.svg" alt="">
        <h2 class="text-gray-200 font-semibold">Choose Photo/Video</h2>
        </label>
      <input type="file" id="file-input" class="inputFromPC hidden"/>
      <div class="flex items-center w-32 justify-between">
        <span class="h-[1px] w-10 bg-gray-200 inline-block"></span>
        <p class="inline-block text-[12px] font-semibold">or</p>
        <span class="h-[1px] w-10 bg-gray-200 inline-block"></span>
      </div>
      <input type="url" name="paste" id="paste" placeholder="" value="Paste image or URL" class="lg:px-10 py-2 flex justify-center text-sm text-center bg-gray-900 rounded-sm w-full">
    </div>
    <div class="extras flex w-3/4 justify-center gap-2 sm:gap-4">
        <div class="flex flex-col items-center text-sm gap-2 transition ease-in-out hover:opacity-75">
          <div class="w-8 h-8 bg-[url(https://s.imgur.com/desktop-assets/desktop-assets/meme.d410b11bc6ba72ecb8b3992971fba0a8.svg)] rounded-sm"></div>
          <p class="whitespace-nowrap">Meme Gen</p>
        </div>
        <a href="https://imgur.com/vidgif" class="flex flex-col items-center text-sm gap-2 transition ease-in-out hover:opacity-75">
            <div class="w-8 h-8 rounded-sm bg-[url(https://s.imgur.com/desktop-assets/desktop-assets/vid2gif.30286dc6c4e6d0c822073e0228dc3a4f.svg)] bg-contain">
            </div>
            <p class="whitespace-nowrap">Video to GIF</p>
        </a>
        <div class="flex flex-col items-center text-sm gap-2 transition ease-in-out hover:opacity-75">
          <div class="w-8 h-8 rounded-sm bg-[url(https://s.imgur.com/desktop-assets/desktop-assets/browse.fcd082e3eb7f93767b2b9edb7b3f1c2a.svg)]"></div>
          <p class="whitespace-nowrap">My Uploads</p>
        </div>
    </div>
  </div>
</div>
</div>
<h2 class="terms text-white text-xs text-center"> By creating a post, you agree to Imgur's
<a href="https://imgur.com/tos" target="_blank" class="text-textGreen font-semibold"> Terms of Service </a>
 and
 <a href="https://imgur.com/privacy" target="_blank" class="text-textGreen font-semibold"> Privacy Policy </a>
</h2>
`;
let overlayModal = document.querySelector(".overlay");


export const addModal = () => {
  overlayModal.innerHTML += modalHtml;
  const input = document.querySelector("#paste");
  const inputValue = input.value;

  input.addEventListener("focus", () => {
    input.value = "";
  });
  input.addEventListener("blur", () => {
    if (input.value == "") {
      input.value = inputValue;     
    }
  });

  const inputFile = document.querySelector("#file-input");

  inputFile.addEventListener("change", () => {
    inputFile.files[0];
  });


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
  let modal = document.querySelector(".modal");
  let closeBtn = document.querySelector(".x");

  newPostBtn.addEventListener("click", () => {
    document.body.classList.add("overflow-hidden")
    showAndHide(overlayModal);
  });
  closeBtn.addEventListener("click", () => {
    document.body.classList.remove("overflow-hidden")
    showAndHide(overlayModal);
  });

  // overlayModal.addEventListener("click", () => {
  //   showAndHide(overlayModal);
  // });

  // modal.addEventListener("click", (event) => {
  //   event.stopPropagation();
  // });
};

const postDiv = `<div class="container flex w-full h-full gap-16 justify-center items-start mt-60 mb-40">
<div class="w-auto flex flex-col gap-6 relative">
    <h3 class="upload-comp bg-[#38d1b1] absolute -top-6 right-0 text-white font-medium px-4 py-2 flex items-center  rounded-sm" style="">Upload complete <span class="material-symbols-outlined">
    check
    </span></h3>
    <input type="text" name="title" id="title" class="w-full bg-transparent text-2xl outline-none cursor-text caret-white text-white font-semibold" placeholder="Give your post a unique title">
    <div class="photoArea w-[700px] aspect-3/2 bg-tagColor-1 rounded-md overflow-hidden relative bg-cover bg-no-repeat bg-[50%] drop-shadow-xl">
        <input type="text" name="desc" id="desc" class="absolute bottom-0 left-0 right-0 bg-[#44474e] p-4 text-lg caret-white" placeholder="Add a description">
    </div>
    <button class="h-auto w-1/4 py-2 px-4 rounded-3xl bg-[#11b8bc] self-center text-white hover:bg-[#21e2e6] whitespace-nowrap">+ Add image</button>
</div>
<div class="sidebar text-white  flex flex-col gap-10">
    <div class=" flex flex-col gap-2 mt-6 ">
        <h3>POST</h3>
        <div class="buttons flex gap-2 relative mt-6">
            <button class="bg-[#38d1b1] hover:bg-[#29aa8e] rounded-sm w-auto h-auto py-2 px-8 whitespace-nowrap">To Community</button>
            <button class="bg-[#575d69] hover:bg-[#3b414e] rounded-sm w-auto h-auto py-2 px-8 whitespace-nowrap">Grab Link</button>
        </div>
        <div class="text-sm relative group"><p>Your post is currently <span class="text-textGreen">Hidden</span></p>
          <p class="hidden pl-2 group-hover:block bg-white rounded-sm text-black absolute top-6">When a post is hidden you can grab a link and share it outside of the Imgur community.
          </p>
        </div>

        <div class="flex gap-2">
        <input type="checkbox" name="mature" id="" class="">
        <label for="mature" class="">Mature(?)</label>
        </div>
    </div>
    <div class="flex flex-col gap-2">
        <h3>ADD TAGS</h3>
        <button class="bg-[#575d69] hover:bg-[#3d434f] rounded-3xl w-20 pl-3 pr-4 py-2 flex items-center justify-between">
          <span class="material-symbols-outlined">
            add
          </span>
          <p>Tag</p>
        </button>
    </div>
    <div class="flex flex-col gap-2 items-start"> 
        <h3>IMG TOOLS</h3>
        <button class="flex items-center gap-2 text-gray-200 hover:text-white">
          <span class="material-symbols-outlined">
            add
          </span>
          <p>
            Add more images      
          </p>
        </button>
        <button class="flex items-center gap-2 text-gray-200 hover:text-white"> 
          <span class="material-symbols-outlined">
            code
          </span>
          <p> Embed post </p>
        </button>
        <button class="flex items-center gap-2 text-gray-200 hover:text-white"> 
          <span class="material-symbols-outlined">
            download
          </span>
          <p>
            Download post
          </p>
        </button>
        <button class="flex items-center gap-2 text-gray-200 hover:text-white">
          <span class="material-symbols-outlined">
            delete
          </span>
          <p>
            Delete post   
          </p>
        </button>
    </div>
</div>
</div>`;

export const uploadOnDrag = () => {
  const dropArea = document.querySelector(".drop");
  const inputElement = document.querySelector(".input");

  dropArea.addEventListener('dragover', e => {
    e.preventDefault()
    dropArea.classList.add('dragover')
  })

  dropArea.addEventListener('dragleave', e => {
    dropArea.classList.remove('dragover') 
  })
  
  dropArea.addEventListener('dragend', e => {
    dropArea.classList.remove('dragover')
  })

  dropArea.addEventListener('drop', e => {
    dropArea.classList.remove('dragover')
  })
    
  dropArea.addEventListener('drop', e => {
    e.preventDefault()
    console.log(e.dataTransfer.files)
  
    console.log(overlayModal.style)
    // overlay.style.background = 'linear-gradient(180deg, rgba(63,34,126,1) 0%, rgba(21,117,84,1) 25%, rgba(87,110,103,1) 50%, rgba(87,110,103,1) 100%)';

    overlayModal.innerHTML = postDiv
    overlayModal.classList.add("absolute")
    overlayModal.classList.add("overflow-auto")

    // document.body.classList.add("overflow-hidden")
    console.log(overlayModal)

    // overlayModal.classList.remove("h-screen")
    // overlayModal.classList.add("h-full")
    
    if (e.dataTransfer.files.length) {
      addPhoto(e.dataTransfer.files[0])

      let uploadComplete = document.querySelector('.upload-comp')
      uploadComplete.classList.add('upload-complete')
    }
  })

}

const addPhoto = (file) => {
  let photoArea = document.querySelector(".photoArea");

  if (file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      let img = new Image();
      img.src = reader.result;
      img.onload = () => {
        let aspectRatio = img.width / img.height;
        photoArea.style.aspectRatio = aspectRatio
        photoArea.style.backgroundImage = `url('${reader.result}')`;
      }
    }
  }
}


export const uploadFromPC = () => {
  const inputField = document.querySelector(".inputFromPC");
  inputField.addEventListener("change", e => {
    e.preventDefault()
    overlayModal.innerHTML = postDiv
    if (inputField.files.length) {
      addPhoto(inputField.files[0])
    }
    overlayModal.classList.remove("h-screen")
    overlayModal.classList.add("h-full")
    overlayModal.classList.add("overflow-auto")

    let uploadComplete = document.querySelector('.upload-comp')
    uploadComplete.classList.add('upload-complete')

  })
}

export const uploadByURL = () => {
  const pasteField = document.querySelector("#paste");

  pasteField.addEventListener("keypress", e => {
    if (e.key === "Enter") {  
      
      e.preventDefault()
      overlayModal.innerHTML = postDiv
      addPhotoByURL(pasteField.value)
    }
    
      let uploadComplete = document.querySelector('.upload-comp')
      uploadComplete.classList.add('upload-complete')
  })   
}

const addPhotoByURL = (inputValue) => {
    console.log(inputValue)
  let photoArea = document.querySelector(".photoArea");
   {
      photoArea.style.backgroundImage = `url('${inputValue}')`;
  }
  }


