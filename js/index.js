$(document).ready(function(){
        
    // 사이드네비게이션
    $("header button").click(function(){
        if($("nav").css('left') == '-630px'){
            $("nav").css('left','-300px').css('transition','0.5s');
            $("header .nav_box").css('background','rgba(0, 0, 0, 0.3)').css('transition','0.5s');
        }else{
            $("header .nav_box").css('background','none').css('transition','0.5s');
            $("nav").css('left','-630px').css('transition','0.5s');                
        }
    });
    $("header .nav_box").click(function(){
        $(this).fadeOut().css('display','none');
        $("nav").css('left','-630px').css('transition','0.5s'); 
    })


    $(".section1_btn button").click(function(){        
        $(".section1_btn button").removeClass('pink_btn');
        $(this).addClass('pink_btn');
    });


    $(".section1_btn button:nth-of-type(1)").click(function(){
        $("#section1>div:nth-of-type(1)").css('display','block').css('transition','0.5s'); 
        $("#section1>div:nth-of-type(2)").css('display','none');
        $("#section1>div:nth-of-type(3)").css('display','none');
        
    })
    $(".section1_btn button:nth-of-type(2)").click(function(){
        $("#section1>div:nth-of-type(2)").css('display','block').css('transition','0.5s'); 
        $("#section1>div:nth-of-type(3)").css('display','none');
        $("#section1>div:nth-of-type(1)").css('display','none');
    })
    $(".section1_btn button:nth-of-type(3)").click(function(){
        $("#section1>div:nth-of-type(3)").css('display','block').css('transition','0.5s'); 
        $("#section1>div:nth-of-type(2)").css('display','none');
        $("#section1>div:nth-of-type(1)").css('display','none');
    })


    // $('.banner_inner').css({marginLeft:'-100%', transition:'5s'},function(){
        
    // });
});


// $('.banner_inner p').eq(0).append('.banner_inner');