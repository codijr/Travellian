$(".owl-carousel").owlCarousel({
   margin: 32, /*Margin between carousel items */
   dots: false,
   loop: true,
   autoHeightClass: false,
   autoWidth: true,
   autoHeight: true,
   items: 6,
   nav: true,
   responsive: {
     100: {
       items: 2,
     },
     600: {
       items: 2,
     },
     1000: {
       items: 3,
     },
   },
 });