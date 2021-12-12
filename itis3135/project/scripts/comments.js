$(document).ready(function () {
  $.ajax({
    type: "get",
    url: "posts.json",
    beforeSend: function () {
      $("#users-comments").html("Loading...");
    },
    timeout: 10000,
    error: function (xhr, status, error) {
      alert("Error: " + xhr.status + " - " + error);
    },
    dataType: "json",
    success: function (data) {
      $("#users-comments").html("");
      $.each(data, function () {
        $.each(this, function (key, value) {
          //   $("#users-comments").append("<h4>" + value.title + "</h4>" + "<h5>" + "@" + value.user_name + "</h5>" + "<p>" + value.comment + "</p>" + "<br>" + "<hr>");
          $("#users-comments").append(
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
              "<select id='user-rating'>" +
              "<option value='1'" +
              "<option value='2'" +
              "<option value='3'" +
              "<option value='4'" +
              "<option value='5'" +
              "</select>"
          );
        });
      });
    },
  });
});
