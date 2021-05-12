//* form variabes
    // labels
const unameLbl = document.getElementById("name-lbl");
const uemailLbl = document.getElementById("email-lbl");
const upasswordLbl = document.getElementById("password-lbl");
const confirmPasswordLbl = document.getElementById("confirm-password-lbl");
    // inputs
const uname = document.getElementById("name");
const uemail = document.getElementById("email");
const upassword = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const rmmbrMe = document.getElementById("rmmbrME");
const termsCons = document.getElementById("terms");
const service = document.getElementsByName("service");
const signIn = document.getElementById("signinBtn");
const signUp = document.getElementById("signup");
var text;

// * form validation codes
    // name validation
uname.oninput=function(){validateName()};
function validateName(){
if (uname.value == "" || uname.value.trim() == ""){
    text ="invalid name";
    unameLbl.innerHTML = text;
    unameLbl.style.visibility = "visible";
    unameLbl.style.color = "red";
    uname.style.border = "solid 2px red"; 
    return false 
}
else{
    unameLbl.style.visibility = "hidden";
    uname.style.border = "none";
    return true
}
}
    // email validation
uemail.oninput=function(){validateEmail()};
function validateEmail(){
if (uemail.value == "" || uemail.value.trim() == ""){
    text ="invalid email";
    uemailLbl.innerHTML = text;
    uemailLbl.style.visibility = "visible";
    uemailLbl.style.color = "red";
    uemail.style.border = "solid 2px red"; 
    return false 
}
else{
    uemailLbl.style.visibility = "hidden";
    uemail.style.border = "none";
    return true
}
}
    // password validation
upassword.oninput=function(){validatePassword()};
function validatePassword(){
if (upassword.value.trim() == "" || upassword.value.length < 5 || upassword.value.length > 20){
    text ="invalid password";
    upasswordLbl.innerHTML = text;
    upasswordLbl.style.visibility = "visible";
    upasswordLbl.style.color = "red";
    upassword.style.border = "solid 2px red"; 
    return false 
}
else{
    upasswordLbl.style.visibility = "hidden";
    upassword.style.border = "none";
    return true
}
}
    // confirm Password validation
confirmPassword.oninput=function(){validateCPassword()};
function validateCPassword(){
if (upassword.value !== confirmPassword.value){
    text ="passwords do not match";
    confirmPasswordLbl.innerHTML = text;
    confirmPasswordLbl.style.visibility = "visible";
    confirmPasswordLbl.style.color = "red";
    confirmPassword.style.border = "solid 2px red"; 
    return false 
}
else{
    confirmPasswordLbl.style.visibility = "hidden";
    confirmPassword.style.border = "none";
    return true
}
}

    // the signup form validation
function signupValidate(){
    if (validateName() === true && validateEmail() === true && validatePassword() === true && validateCPassword() === true && termsCons.checked){
        return true
    }
    else if(validateName() === true && validateEmail() === true && validatePassword() === true && validateCPassword() === true && !termsCons.checked){
        alert("you must agree to the terms and conditions!");
        return false
    }
    else{
        return false
    }
}

    // the login form validation
function loginValidate(){
    if (validateEmail() === true && validatePassword() === true){
        return true
    }
    else if (validateEmail() === false || validatePassword() === false){
        return false
    }
    else{
        return false
    }
}
// !==
// * the like button
var likeButtons = document.querySelectorAll("i.fa-heart");
for(i = 0; i < likeButtons.length; i++){
var likeButton = function likeButtonToggle() {
    if (likeButtons[i].style.color == "var(--main-color6-inactive)"){
        likeButtons[i].style.color = "red";
    }
    else{
        likeButtons[i].style.color = "var(--main-color6-inactive)"
    }
}
    likeButtons[i].addEventListener("click", likeButton);
}
// var likeButtons = document.getElementById("save-btn");
// likeButtons.style.color = "red";
