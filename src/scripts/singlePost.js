export function singlePost(img) {
  const image = `../assets/${img}`;
  const post = ` <div class="post" id="image-container">
     <img src="${image}" id="image" class="image" />
     <div class="p-2">Lorem ipsum dolor sit amet</div>
    </div>
    `;
  return post;
}

const images = [
  "imgur-img-1.webp",
  "imgur-img-2.webp",
  "imgur-img-3.webp",
  "imgur-img-4.webp",
  "imgur-img-5.webp",
  "imgur-img-3.webp",
  "imgur-img-1.webp",
  "imgur-img-4.webp",
  "imgur-img-3.webp",
  "imgur-img-5.webp",
  "imgur-img-2.webp",
  "imgur-img-3.webp",
  "imgur-img-1.webp",
  "imgur-img-2.webp",
  "imgur-img-4.webp",
  "imgur-img-5.webp",
  "imgur-img-1.webp",
  "imgur-img-2.webp",
  "imgur-img-3.webp",
  "imgur-img-4.webp",
  "imgur-img-2.webp",
  "imgur-img-5.webp",
  "imgur-img-1.webp",
  "imgur-img-4.webp",
  "imgur-img-3.webp",
  "imgur-img-1.webp",
  "imgur-img-5.webp",
  "imgur-img-3.webp",
  "imgur-img-1.webp",
  "imgur-img-2.webp",
  "imgur-img-4.webp",
  "imgur-img-1.webp",
];

const posts = images.map((image) => {
  return singlePost(image);
});
const gridContainer = document.getElementById("posts-container");
posts.forEach((post) => {
  gridContainer.innerHTML += post;
});
