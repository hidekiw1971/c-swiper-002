jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
  // copy start
  var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // copy end
});
