
document.addEventListener("DOMContentLoaded", function () {
    const btnEntrar = document.querySelector(".sign-up .btn");
const btnCadastrar = document.querySelector(".sign-in .btn");
const signUp = document.querySelector(".sign-up");
const signIn = document.querySelector(".sign-in");

// Inicialmente, mostrar login
signIn.classList.add("active");

btnCadastrar.addEventListener("click", function () {
    signIn.classList.remove("active");
signUp.classList.add("active");
    });

btnEntrar.addEventListener("click", function () {
    signUp.classList.remove("active");
signIn.classList.add("active");
    });
});



function validarCadastro(e) {
    const senha = document.getElementById("senha").value
    const confirmar = document.getElementById("confirmar-senha").value
    const sexo = document.getElementById("sexo").value
    const cpf = document.getElementById("cpf").value

    if (sexo == "") {
        alert("por favor, selecione o seu sexo.")
        e.preventDefault();
        return false
    }

    //validação de senha
    const senhaBraba = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$&*%]).{8,}$/;
    if (!senhaBraba.test(senha)){
        alert("sua senha precisa de uma letra minúscula, uma maiúscula, um número e um caracter especial com, no minimo, oito digitos")
        e.preventDefault();
        return false
    }

    if (senha !== confirmar) {
        alert("as senhas não coincidem");
        e.preventDefault();
        return false

    }

    if (cpf.length < 11){
        alert("CPF inválido, insira novamente.")
        e.preventDefault();
        return false
    }

    return true
}

// api ViaCEP
function buscarCep() {
    const cep = document.getElementById('cep').value.replace(/\D/g, '');

    if (cep.length !== 8) {
        alert("CEP inválido, digite 8 números.");
        return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(res => res.json())
        .then(data => {
            if (data.erro) {
                alert("CEP não encontrado.");
                return;
            }

            // preenche o campo logradouro
            document.getElementById('logradouro').value = data.logradouro;
        })
        .catch(() => {
            console.log(cep)
            alert("Erro ao buscar o CEP.");
        });
}
  

