/*=================================
        Preloader
===================================*/

$(window).on("load", function () {
    $("#status").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
})


/*=================================
        Team
===================================*/

$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class=" fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0:{
                // breakpoint from 0 up
                items:1
            },
            480:{
                // breakpoint from 480 up
                items:2
            }
        }
       
    });
});


/*=================================
        Progress
===================================*/

$(function () {

    $("#progress-elements").waypoint(function () {
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000)

        });
        this.destroy();
    }, {
        offset: "bottom-in-view"
    });

});



/*=================================
        Services
===================================*/

$(function () {

    $("#services-tabs").responsiveTabs({
        animation: "slide"
    });

});


/*=================================
        Portfolio
===================================*/

$(window).on("load", function () {

    //Initialize Isotope
    $("#isotope-container").isotope({

    });

    // filter items on button click 
    $("#isotope-filters").on("click", "button", function () {

        // get filter value
        var filterValue = $(this).attr("data-filter");

        // filter portfolio
        $("#isotope-container").isotope({
            filter: filterValue
        });

        // active button

        $("#isotope-filters").find(".active").removeClass("active");
        $(this).addClass("active");


    });
});

/* Portfolio Popup */

$(function () {
    $('#portfolio-wrapper').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
})


/*=================================
        Testimonials
===================================*/

$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class=" fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});

/*=================================
        Stats
===================================*/

$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});


/*=================================
        Clients
===================================*/

$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class=" fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive:{
            0:{
                // breakpoint from 0 up
                items:2
            },
            480:{
                // breakpoint from 480 up
                items:3
            },
            768:{
                // breakpoint from 768 up
                items:6
            }
        }
    });
});


/*=================================
        Google Map
===================================*/

$(window).on("load", function () {

    //Map Variable
    var addressString = "230 Broadway, New York, NY 10007";
    var myLatLng = {
        lat: 40.680050,
        lng: -73.417458
    };

    //1. Render Map
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: myLatLng
    });

    //1. Add Marker
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: "Click to see address"
    });

    //3. Add Info Window  
    var infowindow = new google.maps.InfoWindow({
        content: addressString
    });

    //4. Show info window when user clicks marker
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });

});

/*=================================
        Navigatipon
===================================*/
$(function () {

    //Calling in page load
    showHideNav();

    $(window).scroll(function () {

        //Calling on window's Scroll 
        showHideNav();

    });

    function showHideNav() {
        if ($(window).scrollTop() > 50) {
            //Show White nav
            $("nav").addClass("white-nav-top");

            //Show dark logo
            $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");

            //Show back to top button
            $("#back-to-top").fadeIn();

        } else {

            //Hide White nav
            $("nav").removeClass("white-nav-top");

            //Hide dark logo
            $(".navbar-brand img").attr("src", "img/logo/logo.png");

            //Hide back to top button
            $("#back-to-top").fadeOut();
        }
    }

})

// Smooth scrolling

S(function () {
    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

        // get section id #about , #service , #work , #team and etc.
        var section_id = $(this).attr("href");

        $("html,body").animate({
            scrollTop: $(section_id).offset().top
        }, 1250, "easeInOutExpo")

    });
});