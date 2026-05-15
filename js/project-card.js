async function loadProjectCard(project) {

    const response =
        await fetch("components/project-card.html");

    const html =
        await response.text();

    const temp =
        document.createElement("div");

    temp.innerHTML = html;

    const card =
        temp.firstElementChild;


    if (project.reverse) {
        card.classList.add("reverse");
    }

    const track =
        card.querySelector(".image-track");

    const prevButton =
        card.querySelector(".prev");

    const nextButton =
        card.querySelector(".next");

    let currentImage = 0;

    // Build images into track
    project.images.forEach(src => {

        const img =
            document.createElement("img");

        img.src = src;
        img.alt = project.title;

        track.appendChild(img);

    });

    const hasMultipleImages =
        project.images.length > 1;

    if (!hasMultipleImages) {

        prevButton.style.display = "none";
        nextButton.style.display = "none";

    }

    function updateSlide() {

        track.style.transform =
            `translateX(-${currentImage * 100}%)`;

    }

    updateSlide();

    if (hasMultipleImages) {

        prevButton.addEventListener("click", () => {

            currentImage--;

            if (currentImage < 0) {
                currentImage = project.images.length - 1;
            }

            updateSlide();

        });

        nextButton.addEventListener("click", () => {

            currentImage++;

            if (currentImage >= project.images.length) {
                currentImage = 0;
            }

            updateSlide();

        });

    }

    card.querySelector(".project-title")
        .textContent = project.title;

    card.querySelector(".project-description")
        .textContent = project.description;

    const tagsContainer =
        card.querySelector(".project-tags");

    project.tags.forEach(tag => {

        const span =
            document.createElement("span");

        span.textContent = tag;

        tagsContainer.appendChild(span);

    });
    const linksContainer =
        card.querySelector(".project-links");

    project.links.forEach(link => {

        const a =
            document.createElement("a");

        a.href = link.url;

        a.target = "_blank";

        a.textContent = link.label;

        linksContainer.appendChild(a);

    });

    document.querySelector(".projects-container")
        .appendChild(card);
}