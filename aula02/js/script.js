 /**
 * Created by Joao Sousa on 16/10/2015.
 */
var load = function(href, target){
       $('.loading').fadeIn();
        setTimeout(function(){
            $.get(href,function(data){
                $(target).html(data);
            }).fail(function(){
                $(target).html('<h1>Erro 404</h1><p>Página não encontrada</p>');
            }).always(function(){
                $('.loading').fadeOut();
            });
        },1000); 
};
$(document).ready(function(){
	load('page/home.html','#page-content');
	
    //adicionando classe dropdown aos menus com submenus
    //# seletor do menu-item para adicionar a classe dropdown a todos os que contem um sub-menu
	//# utilizando as funções .closest() e addClass
	$('.sub-menu').closest('.menu-item').addClass('dropdown');
	
	
	//usando o dropdown
	//classes selected
    $(".dropdown").on("click", function(){
        //recuperar o elemento dropdown
		var dropdown = $(this);
                        
        //recolhe todos os sub-menus menos o item atual
		//# utilizando .not(), .children() e slideUp()
        $('dropdown').not(this).children('.sub-menu').slideUp();
		
        //abre ou recolhe o sub-menu do item atual dependendo do estado atual dele(aberto/fechado)
		//# utilizando .children() e .slideToggle()
        dropdown.children('.sub-menu').slideToggle();
		
		return false;
    });
    $('.menu-item').not(".dropdown").on('click','a',function() {
       var item = $(this).closest('.menu-item');
	   $('.menu-item').removeClass('selected');
	   item.addClass('selected');
	   
	   var href = $(this).attr('href');
	   if(href=='#')return false;
       load(href, '#page-content');
	   $(".sub-menu").slideUp("slow");
	   
       return false;
    });
	
	//obter CEP com o input de contato
	$('#page-content').on('blur','input[name=cep]',function(){
			var cep = this.value;
			//se cep não conter 8 digitos a função é executada
			if( cep.length < 8 ) return false;
			
			$('.loading').fadeIn();			
			$.get('http://viacep.com.br/ws/'+cep+'/json',function(res){
				console.log(res);
				$('output[name=logradouro]').text(res.logradouro);
				$('output[name=complemento]').text(res.complemento);
				$('output[name=bairro]').text(res.bairro);
				$('output[name=localidade]').text(res.localidade);
				$('output[name=uf]').text(res.uf);
			}).fail(function(){
				alert('Não foi possível verificar o CEP indicado!');
			}).always(function(data){
				$('.loading').fadeOut();
			});        
	});	
	
	//enviando recado usando ajax
	$('#page-content').on('submit','#form-recado',function(e){
		e.preventDefault(); //previne o envio padrão de dados no submit
	});
	//evento do clique no botão enviar do formulario
	$('#page-content').on('click','#form-enviar',function(){
		var data = {
			"action": "send_message"
		};
		var form = $("#form-recado");
		data = form.serialize() + "&" + $.param(data);
		console.log(data);
		var action = form.attr('action');
		$.ajax({
			type: "POST",
			url: action,
			data: data,
			cache: false,
			dataType: "json",
			complete: function () {
				
			},
			success: function (resp) {
				console.log(resp);				
				//mostrar mensagem de sucesso ou erro em algum lugar do formulário
				//o erro no escopo de sucesso é tratado manualmente e pode não ter referencia com o ajax
				if( resp.error == 0 ){
					//limpar dados do formulário
					form.find("input, textarea").val("");
					$('#resposta').text('Seu recado foi enviado com sucesso').fadeIn();
				}else{
					$('#resposta').text('Ocorreu um erro ao enviar seu recado. Tente novamente mais tarde.').fadeIn();
				}
			},
			error: function (resp) {
				//mostrar mensagem de erro em algum lugar do formulário
				//erro com o ajax, action, ou erro geral no php
				$('#resposta').text('Ocorreu um erro ao enviar seu recado. Tente novamente mais tarde.').fadeIn();
			}
		});
	});
	
});