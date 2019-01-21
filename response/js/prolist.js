$(function(){


    //滚动条效果
    window.onscroll = function(){
        let temp = document.body.scrollTop || document.documentElement.scrollTop;
        console.log(temp)
        if(temp>80){
            $(".icon-chevron-up")[0].style.display = "block";
        }else{
            $(".icon-chevron-up")[0].style.display = "none";
        }
        //点击返回顶部 
        $(".icon-chevron-up").click(function(){
            $("html,body").animate({scrollTop:0},0);
        });
    }

    let count = 0;
    $(".icon-thlist").click(function() {
        count++;
        if(count%2!=0){
            $(".leftBox").css({"left":"0"});
        }else{
            $(".leftBox").css({"left":"-240px"});
        }
    });
    

});