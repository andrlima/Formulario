/* Evento que adiciona a classe form-baixo ao formulário de login */
const btnLogin = document.querySelector("#btnLogin");
const formLogin = document.querySelector("#form-login");


/* Evento de click no botão login */
btnLogin.addEventListener("click", event =>{
    event.preventDefault();

    /* Validação  */
    const logCampos = [...document.querySelectorAll(".input-block input")];
    
    /* Verifica os capos vazio, e aplica a animação no formulário */
    logCampos.forEach(logCampo =>{
        if(logCampo.value === ""){
            formLogin.classList.add("form-validacao");
           
        } 

    });

    /*Essa const tem que ficar aqui para repetir o processo */
    const formError = document.querySelector(".form-validacao");
    if(formError){
        formError.addEventListener("animationend", event =>{
            if(event.animationName === "vibracao"){
                formError.classList.remove("form-validacao");
                
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

