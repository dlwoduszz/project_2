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
            setInterval(function(){
                $('.social_slide li').find('span').toggle()
                },1800)

            
            var social_slide_click =
            $('.social_slide li').click(function () {
                $(this).css('opacity','1')
                $(this).siblings().css('opacity', '0.4')
                $(this)
            })

            
           

            $('.social_slide li').eq(0).click(function () {
                $('.social_slide').animate({ 'margin-left': '28%' }, 350);
                social_slide_click;
            })
            $('.social_slide li').eq(1).click(function () {
                $('.social_slide').animate({ 'margin-left': '-36%' }, 350);
                social_slide_click;
            })
            $('.social_slide li').eq(2).click(function () {
                $('.social_slide').animate({ 'margin-left': '-100%' }, 350);
                social_slide_click;
            })
            $('.social_slide li').eq(3).click(function () {
                $('.social_slide').animate({ 'margin-left': '-164%' }, 350);
                social_slide_click;
            })
            

        }

    }


    window.addEventListener('resize', detectMediaSize, false);

    detectMediaSize();



});