$(function() {
    $('.scroll-one').click (function() {
        $('html, body').animate({scrollTop: $('#timeline').offset().top }, 'slow');
        return false;
    });
});

$(function() {
    $('.scroll-two').click (function() {
        $('html, body').animate({scrollTop: $('#examples-of-purchases').offset().top }, 'slow');
        return false;
    });
});

$(function() {
    $('.scroll-three').click (function() {
        $('html, body').animate({scrollTop: $('#cost-of-delivery').offset().top }, 'slow');
        return false;
    });
});

$(function() {
    $('.scroll-four').click (function() {
        $('html, body').animate({scrollTop: $('#auction').offset().top }, 'slow');
        return false;
    });
});