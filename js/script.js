$(document).ready(function(){

    $(".wrap_fullpage").fullpage({

        navigation:true,
        

        afterLoad:function(origin, destination, direction){
            if(destination.index == 1){
                $(".wrap_fullpage > .wrap_section01 > .box_section01 > .box_layout_content > .box2depth_layout_content > .box_cover_content > .box_content").addClass("active");
            } else if(destination.index == 2){
                $(".wrap_fullpage > .wrap_section02 > .box_section02 > .box_layout_content > .box2depth_layout_content > .box_cover_content > .box_content").addClass("active");
            } else if(destination.index == 3){
                $(".wrap_fullpage > .wrap_section03 > .box_section03 > .box_layout_content > .box_cover_content > .box_content").addClass("active");
            }
        },

        onLeave:function(origin, destination, direction){
            if(origin.index == 1){
                $(".wrap_fullpage > .wrap_section01 > .box_section01 > .box_layout_content > .box2depth_layout_content > .box_cover_content > .box_content").removeClass("active");
            } else if(origin.index == 2){
                $(".wrap_fullpage > .wrap_section02 > .box_section02 > .box_layout_content > .box2depth_layout_content > .box_cover_content > .box_content").removeClass("active");
            } else if(origin.index == 3){
                $(".wrap_fullpage > .wrap_section03 > .box_section03 > .box_layout_content > .box_cover_content > .box_content").removeClass("active");
            }
        },


    });

    // swiper-slide for .wrap_fullpage > .wrap_mainvisual > .box_mainvisual > .box_slide

    const swiper = new Swiper(".view_pc .swiper", {

        loop:true,
        pagination:{
            el: ".view_pc .swiper-pagination",
            type:"fraction",
        },
        navigation:{
            nextEl:".view_pc .swiper-button-next",
            prevEl:".view_pc .swiper-button-prev",
        },
        autoplay:{
            delay:5000,
        },
    });
    $(".wrap_fullpage > .wrap_mainvisual > .box_mainvisual > .box_layout_slide > .box_button_page > .icon.pause").click(function(){
        swiper.autoplay.stop();
    });
    $(".wrap_fullpage > .wrap_mainvisual > .box_mainvisual > .box_layout_slide > .box_button_page > .icon.play").click(function(){
        swiper.autoplay.start();
    });

    const swiper_mo = new Swiper(".view_mo .swiper", {

        loop:true,
        pagination:{
            el: ".view_mo .swiper-pagination",
            type:"fraction",
        },
        navigation:{
            nextEl:".view_mo .swiper-button-next",
            prevEl:".view_mo .swiper-button-prev",
        },
        autoplay:{
            delay:5000,
        },
    });
    $(".wrap_fullpage > .wrap_mainvisual_mo > .box_mainvisual > .box_layout_slide > .box_button_page > .icon.pause").click(function(){
        swiper.autoplay.stop();
    });
    $(".wrap_fullpage > .wrap_mainvisual_mo > .box_mainvisual > .box_layout_slide > .box_button_page > .icon.play").click(function(){
        swiper.autoplay.start();
    });


    // .box_footer
    $(".wrap_fullpage > .wrap_section04 > .box_footer > .box2depth_footer > .box_layout_content_footer.right > .box_outerlink").click(function(){
        var test;
        test = $(".wrap_fullpage > .wrap_section04 > .box_footer > .box2depth_footer > .box_layout_content_footer.right > .box_outerlink > .box_list").hasClass("active");

        if(test == true){
            $(".wrap_fullpage > .wrap_section04 > .box_footer > .box2depth_footer > .box_layout_content_footer.right > .box_outerlink > .box_list").removeClass("active");
        } else{
            $(".wrap_fullpage > .wrap_section04 > .box_footer > .box2depth_footer > .box_layout_content_footer.right > .box_outerlink > .box_list").addClass("active");
        };
    });


});