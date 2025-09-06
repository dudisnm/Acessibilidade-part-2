document.addEventListener('DOMContentLoaded', function () {
    const botaoAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesAcessibilidade = document.getElementById('opcoes-acessibilidade');
    const aumentarFonte = document.getElementById('aumentar-fonte');
    const diminuirFonte = document.getElementById('diminuir-fonte');
    const alternaContraste = document.getElementById('alterna-contraste');
    const body = document.body;

    // Abrir/fechar menu de acessibilidade
    botaoAcessibilidade.addEventListener('click', function (e) {
        e.stopPropagation(); // evita fechamento imediato
        opcoesAcessibilidade.classList.toggle('apresenta-lista');
        const expanded = botaoAcessibilidade.getAttribute('aria-expanded') === 'true';
        botaoAcessibilidade.setAttribute('aria-expanded', !expanded);
        botaoAcessibilidade.classList.toggle('rotacao-botao');
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', function (e) {
        if (!opcoesAcessibilidade.contains(e.target) && !botaoAcessibilidade.contains(e.target)) {
            opcoesAcessibilidade.classList.add('apresenta-lista');
            botaoAcessibilidade.setAttribute('aria-expanded', 'false');
            botaoAcessibilidade.classList.remove('rotacao-botao');
        }
    });

    // Aumentar fonte
    aumentarFonte.addEventListener('click', function () {
        let tamanhoAtual = parseFloat(window.getComputedStyle(body).fontSize);
        if (tamanhoAtual < 24) { // tamanho máximo confortável
            body.style.transition = 'font-size 0.25s ease';
            body.style.fontSize = (tamanhoAtual + 2) + 'px';
        }
    });

    // Diminuir fonte
    diminuirFonte.addEventListener('click', function () {
        let tamanhoAtual = parseFloat(window.getComputedStyle(body).fontSize);
        if (tamanhoAtual > 12) { // tamanho mínimo legível
            body.style.transition = 'font-size 0.25s ease';
            body.style.fontSize = (tamanhoAtual - 2) + 'px';
        }
    });

    // Alternar contraste
    if (alternaContraste) {
        alternaContraste.addEventListener('click', function () {
            body.classList.toggle('contraste-alto');
            // animação suave para background e cores
            body.style.transition = 'background 0.3s ease, color 0.3s ease';
        });
    }
});
