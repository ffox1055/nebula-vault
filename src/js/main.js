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
