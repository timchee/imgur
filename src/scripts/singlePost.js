export function singlePost(
  id,
  link,
  animated,
  height,
  width,
  title,
  votes,
  comment_count,
  views
) {
  // const image = `../assets/imgur-img-1.webp${img}`;
  let post = `<div class="post text-white rounded-sm overflow-hidden "  id="image-container" data-id=${id}>`;
  if (animated) {
    post += `
      <video id="image" class="image" width="300px" data-height="${height}" data-width="${width}" autoplay muted>
      <source src=${link} type="video/mp4">
      </video>
    `;
  } else {
    post += ` 
      <img src="${link}" id="image" class="image" width="300px" data-height="${height}" data-width="${width}"/>
    `;
  }

  post += `  
      <div class="flex flex-col bg-gray-500 p-4 pt-2 rounded-b-sm desc ">
      <p class="text-sm font-medium overflow-hidden mb-3 title" style="width:260px">${title}</p>
      <div class="flex justify-between text-gray-200 text-xs font-medium ">      
      <p class="flex gap-1 items-center justify-center"> <span class= "hover:text-btnColor"><svg height="16" width="16">
      <path fill="currentColor" stroke="#ffffff" stroke-width="0" fill-rule="evenodd" clip-rule="evenodd" d="M7.197 2.524a1.2 1.2 0 011.606 0c.521.46 1.302 1.182 2.363 2.243a29.617 29.617 0 012.423 2.722c.339.435.025 1.028-.526 1.028h-2.397v4.147c0 .524-.306.982-.823 1.064-.417.066-1.014.122-1.843.122s-1.427-.056-1.843-.122c-.517-.082-.824-.54-.824-1.064V8.517H2.937c-.552 0-.865-.593-.527-1.028.52-.669 1.32-1.62 2.423-2.722a52.996 52.996 0 012.364-2.243z"></path>
    </svg></span> <span> ${votes}</span></p>
      <p class="flex gap-1 items-center justify-center hover:text-white"> <span><svg height="16" width="16">
      <path fill="currentColor" stroke="#ffffff" stroke-width="0" d="M4.455 12.195l.367 1.105 1.037-.53c.266-.135.637-.412 1.039-.74.39-.319.872-.737 1.422-1.245h2.291a3.306 3.306 0 003.306-3.306V5.306A3.306 3.306 0 0010.611 2H5.306A3.306 3.306 0 002 5.306v2.656c0 1.34.933 2.461 2.185 2.75.008.172.025.335.046.479a6.622 6.622 0 00.168.803c.016.07.035.137.056.2z"></path>
    </svg></span> <span> ${comment_count}</span></p>
      <p class="flex gap-1 items-center justify-center hover:text-white"> <span><svg height="16" width="16">
      <path d="M8 2.5C4.74998 2.5 2.30142 5.50267 1.27514 6.77517C0.925337 7.20917 0.908553 7.76483 1.2278 8.16583C2.22527 9.41833 4.6991 12.5 8 12.5C11.3686 12.5 13.8396 9.31133 14.796 8.0905C15.0769 7.732 15.0674 7.2535 14.7692 6.8755C13.7938 5.6395 11.3376 2.5 8 2.5ZM7.98224 9.33333C6.90897 9.33333 6.03887 8.51233 6.03887 7.5C6.03887 6.4875 6.90897 5.66667 7.98224 5.66667C9.05551 5.66667 9.92561 6.4875 9.92561 7.5C9.92561 8.51233 9.05551 9.33333 7.98224 9.33333Z" fill="currentColor"></path>
    </svg></span> <span> ${views}</span></p>
      </div>
    </div>
    </div>
  `;

  return post;
}

// box-shadow: 0 2px 4px 0 rgb(0 0 0 / 40%);
