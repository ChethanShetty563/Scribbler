var likeCount = 0;

var isSave = false;

load();

function likeClicked() {
    likeCount++;
    var like_button_text = document.getElementById('like-button-text');
    var like_button = document.getElementById('like-button');
    if (likeCount === 1) {
        //Change the text below like button.
        like_button_text.innerHTML = likeCount + ' person likes this !';
        //change the button name to liked.
        like_button.innerHTML = '<i class="fa fa-thumbs-up fa-lg"aria-hidden="true"></i> Liked';
    } else if (likeCount >= 2) {
        //Change the text below like button.
        like_button_text.innerHTML = likeCount + ' people like this !';
    }

}

function commentClicked(comment) {
    var all_comments = document.getElementById('comments');
    var comment = document.getElementById('comment').value;
    var para = document.createElement("p");
    para.classList.add('each-comment');
    para.innerHTML = comment;
    //Add to the start of the list. (Like a stack)
    all_comments.prepend(para);
    //clear the value in the comment box.
    document.getElementById('comment').value = "";
}




function load() {
    var authorName = sessionStorage.getItem("postAuthorName");
    var title = sessionStorage.getItem("postTitle");
    var content = sessionStorage.getItem("postContent");

    var post_author = document.getElementById('author');
    post_author.innerHTML = authorName;

    var post_title = document.getElementById('post-title-id');
    post_title.innerHTML = title;

    var post_desc = document.getElementById('post-desc');
    post_desc.innerHTML = content;
}