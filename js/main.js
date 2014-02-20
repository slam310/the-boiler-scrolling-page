// SLIDERS INIT
$(window).load(function() {
    function is_touch_device() {
        return !!('ontouchstart' in window) // works on most browsers 
                || !!('onmsgesturechange' in window); // works on ie10
    }
    ;
    // collapse menu after click on menu element (on mobile device)
    $(".navbar-collapse ul.nav.navbar-nav li a").click(function() {
        if ($(".navbar-collapse").hasClass("in")) {
            $("nav.navbar-collapse").collapse('hide');
        }
    });
    //scrollIt
    $(this).scrollTop(0);
    $.scrollIt();



});
$(window).bind('scroll', function() {
    if ($(window).scrollTop() > 940) {
        $('.navbar').css('position', 'fixed');
    }
    else {
        $('.navbar').css('position', 'relative');
    }
});

var revapi;

jQuery(document).ready(function() {

    revapi = jQuery('.tp-banner').revolution(
            {
                delay: 15000,
                startwidth: 940,
                startheight: 1200,
                hideThumbs: 0,
                autoHeight:"on",
                onHoverStop:"off",
                fullWidth: "on",
                fullScreen: "on",
                navigationStyle: "none"
            });

});	//ready
