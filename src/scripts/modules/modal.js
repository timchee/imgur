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

  //Handle input value on focus and on blur
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

  const showAndHide = (item) => {
    if (item.style.display != "flex") {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  };

  let newPostBtn = document.querySelector(".new-post");
  let closeBtn = document.querySelector(".x");

  //Open modal
  newPostBtn.addEventListener("click", () => {
    document.body.classList.add("overflow-hidden")
    showAndHide(overlayModal);
  });

  //Close modal
  closeBtn.addEventListener("click", () => {
    document.body.classList.remove("overflow-hidden")
    showAndHide(overlayModal);
  });

  uploadByURL()
  uploadFromPC()
  uploadOnDrag()
};

//change overlay innerHTML upon file upload
let href = window.location.href
const postDiv = `<div class="container flex flex-col xl:flex-row w-full h-full gap-16 justify-center items-center xl:items-start mt-[660px] sm:mt-[1400px] md:mt-60 lg:mt-[800px] xl:mt-60 mb-40">
<div class="Navbar-logo-container absolute top-4 left-4">
    <a aria-current="page" class="Navbar-logo active" href="${href}">
      <svg
        width="94"
        height="34"
        viewBox="0 0 94 34"
        class="icon stroke fill"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Imgur</title>
        <path
          d="M86.8012 17.336C86.8012 15.6108 86.981 15.0039 88.5637 14.3332C89.1292 14.0977 89.7077 13.9104 90.2587 13.7321C91.9506 13.1844 93.3833 12.7206 93.3833 11.2023C93.3833 9.86081 92.0884 8.71123 90.5059 8.71123C89.175 8.71123 87.8441 9.28632 86.6572 10.4038C85.9738 9.31751 85.0747 8.80659 83.9599 8.80659C82.0176 8.80659 81.1185 9.98884 81.1185 12.4487V22.5745C81.1185 25.0344 82.0176 26.2484 83.9599 26.2484C85.9018 26.2484 86.8012 25.0344 86.8012 22.5745V17.336Z"
          fill="#ffffff"
        ></path>
        <path
          d="M61.085 19.1569C61.085 23.9801 64.1422 26.5359 69.6448 26.5359C75.148 26.5359 78.2051 23.9801 78.2051 19.1569V12.4487C78.2051 9.98884 77.342 8.80659 75.3995 8.80659C73.4576 8.80659 72.5582 9.98884 72.5582 12.4487V18.1345C72.5582 20.4984 71.9469 21.8081 69.6448 21.8081C67.3433 21.8081 66.7314 20.4984 66.7314 18.1345V12.4487C66.7314 9.98884 65.8326 8.80659 63.9264 8.80659C61.9841 8.80659 61.085 9.98884 61.085 12.4487V19.1569Z"
          fill="#ffffff"
        ></path>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M48.245 33.3078C52.2732 33.3078 55.2229 31.9981 56.877 29.5382C57.9919 27.9092 58.2077 25.6094 58.2077 22.5745V12.4487C58.2077 9.98884 57.3086 8.80659 55.3663 8.80659C54.5036 8.80659 53.4964 9.34959 52.8485 10.4038C51.6982 9.19008 50.2589 8.61499 48.317 8.61499C43.4974 8.61499 39.5052 12.4166 39.5052 17.5276C39.5052 22.6387 43.2456 26.2802 47.7057 26.2802C49.9351 26.2802 51.6262 25.4814 52.8485 23.9163C52.8485 24.0322 52.8582 24.1398 52.8675 24.2432C52.8762 24.339 52.8845 24.4313 52.8845 24.5234C52.8845 27.2705 51.2304 28.7718 48.4607 28.7718C46.6897 28.7718 45.3742 28.2995 44.3043 27.9153C43.5708 27.652 42.9527 27.43 42.3822 27.43C40.9796 27.43 39.9367 28.3565 39.9367 29.6342C39.9367 31.6152 43.0655 33.3078 48.245 33.3078ZM45.3676 17.5276C45.3676 15.0039 46.9864 13.4067 49.0726 13.4067C51.1583 13.4067 52.8125 15.0039 52.8125 17.5276C52.8125 20.0829 51.1944 21.7442 49.0726 21.7442C46.9506 21.7442 45.3676 20.1149 45.3676 17.5276Z"
          fill="#ffffff"
        ></path>
        <path
          d="M31.5924 22.5745C31.5924 25.0344 32.4558 26.2484 34.3975 26.2484C36.34 26.2484 37.2388 25.0344 37.2388 22.5745V15.3553C37.2388 11.011 34.7573 8.74302 30.8371 8.74302C28.4996 8.74302 26.8446 9.41375 25.1184 11.1069C23.7877 9.54178 21.9172 8.74302 19.4717 8.74302C17.5655 8.74302 16.1268 9.25424 14.9396 10.4038C14.2563 9.31751 13.3575 8.80659 12.2426 8.80659C10.3 8.80659 9.40124 9.98884 9.40124 12.4487V22.5745C9.40124 25.0344 10.3 26.2484 12.2426 26.2484C14.1842 26.2484 15.0836 25.0344 15.0836 22.5745V16.8251C15.0836 14.3332 15.8753 13.0556 17.925 13.0556C19.7595 13.0556 20.4788 14.3332 20.4788 16.8887V22.5745C20.4788 25.0344 21.3776 26.2484 23.3202 26.2484C25.2624 26.2484 26.1615 25.0344 26.1615 22.5745V16.8251C26.1615 14.3332 26.9526 13.0556 29.0026 13.0556C30.8371 13.0556 31.5924 14.3332 31.5924 16.8887V22.5745Z"
          fill="#ffffff"
        ></path>
        <path
          d="M6.23549 12.4487C6.23549 9.98884 5.33669 8.80659 3.43046 8.80659C1.48851 8.80659 0.589111 9.98884 0.589111 12.4487V22.5745C0.589111 25.0344 1.48851 26.2484 3.43046 26.2484C5.373 26.2484 6.23549 25.0344 6.23549 22.5745V12.4487Z"
          fill="#ffffff"
        ></path>
        <path
          d="M3.51952 0.756104C1.58599 0.756104 0 2.1078 0 3.75626C0 5.43752 1.54695 6.7561 3.51952 6.7561C5.45305 6.7561 7 5.43752 7 3.75626C7 2.1078 5.45305 0.756104 3.51952 0.756104Z"
          fill="#1BB76E"
        ></path>
      </svg>
    </a>
  </div>
<div class="w-full flex flex-col items-center gap-6 relative xl:mt-0">
    <h3 class="upload-comp bg-[#38d1b1] absolute -top-6 right-0 text-white font-medium px-4 py-2 flex items-center  rounded-sm" style="">Upload complete <span class="material-symbols-outlined">
    check
    </span></h3>
    <input type="text" name="title" id="title" class="w-full bg-transparent text-2xl outline-none cursor-text caret-white text-white font-semibold" placeholder="Give your post a unique title">
    <div class="photoArea w-full  md:w-[60%] xl:w-[700px] aspect-3/2 bg-tagColor-1 rounded-md overflow-hidden relative bg-cover bg-no-repeat bg-[50%] drop-shadow-xl">
        <input type="text" name="desc" id="desc" class="absolute bottom-0 left-0 right-0 bg-[#44474e] p-1 sm:p-4 text-lg caret-white" placeholder="Add a description">
    </div>
    <button class="h-auto w-auto py-2 px-4 rounded-3xl bg-[#11b8bc] self-center text-white hover:bg-[#21e2e6] whitespace-nowrap">+ Add image</button>
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

const uploadOnDrag = () => {
  const dropArea = document.querySelector(".drop");
  const inputElement = document.querySelector(".input");

  //Add animation on dragover 
  dropArea.addEventListener('dragover', e => {
    e.preventDefault()
    dropArea.classList.add('dragover')
  })

  //Remove animation on dragleave
  dropArea.addEventListener('dragleave', e => {
    dropArea.classList.remove('dragover') 
  })
  
  //Remove animation on dragend
  dropArea.addEventListener('dragend', e => {
    dropArea.classList.remove('dragover')
  })

  //Remove animation on drop
  dropArea.addEventListener('drop', e => {
    dropArea.classList.remove('dragover')
  })
    
  //handle file on drop
  dropArea.addEventListener('drop', e => {
    e.preventDefault()

    overlayModal.innerHTML = postDiv
    overlayModal.classList.add("absolute")
    overlayModal.classList.add("overflow-auto")

    document.body.classList.add("overflow-hidden")
    console.log(overlayModal)

    
    if (e.dataTransfer.files.length) {
      addPhoto(e.dataTransfer.files[0])

      //show upload complete popup
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


const uploadFromPC = () => {

  //handle file on upload
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
    document.body.classList.add("overflow-hidden")

    let uploadComplete = document.querySelector('.upload-comp')
    uploadComplete.classList.add('upload-complete')

  })
}

const uploadByURL = () => {

  //handle file uploaded by pasting url
  const pasteField = document.querySelector("#paste");
  pasteField.addEventListener("keypress", e => {
    if (e.key === "Enter") {  
      
      e.preventDefault()
      overlayModal.innerHTML = postDiv
      addPhotoByURL(pasteField.value)
    }
    
      let uploadComplete = document.querySelector('.upload-comp')
    uploadComplete.classList.add('upload-complete')
    overlayModal.classList.remove("h-screen")
    overlayModal.classList.add("h-full")
    overlayModal.classList.add("overflow-auto")
    document.body.classList.add("overflow-hidden")
  })   
}

const addPhotoByURL = (inputValue) => {
    console.log(inputValue)
  let photoArea = document.querySelector(".photoArea");
   {
      photoArea.style.backgroundImage = `url('${inputValue}')`;
  }
}


