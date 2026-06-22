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

        showSlide(0);

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
       NEWSLETTER FORM VALIDATION
    ========================================== */
    
    const newsletterForm =
    document.querySelector(".journal-form");

    if(newsletterForm){

        newsletterForm.addEventListener("submit",(e)=>{

            e.preventDefault();

            const email =
            document.getElementById("newsletterEmail");

            const error =
            document.getElementById("newsletterError");

            error.textContent = "";

            if(
                !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
                .test(email.value.trim())
            ){

                error.textContent =
                "Please enter a valid email address";

                setTimeout(()=>{

                    error.textContent = "";

                },3000);

                return;
            }

            const button =
            newsletterForm.querySelector("button");

            button.innerText =
            "Subscribed ✓";

            button.style.background =
            "#22c55e";

            button.style.color =
            "#fff";

            setTimeout(()=>{

                button.innerText =
                "Subscribe";

                button.style.background =
                "#1f4d45";

                newsletterForm.reset();

            },3000);

        });

    }

    /* ==========================================
       FEATURED IMAGE PARALLAX
    ========================================== */

    const featuredImage =
    document.querySelector(".featured-image img");

    window.addEventListener("scroll",()=>{

        if(featuredImage){

            let scroll =
            window.pageYOffset;

            featuredImage.style.transform =
            `translateY(${scroll * 0.03}px)`;

        }

    });

});