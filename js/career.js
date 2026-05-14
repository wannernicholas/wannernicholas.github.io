const buttons = document.querySelectorAll(".timeline-date");
const contents = document.querySelectorAll(".timeline-content");

document.addEventListener("DOMContentLoaded", () => {

  if (contents.length > 0) {
    contents[0].classList.add("active");
    contents[0].closest(".timeline-item").classList.add("active");
  }

  buttons.forEach((button) => {

    button.addEventListener("click", () => {

      const item = button.closest(".timeline-item");

      const content = item.querySelector(".timeline-content");

      content.classList.toggle("active");
      item.classList.toggle("active");

    });

  });

});