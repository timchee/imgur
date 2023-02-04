const buttonHTML = `<svg
fill="#ffffff"
version="1.1"
id="icon"
xmlns="http://www.w3.org/2000/svg"
xmlns:xlink="http://www.w3.org/1999/xlink"
width="40px"
height="40px"
viewBox="-9.6 -9.6 51.20 51.20"
xml:space="preserve"
stroke="#ffffff"
stroke-width="0.00032"
>
<g id="SVGRepo_bgCarrier" stroke-width="0">
  <rect
    class="hidden sm:block"
    x="-9.6"
    y="-9.6"
    width="51.20"
    height="51.20"
    rx="7.68"
    fill="#474a51"
    strokewidth="0"
  ></rect>
</g>
<g id="SVGRepo_iconCarrier">
  <style type="text/css">
    .st0 {
      fill: none;
    }
  </style>
  <title>up-to-top</title>
  <polygon
    points="16,14 6,24 7.4,25.4 16,16.8 24.6,25.4 26,24 "
  ></polygon>
  <rect x="4" y="8" width="24" height="2"></rect>
  <rect
    id="_Transparent_Rectangle_"
    class="st0 hidden sm:block"
    width="30"
    height="30"
  ></rect>
</g>
</svg>
<p>Move to the top</p>`;

export const addScrollButton = () => {
    const scrollBtn = document.querySelector("#scroll-btn")
    scrollBtn.innerHTML = buttonHTML;
}