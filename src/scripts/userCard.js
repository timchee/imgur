const template = document.createElement("template");
template.innerHTML = `
<div
class="w-32 h-36 flex flex-col justify-end bg-tagColor-2 rounded-md"
>
<img
  src="https://i.imgur.com/Z7iodQm_d.jpg?maxwidth=800&shape=thumb&fidelity=high"
  alt=""
  class="object-center object-cover h-full rounded-md"
/>
<div
  class="bg-tagColor-1 w-full rounded-md flex flex-col items-center gap-0.5 py-3"
>
  <p class="text-white font-semibold text-sm">Clean your desk</p>
  <p class="text-xs text-[rgba(255,255,255,0.6)] font-semibold">
    2323 posts
  </p>
</div>
</div>
`;

const linkElem = document.createElement("link");
linkElem.setAttribute("rel", "stylesheet");
linkElem.setAttribute("href", "../../dist/output.css");

export class UserCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(linkElem);
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    // this.shadowRoot.querySelector("h3").innerText = this.getAttribute("name");
    // this.shadowRoot.querySelector("img").src = this.getAttribute("avatar");
  }
}

window.customElements.define("user-card", UserCard);
