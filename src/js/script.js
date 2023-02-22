// $(document).ready(function(){
//   $('.carousel__inner').slick({
//     speed: 1200,
//     prevArrow: '<button type="button" class="slick-prev"> <img src="icons/chevronleftsolid.svg" alt="left"> </button>',
//     nextArrow: '<button type="button"  class="slick-next"> <img src="icons/chevronrightsolid.svg" alt="right"> </button>',
//     responsive: [
//       {
//         breakpoint: 992,
//         settings: {
//           dots: true,
//           arrows: false
//         }
//       }]
//   });
// });
var slider = tns({
  container: '.carousel__inner',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  controls: false,
  nav: false
});
document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click', function () {
  slider.goTo('next');
});
