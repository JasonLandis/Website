// Smooth scrolling to sections
document.addEventListener("DOMContentLoaded", function() {
    const navbarLinks = document.querySelectorAll("a");

    navbarLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            const targetId = this.getAttribute("href").substring(1); // Get the target section ID
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});

const start = document.getElementById("start");
const games = document.getElementById("games");
const puzzles = document.getElementById("puzzles");
const about = document.getElementById("about");

let x = 0;
function colorSwap() {
    if (x == 0) {
        start.style = "background: radial-gradient(#552900, #000000);";
        games.style = "background: radial-gradient(#552900, #000000);";
        puzzles.style = "background: radial-gradient(#552900, #000000);";
        about.style = "background: radial-gradient(#552900, #000000);";
        x = 1;
    }

    else if (x == 1) {
        start.style = "background: radial-gradient(#4b4600, #000000);";
        games.style = "background: radial-gradient(#4b4600, #000000);";
        puzzles.style = "background: radial-gradient(#4b4600, #000000);";
        about.style = "background: radial-gradient(#4b4600, #000000);";
        x = 2;
    }

    else if (x == 2) {
        start.style = "background: radial-gradient(#023100, #000000);";
        games.style = "background: radial-gradient(#023100, #000000);";
        puzzles.style = "background: radial-gradient(#023100, #000000);";
        about.style = "background: radial-gradient(#023100, #000000);";
        x = 3;
    }

    else if (x == 3) {
        start.style = "background: radial-gradient(#004b3e, #000000);";
        games.style = "background: radial-gradient(#004b3e, #000000);";
        puzzles.style = "background: radial-gradient(#004b3e, #000000);";
        about.style = "background: radial-gradient(#004b3e, #000000);";
        x = 4;
    }

    else if (x == 4) {
        start.style = "background: radial-gradient(#00334b, #000000);";
        games.style = "background: radial-gradient(#00334b, #000000);";
        puzzles.style = "background: radial-gradient(#00334b, #000000);";
        about.style = "background: radial-gradient(#00334b, #000000);";
        x = 5;
    }

    else if (x == 5) {
        start.style = "background: radial-gradient(#00054b, #000000);";
        games.style = "background: radial-gradient(#00054b, #000000);";
        puzzles.style = "background: radial-gradient(#00054b, #000000);";
        about.style = "background: radial-gradient(#00054b, #000000);";
        x = 6;
    }

    else if (x == 6) {
        start.style = "background: radial-gradient(#27004b, #000000);";
        games.style = "background: radial-gradient(#27004b, #000000);";
        puzzles.style = "background: radial-gradient(#27004b, #000000);";
        about.style = "background: radial-gradient(#27004b, #000000);";
        x = 7;
    }

    else if (x == 7) {
        start.style = "background: radial-gradient(#4b0047, #000000);";
        games.style = "background: radial-gradient(#4b0047, #000000);";
        puzzles.style = "background: radial-gradient(#4b0047, #000000);";
        about.style = "background: radial-gradient(#4b0047, #000000);";
        x = 8;
    }

    else if (x == 8) {
        start.style = "background: radial-gradient(#530000, #000000);";
        games.style = "background: radial-gradient(#530000, #000000);";
        puzzles.style = "background: radial-gradient(#530000, #000000);";
        about.style = "background: radial-gradient(#530000, #000000);";
        x = 0;
    }
}

