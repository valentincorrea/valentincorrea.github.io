$(document).ready(function () {
  $.ajax({
    type: "get",
    url: "users_account.json",
    beforeSend: function () {
      $("#active-users").html("Loading...");
    },
    timeout: 10000,
    error: function (xhr, status, error) {
      alert("Error: " + xhr.status + " - " + error);
    },
    dataType: "json",
    success: function (data) {
      $("#active-users").html("");
      $.each(data, function () {
        $.each(this, function (key, value) {
          $("#active-users").append("<tr>" + "<td>" + value.user_id + "</td>" + "<td>" + value.first_name + "</td>" + "<td>" + value.last_name + "</td>" + "<td>" + value.email + "</td>" + "</tr>");
        });
      });
    },
  });
});
