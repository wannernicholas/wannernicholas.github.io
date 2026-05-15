const projects = [

    {
        title: "Portfolio Website",

        description:
            "A modern responsive portfolio website built using HTML, CSS, and JavaScript featuring reusable components and sleek UI animations.",

        images: ["images/projects/site.png"],

        tags: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        links: [
            {
                label: "GitHub",
                url: "https://github.com/wannernicholas/wannernicholas.github.io"
            }
        ],
    },

    {
        title: "Project 2",

        description:
            "Wow another project gotta fill in this information in the future.",

        images: ["images/project2.jpg"],

        tags: [
            "Python",
            "Flask",
            "TensorFlow"
        ],

        links: [
            {
                label: "GitHub",
                url: "#"
            },
            {
                label: "Documentation",
                url: "#"
            }
        ],
    }
];

document.addEventListener("DOMContentLoaded", async () => {

    for (const [index, project] of projects.entries()) {
        project.reverse = index % 2 !== 0;
        await loadProjectCard(project);
    }

});