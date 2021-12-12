// THIS FUNCTION TAKES THE USER'S INFORMATION AND
// DISPLAYS THE INFORMATION ON TOP OF THE CONTACT FORM
// function postComment() {
//   const reply = document.getElementById("comment").value;
//   const userName = document.getElementById("user-name").value;

//   if (reply == "" || userName == "") {
//     alert("You forgot to fill all the boxes");
//     return;
//   }

//   const container = document.getElementById("comment-box");
//   const userComment = document.createElement("div");
//   userComment.classList.add("card");
//   const userNamePost = document.createElement("p");
//   const userPostComment = document.createElement("p");

//   // APPENDING THE INFORMATION
//   container.appendChild(userComment);
//   userComment.appendChild(userNamePost);
//   userComment.appendChild(userPostComment);
//   // POST A COMMENT
//   userNamePost.innerHTML = "@" + userName;
//   userPostComment.innerHTML = reply;
//   // CLEAR TEXTAREA
//   document.getElementById("user-name").value = "";
//   document.getElementById("comment").value = "";
//   rating();
// }

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

// **********************************************
// function rating() {
//   var selectionContainer = document.getElementById("rating-section");
//   var ratingSection = document.createElement("select");
//   ratingSection.classList.add("user-rating");
//   var option1 = document.createElement("option");
//   var option2 = document.createElement("option");
//   var option3 = document.createElement("option");
//   var option4 = document.createElement("option");
//   var option5 = document.createElement("option");
//   selectionContainer.appendChild(ratingSection);

//   option1.value = "1";
//   option1.text = "1";
//   option2.value = "2";
//   option2.text = "2";
//   option3.value = "3";
//   option3.text = "3";
//   option4.value = "4";
//   option4.text = "4";
//   option5.value = "5";
//   option5.text = "5";

//   ratingSection.add(option1, null);
//   ratingSection.add(option2, null);
//   ratingSection.add(option3, null);
//   ratingSection.add(option4, null);
//   ratingSection.add(option5, null);
// }
// **********************************************
