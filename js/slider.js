$(document).ready(function(){
  $('.trending-list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    infinite: true,
    cssEase: 'linear',
    variableWidth: true,
    dots: true,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          
        }
      },
      {
        breakpoint: 767,
        settings: {
          //variableWidth: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      
    ]
  });
})