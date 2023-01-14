const template = document.createElement("template");
template.innerHTML = `
<div
class="w-32 h-36 hover:-translate-y-1 flex flex-col transition-all justify-end rounded-md"
> <img
class="object-center object-cover rounded-t-md h-full"
/> 
<div
  class="rounded-b-md flex flex-col items-center gap-0.5 py-3 title-color"
>
  <p class="text-white font-semibold text-sm title"></p>
  <p class="text-xs text-[rgba(255,255,255,0.6)] font-semibold posts">
    2323 posts
  </p>
</div>
</div>
`;

const linkElem = document.createElement("link");
linkElem.setAttribute("rel", "stylesheet");
linkElem.setAttribute("href", "../../dist/output.css");

export class Tag extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    const clonedStyle = linkElem.cloneNode(true);
    this.shadowRoot.appendChild(clonedStyle);

    this.shadowRoot.querySelector("img").src = this.getAttribute("src");
    this.shadowRoot.querySelector(".title").innerHTML =
      this.getAttribute("title");
    this.shadowRoot.querySelector(".posts").innerHTML =
      this.getAttribute("posts") + " posts";
    this.shadowRoot
      .querySelector(".title-color")
      .classList.add(this.getAttribute("title-color"));
  }

  connectedCallback() {
    const name = this.getAttribute("name");
    this.addEventListener("click", () => {
      window.location = `./pages/tag.html?tagId=${name}&featured=true`;
    });
  }
}

window.customElements.define("imgur-tag", Tag);
