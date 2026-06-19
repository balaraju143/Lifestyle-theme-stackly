/* ==========================================
   CONTACT PAGE
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("Contact Page Loaded");

    /* ==========================================
       FAQ ACCORDION
    ========================================== */

    const faqItems =
    document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const question =
        item.querySelector(".faq-question");

        question.addEventListener("click", () => {

            faqItems.forEach(faq => {

                if(faq !== item){
                    faq.classList.remove("active");
                }

            });

            item.classList.toggle("active");

        });

    });

    /* ==========================================
       CONTACT FORM
    ========================================== */
const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const subjectError = document.getElementById("subjectError");

    nameError.textContent = "";
    emailError.textContent = "";
    subjectError.textContent = "";

    let valid = true;

    if(!/^[A-Za-z\s]+$/.test(name.value.trim())){

        nameError.textContent =
        "Name should contain letters only";

        valid = false;
    }

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())){

        emailError.textContent =
        "Enter a valid email address";

        valid = false;
    }

    if(subject.value.trim() === ""){

        subjectError.textContent =
        "Subject is required";

        valid = false;
    }

    if(valid){

        const button =
        contactForm.querySelector("button");

        button.innerText =
        "Message Sent ✓";

        button.style.background =
        "#22c55e";

        setTimeout(() => {

            button.innerText =
            "Send Message";

            button.style.background =
            "#1f4d45";

            contactForm.reset();

        },3000);
    }

});
    /* ==========================================
       OFFICE CARD HOVER
    ========================================== */

    const officeCards =
    document.querySelectorAll(".office-card");

    officeCards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform =
            "translateY(-12px)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform =
            "translateY(0)";

        });

    });

    /* ==========================================
       CONTACT CARD EFFECT
    ========================================== */

    const contactCards =
    document.querySelectorAll(".contact-card");

    contactCards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform =
            "translateY(-10px) rotate(2deg)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform =
            "translateY(0) rotate(0deg)";

        });

    });

    /* ==========================================
       CTA BUTTON EFFECT
    ========================================== */

    const ctaButton =
    document.querySelector(".contact-cta .btn-primary");

    if(ctaButton){

        ctaButton.addEventListener("mouseenter", () => {

            ctaButton.style.transform =
            "scale(1.05)";

        });

        ctaButton.addEventListener("mouseleave", () => {

            ctaButton.style.transform =
            "scale(1)";

        });

    }

});