$(document).ready(function(){

    $(".wrap_fullpage").fullpage({

        navigation:true,
    });

    // swiper-slide for .wrap_fullpage > .wrap_mainvisual > .box_mainvisual > .box_slide

    const swiper = new Swiper(".swiper", {

        loop:true,
        pagination:{
            el: ".swiper-pagination"
        },
        navigation:{
            nextEl:".swiper-button-next",
            prevEl:".swiper-button-prev",
        },
    });


});