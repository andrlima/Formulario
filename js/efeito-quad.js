/* Efeito para o plano de fundo da pagina  */

const quadRinhos = document.querySelector("ul.quadrados");

/* For para criar os quadrados */
for( let i = 0; i < 12; i++){

    const li = document.createElement("li");

    const aleatorio = (min, max) => Math.random() * (max -min) + min;

    const tamanho = Math.floor(aleatorio(10, 80));
    const posicao = aleatorio(1 ,99);
    const saida = aleatorio(2, 0.1);
    const duracao = aleatorio(5, 10);

    li.style.width = `${tamanho}px`;
    li.style.height = `${tamanho}px`;
    li.style.bottom = `-${tamanho}px`;

    li.style.left = `${posicao}%`;

    li.style.animationDelay = `${saida}s`;
    li.style.animationDuration = `${duracao}s`;
    li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, `;

    quadRinhos.appendChild(li);

}


/*

*/