let case_uls = $(".case_uls")[0].children;
for(let i=0;i<case_uls.length;i++){
    case_uls[i].onmouseenter = function(){
        $(this).find("img").addClass("imgs");
        $(this).find(".case_bg").css({
            "display":"block"
        });
        $(".liu")[i].onmouseenter = function(){
            $(this).css({
                "background":"#2cc0a7",
                "color":"white"
            })
        }
    }
    case_uls[i].onmouseleave = function(){
        $(this).find("img").removeClass("imgs");
        $(this).find(".case_bg").css({
            "display":"none"
        });
        $(".liu")[i].onmouseleave = function(){
            $(this).css({
                "background":"none",
                "color":"white"
            })
        }
    }
}