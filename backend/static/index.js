function like(postId) {
    const likeCount = document.getElementById(`like-count-${postId}`);
    const likeButton = document.getElementById(`like-button-${postId}`);

    fetch(`/like-post/${postId}`, {method: "POST"})
        .then((res) => res.json())
        .then((data) => {
            likeCount.innerHTML = data["likes"];
            if (data["liked"]) {
                likeButton.className = "fa-solid fa-thumbs-up";
            }
            else {
                likeButton.className = "fa-regular fa-thumbs-up";
            }
        })
        .catch((e) => alert("Could not like this post."));
}