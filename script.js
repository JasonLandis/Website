function scrolls(id) {
    const targetSection = document.getElementById(id);

    if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
    }

    if (id == 'start') {
        document.getElementById('start-nav').style = "transform: scale(1.2); color: rgb(255, 135, 135)";
        document.getElementById('constellation-nav').style = "none";
        document.getElementById('circuit-nav').style = "none";
        document.getElementById('about-nav').style = "none";

        return;
    }

    if (id == 'constellation' || id == 'pathfinder') {
        document.getElementById('start-nav').style = "none";
        document.getElementById('constellation-nav').style = "transform: scale(1.2); color: rgb(127, 255, 115)";
        document.getElementById('circuit-nav').style = "none";
        document.getElementById('about-nav').style = "none";

        return;
    }

    if (id == 'circuit' || id == 'tic' || id == 'words' || id == 'void' || id == 'dots' || id == 'halfway') {
        document.getElementById('start-nav').style = "none";
        document.getElementById('constellation-nav').style = "none";
        document.getElementById('circuit-nav').style = "transform: scale(1.2); color: rgb(150, 143, 255)";
        document.getElementById('about-nav').style = "none";

        return;
    }

    if (id == 'about') {
        document.getElementById('start-nav').style = "none";
        document.getElementById('constellation-nav').style = "none";
        document.getElementById('circuit-nav').style = "none";
        document.getElementById('about-nav').style = "transform: scale(1.2); color: rgb(255, 229, 115)";

        return;
    }
}