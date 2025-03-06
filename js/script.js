const senhas_genericas = ['1234','123456','4321','654321','abcd','qwert','qwert1234','abcd1234'];

const feedback = document.querySelector('.resultado');

function validarsenha(senha){
    const numeros = /[0-9]/.test(senha);
    const minuscula = /[a-z]/.test(senha);
    const maiuscula = /[A-Z]/.test(senha);
    const especial = /[!@#$%&*(),.?":{}|<>]/.test(senha);
    
    
    if (!maiuscula){
        return "considere ter letras maiúsculas e minúsculas";
    } 
    
    else if (!minuscula){
        return "considere ter letras maiúsculas e minúsculas";
    }
    
    else if (!numeros){
        return "sua senha deve conter pelo menos um numero";
    }

    else if (!especial){
        return "sua senha deve conter caracteres especiais";
    }

    else {
        return "Essa senha é segura!";
    }
}




document.getElementById("formularioSenha").addEventListener("submit",function(event){
    event.preventDefault();

    let userInput = document.getElementById("senha").value;
    console.log('sua senha: ' + userInput);
    (validarsenha("senha" + userInput));

    
    

});

resultado.innerHTML += `<p>${senha.value} </p>`;



