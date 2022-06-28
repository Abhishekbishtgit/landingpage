
    $(window).scroll(function() {
    if ($(window).scrollTop() > ($(window).height() / 2)) {
    $('.scrollToTopBtn').fadeIn("slow");
    } else {
    $('.scrollToTopBtn').fadeOut("slow");
    }
    });
    
    $('.scrollToTopBtn').on("click", function() {
    
    $(window).scrollTop(0);
    });
