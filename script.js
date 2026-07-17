// Initialize AOS Animations
AOS.init({
    duration: 1000,
    once: true,
    easing: "ease-in-out"
});

// Navbar Shadow on Scroll
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(9,11,21,.85)";
        navbar.style.backdropFilter = "blur(15px)";
        navbar.style.borderRadius = "50px";
        navbar.style.padding = "18px 30px";
        navbar.style.transition = ".3s";
    } else {
        navbar.style.background = "transparent";
        navbar.style.backdropFilter = "blur(0)";
        navbar.style.padding = "22px 0";
    }
});

// Active Navigation Link
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// Smooth Button Animation
document.querySelectorAll("a").forEach(btn => {

    btn.addEventListener("mouseenter", () => {
        btn.style.transition = ".3s";
    });

});

// Card Hover Animation
const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mousemove", () => {
        card.style.transform = "translateY(-12px) scale(1.03)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0) scale(1)";
    });

});
