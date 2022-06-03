document.querySelector("#cad").addEventListener('click', (event)=>{
    event.preventDefault();
    let email = document.querySelector("#email").value;
    let senha = document.querySelector("#pass").value;

    salvar(email, senha);
});


function salvar(e, s){
    let db = JSON.parse(localStorage.getItem('usuarios') || '[]');

let usuario = {
    id: db.legeth + 1,
    login: e,
    senha: s
}
if(usuario.login != " " && usuario.senha != " "){
    db.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(db));
    location.href = 'login.html';
}else{
    alert("Preencha corretamente!")
}

}