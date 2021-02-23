var owl = $('.owl-carousel');
owl.owlCarousel({
    loop:true,
    nav:false,
    stagePadding: 30,
    margin:10,
    lazyLoad: true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        400:{
            items:2
        },
        600:{
            items:4
        },            
        960:{
            items:5
        },
        1200:{
            items:5
        }
    }
});
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});