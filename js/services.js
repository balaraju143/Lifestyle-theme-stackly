/* ==========================================
   SERVICES PAGE
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("Services Page Loaded");

});

/* ==========================================
   FAQ ACCORDION
========================================== */

const faqItems = document.querySelectorAll(".faq-item");

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
   OFFERING CARDS FLOAT EFFECT
========================================== */

const offeringCards =
document.querySelectorAll(".offering-card");

offeringCards.forEach(card => {

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
   PRICING CARDS HIGHLIGHT
========================================== */

const priceCards =
document.querySelectorAll(".price-card");

priceCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.boxShadow =
        "0 20px 40px rgba(0,0,0,.15)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow =
        "none";

    });

});

/* ==========================================
   BOOKING FORM
========================================== */
const bookingForm =
document.querySelector(".booking-form");

if(bookingForm){

    bookingForm.addEventListener("submit",(e)=>{

        e.preventDefault();

        const name =
        document.getElementById("name");

        const email =
        document.getElementById("email");

        const nameError =
        document.getElementById("nameError");

        const emailError =
        document.getElementById("emailError");

        nameError.textContent = "";
        emailError.textContent = "";

        let valid = true;

        if(!/^[A-Za-z\s]+$/.test(name.value.trim())){

            nameError.textContent =
            "Name should contain letters only";

            setTimeout(() => {
                nameError.textContent = "";
            },3000);

            valid = false;
        }

        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())){

            emailError.textContent =
            "Enter a valid email address";

            setTimeout(() => {
                emailError.textContent = "";
            },3000);

            valid = false;
        }

        if(!valid){
            return;
        }

        const button =
        bookingForm.querySelector("button");

        button.innerText =
        "Submitted ✓";

        button.style.background =
        "#22c55e";

        setTimeout(() => {

            button.innerText =
            "Submit Inquiry";

            button.style.background =
            "#1f4d45";

            bookingForm.reset();

        },3000);

    });

}

/* ==========================================
   VIP CTA BUTTON
========================================== */

const vipBtn =
document.querySelector(".vip-cta .btn-primary");

if(vipBtn){

    vipBtn.addEventListener("mouseenter",()=>{

        vipBtn.style.transform =
        "translateY(-4px)";

    });const bookingForm =
document.querySelector(".booking-form");

if(bookingForm){

    bookingForm.addEventListener("submit",(e)=>{

        e.preventDefault();

        const name =
        document.getElementById("name");

        const email =
        document.getElementById("email");

        const nameError =
        document.getElementById("nameError");

        const emailError =
        document.getElementById("emailError");

        nameError.textContent = "";
        emailError.textContent = "";

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

        if(!valid){
            return;
        }

        const button =
        bookingForm.querySelector("button");

        button.innerText =
        "Submitted ✓";

        button.style.background =
        "#22c55e";

        setTimeout(() => {

            button.innerText =
            "Submit Inquiry";

            button.style.background =
            "#1f4d45";

            bookingForm.reset();

        },3000);

    });

}

    vipBtn.addEventListener("mouseleave",()=>{

        vipBtn.style.transform =
        "translateY(0)";

    });

}


function toggleServices(){

    document
    .getElementById("serviceOptions")
    .classList.toggle("active");

}

function selectService(service){

    document.querySelector(
    ".select-selected"
    ).innerText = service;

    document
    .getElementById("service")
    .value = service;

    document
    .getElementById("serviceOptions")
    .classList.remove("active");

}