export function singlePost(img) {
  const image = `../assets/${img}`;
  const post = ` <div class="post text-white" id="image-container">
     <img src="${image}" id="image" class="image" width="300px" />
     <div class="flex flex-col bg-gray-500 p-2">
        <p class="text-sm">Lorem ipsum dolor sit amet</p>
        <div class="flex justify-between text-gray-200 text-xs">
        <p>* 300</p>
        <p>* 29</p>
        <p>* 5K</p>
        </div>
     </div>
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
