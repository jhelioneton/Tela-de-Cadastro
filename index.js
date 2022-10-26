let usuario = document.querySelector('#usuario');
let labelUsuario = document.querySelector('#labelUsuario');
let validUser = false

let senha = document.querySelector('senha');
let labelSenha = document.querySelector('labelSenha');
let validSenha = false

usuario.addEventListener('keyup', () => {
    if(usuario.value.length <= 4){
        labelUsuario.setAttribute('style', 'color: red');
        labelUsuario.innerHTML = 'Usuario *Insira no minimo 5 caracteres'
        usuario.setAttribute('style', 'border-color: red')
    } else {
        labelUsuario.setAttribute('style', 'color: green');
        labelUsuario.innerHTML = 'Usuario'
        usuario.setAttribute('style', 'border-color: green')
    }
})

// Não Funciona
senha.addEventListener('keyup', () => {
    if(senha.value.length <= 4){
        labelSenha.setAttribute('style', 'color: red');
        labelSenha.innerHTML = 'Senha *Insira no minimo 5 caracteres'
        senha.setAttribute('style', 'border-color: red')
    } else {
        labelSenha.setAttribute('style', 'color: green');
        labelSenha.innerHTML = 'Senha'
        senha.setAttribute('style', 'border-color: green')
    }
})

function cadastrar() {

}