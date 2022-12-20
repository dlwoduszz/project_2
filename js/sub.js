$(document).ready(function(){

    

    //왼쪽을 누르면 오른쪽으로 이동//
    
    
    var i=0
     $(".news_slide li:last").eq(i);

    $('.news_slide li').eq(i).click(function(){
        $('.news_slide li:last').prependTo('.news_slide');
        $('.news_slide').css({'margin-left':'-120%'});
        $('.news_slide').animate({'margin-left':'-50%'},500);
        
    })

    //오른쪽을 누르면 왼쪽으로 이동//
    $('.news_slide li').eq(i+2).click(function(){
        $('.news_slide').animate({'margin-left':'-120%'},500,function(){
            $('.news_slide li').eq(i).appendTo('.news_slide');
            $('.news_slide').stop().css({'margin-left':'-50%'});
        });
        
        
    })





    
});