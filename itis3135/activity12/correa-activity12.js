$(document).ready(function () {
  $("#slider").bxSlider({
    auto: true,
    speed: 3000,
    minSlides: 1,
    maxSlides: 1,
    slideWidth: 500,
    slideMargin: 20,
    randomStart: true,
    captions: true,
    pagerType: "short",
    // I added the adaptiveHeight to fix the issues with images not having the same height
    adaptiveHeight: true,
  });
});
