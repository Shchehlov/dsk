$(document).ready(function(){
    
    $('.header_slider').slick({
        responsive: [
            {
                breakpoint: 970,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ]
    });
    
    $('select').styler();
    
    var used;
    $('.menu .first_lvl li a').click(function(e){
        if ($(this).parent().hasClass('arrow')){
            if( used !== this) used = this, e.preventDefault();
        }
        $(this).parent().toggleClass('active');
        $(this).parent().find('.second_lvl').slideToggle();
    });
    
    $('.menu_mob_btn').click(function(){
        if($(window).width() <700){
            var minusBool = 69;
        } else{
            var minusBool = 139;
        }
        $('.menu').height($(window).height()-minusBool);
        $('body').toggleClass('noscroll');
        $('.menu_ico,.menu_mob_btn').toggleClass('active');
        $('.menu').slideToggle();
    });
    
    $('.contacts_page .table_tab').click(function(){
        $(this).next('.table_hide,.table_second').slideToggle();
    });
    
    $('.link_slider').slick({
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
    if($(window).width() < 500){
        $('.link_slider').slick('unslick');
    }
    
    $(".fancybox").fancybox({
        helpers : {
            title : {
                type : 'inside'
            }
        },
        afterLoad : function() {
            this.title = (this.title ? '  ' + this.title : '') + '</br><span style="color:#fff;font:15px Rubik-Bold;position:relative;top: 20px;">' + 'Фото ' + (this.index + 1) + ' из ' + this.group.length ;
        }
    });
    
    if($(window).width() < 1300){
        $('.news_page .calendar').appendTo('.news_page .calendar_mob');
    }
    
    $('.structure_bl .second_lvl').on('click',function(){
        $(this).toggleClass('show');
        $(this).next().slideToggle();
    });
    
});