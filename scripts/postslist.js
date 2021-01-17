
var card_to_delete = null;
var delete_post_modal = document.getElementById("delete-post-modal");
var yes_modal_button = document.getElementById("yes-modal-button");
var no_modal_button = document.getElementById("no-modal-button");


function deletePost(card) {

    card_to_delete = document.getElementById(card);
    toggleDeleteModal();

    
}   


yes_modal_button.onclick = function() {
    toggleDeleteModal();
    console.log(card_to_delete != null);
    if (card_to_delete != null) {
        card_to_delete.parentNode.removeChild(card_to_delete);
    }
}


no_modal_button.onclick = function() {
    toggleDeleteModal();
}


function toggleDeleteModal() {
    delete_post_modal.classList.toggle("show-modal");
}


function openPost(author, title, content) {
    // console.log('Author ' + author);
    sessionStorage.setItem('postAuthorName', author.innerHTML);
    sessionStorage.setItem('postTitle', title.innerHTML);
    sessionStorage.setItem('postContent', content.innerHTML);
    var url = "../html/post.html?heading";
    window.location.href = url;
}