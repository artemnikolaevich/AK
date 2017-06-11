$('.owl-carousel').owlCarousel({
    margin:10,
    loop:true,
    autoWidth:true,
    items:4
})


$("#my-menu").mmenu({
    "offCanvas": {
        "position": "right"
    },
    "extensions": [
        "pagedim-white",
        "fx-menu-slide",
        "fx-panels-slide-100",
        "fx-listitems-slide",
        "theme-white"
    ],
    navbar:{
        title:'Iphone7.by menu'
    }});

var api = $('#my-menu').data('mmenu');
    api.bind( "open:start", function() {
        $('.hamburger').addClass('is-active');
    }).bind("close:finish", function (){
        $('.hamburger').removeClass('is-active')
    });



// смена background