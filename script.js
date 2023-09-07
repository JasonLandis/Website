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
        start.style = "background: linear-gradient(#130068, #000000, #0b3a00);";
        games.style = "background: linear-gradient(#0b3a00, #000000, #525000);";
        puzzles.style = "background: linear-gradient(#525000, #000000, #2b0042);";
        about.style = "background: linear-gradient(#2b0042, #000000, #530000);";
        x = 1;
    }

    else if (x == 1) {
        start.style = "background: linear-gradient(#0b3a00, #000000, #525000);";
        games.style = "background: linear-gradient(#525000, #000000, #2b0042);";
        puzzles.style = "background: linear-gradient(#2b0042, #000000, #530000);";
        about.style = "background: linear-gradient(#530000, #000000, #130068);";
        x = 2;
    }

    else if (x == 2) {
        about.style = "background: linear-gradient(#130068, #000000, #0b3a00);";
        start.style = "background: linear-gradient(#525000, #000000, #2b0042);";
        games.style = "background: linear-gradient(#2b0042, #000000, #530000);";
        puzzles.style = "background: linear-gradient(#530000, #000000, #130068);";
        x = 3;
    }

    else if (x == 3) {
        puzzles.style = "background: linear-gradient(#130068, #000000, #0b3a00);";
        about.style = "background: linear-gradient(#0b3a00, #000000, #525000);";
        start.style = "background: linear-gradient(#2b0042, #000000, #530000);";
        games.style = "background: linear-gradient(#530000, #000000, #130068);";
        x = 4;
    }

    else if (x == 4) {
        games.style = "background: linear-gradient(#130068, #000000, #0b3a00);";
        puzzles.style = "background: linear-gradient(#0b3a00, #000000, #525000);";
        about.style = "background: linear-gradient(#525000, #000000, #2b0042);";
        start.style = "background: linear-gradient(#530000, #000000, #130068);";
        x = 0;
    }
}

