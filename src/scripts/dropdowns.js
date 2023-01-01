var dropdowns, seleoptiontedDd, selectedOpt, optionList, option;

dropdowns = document.getElementsByClassName("custom-select");
for (let i = 0; i < dropdowns.length; i++) {
  selectedDd = dropdowns[i].getElementsByTagName("select")[0];
  
  selectedOpt = document.createElement("DIV");
  selectedOpt.setAttribute("class", "select-selected");
  selectedOpt.innerHTML = selectedDd.options[selectedDd.selectedIndex].innerHTML;
  dropdowns[i].appendChild(selectedOpt);

  optionList = document.createElement("DIV");
  optionList.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selectedDd.length; j++) {

    option = document.createElement("DIV");
    option.innerHTML = selectedDd.options[j].innerHTML;
    option.addEventListener("click", function(e) {

        var sameAsSelected, selectedBox, prevSibling;
        selectedBox = this.parentNode.parentNode.getElementsByTagName("select")[0];

        prevSibling = this.parentNode.previousSibling;
        for (let i = 0; i < selectedBox.length; i++) {
          if (selectedBox.options[i].innerHTML == this.innerHTML) {
            selectedBox.selectedIndex = i;
            prevSibling.innerHTML = this.innerHTML;
            sameAsSelected = this.parentNode.getElementsByClassName("same-as-selected");
            for (let k = 0; k < sameAsSelected.length; k++) {
              sameAsSelected[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        prevSibling.click();
    });
    optionList.appendChild(option);
  }
  dropdowns[i].appendChild(optionList);
  selectedOpt.addEventListener("click", function(e) {

      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
    });
}

function closeAllSelect(element) {

  var items, selectedOpt, arrNo = [];
  items = document.getElementsByClassName("select-items");
  selectedOpt = document.getElementsByClassName("select-selected");
  for (let i = 0; i < selectedOpt.length; i++) {
    if (element == selectedOpt[i]) {
      arrNo.push(i)
    }
  }
  for (i = 0; i < items.length; i++) {
    if (arrNo.indexOf(i)) {
      items[i].classList.add("select-hide");
    }
  }
}

document.addEventListener("click", closeAllSelect);


let btn = document.querySelector(".open-menu");
let profileMenu = document.querySelector(".profile-menu")
console.log(profileMenu)
const hides = btn.addEventListener("click", () => {
  hide(profileMenu)
})

profileMenu.style.display = "none";

function hide(item) {

    console.log(item.style.display)

    if(item.style.display != "flex")
    {
        item.style.display = "flex";
    } else {
        item.style.display = "none"
    }
}

let newPostBtn = document.querySelector(".new-post");
let overlayModal = document.querySelector(".overlay")
let modal = document.querySelector(".modal")
newPostBtn.addEventListener("click", () => {
  hide(overlayModal)
})
overlayModal.addEventListener("click", () => {
  hide(overlayModal)
})
modal.addEventListener('click', (event) => {
    event.stopPropagation()
})


// function hideModal(e) {
//   console.log(overlayModal.style.display)

//   if(overlayModal.style.display != "flex")
//   {
//       overlayModal.style.display = "flex";
//   } else {
//       overlayModal.style.display = "none"
//   }
// }