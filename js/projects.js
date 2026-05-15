const projects = [

    {
        title: "Portfolio Website",

        description:
            "A modern responsive portfolio website built using HTML, CSS, and JavaScript featuring reusable components and UI animations.",

        media: ["images/projects/site.png"],

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
        title: "Book It! Game",

        description:
            "A 3D first person stealth horror game co-created with a friend for a Halloween game jam. Explore an abandoned library to find all the magic books while avoiding a monster by ducking under tables.",

        media: ["images/projects/book it/title.png", "images/projects/book it/screenshot.png"],

        tags: [
            "C#",
            "Unity"
        ],

        links: [
            {
                label: "GitHub",
                url: "https://github.com/wannernicholas/Horror-Game"
            },
            {
                label: "Itch.io",
                url: "https://thenick451.itch.io/book-it"
            }
        ],
    },

    {
        title: "Shaders",

        description:
            "My experiments playing around with creating shaders using OpenGL Shading Language. I really enjoy creating them they blend coding and art together seamlessly, and there are always new techniques to be learned and applied.",

        media: ["images/projects/shaders/overthemoon.mp4", "images/projects/shaders/outrun.webm", "images/projects/shaders/torrid.webm", "images/projects/shaders/domainwarp.webm"],

        tags: [
            "GLSL",
        ],

        links: [
            {
                label: "GitHub",
                url: "https://github.com/wannernicholas/Learning-Shaders"
            }
        ],
    },

    {
        title: "Work in Progress Shipping Game",

        description:
            "I'm currently working independently on this game. The goal will be to travel from island to island to buy and sell goods at the best value while meeting multiple characters along the way.",

        media: ["images/projects/shipping game/dialog.png", "images/projects/shipping game/farming.png", "images/projects/shipping game/trading.png", "images/projects/shipping game/trading2.png"],

        tags: [
            "C#", "Godot"
        ],
    },
];

document.addEventListener("DOMContentLoaded", async () => {

    for (const [index, project] of projects.entries()) {
        project.reverse = index % 2 !== 0;
        await loadProjectCard(project);
    }

});