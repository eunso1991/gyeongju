$(document).ready(function(){

    preventDefaultAnchor();

    setImageSlide('.main_visual_slide', 1, true, 3000);
    setImageSlide('.guide_slider_box.notice', 1, false, 3000);
    setImageSlide('.guide_slider_box.youtube', 1, true, 3000);

    //header pc : mouseenter, focus 일 때 
    $('#header .header_gnb_menu nav > ul > li > a').on('mouseenter focus', function(){
        $('#header .header_gnb_menu nav > ul > li').removeClass('on'); // 전체 li bar 제거
        $(this).parents('li').addClass('on'); // 선택된 li bar 생성

        $('#header .gnb_sub_menu').addClass('on'); // 서브메뉴 전체 show
        $('#header .header_gnb_bg').addClass('on'); // 서브메뉴 BG show
    });

    //header pc > gnb_sub_menu li a : mouseenter, focus 일 때 
    $('.header_gnb_menu.pc .gnb_sub_menu, .header_gnb_menu.pc .gnb_sub_menu > li > a').on('mouseenter focus', function(){
        
        $('#header .header_gnb_menu nav > ul > li').removeClass('on'); // 전체 li bar 제거
        $(this).parents('li').addClass('on');  // 선택된 li bar 생성
    });

    //header pc : mouseleave 일 때 
    $('#header .header_gnb_menu').on('mouseleave', function(){
        $('#header .header_gnb_menu nav > ul > li').removeClass('on'); // 전체 li bar 제거

        $('#header .gnb_sub_menu').removeClass('on'); // 서브메뉴 전체 hide
        $('#header .header_gnb_bg').removeClass('on'); // 서브메뉴 BG hide
    });   

    //header pc : last li a focusout 일 때 
    $('#header .header_gnb_menu nav > ul > li').last().find('a').last().on('focusout', function(){
        $('#header .header_gnb_menu nav > ul > li').removeClass('on'); // 전체 li bar 제거

        $('#header .gnb_sub_menu').removeClass('on'); // 서브메뉴 전체 hide
        $('#header .header_gnb_bg').removeClass('on'); // 서브메뉴 BG hide  
    });
    
    
    //전체메뉴 보기 클릭 시(퀵메뉴), Atype 
    $('.allMenu_quick_btn').on('click', function(){
        $('#header').addClass('flex'); // header min-width:100%;
        $('.quick_menu').addClass('hide'); // 퀵메뉴 hide
        $('body').addClass('is-open'); // body height:100%, 스크롤 없애기
        $('.all_menu_wrap').addClass('a_type'); // a_type 
        $('.all_menu_wrap').fadeIn(200); // 전체메뉴 show
    });    

    //전체메뉴 보기 클릭 시(header), Btype
    $('.all_menu_btn').on('click', function(){
        $('#header').addClass('flex'); // header min-width:100%;
        $(this).removeClass('show'); // 버튼 hide
        $('.quick_menu').addClass('hide'); // 퀵메뉴 hide
        $('body').addClass('is-open'); // body height:100%, 스크롤 없애기
        $('.all_menu_wrap').addClass('b_type'); // b_type 
        $('.all_menu_wrap').fadeIn(200); // 전체메뉴 show
    });

    // 전체메뉴 닫기 버튼 클릭 시, 타입별
    $('.all_close_menu_btn').on('click', function(){

        $('#header').removeClass('flex'); // header min-width:1320px;
        $('.quick_menu').removeClass('hide'); // 퀵메뉴 show
        $('body').removeClass('is-open'); // body height:auto, 스크롤 ok
        $('.all_menu_wrap').fadeOut(200); // 전체메뉴 hide

        //a type 일 때,
        if($('.all_menu_wrap').hasClass('a_type')){
            $('.all_menu_wrap').removeClass('a_type'); // a_type remove
        }else{ 
        //b type 일 때,          
            $('.all_menu_wrap').removeClass('b_type'); // b_type remove
            $('.all_menu_btn').addClass('show'); // 버튼 show
        }        
    });    


    // mobile 일 때, first li의 gnb_sub_menu : show
    $('.all_menu_wrap .header_gnb_menu nav > ul > li:first-child').addClass('on');
   
    var has3_depth = $('.all_menu_wrap .gnb_sub_menu > li:has(.gnb_sub_3depth)');
    $(has3_depth).addClass('has3_depth');

    // mobile 일 때, li > a click, focus 일 때 해당 gnb_sub_menu : show
    $('.all_menu_wrap .header_gnb_menu nav > ul > li > a').on('click focus', function(){
        $('.all_menu_wrap .header_gnb_menu nav > ul > li').removeClass('on'); // 전체 gnb_sub_menu 숨기기
        $(this).parent('li').addClass('on'); //해당 gnb_sub_menu : show
    });

     // mobile 일 때, .gnb_sub_menu li > a click, focus 일 때 해당 gnb_sub_menu : show
    $('.all_menu_wrap .header_gnb_menu nav .gnb_sub_menu > li.has3_depth > a').on('click', function(){
        //해당 a < li 이미 add on 일 때,
        if($(this).parent('li').hasClass('on')){
            $(this).parent('li').removeClass('on'); // 해당 li remove on
        }else{
        //해당 a < li add on 이 없으면,    
            $('.all_menu_wrap .header_gnb_menu .gnb_sub_menu > li').removeClass('on'); // 전체 gnb_sub_menu > li remove on
            $(this).parent('li').addClass('on'); // 해당 li add on
        }       
    });   

    //연계 사이트
    $('.linkage_box li a').on('click',function(e){
        e.preventDefault();

        if($(this).parent('li').hasClass('on')){
            $(this).parent('li').removeClass('on');
            $(this).next('.site_box').slideUp(500);
        }else{
            $('.linkage_box li').removeClass('on');
            $('.linkage_box .site_box').slideUp(500);
            $(this).parent('li').addClass('on');
            $(this).next('.site_box').slideDown(500);
        }        
    });

    /*main : tab01*/
    var tab_tit1 = $('.tab01 .guide_header ul.header li.active a').text();
    $('.tab01 .guide_header_m .select_btn').text(tab_tit1);
    var tab_tit2 = $('.tab02 .guide_header ul.header li.active a').text();
    $('.tab02 .guide_header_m .select_btn').text(tab_tit2);

	$('.guide_header ul.header li a:not(.guide_more_btn)').on('click', function(e) {

		var tab_tit = $(this).text();
        var tab_id = $(this).attr('data-tab');


        $(this).closest('.guide_header').find('li').removeClass('active');
        $(this).closest('.guide_wrap').find('.guide_box').removeClass('on');
        $(this).closest('.header').next('.guide_header_m .select_btn').text(tab_tit);		
		
		$(this).parent('li').addClass('active');
		$("." + tab_id).addClass('on');

        e.preventDefault();
	});

    $('.guide_header_m .select_box li a').on('click', function(e) {

		var tab_tit = $(this).text();
        var tab_id = $(this).attr('data-tab');

        $(this).closest('.guide_header_m').find('.select_btn').removeClass('on');
        $(this).closest('.guide_header_m').find('.select_btn').text(tab_tit);
        
        $(this).closest('.guide_header_m').prev('.header').find('li').removeClass('active');
        $(this).closest('.guide_wrap').find('.guide_box').removeClass('on');
        $(this).closest('.select_box').find('li').removeClass('active');

		$(this).parent('li').addClass('active');
		$("." + tab_id).addClass('on');
        $("." + tab_id + "Tit").addClass('active');        

        e.preventDefault();
	});

    $('.guide_header_m .select_btn').on('click',function(e){
        
        if($(this).hasClass('on')){
            $(this).removeClass('on');            
        }else{ 
            $(this).addClass('on');
        }
        
        e.preventDefault();
    });    

    /*main : tab02
    var tab_tit2 = $('.tab02 .guide_header ul.header li.active a').text();
    $('.tab02 .guide_header_m .select_btn').text(tab_tit2);

    $('.tab02 .guide_header ul.header li a:not(.guide_more_btn)').on('click', function(e) {
        var tab_tit = $(this).text();
		var tab_id = $(this).attr('data-tab');

		$('.tab02 .guide_header ul.header li').removeClass('active');
		$('.tab02 .guide_box').removeClass('on');
        $('.tab02 .guide_header_m .select_btn').text(tab_tit);
		
		$(this).parent('li').addClass('active');
		$("." + tab_id).addClass('on');

        e.preventDefault();
	});   

    $('.tab02 .guide_header_m .select_box li a').on('click', function(e) {

		var tab_id = $(this).attr('data-tab');
        var tab_tit = $(this).text();

        $('.tab02 .guide_header_m .select_btn').removeClass('on');
        $('.tab02 .guide_header_m .select_btn').text(tab_tit);

		$('.tab02 .guide_header ul.header li').removeClass('active');
		$('.tab02 .guide_box').removeClass('on');
		
        $('.tab02 .guide_header_m .select_box li').removeClass('active');

		$(this).parent('li').addClass('active');
		$("." + tab_id).addClass('on');
        $("." + tab_id + "Tit").addClass('active');        

        e.preventDefault();
	});	 

    $('.tab02 .guide_header_m .select_btn').on('click',function(e){
        
        if($(this).hasClass('on')){
            $(this).removeClass('on');            
        }else{ 
            $(this).addClass('on');
        }

        e.preventDefault();
    });*/

    // 퀵메뉴 열기/닫기
    $('.quick_colse_btn').on('click', function(e){

        if($(this).hasClass('on')){
            $(this).removeClass('on');
            $(this).next('.content-box').slideUp(200);            
        }else{ 
            $(this).addClass('on');
            $(this).next('.content-box').slideDown(200); 
        }
        
        e.preventDefault();
    });

    // url_content
    $('.url_content li:nth-child(2) > a').on('click', function(e) {
        e.preventDefault();
        
        if($(this).parent('li').hasClass('on')){
            $(this).parent('li').removeClass('on');
            $(this).next('.sns_list').slideUp(200);
        }else{
            $(this).parent('li').addClass('on');
            $(this).next('.sns_list').slideDown(200);
        }
    });

    //sub_location
    $('.page_location ').on('click',function(){

    });

    // function random(min, max) {
    //     return min + Math.random() * (max + 1 - min);
    // }
      
    // var body = document.querySelector('.visitor_num_box ');
    // var canvasSize = body.offsetWidth * body.offsetHeight;
    // var starsFraction = canvasSize / 2000;
      
    // for(var i = 0; i < starsFraction; i++) {
    //     // Set up random elements
    //     var xPos = random(0, 100);
    //     var yPos = random(0, 100);
    //     var alpha = random(0.5, 1);
    //     var size = random(0.2, 1);
    //     var colour = '#ffffff';
    //     // var speed = random(0, 10);
    //     // var transTop = random(0, 100);
            
    //     // Add them to the body
    //     var star = document.createElement('div');
    //     star.style.position = 'absolute';
    //     star.style.left = xPos + '%';
    //     star.style.top = yPos + '%';
    //     star.style.opacity = alpha;
    //     star.style.width = size + 'px';
    //     star.style.height = size + 'px';
    //     star.style.backgroundColor = colour;
    //     // star.animate([{top:"0%"}], 3000, 'infinite');
    //     // star.style.animationIterationCount = "infinite"   
    //     document.querySelector('.visitor_num_box').appendChild(star);
    // }

    
    // var className = ["v1", "v2", "v3", "v4", "v5", " "];

    // $(".visitor_num_box div").each(function(){
    //     $(this).addClass(className[~~(Math.random()*className.length)]);
    // });    
    
});

