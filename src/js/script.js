$(document).ready(function(){
    $('.carousel_inner').slick({
        speed: 1200,
        centerMode: true,
        variableWidth: true,
        // adaptiveHeight: true, 
        prevArrow: '<button type="button" class="slick-prev"><img src="/src/img/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="/src/img/right.svg"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
      });
});