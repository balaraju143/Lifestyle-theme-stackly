/* ==========================================
   JOURNAL PAGE
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("Journal Page Loaded");

    /* ==========================================
       EXPERT INSIGHTS AUTO SLIDER
    ========================================== */

    const insightSlides =
    document.querySelectorAll(".insight-slide");

    let currentSlide = 0;

    function showSlide(index){

        insightSlides.forEach(slide => {

            slide.classList.remove("active");

        });

        insightSlides[index].classList.add("active");

    }

    if(insightSlides.length > 0){

        setInterval(() => {

            currentSlide++;

            if(currentSlide >= insightSlides.length){
                currentSlide = 0;
            }

            showSlide(currentSlide);

        },4000);

    }

    /* ==========================================
       CATEGORY HOVER EFFECT
    ========================================== */

    const journalCategories =
    document.querySelectorAll(".category");

    journalCategories.forEach(category => {

        category.addEventListener("mouseenter", () => {

            category.style.transform =
            "translateY(-5px) scale(1.05)";

        });

        category.addEventListener("mouseleave", () => {

            category.style.transform =
            "translateY(0) scale(1)";

        });

    });

    /* ==========================================
       JOURNAL CARD EFFECT
    ========================================== */

    const journalCards =
    document.querySelectorAll(".journal-card");

    journalCards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform =
            "rotate(-2deg) scale(1.03)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform =
            "rotate(0deg) scale(1)";

        });

    });

    /* ==========================================
       NEWSLETTER FORM
    ========================================== */

    const journalForm =
    document.querySelector(".journal-form");

    if(journalForm){

        journalForm.addEventListener("submit",(e)=>{

            e.preventDefault();

            const button =
            journalForm.querySelector("button");

            button.innerText =
            "Subscribed ✓";

            button.style.background =
            "#22c55e";

            button.style.color =
            "#fff";

            setTimeout(() => {

                button.innerText =
                "Subscribe";

                button.style.background =
                "#fff";

                button.style.color =
                "#1f4d45";

                journalForm.reset();

            },3000);

        });

    }

});