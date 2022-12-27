$(document).ready(function () {


    function detectMediaSize() {

        if (window.matchMedia("(min-width: 501px)").matches) {
            
            ///news//
            var news_slide_click =
                $('.news_slide li').click(function () {
                    $(this).css('opacity', '1')
                    $(this).siblings().css('opacity', '0.3')
                })

            $('.news_slide li').eq(0).click(function () {
                $('.news_slide').animate({ 'margin-left': '20%' }, 350);
                news_slide_click;
            })
            $('.news_slide li').eq(1).click(function () {
                $('.news_slide').animate({ 'margin-left': '-55.5%' }, 350);
                news_slide_click;
            })
            $('.news_slide li').eq(2).click(function () {
                $('.news_slide').animate({ 'margin-left': '-130%' }, 350);
                news_slide_click;
            })
    



            ///social//
            
            
            $('.social_slide li').hover(function(){
                $(this).find('span').show();
            },function(){
                $(this).find('span').hide();
            })

            var social_slide_click =
            $('.social_slide li').click(function () {
                $(this).css('opacity','1')
                $(this).siblings().css('opacity', '0.4')
            })

            
            
            $('.social_slide li').eq(0).click(function () {
                $('.social_slide').animate({ 'margin-left': '28%' }, 350,function(){
                    $('.social_slide li').children('a').removeAttr('href')
                    $('.social_slide li').eq(0).children('a').attr('href','https://www.facebook.com/chupachups.spain')
                });
                
                social_slide_click;
            })

            $('.social_slide li').eq(1).click(function () {
                $('.social_slide').animate({ 'margin-left': '-36%' }, 350,function(){
                    $('.social_slide li').children('a').removeAttr('href')
                    $('.social_slide li').eq(1).children('a').attr('href','https://www.instagram.com/chupachups_es')
                });
                social_slide_click;
            })

            $('.social_slide li').eq(2).click(function () {
                $('.social_slide').animate({ 'margin-left': '-100%' }, 350, function(){
                    $('.social_slide li').children('a').removeAttr('href')
                    $('.social_slide li').eq(2).children('a').attr('href','https://twitter.com/chupachups_esp')
                });
                social_slide_click;
            })

            $('.social_slide li').eq(3).click(function () {
                $('.social_slide').animate({ 'margin-left': '-164%' }, 350,function(){
                    $('.social_slide li').children('a').removeAttr('href')
                    $('.social_slide li').eq(3).children('a').attr('href','https://www.youtube.com/user/ChupaChupsEs')
                });
                social_slide_click;
            })
            

        }
        
        
        else if(window.matchMedia("(max-width: 500px)").matches){

        $('.social_slide li').eq(0).click(function () {
                $('.social_slide li').eq(0).children('a').attr('href','https://www.facebook.com/chupachups.spain')
        })

        $('.social_slide li').eq(1).click(function () {
                $('.social_slide li').eq(1).children('a').attr('href','https://www.instagram.com/chupachups_es')
        })

        $('.social_slide li').eq(2).click(function () {
                $('.social_slide li').eq(2).children('a').attr('href','https://twitter.com/chupachups_esp')
        })

        $('.social_slide li').eq(3).click(function () {
                $('.social_slide li').eq(3).children('a').attr('href','https://www.youtube.com/user/ChupaChupsEs')
        })
        }




        $('.product_container>div').eq(0).find('.about').slideDown(1100);
        $('.product_container>div').eq(0).find('.about').slideUp(1100);

        $('.product_container>div').click(function(){
            $(this).find('.about').slideToggle(1100);
            $(this).siblings().click(function(){
                $(this).siblings().find('.about').slideUp(1100);
            });
        })


    }


    window.addEventListener('resize', detectMediaSize, false);

    detectMediaSize();



});