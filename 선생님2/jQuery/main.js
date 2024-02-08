$(function(){
    // 메뉴

    $(".main>li").mouseover(function(){
        $(".sub").stop().show(0);
    })//

    $(".main>li").mouseout(function(){
        $(".sub").stop().hide(0);
    })//

    // 슬라이드

    $(".fade li").eq(0).siblings().hide();

    var n=0; // 0 1 2  3
    var count = $(".fade li").length ;
    // var count1 = $(".fade li").length-1 ;

    setInterval(function(){
        $(".fade li").eq(n).fadeOut();

        n = (n + 1) % count ; // 0 1 2 3
        
        $(".fade li").eq(n).fadeIn();

        // if(n == count1){
        //     n=0;
        // }else{
        //     n++;
        // }


        // n = (n + 1) % count ; // 0 1 2 3
        // $(".fade li").eq(n).siblings().fadeOut();
        // $(".fade li").eq(n).fadeIn();

    }, 2500)




    // tab
    $(".contents h2").click(function(){
        $(".contents h2").removeClass("on");
        $(this).addClass("on");

        $(".contents ul").removeClass("act");
        $(this).next().addClass("act")

    })//

    //  팝업
    $(".pop").hide();

    $(".p_click").click(function(){
        $(".pop").show();
    })//
    $(".close").click(function(){
        $(".pop").hide();
    })//



})//