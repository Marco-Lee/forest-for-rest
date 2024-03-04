$(document).ready(function(){
    $(".navi>li>a").on("mouseenter",function(){
        $(".top").css({"background-color":"#fff"});
        $(".top").css({"border-bottom":"1px solid #808080"})
        $(".submenu").css({"border-left":"1px solid #808080"})
        // $(".submenu:nth-of-type(1)").css({"border-left":"none"})
        $(".navi>li>a").css({"color":"#7ed957"});
        $(".submenu").stop().slideDown(500);
        $("#bg_menu").stop().slideDown(500);
    });
    $(".navi").on("mouseleave",function(){
        $(".top").css({"background-color":"transparent"});
        $(".top").css({"border-bottom":"transparent"})
        $(".navi>li>a").css({"color":"#fff"});
        $(".submenu").stop().slideUp(300);
        $("#bg_menu").stop().slideUp(300);
    });


});