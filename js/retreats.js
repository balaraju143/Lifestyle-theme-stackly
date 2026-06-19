/* ==========================================
   RETREATS PAGE
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("Retreats Page Loaded");

});

/* ==========================================
   DESTINATION CARD EFFECT
========================================== */

const destinations =
document.querySelectorAll(".destination-card");

destinations.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
        "scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "scale(1)";

    });

});

/* ==========================================
   JOURNEY CARD EFFECT
========================================== */

const journeyItems =
document.querySelectorAll(".journey-item");

journeyItems.forEach(item => {

    item.addEventListener("mouseenter", () => {

        item.style.transform =
        "translateX(15px)";

    });

    item.addEventListener("mouseleave", () => {

        item.style.transform =
        "translateX(0)";

    });

});

/* ==========================================
   PACKAGE CARD GLOW
========================================== */

const packageCards =
document.querySelectorAll(".package-card");

packageCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.boxShadow =
        "0 0 30px rgba(31,77,69,.25)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow =
        "none";

    });

});

/* ==========================================
   STORY IMAGE EFFECT
========================================== */

const storyImages =
document.querySelectorAll(".story-image img");

storyImages.forEach(image => {

    image.addEventListener("mouseenter", () => {

        image.style.filter =
        "grayscale(0%)";

    });

    image.addEventListener("mouseleave", () => {

        image.style.filter =
        "grayscale(100%)";

    });

});

/* ==========================================
   CTA BUTTON EFFECT
========================================== */

const retreatButton =
document.querySelector(".retreat-cta .btn-primary");

if(retreatButton){

    retreatButton.addEventListener("mouseenter", () => {

        retreatButton.style.transform =
        "scale(1.08)";

    });

    retreatButton.addEventListener("mouseleave", () => {

        retreatButton.style.transform =
        "scale(1)";

    });

}

/* ==========================================
   DESTINATION PARALLAX EFFECT
========================================== */

window.addEventListener("scroll", () => {

    const cards =
    document.querySelectorAll(".destination-card");

    let scrollY =
    window.pageYOffset;

    cards.forEach(card => {

        card.style.backgroundPosition =
        `center ${scrollY * 0.03}px`;

    });

});