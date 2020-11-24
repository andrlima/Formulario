/* Evento que adiciona a classe form-baixo ao formulário de login */
const btnLogin = document.querySelector("#btnLogin");
const formLogin = document.querySelector("#form-login");

btnLogin.addEventListener("click", event =>{
    event.preventDefault();
    formLogin.classList.add("form-baixo");

});

/* Removendo o formulário de login e impedindo a criação de skroll*/
formLogin.addEventListener("animationstart", event =>{
    if(event.animationName === "paraBaixo"){
        document.querySelector("body").style.overflow = "hidden";
    }

});

formLogin.addEventListener("animationend", event =>{
    if(event.animationName === "paraBaixo"){
        formLogin.style.display = "none";

    }
   
});