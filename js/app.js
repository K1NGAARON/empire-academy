// STICKY LARGE MENU
$(document).scroll(function() {
    const header = $('.header');

    if ($(this).scrollTop() > header.height()) {
        header.addClass('active');
    } else {
        header.removeClass('active');
    }
});

// SMALL MENU
$("#menu-toggle").click(function() {
    $(".small-menu-wrapper").toggle("active");
});