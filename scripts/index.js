

var create_post_modal = document.getElementById("create-post-modal");
var create_post_modal_close_button = document.getElementById("create-post-modal-close-button");
var create_post_button = document.getElementById("posts-create-post")


create_post_button.onclick = function() {
    toggleCreatePostModal();
}


create_post_modal_close_button.onclick = function() {
    toggleCreatePostModal();
}


function toggleCreatePostModal() {
    create_post_modal.classList.toggle("show-modal");
}