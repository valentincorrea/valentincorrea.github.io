$(document).ready(function () {
  $("#image_list a ").each(function () {
    var pictureSource = $(this).attr("href");
    var pictureCaption = $(this).attr("title");
    // preload the image for each link
    var imageCollage = new Image();
    imageCollage.src = pictureSource;
    // set up the event handlers for each link
    $(this).click(function (e) {
      // get the image URL and caption for each image and animate the caption
      // $("#image").attr("src", pictureSource).fadeOut(3000).fadeIn(3000);
      // $("#caption").text(pictureCaption).fadeOut(3000).fadeIn(3000);
      $("#image, #caption").fadeOut(3000, function () {
        $("#image").attr("src", pictureSource);
        // $("#caption").text(pictureCaption); //Uncomment this line if something goes wrong
        $("#caption, #image").fadeIn(3000);
        $("#caption").text(pictureCaption).animate({ fontSize: "2em" }, 3000);
      });
      // cancel the default action of each link
      e.preventDefault();
      //Fade caption
    });
  });
  // move the focus to the first link
  $("li:nth-child(1) a").focus();
}); // end ready
