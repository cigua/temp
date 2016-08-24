$(function(){
	//导航
	nav(".meun li");
	//图片轮播
	 picsSlider();
});



//导航上下翻滚
 function nav(navhover){
	$(navhover).prepend("<span></span>"); 
	
	$(navhover).each(function() { 
		var linkText = $(this).find("a").html(); 
		$(this).find("span").show().html(linkText); 
	}); 
	
	$(navhover).hover(function() {	
		$(this).find("span").stop().animate({ 
			marginTop: "-53" 
		}, 250);
	} , function() { 
		$(this).find("span").stop().animate({
			marginTop: "0" 
		}, 250);
	});	
}
//图片轮播
function picsSlider(){
    var picSlider=$("#bonner"),
        listLl=$(".pic li"),
        index=0,
        timer=null;
    function picChange(){
        index++;
        if(index<4){
            changeOption(index);
        }
        else{
            index=-1;
        }
    }
    function objHover(obj){
        obj.hover(function(){
            clearInterval(timer);
        },function(){
            timer=setInterval(picChange,3000);
        });
    };

}
