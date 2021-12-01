$(document).ready(function () {
  const speaker_toobin = document.querySelector("[title='toobin']");
  const speaker_sorkin = document.querySelector("[title='sorkin']");
  const speaker_chua = document.querySelector("[title='chua']");
  const speaker_sampson = document.querySelector("[title='sampson']");

  speaker_toobin.addEventListener("click", toobinButton);
  speaker_sorkin.addEventListener("click", sorkinButton);
  speaker_chua.addEventListener("click", chuaButton);
  speaker_sampson.addEventListener("click", sampsonButton);

  function toobinButton() {
    console.log("test 1");
    $.getJSON("https://webpages.uncc.edu/ncorream/itis3135/activity14/json_files/toobin.json", function (obj) {
      switchSpeaker(obj);
    });
  }
  function sorkinButton() {
    console.log("test 2");
    $.getJSON("https://webpages.uncc.edu/ncorream/itis3135/activity14/json_files/sorkin.json", function (obj) {
      switchSpeaker(obj);
    });
  }
  function chuaButton() {
    console.log("test 3");
    $.getJSON("https://webpages.uncc.edu/ncorream/itis3135/activity14/json_files/chua.json", function (obj) {
      switchSpeaker(obj);
    });
  }
  function sampsonButton() {
    console.log("test 4");
    $.getJSON("https://webpages.uncc.edu/ncorream/itis3135/activity14/json_files/sampson.json", function (obj) {
      switchSpeaker(obj);
    });
  }
  function switchSpeaker(speakerPersons) {
    var person = speakerPersons.speakers[0];
    $("h1").empty();
    $("h2").empty();
    $("h3").empty();
    $("#text").empty();
    $("#picture").empty();

    // $("h1").append(person.title);
    // $("h2").append(person.month);
    // $("h3").append(person.speaker);
    // $("#text").append(person.text);

    document.getElementById("content").innerHTML = `
    <h1>${person.title}</h1>
    <h2>${person.month}</h2>
    <h3>${person.speaker}</h3>
    <img src="${person.image}" alt = "${person.speaker} picture">
    <p>${person.text}</p>`;
  }
});

// BETTER IMPLEMENTATION CODE
// $(document).ready(function () {
//   // SELECTING EACH OF THE LI IN THE NAV LIST
//   // SELECTING EACH A TAG BY THE TITLE AND THE APPENDING THE JSON EXTENTION
//   $("#nav_list a").click(function () {
//     var fileName = "json_files/" + $(this).attr("title") + ".json";
//     // CALLBACK FUNCTION THAT GET THE DATA FROM THE RESPONSE
//     $.getJSON(fileName, function (data) {
//       $.each(data, function () {
//         $each(this, function (key, value) {
//           // TO CLEAR OR EMTY THE VALUES WE CAN USE TEXT OR HTML
//           $("main").text("");
//           $("main").append("<h1>" + value.title + "</h1>" + "<img src= '" + value.image + " '>" + "<h2>" + value.month + "<br>" + value.speaker + "</h2>" + "<p>" + value.text + "</p>");
//         });
//       });
//     });
//   });
// });
