$(document).ready(function(){


// menmenu start


// jQuery('.menu').meanmenu({
//     meanMenuContainer: '#mobile-menu',
//     meanMenuOpen: "<span></span><span></span> <span> </span>",
//     meanScreenWidth: 1050,
// })

$('.fa-bars').click(function(){
    $('.main-menu').slideToggle(200);
})

// menmenu start


// owl carousel start

$('.slider-active.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    navText:['<i class="fas fa-angle-left fa-2x"></i>','<i class="fas fa-angle-right fa-2x"></i>'],
    items:1
      
});



// owl carousel end

// project section start
$('.project.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    autoplay:true,
    autoplayTimeout:5000,
    navText:['<i class="fas fa-angle-left fa-2x"></i>','<i class="fas fa-angle-right fa-2x"></i>'],
    responsive:{
        0: {
            items:1
        },
        768:{
            items:2
        },
        1000:{
            items:4
        }
    }
});

// project section end

// blog slider start
$('.blog-wrapper.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    autoplay:true,
    autoplayTimeout:4000,
    navText:['<i class="fas fa-angle-left fa-2x"></i>','<i class="fas fa-angle-right fa-2x"></i>'],
    items:1
});

// blog slider end

// brand logo start

$('.brand-logo.owl-carousel').owlCarousel({
    margin:40,
    responsive:{
        0: {
            items:3
        },
        800:{
            items:4
        },
        1000:{
            items:5
        }
    }
      
});

// testimonial-wrapper owl start

// testimonial-wrapper owl start

// magnificpopup start

$('.video').magnificpopup({
    type:'ifream'
})





























})