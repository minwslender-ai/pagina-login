// Valida‡Æo b sica dos campos 
document.querySelector('form').addEventListener('submit', function(e) { 
    e.preventDefault(); 
    const usuario = document.getElementById('usuario').value; 
    const senha = document.getElementById('senha').value; 
 
        alert('Preencha usu rio e senha'); 
        return; 
    } 
    console.log('Login tentado:', usuario); 
}); 
