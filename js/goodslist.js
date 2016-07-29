//所有分类类目
$(function(){
	$('.downArrow').click(function(){
		$('.goodslist_main_details').toggle();
		$('.goodslist_allclassify').toggle();
	});
	$('.allclassify li').click(function(){//选择不同的类目
		var Txt =$(this).text();
		$('.classify_word').text(Txt);
		$('.downArrow').click();
	});
	$(".shoppingIcon").click(function(){
		$(".greey").show();
		$(".showcart").show();
	})
	$(".greey").click(function(){
		$(".greey").hide();
		$(".showcart").hide();
	})
	$(".goodslist_main_descript").click(function(){
		window.location.href="productDetails.html";
	})
})




