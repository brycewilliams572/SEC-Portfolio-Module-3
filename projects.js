const projects = [
    {
        title: "Greater Gainseville International Corporation",
        description: "A website for the nonprofit organization built through framer.",
        link: "https://www.gnvic.org/"
    },

    {
        title: "Comic Catastrophe",
        description: "A 2d platformer game built through Unity.",
        link: "ff"
    },
    {
        title: "Cheap Chomps",
        description: "A SASEHACKS hackathon project where we made <em>Cheap Chomps,</em> an grocery list app that sorted ingredients based on the lowest price from local stores.",
        link: "https://devpost.com/software/cheap-chomps/"
    },
    {
        title: "Bloom Again",
        description: "A Figma project where we made <em>Bloom Again</em>, an app to help empty nesters rediscover themselves, through hobbies and community, winning second place.",
        link: "https://devpost.com/software/bloom-again"
    },
    {
        title: "Study Gator",
        description: "A Figma project where we made <em>Study Gator</em>, a task managing app that encouraged user productivity with built in tasks, timers, and cosmetic insentives",
        link: "https://www.figma.com/proto/7Au2GHrufD8StbcN61TWny/FYDT-F2025"
    }
];

const projectsContainer = document.querySelector("#projects-container");

projects.forEach(function (project) {
    const projectCard = document.createElement("div");

    const title = document.createElement("h3");
    title.textContent = project.title;

    const description = document.createElement("p");
    description.innerHTML = project.description;

    const link = document.createElement("a");
    link.textContent = "View project";
    link.href = project.link;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    projectCard.append(title, description, link);
    projectsContainer.appendChild(projectCard);
});