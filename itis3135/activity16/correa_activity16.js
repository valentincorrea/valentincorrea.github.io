// $(document).ready(function () {
//   var url = "https://api.flickr.com/services/feeds/photos_public.gne?id=82407828@N07&format=json&jsoncallback=?&tags=vectacorpbuilding";
//   $.getJSON(url, function (data) {
//     var html = "";
//     $.each(data.items, function (i, item) {
//       html.innerHTML += "<a data-lightbox='new_building' data-title='item.title'>" + "<img src=" + item.media.m + ">" + "</a>";
//     });
//     $("#new_building").html(html);
//   });
// });

$(document).ready(function () {
  var flickr_api = "https://api.flickr.com/services/feeds/photos_public.gne?id=82407828@N07&format=json&jsoncallback=?&tags=vectacorpbuilding";
  $.ajax({
    type: "GET",
    url: "flickr_api",
    beforeSend: function () {
      $("#new_bulding").html("loading...");
    },
    timeout: 10000,
    error: function (xhr, status, error) {
      alert("Error" + xhr.status);
    },
    dataType: "json",
    success: function (data) {
      $("#new_building").html("");
      $.each(data.items, function (i, item) {
        $("#new_building").append("<a href='" + item.media.m + "' data-lightbox='new_building'" + "data-title'" + item.title + "' >" + "<img src='" + item.media.m + "'>" + "</a>");
      });
    },
  });
});
