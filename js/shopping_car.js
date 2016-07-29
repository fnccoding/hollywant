$(function(){
	$(".checkBox").click(function(){
		var img=$(this).find("img");
		if(img.attr('class')){
			img.removeClass("carProductUnChecked");
			img.attr("src","images/ic_cart_checkbox_checked.png");
		}else{
			img.addClass("carProductUnChecked");
			img.attr("src","images/ic_cart_checkbox_unchecked.png");
			
		}
		$(".checkAllImg").find('img').attr("src","images/ic_cart_checkbox_checked.png");
		$(".checkBox").each(function(){
			if($(this).find("img").attr("class")){
				$(".checkAllImg").find('img').attr("src","images/ic_cart_checkbox_unchecked.png");
			}else{
				
			}
			
		})
	})
	$(".checkAllImg").click(function(){
		var img=$(this).find('img');
		if(img.attr('class')){
			$(".checkBox").each(function(){
				$(this).find("img").attr("src","images/ic_cart_checkbox_unchecked.png")
			})
			img.removeClass("allChecked");
			img.attr("src","images/ic_cart_checkbox_unchecked.png")
		}else{
			$(".checkBox").each(function(){
				$(this).find("img").attr("src","images/ic_cart_checkbox_checked.png")
			})
			img.addClass("allChecked");
			img.attr("src","images/ic_cart_checkbox_checked.png")
		}
	})
	$(".cartItemDetailsTop .right").click(function(){
		$(".greey").show();
		$(".showcart").show();
	})
	$(".choiceBottom a").click(function(){
		$(".greey").hide();
		$(".showcart").hide();
	})
	
	
	
	
	
	
})
