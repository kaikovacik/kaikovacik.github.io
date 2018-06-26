(function($) {          
    $(document).ready(function(){                    
        $(window).scroll(function(){                          
            if ($(this).scrollTop() > 1000) {
                $('.nav-bar').css('position', 'fixed');
            } else {
                $('.nav-bar').css('position', 'static');
            }
        });
    });
})(jQuery);