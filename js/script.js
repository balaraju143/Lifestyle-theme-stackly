/* ==========================================
   PAGE LOADER
========================================== */
/* ==========================================
   PREMIUM LOADER
========================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

        setTimeout(() => {

            loader.remove();

        }, 1000);

    }, 1800);

});

/* ==========================================
   MOBILE MENU
========================================== */

const hamburger =
    document.getElementById("hamburger");

const navbar =
    document.getElementById("navbar");

if (hamburger && navbar) {

    hamburger.addEventListener("click", () => {

        hamburger.classList.toggle("active");

        navbar.classList.toggle("active");

    });

}


/* ==========================================
   CLOSE MENU ON LINK CLICK
========================================== */

const mobileLinks = document.querySelectorAll(".mobile-menu a");

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        hamburger.classList.remove("active");
        mobileMenu.classList.remove("active");
        mobileOverlay.classList.remove("active");

    });

});


/* ==========================================
   NAVBAR SCROLL EFFECT
========================================== */



/* ==========================================
   SERVICES SLIDER
========================================== */

const slides = document.querySelectorAll(".slide");
const nextBtn = document.getElementById("nextSlide");
const prevBtn = document.getElementById("prevSlide");

let currentSlide = 0;

function showSlide(index){

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");

}

if(nextBtn){

    nextBtn.addEventListener("click", () => {

        currentSlide++;

        if(currentSlide >= slides.length){
            currentSlide = 0;
        }

        showSlide(currentSlide);

    });

}

if(prevBtn){

    prevBtn.addEventListener("click", () => {

        currentSlide--;

        if(currentSlide < 0){
            currentSlide = slides.length - 1;
        }

        showSlide(currentSlide);

    });

}


/* ==========================================
   AUTO SERVICES SLIDER
========================================== */

if(slides.length){

    setInterval(() => {

        currentSlide++;

        if(currentSlide >= slides.length){
            currentSlide = 0;
        }

        showSlide(currentSlide);

    }, 5000);

}


/* ==========================================
   TESTIMONIAL SLIDER
========================================== */

const testimonials = document.querySelectorAll(".testimonial");

let testimonialIndex = 0;

function showTestimonial(index){

    testimonials.forEach(item => {
        item.classList.remove("active");
    });

    testimonials[index].classList.add("active");

}

if(testimonials.length){

    setInterval(() => {

        testimonialIndex++;

        if(testimonialIndex >= testimonials.length){
            testimonialIndex = 0;
        }

        showTestimonial(testimonialIndex);

    }, 4000);

}


/* ==========================================
   INTERSECTION OBSERVER
========================================== */

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

},{
    threshold:0.15
});

revealElements.forEach(item => {
    observer.observe(item);
});


/* ==========================================
   NEWSLETTER FORM
========================================== */
const newsletterForm =
document.querySelector(".newsletter-form");

if(newsletterForm){

    newsletterForm.addEventListener("submit",(e)=>{

        e.preventDefault();

        const email =
        document.getElementById("newsletterEmail");

        const error =
        document.getElementById("newsletterError");

        error.textContent = "";

        const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!emailRegex.test(email.value.trim())){

            error.textContent =
            "Please enter a valid email address";

            setTimeout(() => {

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

        setTimeout(() => {

            button.innerText =
            "Subscribe";

            button.style.background =
            "";

            newsletterForm.reset();

        },3000);

    });

}


/* ==========================================
   SCROLL TO TOP ON LOGO CLICK
========================================== */

const logo = document.querySelector(".logo a");

if(logo){

    logo.addEventListener("click", () => {

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    });

}