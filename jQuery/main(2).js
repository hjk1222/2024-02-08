$(function(){

    //메뉴
    $(".main>li").mouseover(function(){
        $(".sub").stop().show(0);
    })//

    $(".main>li").mouseout(function(){
        $(".sub").stop().hide(0);
    })//



    //슬라이드이미지 (페이드)
    // 1. 본인 0번 이미지 제외한 전부는 하이드 시키기.
    $(".fade li").eq(0).siblings().hide();

    // 2.변수 선언
    var n = 0; //0 1 2 (3장)

    // 3. 카운트
    var count = $(".fade li").length;
    
    // 4.셋인터벌
    setInterval(function(){
        $(".fade li").eq(n).fadeOut();
        n = (n+1) % count;
        $(".fade li").eq(n).fadeIn();

    },3000)//


    //탭메뉴
    $(".contents h2").click(function(){
        // 제목
        $(".contents h2").removeClass("on");
        $(this).addClass("on")

        //내용
        $(".contents ul").removeClass("act");
        $(this).next().addClass("act")
    })//


    //팝업
    $(".pop").hide();

    $(".p_click").click(function(){
        $(".pop").show();
    })//

    $(".close").click(function(){
        $(".pop").hide();
    })//

})//jquery