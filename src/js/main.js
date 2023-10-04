// burger button
const burgerBtn = document.getElementById("burgerBtn");
const navItem = document.querySelector(".mnav__items");

burgerBtn.addEventListener("change", () => {
  if (burgerBtn.checked) {
    navItem.classList.toggle("active");
  } else {
    navItem.classList.remove("active");
  }
});

// faq
const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach((item) => {
  const faqBody = item.querySelector(".faq-item-body");

  item.addEventListener("click", () => {
    if (!faqBody.classList.contains("active")) {
      faqBody.classList.toggle("active");
      faqBody.style.maxHeight = faqBody.scrollHeight + "px";
    } else {
      faqBody.classList.toggle("active");
      faqBody.style.maxHeight = 0;
    }
  });
});

let tabsContainer = document.querySelector("#tabs");
let tabTogglers = tabsContainer.querySelectorAll("#tabs a");

tabTogglers.forEach(function (toggler) {
  toggler.addEventListener("click", function (e) {
    e.preventDefault();

    let tabName = this.getAttribute("href");
    
    let tabContents = document.querySelector("#tab-contents");

    for (let i = 0; i < tabContents.children.length; i++) {
      tabTogglers[i].parentElement.classList.remove(
        "active"
      );
      tabContents.children[i].classList.add("active");
      if ("#" + tabContents.children[i].id === tabName) {
        continue;
      }
      tabContents.children[i].classList.remove("active");
    }
    e.target.parentElement.classList.add(
      "active"
    );
  });
});

function fadeIn() {
  setInterval(show, 200);
}

function show() {
  var body = document.getElementById("body");
  opacity = Number(window.getComputedStyle(body)
                  .getPropertyValue("opacity"));
  if (opacity < 1) {
      opacity = opacity + 0.1;
      body.style.opacity = opacity
  } else {
      clearInterval(intervalID);
  }
}