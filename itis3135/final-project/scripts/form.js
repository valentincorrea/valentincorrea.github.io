// Accordion Jquery UI
$(document).ready(function () {
  $(function () {
    $("#accordion").accordion({
      active: false, // Removed the active class of the first panel
      collapsible: true, // Sets the the behaviour of the panels to the be collapsible
      heightStyle: "content", // Removes the default height and set the height to adjust base on the content
    });
  });
});

// THIS FUNCTION TAKES THE USER'S INFORMATION AND
// DISPLAYS THE INFORMATION ON TOP OF THE CONTACT FORM
function displayUserInformation() {
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const telephoneNumber = document.getElementById("telephone").value;
  const emailAddress = document.getElementById("email").value;

  if (!firstName || !lastName || !telephoneNumber || !emailAddress) {
    alert("You forgot to fill all the boxes");
    return;
  }

  const container = document.getElementById("information-box");
  const informationContainer = document.createElement("div");
  informationContainer.classList.add("card");
  const userInformation = document.createElement("h3");
  const userName = document.createElement("p");
  const userEmail = document.createElement("p");
  const userTelephone = document.createElement("p");

  //   // APPENDING THE INFORMATION
  container.appendChild(informationContainer);
  informationContainer.appendChild(userInformation);
  informationContainer.appendChild(userName);
  informationContainer.appendChild(userEmail);
  informationContainer.appendChild(userTelephone);

  //   // Appending the content
  userInformation.innerHTML = "Thank you for being a valuable member";
  userName.innerHTML = "First Name: " + firstName + " " + lastName;
  userEmail.innerHTML = "Email: " + emailAddress;
  userTelephone.innerHTML = "Telephone: " + telephoneNumber;
}
