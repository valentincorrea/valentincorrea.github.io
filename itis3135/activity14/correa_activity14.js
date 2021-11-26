$(document).ready(function () {
  // var speaker_toobin = document.getElementsByTagName("a [title='toobin']");
  // var speaker_sorkin = document.getElementsByTagName("a [title='sorkin']");
  // var speaker_chua = document.getElementsByTagName("a [title='chua']");
  // var speaker_sampson = document.getElementsByTagName("a [title='sampson']");

  $("[title = toobin]").click(function () {
    switchSpeaker();
    console.log("Toobin Test");
  });
  $("[title = sorkin]").click(function () {
    switchSpeaker();
    console.log("Sorkin Test");
  });
  $("[title = chua]").click(function () {
    switchSpeaker();
    console.log("Chua Test");
  });
  $("[title = sampson]").click(function () {
    switchSpeaker();
    console.log("Sampson Test");
  });

  function switchSpeaker() {
    $.ajax({
      url: "https://webpages.uncc.edu/ncorream/itis3135/activity14/json_files/tobbin.json",
      method: "GET",
    }).done(function (data) {
      console.log(data);
    });
  }

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
}); // end ready
