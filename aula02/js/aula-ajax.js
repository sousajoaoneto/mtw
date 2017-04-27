$(document).ready(function(){
	//exeecutar ação com o clique do botão de envio
	var form = $("#form-name");
	var data = {
		"action": "send_message"
    };
    data = form.serialize() + "&" + $.param(data);
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
			//limpar dados do formulário
			//mostrar mensagem de sucesso ou erro em algum lugar do formulário
			//o erro no escopo de sucesso é tratado manualmente e pode não ter referencia com o ajax
        },
        error: function (resp) {
            //mostrar mensagem de erro em algum lugar do formulário
			//erro com o ajax, action, ou erro geral no php
        }
    });
};