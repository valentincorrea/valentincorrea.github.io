// THIS FUNCTION TAKES THE USER'S INFORMATION AND
// DISPLAYS THE INFORMATION ON TOP OF THE CONTACT FORM
function postComment() {
  const reply = document.getElementById("comment").value;
  const userName = document.getElementById("user-name").value;

  if (reply == "" || userName == "") {
    alert("You forgot to fill all the boxes");
    return;
  }

  const container = document.getElementById("comment-box");
  const userComment = document.createElement("div");
  userComment.classList.add("card");
  const userNamePost = document.createElement("p");
  const userPostComment = document.createElement("p");

  // APPENDING THE INFORMATION
  container.appendChild(userComment);
  userComment.appendChild(userNamePost);
  userComment.appendChild(userPostComment);
  // POST A COMMENT
  userNamePost.innerHTML = "@" + userName;
  userPostComment.innerHTML = reply;
  // CLEAR TEXTAREA
  document.getElementById("user-name").value = "";
  document.getElementById("comment").value = "";
}
