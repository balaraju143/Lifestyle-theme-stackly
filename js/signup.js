/* ==========================================
   SIGNUP PAGE
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const signupForm =
    document.querySelector(".signup-form");

    const togglePassword =
    document.getElementById("togglePassword");

    const toggleConfirmPassword =
    document.getElementById("toggleConfirmPassword");

    const password =
    document.getElementById("password");

    const confirmPassword =
    document.getElementById("confirmPassword");

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
       CONFIRM PASSWORD TOGGLE
    ========================================== */

    if(toggleConfirmPassword){

        toggleConfirmPassword.addEventListener("click",()=>{

            if(confirmPassword.type === "password"){

                confirmPassword.type = "text";

                toggleConfirmPassword.innerHTML =
                '<i class="fas fa-eye-slash"></i>';

            }else{

                confirmPassword.type = "password";

                toggleConfirmPassword.innerHTML =
                '<i class="fas fa-eye"></i>';

            }

        });

    }

    /* ==========================================
       FORM VALIDATION
    ========================================== */

    if(signupForm){

        signupForm.addEventListener("submit",(e)=>{

            e.preventDefault();

            const name =
            document.getElementById("name");

            const email =
            document.getElementById("email");

            const role =
            document.getElementById("role");

            const password =
            document.getElementById("password");

            const confirmPassword =
            document.getElementById("confirmPassword");

            const nameError =
            document.getElementById("nameError");

            const emailError =
            document.getElementById("emailError");

            const roleError =
            document.getElementById("roleError");

            const passwordError =
            document.getElementById("passwordError");

            const confirmPasswordError =
            document.getElementById("confirmPasswordError");

            nameError.textContent = "";
            emailError.textContent = "";
            roleError.textContent = "";
            passwordError.textContent = "";
            confirmPasswordError.textContent = "";

            let valid = true;

            /* Name */

            if(name.value.trim() === ""){

                nameError.textContent =
                "Name is required";

                valid = false;
            }

            else if(
                !/^[A-Za-z\s]+$/
                .test(name.value.trim())
            ){

                nameError.textContent =
                "Name should contain letters only";

                valid = false;
            }

            /* Email */

            if(email.value.trim() === ""){

                emailError.textContent =
                "Email is required";

                valid = false;
            }

            else if(
                !/^[^\s@]+@[^\s@]+\.[^\s@]+$/
                .test(email.value.trim())
            ){

                emailError.textContent =
                "Enter a valid email address";

                valid = false;
            }

            /* Role */

            if(role.value === ""){

                roleError.textContent =
                "Please select a role";

                valid = false;
            }

            /* Password */

            if(password.value.length < 6){

                passwordError.textContent =
                "Password must be at least 6 characters";

                valid = false;
            }

            /* Confirm Password */

            if(confirmPassword.value !== password.value){

                confirmPasswordError.textContent =
                "Passwords do not match";

                valid = false;
            }

            /* Auto Hide Errors */

            setTimeout(()=>{

                nameError.textContent = "";
                emailError.textContent = "";
                roleError.textContent = "";
                passwordError.textContent = "";
                confirmPasswordError.textContent = "";

            },3000);

            if(!valid){
                return;
            }

            /* Success */

            const button =
            signupForm.querySelector("button");

            button.innerText =
            "Account Created ✓";

            button.style.background =
            "#22c55e";

            setTimeout(()=>{

                window.location.href =
                "login.html";

            },2000);

        });

    }

});