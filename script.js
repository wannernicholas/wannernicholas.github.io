const buttons = document.querySelectorAll(".timeline-date");
const contents = document.querySelectorAll(".timeline-content");

if (contents.length > 0) {
    contents[0].classList.add("active");
}

buttons.forEach(button => {
  button.addEventListener("click", () => {

    const content =
      button.nextElementSibling;

    content.classList.toggle("active");

  });
});

fetch("components/navbar.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;

    setActiveNav();
  });