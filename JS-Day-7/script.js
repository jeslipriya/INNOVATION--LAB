function validateName(name){
    const regex = /^[A-Za-z\s]+$/

    if (name.trim() === "") {
        return "Text area can't be null";
    }

    if (!regex.test(name)) {
        return "name can only contain alphabets"
    }

    return "Name is valid";
}

function validateNum(phno){
    const regex = /^[0-9]{10}$/

    if (phno.trim() === "") {
        return "Text area can't be null";
    }

    if (!regex.test(phno)) {
        return "Must be 10 digits"
    }

    return "Number is valid";
}

function validateEmail(email){
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if (email.trim() === "") {
        return "Email can't be null";
    }

    if (!regex.test(email)) {
        return "Invalid Email"
    }

    return "Email is valid";
}

function validatePassword(password){
    const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/

    if (password.trim() === "") {
        return "Password can't be null";
    }

    if (!regex.test(phno)) {
        return "Must be atleast 9 characters"
    }

    return "Password is valid";
}

function validateForm(){
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phno").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let nameError = validateName(name);
    let numberError = validateNum(phone);
    let emailError = validateEmail(email);
    let passwordError = validatePassword(password);

    if (nameError === "Name is valid" && numberError === "Number is valid" && emailError === "Email is valid" && passwordError === "Password is valid") {
        return true;
    }

    document.getElementById("nameError").innerText = nameError === "Name is valid" ? "" : nameError;
    document.getElementById("numberError").innerText = numberError === "Number is valid" ? "" : numberError;
    document.getElementById("emailError").innerText = emailError === "Email is valid" ? "" : emailError;
    document.getElementById("passwordError").innerText = passwordError === "Password is valid" ? "" : passwordError;

    return false;
}   