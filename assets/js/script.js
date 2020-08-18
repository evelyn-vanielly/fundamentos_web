let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let txt = document.querySelector("#texto")

nome.style.width = "100%"
email.style.width = "100%"

function validaNome() 
{   let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3) 
    {
        txtNome.innerHTML = "Nome Inválido"
        txtNome.style.color = "red"
    } else {
        txtNome.innerHTML = "Nome Válido"
        txtNome.style.color = "blue"
    }
}

function validaEmail() 
{   let txtEmail = document.querySelector("#txtEmail")
    if (email.value.indexOf("@" ) == -1 || email.value.indexOf (".") == -1)
    {
        txtEmail.innerHTML = "Email Inválido"
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = "Email Válido"
        txtEmail.style.color = "blue"
    }
}