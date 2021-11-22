$(document).ready(function () {
  $("a[title='chua']").click(function () {
    console.log("Clicked");
    $.getJSON("https://webpages.uncc.edu/ncorream/itis3135/activity14/json_files/chua.json", function (data) {
      //   $("#team").append("Name: " + value.name + "<br>" + "Title: " + value.timeout + "<br>" + "Bio: " + value.bio + "<br><br>");
      console.log(data);
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
