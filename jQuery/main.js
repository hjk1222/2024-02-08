$(function(){

    //메뉴
    $(".main > li").mouseover(function(){
        // $(this).children(".sub").stop().slideDown();
        // find, children이 아님!!
        $(".sub").stop().show(0);
    })
    $(".main > li").mouseout(function(){
        $(".sub").stop().hide(0);
    })

    //이미지슬라이드 (페이드인아웃 구현)
    $(".fade li").eq(0).siblings().hide();
    // 0번 외의 형제들 다 하이드 시키기 (겹쳐있음 앱솔시켜서)
    var n = 0; //0 1 2 3
    // var count = $(".fade li").length -1; 
    //0번부터 새니까 양수 1개 빼줘야함
    var count = $(".fade li").length; 

    setInterval(function(){
        $(".fade li").eq(n).fadeOut();
        n = (n + 1) % count ; //0 1 2 3 . 나머지
        $(".fade li").eq(n).fadeIn();

//방법2 - 페이드
        // n = (n+1) % count;
        //0 1 2 3
        // $(".fade li").eq(n).siblings().fadeOut();
        // $(".fade li").eq(n).fadeIn();

        //
    },3000)




    //탭메뉴
    // (제목 h2)
    $(".contents h2").click(function(){
        $(".contents h2").removeClass("on");
        $(this).addClass("on")

    // (컨텐츠 ul)
        $(".contents ul").removeClass("act");
        $(this).next().addClass("act")
    })//탭클릭



    //팝업
    $(".pop").hide();
    // css에서 display 논안했으면 스크립트에서 안뜨게

    $(".p_click").click(function(){
        $(".pop").show()
        // show() 안에 숫자나 속도 적어주기ㅇㅋ
    })

    $(".close").click(function(){
        $(".pop").hide()
    })

})//jquery