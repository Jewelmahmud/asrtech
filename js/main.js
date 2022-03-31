$(document).ready(function(){

  new WOW().init();

  $('[data-vbg]').youtube_background({
    'mobile': true
  });

  $("#typer").typeWrite({
    repeat: true,
    interval: 1000,
    speed: 10,
    color: "#fff"
  });


  $('.hamburger').click(function(){
    var clicker = $('.toggler'),
        radious = $('.mobileNav');

    if(clicker.prop("checked") == false){      
      clicker.prop("checked", true);
      radious.addClass('radious');
    }else if (clicker.prop("checked") == true) {
      clicker.prop("checked", false);
      radious.removeClass('radious');
    }    

  });

  var mySwiper = new Swiper ('.brand-slide', {
    spaceBetween: 10,
    freeMode: false,
    loop: true,
    centeredSlides: false,
    lazy: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      0: { 
        slidesPerView: 1,
        spaceBetween: 20,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      988: {
        slidesPerView: 4,
        spaceBetween: 40,
      }
    },
    
    autoplay: {
      delay: 3000,
    },
  });


  var searchbox = $('.search-input'),
      checker = true;

  searchbox.on('mouseover', function(){
    $(this).parent('.search-box').addClass('bgnull');
  });

  searchbox.click(function(){
    $(this).on('blur', function(){
      $(this).parent('.search-box').removeClass('bgnull');
    });
    checker = false;
    console.log('hello');
  });
 console.log(checker);
  // if(checker == true){
  //   searchbox.on('mouseleave',function(){
  //         $(this).parent('.search-box').removeClass('bgnull');
  //   });
  // }


  

});




