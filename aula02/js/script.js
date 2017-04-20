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
	
	
	
});