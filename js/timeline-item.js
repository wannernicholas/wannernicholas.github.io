async function loadTimelineItem(data) {
    const res = await fetch("components/timeline-item.html");
    let template = await res.text();

    let descriptionHTML = "";
    if (data.description && data.description.length > 0) {
        if (data.description.length === 1) {
            // Single item: render as plain paragraph
            descriptionHTML = `<p>${data.description[0].content}</p>`;
        } else {
            // Multiple items: create an accordion for each description item
            const accordions = await Promise.all(
                data.description.map(item => loadDescriptionAccordion(item))
            );
            const tempContainer = document.createElement("div");
            accordions.forEach(accordion => tempContainer.appendChild(accordion.cloneNode(true)));
            descriptionHTML = tempContainer.innerHTML;
        }
    }

    template = template
        .replaceAll("{{role}}", data.role)
        .replaceAll("{{company}}", data.company)
        .replaceAll("{{dates}}", data.dates)
        .replaceAll("{{descriptionAccordion}}", descriptionHTML)
        .replaceAll("{{noImage}}", data.image ? "" : "no-image")
        .replace("{{image}}", data.image ? `<img src="${data.image}" alt="">` : "")
        .replace("{{tags}}", data.tags ? data.tags.map(tag => `<span>${tag}</span>`).join("") : "");

    document.querySelector(".timeline-items").insertAdjacentHTML("beforeend", template);
    setupAccordionAnimations();
}

function setupAccordionAnimations() {
    document.querySelectorAll(".description-accordion").forEach(accordion => {
        setupAccordionAnimation(accordion);
    });
}