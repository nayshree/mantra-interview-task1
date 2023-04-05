$('.slider-main').slick({
    slidesToShow: 1,
    arrows: false,
    asNavFor: '.slider-nav',
    vertical: true,
    autoplay: true,
    centerMode: false,
    
  });
  
  $('.slider-nav').slick({
    slidesToShow: 4,
    asNavFor: '.slider-main',
    vertical: true,
    focusOnSelect: true,
    autoplay: false,
    centerMode: false,
    arrow: true,
    prevArrow: '<p>text</p>'
  });
  
  $(window).on('resize orientationchange', function() {
    if ($(window).width() > 1200) {
      $('.slider-nav').slick('unslick');
      $('.slider-nav').slick({
        slidesToShow: 4,
        asNavFor: '.slider-main',
        vertical: true,
        focusOnSelect: true,
        autoplay: false,
        centerMode: true
      });
    }
  });