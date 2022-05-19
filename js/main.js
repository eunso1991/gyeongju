$(document).ready(function(){

    setImageSlide('.main_visual_slide', 1, true, 3000);
    setImageSlide('.guide_slider_box.notice', 1, false, 3000);
    setImageSlide('.guide_slider_box.youtube', 1, true, 3000);

    var device_w;
    var winW = $(window).outerWidth(); 
    var concert_list = new Swiper('.concert_list_inner', {
        slidesPerView: 'auto',   
        navigation: {
            nextEl:'.concert_list_next',
            prevEl:'.concert_list_prev',
        },
        scrollbar: {
            el:'.swiper-scrollbar',
            hide:false,
            draggable:true,
        }   
    });

    if(winW > 768){
        device_w ='pc';
        touchOff();
    }else if(winW <= 768 ){
        device_w ='mobile';
        touchOn();
    }
});

$(window).resize(function(){

    var device_w;
    var winW = $(window).outerWidth();

    if(winW > 768 && device_w =='mobile'){
        device_w ='pc';
        touchOff();

    }else if(winW <= 768 && device_w =='pc'){
        device_w ='mobile';
        touchOn();       
    }
});

function touchOn(){
    $('.cencert_info').on('touchstart click',function(){
        $('.cencert_info').removeClass('active');
        $(this).addClass('active');
    });
};

function touchOff(){
    $('.cencert_info').off('touchstart click');
};


/*메인 슬라이드*/
function setImageSlide(selector, first, status, speed) {

    var $selector = $(selector);
    var numSlide = $selector.find('.slide > li').length;
    var slideNow = 0;
    var slidePrev = 0;
    var slideNext = 0;
    var slideFirst = first;
    var timerId = '';
    var timerSpeed = speed;
    var isTimerOn = status;
  
    $selector.find('.slide > li').each(function(i) {
      $(this).css({'left': (i * 100) + '%', 'display': 'block'});
      $selector.find('.indicator ul').append('<li><a href="#">' + (i + 1) + '번 슬라이드</a></li>\n');
    });
  
    if (isTimerOn === true) {
      $selector.find('.control a.play').addClass('on');
    } else {
      $selector.find('.control a.play').removeClass('on');
    }
  
    showSlide(slideFirst);
  
    $selector.find('.indicator ul li a').on('click', function() {
      var index = $selector.find('.indicator ul li').index($(this).parent());
      showSlide(index + 1);
    });
  
    $selector.find('.slide li a').on('focusin', function(e) {
      $selector.find('div.box').scrollLeft(0);
      var index = $selector.find('.slide li').index($(this).parent());
      showSlide(index + 1);
    });
  
    $selector.find('.control a.prev').on('click', function() {
      $(this).find('img').stop(true).animate({'left': '-10px'}, 30).animate({'left': '0px'}, 100);
      showSlide(slidePrev);
    });
  
    $selector.find('.control a.next').on('click', function() {
      $(this).find('img').stop(true).animate({'right': '-10px'}, 30).animate({'right': '0px'}, 100);
      showSlide(slideNext);
    });
  
    $selector.find('.control a.play').on('click', function() {
      if (isTimerOn === true) {
        stopTimer();
      } else {
        startTimer();
      }
    });
  
    function startTimer() {
      timerId = setTimeout(function() {showSlide(slideNext);}, timerSpeed);
      $selector.find('.control a.play').addClass('on');
      isTimerOn = true;
    }
  
    function stopTimer() {
      clearTimeout(timerId);
      $selector.find('.control a.play').removeClass('on');
      isTimerOn = false;
    }
  
    function resetTimer() {
      clearTimeout(timerId);
      if (isTimerOn === true) {
        timerId = setTimeout(function() {showSlide(slideNext);}, timerSpeed);
        setTimeout(function() {$selector.find('span.bar').css({'animation-duration': (timerSpeed - 50) + 'ms'}).addClass('on');}, 50);
      }
    }
  
    function showSlide(n) {
      resetTimer();
      $selector.find('.slide').css({'transition': 'left 0.5s', 'left': (-(n - 1) * 100) + '%'});
      $selector.find('.indicator li').removeClass('on');
      $selector.find('.indicator li:eq(' + (n - 1) + ')').addClass('on');
      slideNow = n;
      slidePrev = (n === 1) ? numSlide : (n - 1);
      slideNext = (n === numSlide) ? 1 : (n + 1);
      console.log(slidePrev + ' / ' + slideNow + ' / ' + slideNext);
    }  
}