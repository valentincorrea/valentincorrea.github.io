$(document).ready(function () {
  $.ajax({
    type: "get",
    url: "facultyList.json",
    beforeSend: function () {
      $("#team").html("Loading...");
    },
    timeout: 10000,
    error: function (xhr, status, error) {
      alert("Error: " + xhr.status + " - " + error);
    },
    dataType: "json",
    success: function (data) {
      $("faculty").html("");
      $.each(data, function () {
        $.each(this, function (key, value) {
          $("#faculty").append("<img src= '" + value.image + " '>" + "<br>" + value.full_name + "<br>" + value.deparment + "<br>" + value.bio + "<br>" + "<hr>");
        });
      });
    },
  });
});
