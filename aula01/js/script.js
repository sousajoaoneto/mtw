$(document).ready(function(){
	
	/* BEGIN Formlulario */
	$("#form1").on("submit", function(e){
		//e.preventDefault();
	});	
	/* END Formlulario */
	
	/* BEGIN jQueryAjax */
	$("#driver").click(function(event){
		$('#stage').load('conteudo.html');
	});
	/* END jQueryAjax */
	
});