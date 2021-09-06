
console.log('JavaScript successfuly loaded')




function validaCPF (cpf) { 
	if(cpf.length != 11) {
		return false;
	}	else {
		
		var numeros = cpf.substring(0, 9);    
			var verificadores = cpf.substring(9); 
		
			
			var soma = 0;
			 for (var i = 10; i > 1; i--) {
				soma += numeros.charAt(10 - i) * i;
			}
			
			console.log(soma);
			var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);
		
			if(resultado!=verificadores.charAt(0)) {
				return false;
			}
// validação do segundo dígito
			soma = 0;
			 numeros = cpf.substring(0, 10);
			
			for ( var k = 11; k> 1; k--) {
				soma += numeros.charAt(11-k) * k;
			
			
			}
			
			resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
			
			if(resultado != verificadores.charAt(1)){
				return false
				}
			
		
			return true;
		}	
	
	}	

function validacao() {
	
	console.log('Validação iniciada');
	
	document.getElementById('sucesso').style.display = 'none';
	document.getElementById('erro').style.display = 'none';
	
	var cpf = document.getElementById('cpf_entrada').value;
	
	var resultadoValidacao = validaCPF(cpf);
	
	if(resultadoValidacao) { 
		document.getElementById('sucesso').style.display = 'block';		
	} else {
		document.getElementById('erro').style.display = 'block';
	}
	
	}
	


