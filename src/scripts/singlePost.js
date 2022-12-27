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
  let post = `<div class="post text-white" id="image-container" data-id=${id}>`;
  if (animated) {
    post += `
      <video id="image" class="image" width="300px" data-height="${height}" data-width="${width}" muted>
      <source src=${link} type="video/mp4">
      </video>
    `;
  } else {
    post += ` 
      <img src="${link}" id="image" class="image" width="300px" data-height="${height}" data-width="${width}"/>
    `;
  }

  post += `  
      <div class="flex flex-col bg-gray-500 p-2">
      <p class="text-sm overflow-hidden" style="width:280px">${title}</p>
      <div class="flex justify-between text-gray-200 text-xs">
      <p>* ${votes}</p>
      <p>* ${comment_count}</p>
      <p>* ${views}</p>
      </div>
    </div>
    </div>
  `;

  return post;
}

{
  /* <video width="320" height="240" autoplay>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
Your browser does not support the video tag.
</video> */
}
