$(document).ready(function () {
    //fullpage js
    var myFullpage = new fullpage('#fullpage', {
        verticalCentered: false,
        css3: true
    });


    //owl carousel
    var owl = $('#hero__slider');
    owl.owlCarousel({
        loop: true,
        nav: true,
        items: 3,
        autoplay: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            1024: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    });

    //owl carousel
    var owl = $('#stories__slider');
    owl.owlCarousel({
        loop: true,
        nav: true,
        autoplay: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            1024: {
                items: 4,
                nav: true,
                loop: false
            },
            1200: {
                items: 5,
                nav: true,
                loop: false
            }
        }
    });

    //menu
    const menu = document.querySelector('.menu');
    const btn = menu.querySelector('.nav-tgl');
    btn.addEventListener('click', evt => {
        menu.classList.toggle('active');
    })

    //aos
    AOS.init({
        duration: 1200,
    })

});
