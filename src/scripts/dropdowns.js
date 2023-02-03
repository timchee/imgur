var dropdowns, selectedDd, selectedOpt, optionList, option;

dropdowns = document.getElementsByClassName("custom-select");
for (let i = 0; i < dropdowns.length; i++) {
  selectedDd = dropdowns[i].getElementsByTagName("select")[0];

  selectedOpt = document.createElement("DIV");
  selectedOpt.setAttribute("class", "select-selected");
  selectedOpt.innerHTML =
    selectedDd.options[selectedDd.selectedIndex].innerHTML;
  dropdowns[i].appendChild(selectedOpt);
  optionList = document.createElement("DIV");
  optionList.setAttribute("class", "select-items select-hide");

  for (j = 1; j < selectedDd.length; j++) {
    option = document.createElement("DIV");
    option.innerHTML = selectedDd.options[j].innerHTML;
    option.addEventListener("click", function (e) {
      var sameAsSelected, selectedBox, prevSibling;
      selectedBox =
        this.parentNode.parentNode.getElementsByTagName("select")[0];

      prevSibling = this.parentNode.previousSibling;
      for (let i = 0; i < selectedBox.length; i++) {
        if (selectedBox.options[i].innerHTML == this.innerHTML) {
          selectedBox.selectedIndex = i;
          prevSibling.innerHTML = this.innerHTML;
          sameAsSelected =
            this.parentNode.getElementsByClassName("same-as-selected");
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
  selectedOpt.addEventListener("click", function (e) {
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
  });
}

var sameAsDefaults = document.querySelectorAll(".select-items div");
var defaults = document.querySelectorAll(".select-selected");

defaults.forEach((defaultSelect) => {
  sameAsDefaults.forEach((sameAsDefault) => {
    if (defaultSelect.innerHTML == sameAsDefault.innerHTML) {
      sameAsDefault.setAttribute("class", "same-as-selected");
    }
  });
});

function closeAllSelect(element) {
  var items,
    selectedOpt,
    arrNo = [];
  items = document.getElementsByClassName("select-items");
  selectedOpt = document.getElementsByClassName("select-selected");
  for (let i = 0; i < selectedOpt.length; i++) {
    if (element == selectedOpt[i]) {
      arrNo.push(i);
    }
  }
  for (i = 0; i < items.length; i++) {
    if (arrNo.indexOf(i)) {
      items[i].classList.add("select-hide");
    }
  }
}

document.addEventListener("click", closeAllSelect);