$(window).on('load',function(){
    //top 버튼
    $('.top_Btn').click(function(e){
        e.preventDefault();
        $('html,body').stop().animate({'scrollTop':'0'},500);
    });
});

$(window).scroll(function(){
    //1000px 이후
    if (matchMedia("screen and (min-width:1000.1px)").matches) {             
        $("#header").css('left', 0-$(this).scrollLeft());//header:min-width:1320px; 이므로 스크롤 움직인 만큼 이동 
    }else{
    //1000px 이전    
        $("#header").css({'left':'0'});//header:min-width:100%; 이므로 left:0;
    }

    mkShowVisible();
});

$(window).resize(function(){
    if (matchMedia("screen and (min-width:1000.1px)").matches) {        
        $('body').scroll(function(){  	
		    $("#header").css('left', 0-$(this).scrollLeft());//header:min-width:1320px; 이므로 스크롤 움직인 만큼 이동 
        });        
	}else {
        $("#header").css({'left':'0'});//header:min-width:100%; 이므로 left:0;
    }
});

function mkShowVisible(a){
    $('.history_list_wrap > li').each(function(){
        if( ($(window).scrollTop() + $(window).height()) > $(this).offset().top ){
            $(this).addClass('show');
        }
    });
}

function preventDefaultAnchor() {
    $(document).on('click', 'a[href="#"]', function(e) {
      e.preventDefault();
    });
}

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
      // $selector.find('span.bar').css({'animation-duration': timerSpeed + 'ms'}).addClass('on');
      $selector.find('.control a.play').addClass('on');
      isTimerOn = true;
    }
  
    function stopTimer() {
      clearTimeout(timerId);
      // $selector.find('span.bar').removeClass('on');
      $selector.find('.control a.play').removeClass('on');
      isTimerOn = false;
    }
  
    function resetTimer() {
      clearTimeout(timerId);
      // $selector.find('span.bar').removeClass('on');
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




    
    
