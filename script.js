function toggleMenu() {
  let nav = document.getElementById("navLinks");

  if (nav.style.display === "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
  }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

let index = 0;

const slides = document.getElementById("slides");
const totalSlides = document.querySelectorAll(".slide").length;

function showSlide() {
    index++;

    if (index >= totalSlides) {
        index = 0;
    }

    slides.style.transform = "translateX(" + (-index * 100) + "%)";
}

setInterval(showSlide, 3000);
