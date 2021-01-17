//Common.css contains common js functionalities accross multiple pages.

var signup_modal = document.getElementById("sign-up-modal");
var signin_modal = document.getElementById("sign-in-modal");

var signup_modal_close_button = document.getElementById("signup-modal-close-button");
var signin_modal_close_button = document.getElementById("signin-modal-close-button");

var signup_button = document.getElementById("button-sign-up");
var signin_button = document.getElementById("button-sign-in");

var signin_anchor = document.getElementById("signin-href");

/**
 * This function is called when sign up of the header is clicked.
 */
signup_button.onclick = function() {
    toggleSignupModal();
}

/**
 * This function is called when sign up button of the modal is clicked.
 */
signup_modal_close_button.onclick = function() {
    toggleSignupModal();
}

/**
 * adds or removes show-modal to class list of sign up so that it appears
 */
function toggleSignupModal() {
    signup_modal.classList.toggle("show-modal");
}

/**
 * This function is called when sign in of the header is clicked.
 */
signin_button.onclick = function() {
    toggleSigninModal();
}

/**
 * This function is called when sign in button of the modal is clicked.
 */
signin_modal_close_button.onclick = function() {
    toggleSigninModal();
}

/**
 * adds show modal to class list of sign in so that it appears
 */
function toggleSigninModal() {
    signin_modal.classList.toggle("show-modal");
}

/**
 * This function is called when anchor of the sign in modal is clicked.
 */
signin_anchor.onclick = function() {
    event.preventDefault();
    toggleSigninModal();
    toggleSignupModal();
}