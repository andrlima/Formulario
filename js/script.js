/* Evento que adiciona a classe form-baixo ao formulário de login */
const btnLogin = document.querySelector("#btnLogin");
const formLogin = document.querySelector("#form-login");

btnLogin.addEventListener("click", event =>{
    event.preventDefault();

    /* Validação  */
    const vCampos = [...document.querySelectorAll(".input-block input")];
    vCampos.forEach(vCampo =>{

        if(vCampo.value === ""){
            formLogin.classList.add(".error-validacao");

        }

    });

    const formError = document.querySelector(".error-validacao");

    if(formError){
        formError.addEventListener("animationend", event =>{
            if(event.animationName === "vibracao"){
                formError.classList.remove("error-validacao");

            }

        });

    }
    else{
        formLogin.classList.add("form-paraBaixo");

    }

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
        document.querySelector("body").style.overflow = "none";

    }
   
});