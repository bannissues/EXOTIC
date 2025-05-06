
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


