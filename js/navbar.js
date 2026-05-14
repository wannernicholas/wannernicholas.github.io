document.addEventListener("DOMContentLoaded", () => {

  fetch("components/navbar.html")
    .then(response => response.text())
    .then(data => {

      const navbar = document.getElementById("navbar");
      navbar.innerHTML = data;

      requestAnimationFrame(() => {
        setActiveNav();
      });

    })
    .catch(error => console.error("Navbar failed to load:", error));

});

function setActiveNav() {

  const currentPage = getCurrentPage();

  const navLinks =
    document.querySelectorAll(".nav-links a");

  navLinks.forEach(link => {

    const linkPage =
      link.getAttribute("href");

    if (linkPage === currentPage) {
      link.classList.add("active-nav");
    }

  });

}

function getCurrentPage() {

  let page =
    window.location.pathname.split("/").pop();

  if (page === "" || page === "/") {
    page = "index.html";
  }

  return page;
}