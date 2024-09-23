var form = document.querySelector("form")
var snackbar = document.querySelector(".snackbar")

function show_snack(message){
    snackbar.textContent = message
    snackbar.style.transition = "opacity 2s"
    snackbar.style.opacity = 1
    setTimeout(function(){
        snackbar.style.opacity = 0
    }, 5000)
}

function validateUser(email, password){
    // E-mail de estudante e senha corretos
    const validEmail = "123@unesc.net"; // Substitua com seu email correto
    const validPassword = "unesc123";

    // Valida se o email e senha são corretos
    if (email === validEmail && password === validPassword) {
        return true;
    } else {
        // Chama o snackbar para exibir a mensagem de erro
        show_snack("Usuário ou senha inválidos.");
        return false;
    }
}

form.addEventListener("submit", function(event){
    event.preventDefault();

    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    // Valida o usuário
    if (!validateUser(email, password)) return;

    // Submete o formulário se a validação for bem-sucedida
    form.submit();
});
