   //左边菜单栏、
   let nav_cut_uls = $(".nav_cut_uls")[0].children;
   for(let i=0,len=nav_cut_uls.length;i<len;i++){
       nav_cut_uls[i].onmouseenter = function(){
           $(this).find("a").addClass("navA1"); 
       }
       $(this).find("a").removeClass("navA");
       nav_cut_uls[i].onmouseleave = function(){
           $(this).find("a").removeClass("navA1");
       }
   }
   let icons = $(".icons")[0].children;
   for(let i=0,len=icons.length;i<len;i++){
       icons[i].onmouseenter = function(){
           $(this).find("i").css({"background":"#000"}); 
       }
       icons[i].onmouseleave = function(){
           $(this).find("i").css({"background":"#00dfb9"}); 
       }
   }