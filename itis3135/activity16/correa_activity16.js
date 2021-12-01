$(document).ready(function () {
  var url = "https://api.flickr.com/services/feeds/photos_public.gne?id=82407828@N07&format=json&jsoncallback=?&tags=vectacorpbuilding";
  $.getJSON(url, function (data) {
    var html = "";
    $.each(data.items, function (i, item) {
      //   html += "<a>" + "<img src=" + item.media.m + ">" + "</a>";
      html += "<a data-lightbox='roadtrip'>" + "<img src=" + item.media.m + ">" + "</a>";
    });
    $("#new_building").html(html);
  });
});