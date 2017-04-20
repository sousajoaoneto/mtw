<?php
	if(isset($_POST['pasta']) && $_POST['pasta'] != ""){
		
		$pasta_dir = $_POST["pasta"];
		$file = $_FILES["arquivo"];
		if(!file_exists($pasta_dir))
			mkdir($pasta_dir);
		$nome = $file["name"];
		$tamanho = $file["size"];
		$tipo = $file["type"];	
		$tmpName = $file["tmp_name"];	
		$erro = $file["error"];
		
		//valid
		if($erro == 0){
			$novoNome = date("Ymd").rand(1,9999)."-".$nome;
			$caminho = $pasta_dir."/".$novoNome;
			
			if(move_uploaded_file($tmpName, $caminho)){
				echo "Upload realizado com sucesso para:<br>".$caminho;
			}else{
				echo $erro;
			}
			
		}else{
			echo $erro;
		}
	}
?>