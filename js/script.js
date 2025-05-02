document.addEventListener('DOMContentLoaded', () => {
    const envelopeContainer = document.querySelector('.envelope-container');
    const envelope = document.querySelector('.envelope');
    const tampa = document.querySelector('.tampa');
    const carta = document.querySelector('.carta');
    const mensagemElement = document.getElementById('mensagem');
    const mensagemInicial = document.querySelector('.mensagem-inicial');

    const mensagemTexto = `Minha Rafinha,
Hoje é um dia muito especial, e eu não poderia deixar de compartilhar essa felicidade com
você. Agora chegou a sua vez de ter o seu passaporte!
Desde o começo, sempre tive a certeza de que investir no nosso futuro seria a melhor escolha
que eu poderia fazer - e hoje, mais uma vez, estou dando um passo pensando em nós.
Eu sei que talvez você estivesse esperando ganhar as alianças, e quero que saiba que esse
momento tão sonhado vai chegar na hora certa. Mas hoje, te entrego algo que também
simboliza o nosso compromisso: o nosso futuro juntos.
Esse passaporte é apenas o primeiro passo para todos os sonhos que vamos realizar lado a
lado, para todos os lugares que ainda vamos conhecer, e para todas as conquistas que Deus tem
reservado para nós.
Espero que você receba esse presente com o amor e a intenção que coloquei nele. Saiba que
cada escolha que faço é pensando em construir uma vida incrível ao seu lado.
Te amo demais!`;

    mensagemElement.innerText = mensagemTexto;

    envelopeContainer.addEventListener('click', () => {
        envelope.classList.add('aberto');
        mensagemInicial.style.display = 'none';
    });

    tampa.addEventListener('transitionend', () => {
        carta.style.opacity = 1;
    });
});