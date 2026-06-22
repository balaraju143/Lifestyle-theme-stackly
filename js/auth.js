/* ==========================================
   LOGIN PAGE
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const loginForm =
    document.querySelector(".login-form");

    const togglePassword =
    document.getElementById("togglePassword");

    const password =
    document.getElementById("password");

    /* ==========================================
       PASSWORD TOGGLE
    ========================================== */

    if(togglePassword){

        togglePassword.addEventListener("click",()=>{

            if(password.type === "password"){

                password.type = "text";

                togglePassword.innerHTML =
                '<i class="fas fa-eye-slash"></i>';

            }else{

                password.type = "password";

                togglePassword.innerHTML =
                '<i class="fas fa-eye"></i>';

            }

        });

    }

    /* ==========================================
       LOGIN VALIDATION
    ========================================== */

    if(loginForm){

        loginForm.addEventListener("submit",(e)=>{

            e.preventDefault();

            const role =
            document.getElementById("role");

            const name =
            document.getElementById("name");

            const email =
            document.getElementById("email");

            const password =
            document.getElementById("password");

            const roleError =
            document.getElementById("roleError");

            const nameError =
            document.getElementById("nameError");

            const emailError =
            document.getElementById("emailError");

            const passwordError =
            document.getElementById("passwordError");

            roleError.textContent = "";
            nameError.textContent = "";
            emailError.textContent = "";
            passwordError.textContent = "";

            let valid = true;

            /* Role */

            if(role.value === ""){

                roleError.textContent =
                "Please select a role";

                setTimeout(()=>{
                    roleError.textContent = "";
                },3000);

                valid = false;
            }

            /* Name */

            if(name.value.trim() === ""){

                nameError.textContent =
                "Name is required";

                setTimeout(()=>{
                    nameError.textContent = "";
                },3000);

                valid = false;
            }

            else if(!/^[A-Za-z\s]+$/.test(name.value.trim())){

                nameError.textContent =
                "Name should contain letters only";

                setTimeout(()=>{
                    nameError.textContent = "";
                },3000);

                valid = false;
            }

            /* Email */

            if(email.value.trim() === ""){

                emailError.textContent =
                "Email is required";

                setTimeout(()=>{
                    emailError.textContent = "";
                },3000);

                valid = false;
            }

            else if(
                !/^[^\s@]+@[^\s@]+\.[^\s@]+$/
                .test(email.value.trim())
            ){

                emailError.textContent =
                "Enter a valid email address";

                setTimeout(()=>{
                    emailError.textContent = "";
                },3000);

                valid = false;
            }

            /* Password */

            if(password.value.trim() === ""){

                passwordError.textContent =
                "Password is required";

                setTimeout(()=>{
                    passwordError.textContent = "";
                },3000);

                valid = false;
            }

            else if(password.value.length < 6){

                passwordError.textContent =
                "Password must be at least 6 characters";

                setTimeout(()=>{
                    passwordError.textContent = "";
                },3000);

                valid = false;
            }

            if(!valid){
                return;
            }

            /* ==========================================
               ROLE BASED DASHBOARD
            ========================================== */
            localStorage.setItem(
        "userEmail",
         email.value
          );

localStorage.setItem(
"userRole",
role.value
);
            if(role.value === "user"){

                window.location.href =
                "user-dashboard.html";

            }

            else if(role.value === "coach"){

                window.location.href =
                "wellness-coach.html";

            }

            else if(role.value === "admin"){

                window.location.href =
                "admin-dashboard.html";

            }

        });

    }

});


function toggleRoles(){

    document
    .getElementById("roleOptions")
    .classList.toggle("active");

}

function selectRole(role){

    document
    .getElementById("role")
    .value = role;

    document
    .getElementById("selectedRole")
    .innerText =
    role === "user"
    ? "Wellness User"
    : role === "coach"
    ? "Wellness Coach"
    : "Admin";

    document
    .getElementById("roleOptions")
    .classList.remove("active");

}