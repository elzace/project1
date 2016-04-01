//导航条JS
window.onscroll=function(){
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	if( scrollTop>500){
		$(document).ready(function() {
			$(".navbar").fadeIn(500);
		});
	}
	else{
		$(document).ready(function() {
			$(".navbar").fadeOut(500);
		});
	}
}
//技能栏JS
var timer=null;
function size1(){	 
		oID.animate({"opacity":"0.5"});
		oID.animate({"opacity":"1"});
		$(".skillBox").css("background-color","rgba(52, 72, 96, 0.2)");	
		oID.css("background-color","rgba(52, 72, 96, 0.5)");
		}
var timer=setInterval(
		function(){	 
		$("#box-html").animate({"opacity":"0.5"},1000);
		$("#box-html").animate({"opacity":"1"},1000);
		$(".skillBox").css("background-color","rgba(52, 72, 96, 0.2)");	
		$("#box-html").css("background-color","rgba(52, 72, 96, 0.5)");
		},2000);
$(document).ready(function() {
	$(".skillBox").click(function(){
		oID=$(this);
		clearInterval(timer);
		oID.stop(true);
		if($(this).attr("id")=="box-html"){
		$(".describeA").siblings().slideUp("fast");
		$(".describeA").slideToggle("slow");
		size1();
		timer=setInterval(size1,1000);
		}
		else if($(this).attr("id")=="box-photoshop"){
		clearInterval(timer);
		$(".describeB").siblings().slideUp("fast");
		$(".describeB").slideToggle("slow");
		size1();
		timer=setInterval(size1,1000);
		}
		else if($(this).attr("id")=="box-design"){
		clearInterval(timer);
		$(".describeC").siblings().slideUp("fast");
		$(".describeC").slideToggle("slow");
		size1();
		timer=setInterval(size1,1000);
		}
		else if($(this).attr("id")=="box-others"){
		clearInterval(timer);
		$(".describeD").siblings().slideUp("fast");
		$(".describeD").slideToggle("slow");
		size1();
		timer=setInterval(size1,1000);
		}
	})
//PhotoShop大图	
	$(".pic").click(function(){
		var num =$(this).attr("index")
		$(".bigImg").attr("src","image/photo/photo"+num+".jpg")
		$(".bigBox").show();
		})
	$(".close").click(function(){
		$(".bigBox").slideUp();
		})
});

