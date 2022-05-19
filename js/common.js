$(document).ready(function(){
    

    //preventDefaultAnchor();
    var winW = $(window).outerWidth();
    
    $('#header .header_gnb_menu nav > ul > li > a').on('mouseenter focus', function(){
        $('#header .header_gnb_menu nav > ul > li').removeClass('on');
        $(this).parents('li').addClass('on');

        $('#header .gnb_sub_menu').addClass('on');
        $('#header .header_gnb_bg').addClass('on');
    });

    //header pc > gnb_sub_menu li a : mouseenter, focus 일 때 
    $('.header_gnb_menu.pc .gnb_sub_menu, .header_gnb_menu.pc .gnb_sub_menu > li > a').on('mouseenter focus', function(){
        
        $('#header .header_gnb_menu nav > ul > li').removeClass('on');
        $(this).parents('li').addClass('on');
    });

    //header pc : mouseleave 일 때 
    $('#header .header_gnb_menu').on('mouseleave', function(){
        $('#header .header_gnb_menu nav > ul > li').removeClass('on');

        $('#header .gnb_sub_menu').removeClass('on');
        $('#header .header_gnb_bg').removeClass('on');
    });   

    //header pc : last li a focusout 일 때 
    $('#header .header_gnb_menu nav > ul > li').last().find('a').last().on('focusout', function(){
        $('#header .header_gnb_menu nav > ul > li').removeClass('on');

        $('#header .gnb_sub_menu').removeClass('on');
        $('#header .header_gnb_bg').removeClass('on'); 
    });
    
    
    //전체메뉴 보기 클릭 시(퀵메뉴), Atype 
    $('.allMenu_quick_btn').on('click', function(){
        
        $('#header').addClass('flex');
        $('.quick_menu').addClass('hide');
        $('body').addClass('is-open'); 
        $('.all_menu_wrap').addClass('a_type');
        $('.all_menu_wrap').fadeIn(200);

        if(winW > 768){          
            $('.all_menu_wrap nav > ul > li > ul').innerHeight('908px');
        }else if(winW <= 768 ){               
            $('.all_menu_wrap nav > ul > li > ul').innerHeight('auto');
        }        
    });   

    //전체메뉴 보기 클릭 시(header), Btype
    $('.all_menu_btn').on('click', function(){        
        $('#header').addClass('flex');
        $('.quick_menu').addClass('hide');
        $('body').addClass('is-open');
        $('.all_menu_wrap').addClass('b_type');
        $('.all_menu_wrap').fadeIn(200);        

        if(winW > 768){          
            $('.all_menu_wrap nav > ul > li > ul').innerHeight('908px');
        }else if(winW <= 768 ){               
            $('.all_menu_wrap nav > ul > li > ul').innerHeight('auto');
        }  
    });

    // 전체메뉴 닫기 버튼 클릭 시, 타입별
    $('.all_close_menu_btn').on('click', function(){
        $('#header').removeClass('flex');
        $('.quick_menu').removeClass('hide');
        $('body').removeClass('is-open');
        $('.all_menu_wrap').fadeOut(200);

        //a type 일 때,
        if($('.all_menu_wrap').hasClass('a_type')){
            $('.all_menu_wrap').removeClass('a_type');
        }else{ 
        //b type 일 때,          
            $('.all_menu_wrap').removeClass('b_type');
            $('.all_menu_btn').addClass('show');
        }        
    });    


    // mobile 일 때, first li의 gnb_sub_menu : show
    $('.all_menu_wrap .header_gnb_menu nav > ul > li:first-child').addClass('on');
   
    var has3_depth = $('.all_menu_wrap .gnb_sub_menu > li:has(.gnb_sub_3depth)');
    $(has3_depth).addClass('has3_depth');

    // mobile 일 때, li > a click, focus 일 때 해당 gnb_sub_menu : show
    $('.all_menu_wrap .header_gnb_menu nav > ul > li > a').on('click focus', function(){
        $('.all_menu_wrap .header_gnb_menu nav > ul > li').removeClass('on');
        $(this).parent('li').addClass('on');
    });

     // mobile 일 때, .gnb_sub_menu li > a click, focus 일 때 해당 gnb_sub_menu : show
    $('.all_menu_wrap .header_gnb_menu nav .gnb_sub_menu > li.has3_depth > a').on('click', function(){
        
        if($(this).parent('li').hasClass('on')){
            $(this).parent('li').removeClass('on');
        }else{
           
            $('.all_menu_wrap .header_gnb_menu .gnb_sub_menu > li').removeClass('on');
            $(this).parent('li').addClass('on');
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
        $("#header").css('left', 0-$(this).scrollLeft());
    }else{
    //1000px 이전    
        $("#header").css({'left':'0'});
    }

    mkShowVisible();
});

$(window).resize(function(){
    var winW = $(window).outerWidth(); 

    if(winW > 768){            
        $('.all_menu_wrap nav > ul > li > ul').innerHeight('908px');            
    }else if(winW <= 768 ){            
        $('.all_menu_wrap nav > ul > li > ul').innerHeight('auto');
    } 

    if (matchMedia("screen and (min-width:1000.1px)").matches) {        
        $('body').scroll(function(){  	
		    $("#header").css('left', 0-$(this).scrollLeft());
        });        
	}else {
        $("#header").css({'left':'0'});
    }
});

function mkShowVisible(){
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



