$("#btn").click(function () {
  $.getJSON("https://webpages.uncc.edu/ncorream/itis3135/activity13/team.json", function (data) {
    console.log("test");
  });
});

// function switchSpeaker() {
// $.getJSON("https://webpages.uncc.edu/ncorream/itis3135/activity14/json_files/tobbin.json", function (data) {
//   $("#test").append(data.month);

// speaker_tobbin = document.addEventListener("click", function () {
//   $.getJSON("https://webpages.uncc.edu/ncorream/itis3135/activity14/json_files/tobbin.json",
//   method: "GET",  function (data) {
//     console.log(data);
//     switch_speaker = data.speaker;
//     switch_speaker = data.month = "";
//     switch_speaker = data.title = "";
//     switch_speaker = data.speaker = "";
//     switch_speaker = data.image = "";
//     $("#month").append(switch_speaker.month);
//     $("#title").append(switch_speaker.title);
//     $("#speaker").append(switch_speaker.speaker);
//     $("#picture").append(switch_speaker.image);
//     $("#picture").append(data.image);
//   });
// });
// speaker_sorkin = document.addEventListener("click", function () {
//   $.getJSON("https://webpages.uncc.edu/ncorream/itis3135/activity14/json_files/sorkin.json",
//   method: "GET",function (data) {
//     console.log(data);
//     switch_speaker = data.speaker;
//     switch_speaker = data.month = "";
//     switch_speaker = data.title = "";
//     switch_speaker = data.speaker = "";
//     switch_speaker = data.image = "";
//     $("#month").append(switch_speaker.month);
//     $("#title").append(switch_speaker.title);
//     $("#speaker").append(switch_speaker.speaker);
//     $("#picture").append(switch_speaker.image);
//   });
// });
// speaker_chua = document.addEventListener("click", function () {
//   $.getJSON("https://webpages.uncc.edu/ncorream/itis3135/activity14/json_files/chua.json", function (data) {
//     console.log(data);
//     switch_speaker = data.speaker;
//     switch_speaker = data.month = "";
//     switch_speaker = data.title = "";
//     switch_speaker = data.speaker = "";
//     switch_speaker = data.image = "";
//     $("#month").append(switch_speaker.month);
//     $("#title").append(switch_speaker.title);
//     $("#speaker").append(switch_speaker.speaker);
//     $("#picture").append(switch_speaker.image);
//   });
// });
// speaker_sampson = document.addEventListener("click", function () {
//   $.getJSON("https://webpages.uncc.edu/ncorream/itis3135/activity14/json_files/sampson.json", function (data) {
//     console.log(data);
//     switch_speaker = data.speaker;
//     switch_speaker = data.month = "";
//     switch_speaker = data.title = "";
//     switch_speaker = data.speaker = "";
//     switch_speaker = data.image = "";
//     $("#month").append(switch_speaker.month);
//     $("#title").append(switch_speaker.title);
//     $("#speaker").append(switch_speaker.speaker);
//     $("#picture").append(switch_speaker.image);
//   });
// });

//   $.getJSON("https://webpages.uncc.edu/ncorream/itis3135/activity14/json_files/toobin.json", function (data) {
//     $.each(data, function () {
//       $.each(this, function (key, value) {
//         $("#team").append("Name: " + value.name + "<br>" + "Title: " + value.timeout + "<br>" + "Bio: " + value.bio + "<br><br>");
//       });
//     });
//   });
//}); // end ready
//
