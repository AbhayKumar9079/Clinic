/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");


menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");


    const icon = menuToggle.querySelector("i");


    if (navLinks.classList.contains("active")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});



/* =========================
   CLOSE MOBILE MENU
========================= */

const navigationLinks = document.querySelectorAll(".nav-links a");


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");


        const icon = menuToggle.querySelector("i");


        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});



/* =========================
   SMOOTH SCROLL
========================= */

document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {

    anchor.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");


        if (targetId === "#") {

            return;

        }


        const target = document.querySelector(targetId);


        if (target) {

            event.preventDefault();


            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }

    });

});



/* =========================
   TESTIMONIAL SLIDER
========================= */

const testimonialTrack =
    document.getElementById("testimonialTrack");

const testimonialCards =
    document.querySelectorAll(".testimonial-card");

const prevBtn =
    document.getElementById("prevBtn");

const nextBtn =
    document.getElementById("nextBtn");

const sliderDots =
    document.getElementById("sliderDots");


let testimonialIndex = 0;

let testimonialInterval;



/* Create Dots */

testimonialCards.forEach(function (card, index) {

    const dot = document.createElement("span");

    dot.classList.add("slider-dot");


    if (index === 0) {

        dot.classList.add("active");

    }


    dot.addEventListener("click", function () {

        testimonialIndex = index;

        updateTestimonialSlider();

        restartTestimonialSlider();

    });


    sliderDots.appendChild(dot);

});



/* Update Slider */

function updateTestimonialSlider() {

    testimonialTrack.style.transform =
        "translateX(-" + (testimonialIndex * 100) + "%)";


    const dots =
        document.querySelectorAll(".slider-dot");


    dots.forEach(function (dot, index) {

        dot.classList.toggle(
            "active",
            index === testimonialIndex
        );

    });

}



/* Next */

function nextTestimonial() {

    testimonialIndex++;


    if (
        testimonialIndex >= testimonialCards.length
    ) {

        testimonialIndex = 0;

    }


    updateTestimonialSlider();

}



/* Previous */

function previousTestimonial() {

    testimonialIndex--;


    if (testimonialIndex < 0) {

        testimonialIndex =
            testimonialCards.length - 1;

    }


    updateTestimonialSlider();

}



/* Buttons */

nextBtn.addEventListener(
    "click",
    function () {

        nextTestimonial();

        restartTestimonialSlider();

    }
);


prevBtn.addEventListener(
    "click",
    function () {

        previousTestimonial();

        restartTestimonialSlider();

    }
);



/* Auto Slider */

function startTestimonialSlider() {

    testimonialInterval =
        setInterval(
            nextTestimonial,
            4500
        );

}



function restartTestimonialSlider() {

    clearInterval(testimonialInterval);

    startTestimonialSlider();

}


startTestimonialSlider();



/* =========================
   CLOSE MENU ON RESIZE
========================= */

window.addEventListener("resize", function () {

    if (window.innerWidth > 900) {

        navLinks.classList.remove("active");


        const icon =
            menuToggle.querySelector("i");


        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});