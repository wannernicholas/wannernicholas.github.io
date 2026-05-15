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

    let currentIndex = 0;

    const mediaElements = [];

    function createMediaElement(src) {

        const ext = src.split(".").pop().toLowerCase();

        let el;

        if (ext === "mp4" || ext === "webm") {

            el = document.createElement("video");

            el.src = src;
            el.muted = true;
            el.loop = true;
            el.autoplay = true;
            el.playsInline = true;
            el.preload = "metadata";

        } else {

            el = document.createElement("img");
            el.src = src;
            el.alt = project.title;
        }

        return el;
    }

    // Build media into track
    project.media.forEach(src => {

        const el = createMediaElement(src);

        mediaElements.push(el);
        track.appendChild(el);
    });

    const hasMultiple =
        project.media.length > 1;

    if (!hasMultiple) {
        prevButton.style.display = "none";
        nextButton.style.display = "none";
    }

    function updateSlide() {

        // Move track
        track.style.transform =
            `translateX(-${currentIndex * 100}%)`;

        // Pause all videos except active one
        mediaElements.forEach((el, i) => {

            if (el.tagName === "VIDEO") {

                if (i === currentIndex) {
                    el.play().catch(() => { });
                } else {
                    el.pause();
                }
            }
        });
    }

    updateSlide();

    if (hasMultiple) {

        prevButton.addEventListener("click", () => {

            currentIndex--;

            if (currentIndex < 0) {
                currentIndex = project.media.length - 1;
            }

            updateSlide();
        });

        nextButton.addEventListener("click", () => {

            currentIndex++;

            if (currentIndex >= project.media.length) {
                currentIndex = 0;
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

    if (project.links != null && project.links.length > 0) {
        project.links.forEach(link => {

            const a =
                document.createElement("a");

            a.href = link.url;
            a.target = "_blank";
            a.textContent = link.label;

            linksContainer.appendChild(a);
        });
    }

    document.querySelector(".projects-container")
        .appendChild(card);
}