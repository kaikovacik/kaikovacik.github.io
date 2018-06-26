<<<<<<< HEAD
function set(var d)
{
    d = 5;
    return d;
}
=======
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
>>>>>>> 2632ebb6ec52eb308e7ec58e40f8a7ad6b4acfaa
