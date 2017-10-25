$(document).ready(function () {
  // Initialize materialize
  $(".button-collapse").sideNav();

 var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 2,
        slidesPerColumn: 1,
        paginationClickable: true,
        spaceBetween: 30,
        autoplay:1000
    });
 
});