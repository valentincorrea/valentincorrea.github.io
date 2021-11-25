$(document).ready(function () {
  var speaker_toobin = document.getElementsByTagName("a [title='toobin']");
  var speaker_sorkin = document.getElementsByTagName("a [title='sorkin']");
  var speaker_chua = document.getElementsByTagName("a [title='chua']");
  var speaker_sampson = document.getElementsByTagName("a [title='sampson']");

  speaker_tobbin = document.addEventListener("click", function () {
    $.getJSON("https://webpages.uncc.edu/ncorream/itis3135/activity14/json_files/tobbin.json", function (data) {
      console.log(data);
      data.month = "";
      data.title = "";
      data.speaker = "";
      data.image = "";
      $("#month").append(data.month);
      $("#title").append(data.title);
      $("#speaker").append(data.speaker);
      $("#picture").append(data.image);
    });
  });
  speaker_sorkin = document.addEventListener("click", function () {
    $.getJSON("https://webpages.uncc.edu/ncorream/itis3135/activity14/json_files/sorkin.json", function (data) {
      console.log(data);
      data.month = "";
      data.title = "";
      data.speaker = "";
      data.image = "";
      $("#month").append(data.month);
      $("#title").append(data.title);
      $("#speaker").append(data.speaker);
      $("#picture").append(data.image);
    });
  });
  speaker_chua = document.addEventListener("click", function () {
    $.getJSON("https://webpages.uncc.edu/ncorream/itis3135/activity14/json_files/chua.json", function (data) {
      console.log(data);
      data.month = "";
      data.title = "";
      data.speaker = "";
      data.image = "";
      $("#month").append(data.month);
      $("#title").append(data.title);
      $("#speaker").append(data.speaker);
      $("#picture").append(data.image);
    });
  });
  speaker_sampson = document.addEventListener("click", function () {
    $.getJSON("https://webpages.uncc.edu/ncorream/itis3135/activity14/json_files/sampson.json", function (data) {
      console.log(data);
      data.month = "";
      data.title = "";
      data.speaker = "";
      data.image = "";
      $("#month").append(data.month);
      $("#title").append(data.title);
      $("#speaker").append(data.speaker);
      $("#picture").append(data.image);
    });
  });

  //   $.getJSON("https://webpages.uncc.edu/ncorream/itis3135/activity14/json_files/toobin.json", function (data) {
  //     $.each(data, function () {
  //       $.each(this, function (key, value) {
  //         $("#team").append("Name: " + value.name + "<br>" + "Title: " + value.timeout + "<br>" + "Bio: " + value.bio + "<br><br>");
  //       });
  //     });
  //   });
}); // end ready
