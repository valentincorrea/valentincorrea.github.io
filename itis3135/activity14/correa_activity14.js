$(document).ready(function () {
  $("a[title='chua']").click(function () {
    console.log("Clicked");
    $.getJSON("https://webpages.uncc.edu/ncorream/itis3135/activity14/json_files/chua.json", function (data) {
      $.each(data, function (key, value) {
        console.log(data);
        // value.month = "";
        // value.title = "";
        // value.speaker = "";
        // value.image = "";
        $("#month").append(data.month);
        $("#title").append(data.title);
        $("#speaker").append(data.speaker);
        $("#picture").append(data.image);
      });
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
