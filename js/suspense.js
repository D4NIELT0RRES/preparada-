document.addEventListener('DOMContentLoaded', () => {
    const suspenseContainer = document.querySelector('.suspense-container');
    const envelopeContainer = document.querySelector('.envelope-container');
    const body = document.body; // Seleciona o body

    // Simula um carregamento (você pode ajustar o tempo)
    setTimeout(() => {
        suspenseContainer.classList.add('fade-out');
        setTimeout(() => {
            suspenseContainer.style.display = 'none';
            envelopeContainer.classList.remove('oculto');
            envelopeContainer.style.opacity = 1; // Garante que o envelope apareça
            envelopeContainer.style.pointerEvents = 'auto'; // Permite interações com o envelope

            // Remove os estilos de centralização da tela de suspense do body
            body.style.justifyContent = 'center';
            body.style.alignItems = 'center';
        }, 1000); // Tempo da transição fade-out
    }, 3000); // Tempo que a tela de suspense fica visível (3 segundos)
});