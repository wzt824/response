$(function(){
 

    //点击出现左边菜单栏
    let count = 0;
    $(".icon-caidan").click(function() {
        count++;
        if(count%2!=0){
            $(".leftBox").css({"left":"0"});
        }else{
            $(".leftBox").css({"left":"-240px"});
        }
    });

    // //固定部分特效
    // //1.hr效果
    // let nav_uls = $(".nav_uls")[0].children;
    // for(let i=0;i<nav_uls.length;i++){
    //     nav_uls[i].onmouseenter=function(){
    //         num=i*79;
    //         $(".hrs")[0].style.left = parseInt(366 + num) + "px";
    //     }
    //     nav_uls[i].onmouseleave=function(){
    //         $(".hrs")[0].style.left = parseInt(366 + i*79) + "px";
    //     }
    //     //2.点击效果
    //     nav_uls[i].onclick = function(){
    //         for(let j=0;j<nav_uls.length;j++){
    //             nav_uls[j].firstElementChild.className = "";
    //             this.firstElementChild.className = "active";
    //         }
        
    //     }  
    // }

    //新闻滚动
    let ols =$(".ols")[0].children;
    let tops = 0;
    setInterval(function(){
        tops-=30;
        
        if(Math.abs(tops) >= ols.length*30){
            tops = 0;
        }
        $(".ols")[0].style.cssText = "top: " + tops + "px;transition:.5s";
    },2500);
    //点击打开网页
    let openWeb = $(".icon-angle-down")[0];
    openWeb.onclick = function(){
        location.href="#two";
    }

    //two  业务
    let _two_uls = $(".two_uls")[0].children;
    for(let i=0;i<_two_uls.length;i++){
        _two_uls[i].onmouseenter = function(){
            $(this).find(".two_ul_box").css({"display":"block"})
            $(this).find(".two_ul_box").animate({
                "top":"0%"
            },240);
        }
        _two_uls[i].onmouseleave = function(){
            $(this).find(".two_ul_box").css({"display":"none"})
            $(this).find(".two_ul_box").animate({
                "top":"-100%"
            },240);
        }
    }

    //three 案列
    let threeUls = $(".threeUls")[0].children;
    for(let i=0;i<threeUls.length;i++){
        threeUls[i].onmouseenter = function(){
            $(this).find(".threeContant_bg").css({"display":"block"});
            $(this).find(".threeContantBg").css({"display":"block"});
            $(this).find(".threeContant_bg").animate({
                "top":"0%"
            },240);
            $(this).find(".threeContantBg").animate({
                "top":"0%"
            },240);
        }
        threeUls[i].onmouseleave = function(){
            $(this).find(".threeContant_bg").css({"display":"none"});
            $(this).find(".threeContantBg").css({"display":"none"});
            $(this).find(".threeContant_bg").animate({
                "top":"-100%"
            },240);
            $(this).find(".threeContantBg").animate({
                "top":"100%"
            },240);
        }
        let lefts = 0;
        $(".icon-arrow-right")[0].onclick = function () { 
            lefts -= 23;
            if(Math.abs(lefts) >= (threeUls.length-4)*24){
                lefts = 0;
            }
            $(".threeUls")[0].style.left = lefts +"%";
        }
        $(".icon-arr-right-red")[0].onclick = function () { 
            lefts += 23;
            if(Math.abs(lefts) >= 0){
                lefts = 0;
            }
            $(".threeUls")[0].style.left = lefts +"%";
        }
        $(".icon-jiahao")[i].onclick = function(){
            window.open("delatis.html");
        }
    }

    //four 合作
    let fourUls=$(".fouruls")[0].children;
    for(let i=0;i<fourUls.length;i++){
        let leftF = 0;
        $("#fourLeft")[0].onclick = function () { 
            leftF-=277;
            if(Math.abs(leftF) >= ((fourUls.length-5)/2)*277){
                leftF = 0;
            }
            $(".fouruls").css({
                "left":leftF+"px"
            });
        }

        $("#fourRight")[0].onclick = function () { 
            leftF+=277;
            if(Math.abs(leftF) <= ((fourUls.length-5)/2)*277){
                leftF = 0;
            }
            $(".fouruls").css({
                "left":leftF+"px"
            });
        }
    }

    // let widths = document.body.clientWidth || document.documentElement.clientWidth;
    // console.log(widths);
});

