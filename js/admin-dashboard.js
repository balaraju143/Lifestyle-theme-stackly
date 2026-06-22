/* ==========================================
   ADMIN DASHBOARD JS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       USER INFO
    ========================================== */

    const email =
    localStorage.getItem("userEmail");

    const role =
    localStorage.getItem("userRole");

    const userEmail =
    document.getElementById("userEmail");

    const userRole =
    document.getElementById("userRole");

    const dashboardEmail =
    document.getElementById("dashboardEmail");

    if(userEmail){

        userEmail.textContent =
        email || "demo@gmail.com";

    }

    if(userRole){

        userRole.textContent =
        role || "Admin";

    }

    if(dashboardEmail){

        dashboardEmail.textContent =
        email || "Guest";

    }

    /* ==========================================
       COMING SOON PAGES
    ========================================== */

    document
    .querySelectorAll(".coming-soon")
    .forEach(item => {

        item.addEventListener("click", () => {

            window.location.href =
            "404.html";

        });

    });

    /* ==========================================
       LOGOUT BUTTONS
    ========================================== */

    const logoutBtn =
    document.getElementById("logoutBtn");

    if(logoutBtn){

        logoutBtn.addEventListener("click", () => {

            localStorage.clear();

            window.location.href =
            "index.html";

        });

    }

    const logoutBtn2 =
    document.getElementById("logoutBtn2");

    if(logoutBtn2){

        logoutBtn2.addEventListener("click", () => {

            localStorage.clear();

            window.location.href =
            "login.html";

        });

    }

    /* ==========================================
       DASHBOARD LINK
    ========================================== */

    const dashboardLink =
    document.getElementById("dashboardLink");

    if(dashboardLink){

        dashboardLink.addEventListener("click", () => {

            const role =
            localStorage.getItem("userRole");

            if(role === "admin"){

                window.location.href =
                "admin-dashboard.html";

            }

            else if(role === "coach"){

                window.location.href =
                "wellness-coach.html";

            }

            else{

                window.location.href =
                "user-dashboard.html";

            }

        });

    }

});


const menuToggle =
document.getElementById("menuToggle");

const sidebar =
document.querySelector(".sidebar");

if(menuToggle){
menuToggle.addEventListener("click",()=>{

    sidebar.classList.toggle("active");

    if(sidebar.classList.contains("active")){

        menuToggle.innerHTML =
        '<i class="fas fa-times"></i>';

    }

    else{

        menuToggle.innerHTML =
        '<i class="fas fa-bars"></i>';

    }

});

}