async function loadTimelineItem(data) {
    const res = await fetch("components/timeline-item.html");
    let template = await res.text();

    template = template
        .replaceAll("{{role}}", data.role)
        .replaceAll("{{company}}", data.company)
        .replaceAll("{{dates}}", data.dates)
        .replaceAll(
            "{{description}}",
            data.description.map(p => `<p>${p}</p><br>`).join("")
        )
        .replaceAll("{{noImage}}", data.image ? "" : "no-image")
        .replace("{{image}}", data.image ? `<img src="${data.image}" alt="">` : "")
        .replace("{{tags}}", data.tags ? data.tags.map(tag => `<span>${tag}</span>`).join("") : "");

    document.querySelector(".timeline-items").insertAdjacentHTML("beforeend", template);
}