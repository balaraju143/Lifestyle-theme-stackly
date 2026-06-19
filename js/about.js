/* ==========================================
   ABOUT PAGE
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("About Page Loaded");

});

/* ==========================================
   VALUE CARDS HOVER EFFECT
========================================== */

const valueCards = document.querySelectorAll(".value-card");

valueCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

});

/* ==========================================
   PRESS LOGOS ANIMATION
========================================== */

const pressLogos = document.querySelectorAll(".press-logos div");

pressLogos.forEach((logo,index) => {

    logo.style.animationDelay = `${index * 0.2}s`;

});

/* ==========================================
   CTA BUTTON EFFECT
========================================== */

const ctaButton = document.querySelector(".about-cta .btn-primary");

if(ctaButton){

    ctaButton.addEventListener("mouseenter", () => {

        ctaButton.style.transform = "translateY(-3px)";

    });

    ctaButton.addEventListener("mouseleave", () => {

        ctaButton.style.transform = "translateY(0)";

    });

}