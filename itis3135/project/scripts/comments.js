$(document).ready(function () {
  $.ajax({
    type: "get",
    url: "posts.json",
    beforeSend: function () {
      $(".users-comments").html("Loading...");
    },
    timeout: 10000,
    error: function (xhr, status, error) {
      alert("Error: " + xhr.status + " - " + error);
    },
    dataType: "json",
    success: function (data) {
      $(".users-comments").html("");
      $.each(data, function () {
        $.each(this, function (key, value) {
          //   $("#users-comments").append("<h4>" + value.title + "</h4>" + "<h5>" + "@" + value.user_name + "</h5>" + "<p>" + value.comment + "</p>" + "<br>" + "<hr>");
          $(".users-comments").append(
            "<h4>" +
              value.title +
              "</h4>" +
              "<h5>" +
              "@" +
              value.user_name +
              "</h5>" +
              "<p>" +
              value.comment +
              "</p>" +
              "<select" +
              "$('.users-comments')" +
              ">" +
              "<option value='1'>" +
              "1" +
              "<option>" +
              "<option value='2'>" +
              "2" +
              "<option>" +
              "<option value='3'>" +
              "3" +
              "<option>" +
              "<option value='4'>" +
              "4" +
              "<option>" +
              "<option value='5'>" +
              "5" +
              "<option>" +
              "</select>"
          );
        });
      });
    },
  });
});
