$(function(){
    $('.venobox').venobox(); 


    // counter ------
    $('.counter').counterUp({
        delay: 5,
        time: 1500,
    });

    // slider-------
    $('.slider-main').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows:false,
        centerMode:true,
        centerPadding:0,
        autoplaySpeed: 1500,
        responsive: [
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 2,
                // slidesToScroll: 1
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                // slidesToScroll: 1
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                // slidesToScroll: 1
              }
            }
       
          ]
      });


    // scroll nav bar----
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        if(scrolling > 150){
            $('.navbar').addClass('nav-bg');
        }
        else {
            $('.navbar').removeClass('nav-bg');
        }
    });

     //  animation scroll js-------------------------

     var html_body = $('html, body');
     $('.navbar a').on('click', function () {
         if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
             var target = $(this.hash);
             target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
             if (target.length) {
                 html_body.animate({
                     scrollTop: target.offset().top - 80
                 }, 500);
                 return false;
             }
         }
     });

});