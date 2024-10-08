(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('bg-primary shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('bg-primary shadow-sm').css('top', '-150px');
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    



    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        dots: true,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });
    
})(jQuery);

const scroll = document.querySelector('.partners-scroll');

scroll.addEventListener('animationiteration', () => {
  scroll.style.animation = 'none';
  scroll.offsetHeight; // Trigger reflow
  scroll.style.animation = null;
});

document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', function() {
        const icon = this.querySelector('.icon');
        
        document.querySelectorAll('.icon').forEach(i => {
            if (i !== icon) {
                i.classList.remove('rotate');
                i.src = 'img/plus-icon.png'; // Reset other icons to plus
            }
        });

        if (icon.classList.contains('rotate')) {
            icon.classList.remove('rotate');
            icon.src = 'img/plus-icon.png';
        } else {
            icon.classList.add('rotate');
            icon.src = 'img/minus-icon.png';
        }
    });
});
