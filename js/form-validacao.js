const btnCadastrar = document.querySelector("#btnCadastrar");
const formCad = document.querySelector("#form-cadastro");

btnCadastrar.addEventListener("click", event =>{
    event.preventDefault();
        
    alert("Até aqui, ok!");

    const cadCampos = [...document.querySelectorAll(".input-block input")];
    
    cadCampos.forEach(cadCampo =>{
        if(cadCampo.value === ""){
            formCad.classList.add("form-validacao");
                           
        }
    
    });
    
    const formCadError = document.querySelector(".form-validacao");
        
    if(formCadError){
        formCadError.addEventListener("animationend", event =>{
            if(event.animationName === "vibracao"){
                formCadError.classList.remove("form-validacao");

                    
            }
    
        });
            
    
    }
        
    
    
});



