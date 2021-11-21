$(document).ready(function () {
  $.getJSON("team.json", function (data) {
    $.each(data, function () {
      $.each(this, function (key, value) {
        $("#team").append("Name: " + value.name + "<br>" + "Title: " + value.timeout + "<br>" + "Bio: " + value.bio + "<br><br>");
      });
    });
  });
});

// $(document).ready(function () {
//   $.ajax({
//     url: "https://webpages.uncc.edu/ncorream/itis3135/activity13/team.json",
//     method: "GET",
//     beforeSend: function () {
//       //
//       console.log("Before sending data");
//       $("#team").html("Loading...");
//     },
//     timeout: 10000,
//     error: function (xhr, status, error) {
//       //
//       console.log("Alert Error");
//       alert("Error: " + xhr.status + " - " + error);
//     },
//     dataType: "JSON",
//     success: function (data) {
//       //
//       console.log("JSON has been received");
//       $("#team").html("");
//       $(data)
//         .find("management")
//         .children()
//         .each(function () {
//           //
//           console.log("Before storing the JSON to the variable");
//           var xmlDoc = $(this);
//           //
//           console.log(JSON.parse(xmlDoc));
//           $("#team").append("<h3>" + xmlDoc.name + "</h3>" + xmlDoc.title + "<br>" + xmlDoc.bio + "<br>");
//         });
//     },
//   });
// });

// $(document).ready(function () {
//   $.ajax({
//     type: "get",
//     url: "team.xml",
//     beforeSend: function () {
//       $("#team").html("Loading...");
//     },
//     timeout: 10000,
//     error: function (xhr, status, error) {
//       alert("Error: " + xhr.status + " - " + error);
//     },
//     dataType: "xml",
//     success: function (data) {
//       $("#team").html("");
//       $(data)
//         .find("management")
//         .children()
//         .each(function () {
//           var xmlDoc = $(this);
//           $("#team").append("<h3>" + xmlDoc.find("name").text() + "</h3>" + xmlDoc.find("title").text() + "<br>" + xmlDoc.find("bio").text() + "<br>");
//         });
//     },
//   });
// });
