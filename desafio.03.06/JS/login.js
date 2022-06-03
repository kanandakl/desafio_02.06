document.getElementById("login").addEventListener('click', (evento)=>{
    evento.preventDefault();
    let email = document.getElementById("email");
    let senha = document.getElementById("pass");

    listarUsuarios(email, senha);

});


function listarUsuarios(m, s){
    let db_usuarios = JSON.parse(localStorage.getItem("Meus_dados"));

    let usuario = {
        email: '',
        senha: ''
    }
    db_usuarios.forEach(elemento=>{
        if(elemento.email === m.value && elemento.senha === s.value){
            usuario.email = m.value;
            usuario.senha = s.value;
        }
    });
    if(usuario.email == m.value && usuario.senha == s.value){
        location.href = 'trabalho.html'
    }else{
        alert("Coloque o login correto!")
        location.href = 'login.html'
        
    }
    }