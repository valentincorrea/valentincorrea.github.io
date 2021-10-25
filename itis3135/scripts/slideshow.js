// WORKING JQUERY STSRTS

$(document).ready(function () {
  $(".next").click(function () {
    var currentImage = $(".active");
    var nextImage = currentImage.next();
    if (nextImage.length) {
      currentImage.removeClass("active").css("z-index", -10);
      nextImage.addClass("active").css("z-index", 10);
    }
  });
  $(".previous").click(function () {
    var currentImage = $(".active");
    var previousImage = currentImage.prev();
    if (previousImage.length) {
      currentImage.removeClass("active").css("z-index", -10);
      previousImage.addClass("active").css("z-index", 10);
    }
  });

  $("#image1").click(function () {
    $("#image-large1").addClass("active").css("z-index", 10);
    $("#image-large2").removeClass("active").css("z-index", 10);
    $("#image-large3").removeClass("active").css("z-index", -10);
    $("#image-large4").removeClass("active").css("z-index", -10);
    $("#image-large5").removeClass("active").css("z-index", -10);
    $("#image-large6").removeClass("active").css("z-index", -10);
    $("#image-large7").removeClass("active").css("z-index", -10);
    $("#image-large8").removeClass("active").css("z-index", -10);
  });
  $("#image2").click(function () {
    $("#image-large2").addClass("active").css("z-index", 10);
    $("#image-large1").removeClass("active").css("z-index", 10);
    $("#image-large3").removeClass("active").css("z-index", -10);
    $("#image-large4").removeClass("active").css("z-index", -10);
    $("#image-large5").removeClass("active").css("z-index", -10);
    $("#image-large6").removeClass("active").css("z-index", -10);
    $("#image-large7").removeClass("active").css("z-index", -10);
    $("#image-large8").removeClass("active").css("z-index", -10);
  });
  $("#image3").click(function () {
    $("#image-large3").addClass("active").css("z-index", 10);
    $("#image-large1").removeClass("active").css("z-index", 10);
    $("#image-large2").removeClass("active").css("z-index", -10);
    $("#image-large4").removeClass("active").css("z-index", -10);
    $("#image-large5").removeClass("active").css("z-index", -10);
    $("#image-large6").removeClass("active").css("z-index", -10);
    $("#image-large7").removeClass("active").css("z-index", -10);
    $("#image-large8").removeClass("active").css("z-index", -10);
  });
  $("#image4").click(function () {
    $("#image-large4").addClass("active").css("z-index", 10);
    $("#image-large1").removeClass("active").css("z-index", 10);
    $("#image-large3").removeClass("active").css("z-index", -10);
    $("#image-large3").removeClass("active").css("z-index", -10);
    $("#image-large5").removeClass("active").css("z-index", -10);
    $("#image-large6").removeClass("active").css("z-index", -10);
    $("#image-large7").removeClass("active").css("z-index", -10);
    $("#image-large8").removeClass("active").css("z-index", -10);
  });
  $("#image5").click(function () {
    $("#image-large5").addClass("active").css("z-index", 10);
    $("#image-large1").removeClass("active").css("z-index", 10);
    $("#image-large2").removeClass("active").css("z-index", -10);
    $("#image-large3").removeClass("active").css("z-index", -10);
    $("#image-large4").removeClass("active").css("z-index", -10);
    $("#image-large6").removeClass("active").css("z-index", -10);
    $("#image-large7").removeClass("active").css("z-index", -10);
    $("#image-large8").removeClass("active").css("z-index", -10);
  });
  $("#image6").click(function () {
    $("#image-large6").addClass("active").css("z-index", 10);
    $("#image-large1").removeClass("active").css("z-index", 10);
    $("#image-large2").removeClass("active").css("z-index", -10);
    $("#image-large3").removeClass("active").css("z-index", -10);
    $("#image-large4").removeClass("active").css("z-index", -10);
    $("#image-large5").removeClass("active").css("z-index", -10);
    $("#image-large7").removeClass("active").css("z-index", -10);
    $("#image-large8").removeClass("active").css("z-index", -10);
  });
  $("#image7").click(function () {
    $("#image-large7").addClass("active").css("z-index", 10);
    $("#image-large1").removeClass("active").css("z-index", 10);
    $("#image-large2").removeClass("active").css("z-index", -10);
    $("#image-large3").removeClass("active").css("z-index", -10);
    $("#image-large4").removeClass("active").css("z-index", -10);
    $("#image-large5").removeClass("active").css("z-index", -10);
    $("#image-large6").removeClass("active").css("z-index", -10);
    $("#image-large8").removeClass("active").css("z-index", -10);
  });
  $("#image8").click(function () {
    $("#image-large8").addClass("active").css("z-index", 10);
    $("#image-large1").removeClass("active").css("z-index", 10);
    $("#image-large2").removeClass("active").css("z-index", -10);
    $("#image-large3").removeClass("active").css("z-index", -10);
    $("#image-large4").removeClass("active").css("z-index", -10);
    $("#image-large5").removeClass("active").css("z-index", -10);
    $("#image-large6").removeClass("active").css("z-index", -10);
    $("#image-large7").removeClass("active").css("z-index", -10);
  });
});

// WORKING JQUERY STSRTS
