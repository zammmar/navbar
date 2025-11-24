const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const links = document.querySelectorAll(".nav-links li a");

// Toggle menu
menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

// Active link highlight
links.forEach(link => {
    link.addEventListener("click", () => {
        links.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    });
});
