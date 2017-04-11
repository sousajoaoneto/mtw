$(document).ready(function(){
	
	/* BEGIN Formlulario */
	$("#form1").on("submit", function(e){
		//e.preventDefault();
	});
	
	$(".btn1").on("click",function(){
		$(".msg").removeClass("erro");
		$(".msg").addClass("sucesso");
	});
	$(".btn2").on("click",function(){
		$(".msg").removeClass("sucesso");
		$(".msg").addClass("erro");
	});
	$(".btn3").on("click",function(){		
		$(".msg").removeClass("sucesso erro");
		$(".msg").toggleClass("active");
	});
	/* END Formlulario */
	
	/* BEGIN jQueryAjax */
	/*div driver(btn) função load()*/
	
	/* END jQueryAjax */
	
});
