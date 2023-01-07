export const singleSidebarPost = (postId, imageId, title) => {
  const postHtml = `
<a href="./gallery.html?postId=${postId}">
  <div class="flex items-center w-full my-3">
  <img src="https://i.imgur.com/${imageId}.jpg"" class="rounded w-[64px] h-[64px] mr-3">
  <p class="text-sm text-gray-200 font-medium">${title}</p>
  </div>
</a>
`;
  return postHtml;
};
