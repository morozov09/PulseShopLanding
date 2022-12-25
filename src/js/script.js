$(document).ready(function(){
    $('.carousel_inner').slick({
        speed: 1200,
        centerMode: true,
        variableWidth: true,
        adaptiveHeight: false, 
        prevArrow: '<button type="button" class="slick-prev"><img src="/src/img/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="/src/img/right.svg"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    innerWidth: 700,
                    dots: true,
                    arrows: false
                }
            }
        ]
      });
         
      // Табы
      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

      $('.catalog-item__link').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').toggleClass('catalog-item__content_active');
            $('.catalog-item__list').toggleClass('catalog-item__list_active');
        })
      })

      $('.catalog-item__back').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
      });

        // Modal window
// активация модальных окон 
  $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn();
  });
  // скрипт для закрытия модального окна
  $('.modal__close').on('click', function() {
    $('.overlay, #consultation, #thanks, #order').fadeOut();
  });
  // заказ, вывод окна с заказом (order) на нажатие 'Купить'
  $('.button_mini').on('click', function(){ 
    $('.overlay, #order').fadeIn();
  });

//   $('.button_mini').each(function(i) { 
//     $(this).on('click', function(){
//       $('#order, .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
//       $('.overlay, #order').fadeIn();
//     })
//   });

// <!-- подключение maskedinput для ввода номера телефона --> + file = "jquery masked input form"
$('input[name=phone]').mask("+7 (999) 999-99-99");

// отправка форм не забываем обновлять файлы в локалхост и сбрасывать кэш в браузере SHIFT + F5
$('form').submit(function(e) {
  e.preventDefault();
  $.ajax({
    type: "POST",
    url: "mailer/smart.php",
    data: $(this).serialize()
  }).done(function() {
    $(this).find("input").val("");
    $('#consultation, #order').fadeOut();
    $('.overlay, #thanks').fadeIn();

    $('form').trigger('reset');
  });
  return false;
 });

// скрипт появление кнопки при определенном скролле вниз ТАК ЖЕ ДЛЯ РАБОТЫ СКРИПТОВ НЕОБХОДИМ document.on.ready
$(window).scroll(function() {
  if ($(this).scrollTop() > 1600) {
    $('.pageup').fadeIn();
  } else {
    $('.pageup').fadeOut();
  }
   
});


// скрипт плавное поднятие навверх ТАК ЖЕ ДЛЯ РАБОТЫ СКРИПТОВ НЕОБХОДИМ document.on.ready это штука в начале)

 /* тут класс */ $('.pageup').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: /* тут айди к которому надо вернуться */ $('#up').offset().top }, 1000);
  e.preventDefault();
});

// скрипт для появления анимация, только когда долистываешь до определённого участка
 new WOW().init();
});