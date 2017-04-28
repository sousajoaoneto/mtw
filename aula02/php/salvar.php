<?php
if (is_ajax()) {
    if (isset($_POST["action"]) && !empty($_POST["action"])) { //Checks if action value exists
        $action = $_POST["action"];
        switch($action) { //Switch case for value of action
            case "test": test_function(); break;
            case "send_message": send_message(); break;
        }
    }else{
        $return["error"] = "1";
    }
}else{
    header('Location: http://localhost/fjn/mtw/aula02/');
}

//Function to check if the request is an AJAX request
function is_ajax() {
    return isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest';
}

function test_function(){
    $return = array();
    $return["json"] = json_encode($_POST);
    header('application/json; charset=utf-8');
    echo json_encode($return);
}

function send_message(){
    $data = date("d/m/Y");

    //obter dados do post

    $return = array();

	//criar um arquivo .txt e salvar em um diretório para simular o salvamento/envio de uma mensagem
	
	//testar se o arquivo foi salvo
    if( true ){
        $return["error"] = "0";
        $return["codigo"] = "valor";
    }else {
        $return["error"] = "1";
    }
    echo json_encode($return);
}