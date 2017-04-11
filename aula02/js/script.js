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
    $('.menu>.menu-item').children('.sub-menu').closest('.menu-item').addClass('dropdown');

    $(".dropdown").on("click", function(){
        var item = $(this);
        //removendo a classe selected dos itens do menu
        //nao retira do item atual se existir
        $(".menu-item").not(item).removeClass("selected");
        //adiciona a classe selected se o item nao estava selecionado antes
        item.addClass("selected");
        //recolhe todos os sub-menus menos o item atual
        $(".menu-item").not(item).children(".sub-menu").slideUp("slow");
        //abre ou recolhe o sub-menu do item atual dependendo do estado atual dele(aberto/fechado)
        item.children(".sub-menu").slideToggle("slow");
		return false;
    });
    $('.menu-item').not(".dropdown").on('click','a',function() {
       var href = $(this).attr('href');
	   if(href=='#')return false;
       load(href, '#page-content');
	   $(".sub-menu").slideUp("slow");
       return false;
    });
});