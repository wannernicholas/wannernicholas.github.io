async function loadDescriptionAccordion(item) {
    const res = await fetch("components/description-accordion.html");
    let template = await res.text();

    template = template
        .replace("{{title}}", item.title)
        .replace("{{content}}", item.content);

    const container = document.createElement("div");
    container.innerHTML = template;
    const accordion = container.firstElementChild;

    setupAccordionAnimation(accordion);

    return accordion;
}

function setupAccordionAnimation(accordion) {
    accordion.addEventListener("click", handleAccordionClick);
}

function handleAccordionClick(e) {
    if (e.target.closest(".accordion-summary")) {
        e.preventDefault();

        const accordion = e.currentTarget;
        const content = accordion.querySelector(".accordion-content");
        const arrow = accordion.querySelector(".accordion-arrow");
        const isOpen = accordion.hasAttribute("open");

        if (isOpen) {
            arrow.style.transform = "rotate(0deg)";

            content.style.maxHeight = "0";

            setTimeout(() => {
                accordion.removeAttribute("open");
                arrow.style.transform = "";
            }, 400);
        } else {
            arrow.style.transform = "rotate(180deg)";

            accordion.setAttribute("open", "");

            requestAnimationFrame(() => {
                const scrollHeight = content.scrollHeight;
                content.style.maxHeight = scrollHeight + "px";
            });
        }
    }
}
