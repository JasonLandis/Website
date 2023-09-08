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

function scrolls(id) {
    const targetSection = document.getElementById(id);

    if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
    }
}
