$(document).ready(function () {
  var url = "https://api.flickr.com/services/feeds/photos_public.gne?id=82407828@N07&format=json&jsoncallback=?&tags=vectacorpbuilding";
  $.getJSON(url, function (data) {
    var lightbox = "";
    $.each(data.items, function (i, item) {
      //   html += "<a data-lightbox='new_building'>" + "<img src=" + item.media.m + ">" + "</a>";
      lightbox += "<a href='item.media.m' data-lightbox='new_building' data-tittle='item.title'>" + "<img src=item.media.m>" + "</a>";
      //   lightbox += '<a href="${item.media.m}" data-lightbox="new_building" data-title="${item.title}"> <img src="$(item.media.m}"></a>';
    });
    $("#new_building").html(lightbox);
  });
});
