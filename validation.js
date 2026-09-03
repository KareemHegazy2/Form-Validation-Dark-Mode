    // Fuctions to validate the form fields
    function validate_name(name) {
        name = name.trim();
        let name_pattern = /^[a-zA-Z\s]{3,15}$/;
        return name_pattern.test(name);
    }
    function validate_username(user) {
        user = user.trim();
        let user_pattern = /^\w{4,10}$/;
        return user_pattern.test(user);
    }
    function validate_email(email) {
        email = email.trim();
        let email_pattern = /^\w+@[a-zA-Z]+\.(com|edu|org)$/;
        return email_pattern.test(email);
    }
    function validate_phone(phone) {
        phone = phone.trim();
        let phone_pattern = /^(010|011|012|015)\d{8}$/;
        return phone_pattern.test(phone);
    }
    function validate_password(password) {
        password = password.trim();
        let password_pattern = /^[a-zA-Z]+@\d+$/;
        return password_pattern.test(password);
    }
    // ==========================
    // Add event listener to the form submission
    Name = document.getElementById("name");
    nameerror = document.getElementById("nameerror");
    nameValue=false;

    userName = document.getElementById("userName");
    usererror = document.getElementById("usererror");
    userValue=false;
    
    email = document.getElementById("email");
    emailerror = document.getElementById("emailerror");
    emailValue=false;

    phone = document.getElementById("phone");
    phoneerror = document.getElementById("phoneerror");
    phoneValue=false;

    password = document.getElementById("password");
    passworderror = document.getElementById("passworderror");
    passwordValue=false;

    
    form = document.getElementById("validationForm");
    errorform = document.getElementById("errorform");
    sucform = document.getElementById("sucform");
    submit = document.querySelector("button[type='submit']");

    
     Name.addEventListener("input", function (e) {
        if(validate_name(Name.value)){
            Name.style.border = "4px solid green";
            nameerror.style.display = "none";
            nameValue=true;
        } else {
            Name.style.border = "4px solid red";
            nameerror.style.display = "block";
            nameValue=false;
        }
     });

     userName.addEventListener("input", function (e) {
        if(validate_username(userName.value)){
            userName.style.border = "4px solid green";
            usererror.style.display = "none";
            userValue=true;
        } else {
            userName.style.border = "4px solid red";
            usererror.style.display = "block";
            userValue=false;
        }
     });

          email.addEventListener("input", function (e) {
        if(validate_email(email.value)){
            email.style.border = "4px solid green";
            emailerror.style.display = "none";
            emailValue=true;
        } else {
            email.style.border = "4px solid red";
            emailerror.style.display = "block";
            emailValue=false;
        }
     });

          phone.addEventListener("input", function (e) {
        if(validate_phone(phone.value)){
            phone.style.border = "4px solid green";
            phoneerror.style.display = "none";
            phoneValue=true;
        } else {
            phone.style.border = "4px solid red";
            phoneerror.style.display = "block";
            phoneValue=false;
        }
     });

          password.addEventListener("input", function (e) {
        if(validate_password(password.value)){
            password.style.border = "4px solid green";
            passworderror.style.display = "none";
            passwordValue=true;
        } else {
            password.style.border = "4px solid red";
            passworderror.style.display = "block";
            passwordValue=false;
        }
     });
form.addEventListener("submit", function (e) {
if(nameValue && userValue && emailValue && phoneValue && passwordValue){
    errorform.style.display = "none";
     sucform.style.display = "block";
} else {
    e.preventDefault();

    errorform.style.display = "block";
}

});

// =======================================

darkmode = document.getElementById("darkmode");
darkmode.addEventListener("click", function (e) {
    document.body.classList.toggle("darkmode");
});

















