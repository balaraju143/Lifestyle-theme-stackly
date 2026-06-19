document.addEventListener("DOMContentLoaded",()=>{

    const email =
    localStorage.getItem("userEmail");

    const role =
    localStorage.getItem("userRole");

    document.getElementById(
    "userEmail"
    ).textContent =
    email || "demo@gmail.com";

    document.getElementById(
    "userRole"
    ).textContent =
    role || "Admin";

    document
    .querySelectorAll(".coming-soon")
    .forEach(item=>{

        item.addEventListener("click",()=>{

            window.location.href =
            "404.html";

        });

    });

    document
    .getElementById("logoutBtn")
    .addEventListener("click",()=>{

        localStorage.clear();

        window.location.href =
        "index.html";

    });

    document
    .getElementById("logoutBtn2")
    .addEventListener("click",()=>{

        localStorage.clear();

        window.location.href =
        "login.html";

    });

});


const dashboardLink =
document.getElementById("dashboardLink");

dashboardLink.addEventListener("click",()=>{

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