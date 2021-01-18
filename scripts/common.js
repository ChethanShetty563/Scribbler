
var signup_modal = document.getElementById("sign-up-modal");
var signin_modal = document.getElementById("sign-in-modal");

var signup_modal_close_button = document.getElementById("signup-modal-close-button");
var signin_modal_close_button = document.getElementById("signin-modal-close-button");

var signup_button = document.getElementById("button-sign-up");
var signin_button = document.getElementById("button-sign-in");

var signin_anchor = document.getElementById("signin-href");


signup_button.onclick = function() {
    toggleSignupModal();
}


signup_modal_close_button.onclick = function() {
    toggleSignupModal();
}

function toggleSignupModal() {
    signup_modal.classList.toggle("show-modal");
}

signin_button.onclick = function() {
    toggleSigninModal();
}


signin_modal_close_button.onclick = function() {
    toggleSigninModal();
}


function toggleSigninModal() {
    signin_modal.classList.toggle("show-modal");
}


signin_anchor.onclick = function() {
    event.preventDefault();
    toggleSigninModal();
    toggleSignupModal();
}