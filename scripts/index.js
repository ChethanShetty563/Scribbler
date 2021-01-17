//Contains js functionalities which is only specific to index.html.

var create_post_modal = document.getElementById("create-post-modal");
var create_post_modal_close_button = document.getElementById("create-post-modal-close-button");
var create_post_button = document.getElementById("posts-create-post")

/**
 * This function is called when create post button is clicked.
 */
create_post_button.onclick = function() {
    toggleCreatePostModal();
}

/**
 * This function is called when create button of the modal is clicked.
 */
create_post_modal_close_button.onclick = function() {
    toggleCreatePostModal();
}

/**
 * adds or removes show-modal to class list of create post so that it appears and disappears
 */
function toggleCreatePostModal() {
    create_post_modal.classList.toggle("show-modal");
}