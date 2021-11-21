$(document).ready(function () {
  $.getJSON("https://webpages.uncc.edu/ncorream/itis3135/activity13/team.json", function (data) {
    $.each(data, function () {
      $.each(this, function (key, value) {
        $("#team").append("Name: " + value.name + "<br>" + "Title: " + value.timeout + "<br>" + "Bio: " + value.bio + "<br><br>");
      });
    });
  });
});

// $(document).ready(function () {
//   $.getJSON({
//     url: "team.json",
//     beforeSend: function () {
//       $("#team").xhr.html("Loading...");
//     },
//     timeout: 10000,
//     error: function (xhr, status, error) {
//       alert("Error: " + xhr.status + " - " + error);
//     },
//     error: function (xhr, status, error) {
//       alert("Error: " + xhr.status + " - " + error);
//     },
//     success: function (data) {
//       $.each(data, function () {
//         $.each(this, function (key, value) {
//           $("#team").append("Name: " + value.name + "<br>" + "Title: " + value.timeout + "<br>" + "Bio: " + value.bio + "<br><br>");
//         });
//       });
//     },
//   });
// });

// ORIGINAL XML CODE

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
//
