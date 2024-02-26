$(document).ready(function(){
    $(".main1").on("click",function(){
        $(".menu-page2").removeClass("active");
        $(".menu-page3").removeClass("active");
        $(".menu-page4").removeClass("active");
        $(".menu-page1").addClass("active");
    })
    $(".close-btn1").on("click",function(){
        $(".menu-page1").removeClass("active");
    })

    $(".main2").on("click",function(){
        $(".menu-page1").removeClass("active");
        $(".menu-page3").removeClass("active");
        $(".menu-page4").removeClass("active");
        $(".menu-page2").addClass("active");
    })
    $(".close-btn2").on("click",function(){
        $(".menu-page2").removeClass("active");
    })

    $(".main3").on("click",function(){
        $(".menu-page1").removeClass("active");
        $(".menu-page2").removeClass("active");
        $(".menu-page4").removeClass("active");
        $(".menu-page3").addClass("active");
    })
    $(".close-btn3").on("click",function(){
        $(".menu-page3").removeClass("active");
    })

    $(".main4").on("click",function(){
        $(".menu-page1").removeClass("active");
        $(".menu-page2").removeClass("active");
        $(".menu-page3").removeClass("active");
        $(".menu-page4").addClass("active");
    })
    $(".close-btn4").on("click",function(){
        $(".menu-page4").removeClass("active");
    })

});