$(document).ready(function() {

        $(window).scroll(function() {

            $('#slide-l-container').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+800) {
                    $(this).addClass("slideLeft");
                }

                });


            $('#slide-r-container').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+600) {
                    $(this).addClass("slideRight");
                }

            });


            $('.cta-l').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+700) {
                    $(this).addClass("expandUp");
                }

            });

        });



        $(function() {
            var pull        = $('.menu');
                menu        = $('.nav');
                menuHeight  = menu.height();
         
            $(pull).on('click', function(e) {
                e.preventDefault();
                menu.slideToggle();
            });

            $(window).resize(function(){
            var w = $(window).width();
            if(w > 1024 && menu.is(':hidden')) {
                menu.removeAttr('style');
            }
        }); 
        
}); 

});