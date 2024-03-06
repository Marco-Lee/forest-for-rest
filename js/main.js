$(document).ready(function(){
    
    $(".navi>li").on("mouseenter",function(){
       
        $(window).on("scroll",function(){
            var scroll=$(this).scrollTop();                   
            if(scroll<2){
                 $(".top").css({"background-color":"white"})
                
                 $(".navi>li>a").css({"color":"#000"})
            }               
        })

        $(".top").css({"background-color":"#fff"})
        $(".top").css({"border-bottom":"2px solid #eee"})
        $(".navi>li>a").css({"color":"#7ed957"})


        $(".submenu").stop().slideDown(200);
        $("#bg_menu").stop().slideDown(200);
    });


    $(".navi>li").on("mouseleave",function(){
        $(window).on("scroll",function(){
            var scroll=$(this).scrollTop();                   
            if(scroll<2){
                 $(".top").css({"background-color":"white"})
                
                 $(".navi>li>a").css({"color":"#000"})
            }               
        })
        
        $(".top").css({"background-color":"transparent"})
        $(".top").css({"border-bottom":"transparent"})
        $(".navi>li>a").css({"color":"#fff"})

        $(".submenu").stop().slideUp(200);
        $("#bg_menu").stop().slideUp(200);
    });


    $(window).on("scroll",function(){
        var scroll=$(this).scrollTop();


        console.log(scroll);
        // if(scroll=0){
        //      $(".top").css({"background-color":"transparent"})
        //      $(".top").css({"border-bottom":"transparent"})
        //      $(".navi>li>a").css({"color":"#fff"})
        // }

        if(scroll>300){
            $(".top").css({"background-color":"#fff"})
            $(".top").css({"border-bottom":"2px solid #eee"})
            $(".navi>li>a").css({"color":"#7ed957"});
        }else{
            $(".top").css({"background-color":"transparent"})
            $(".top").css({"border-bottom":"transparent"})
            $(".navi>li>a").css({"color":"#000"})
        }
    })


    // $(window).on("scroll",function(){
    //     var scroll=$(this).scrollTop();

    //     if(scroll=0){                
    //         $(".top").css({"background-color":"transparent"})
    //         $(".top").css({"border-bottom":"transparent"})
    //         $(".navi>li>a").css({"color":"#000"})
    //     }
    // });


});