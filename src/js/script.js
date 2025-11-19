// váriaveis
let perfilAtualIndex = 0;
let timerInterval = null;
let tempoRestante = 25 * 60; // 25 minutos em segundos
let timerAtivo = false;
let respostasUsuario = [];
let trilho = document.getElementById('trilho')
let body = document.querySelector('body')

// botão de alterar tema

trilho.addEventListener('click', ()=>{
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')
})

// abrir e fechar o menu no mobile

const toggle = document.getElementById("menu-toggle");
const menu = document.querySelector(".nav-menu");

toggle.onclick = () => {
    menu.classList.toggle("active");
};

// inicialização

document.addEventListener('DOMContentLoaded', () => {
    inicializarProfissionais();
    inicializarFiltros();
    inicializarSlideshow();
    inicializarQuiz();
    inicializarPairFocus();
    inicializarDashboard();
});

// PROFISSIONAIS E FILTROS

function inicializarProfissionais() {
    renderizarProfissionais(profissionais);
}

// Renderiza os cards de profissionais na página

function renderizarProfissionais(listaProfissionais) {
    const container = document.getElementById('cards-container');
    container.innerHTML = "";

    if (listaProfissionais.length === 0) {
        container.innerHTML = '<p class="sem-resultados">Nenhum profissional encontrado.</p>';
        return;
    }

    listaProfissionais.forEach((profissional, index) => {
        const card = document.createElement('div');
        card.className = 'card-profissional';
        card.style.animationDelay = `${index * 0.1}s`;

        card.innerHTML = `
            <div class="card-foto">
                <i data-lucide="${profissional.icone}"></i>
            </div>
            <h3 class="card-nome">${profissional.nome}</h3>
            <p class="card-cargo">${profissional.cargo}</p>
            <div class="card-taxa">
                <span class="taxa-badge">
                    <i data-lucide="trending-up"></i> ${profissional.taxaCrescimento}% crescimento
                </span>
            </div>
            <div class="card-skills">
                ${profissional.skills.slice(0, 3).map(skill => `<span class="skill-tag">${skill}</span>`).join("")}
            </div>
        `;
        
        card.addEventListener('click', () => {
            abrirSlideshow(profissional.id);
        });
        container.appendChild(card);
    });

    // Inicializa os ícones depois de renderizar
    lucide.createIcons();
}

// Adiciona os listeners de evento aos campos de filtro
 
function inicializarFiltros() {
    document.getElementById('filtro-nome').addEventListener('input', filtrarProfissionais);
    document.getElementById('filtro-area').addEventListener('change', filtrarProfissionais);
}

// Filtra a lista de profissionais com base nos inputs

function filtrarProfissionais() {
    const filtroNome = document.getElementById('filtro-nome').value.toLowerCase();
    const filtroArea = document.getElementById('filtro-area').value;

    const profissionaisFiltrados = profissionais.filter(prof => {
        const matchNome = prof.nome.toLowerCase().includes(filtroNome) ||
                          prof.cargo.toLowerCase().includes(filtroNome) ||
                          prof.skills.some(skill => skill.toLowerCase().includes(filtroNome));
        
        const matchArea = filtroArea === "" || prof.area === filtroArea;
        
        return matchNome && matchArea;
    });

    renderizarProfissionais(profissionaisFiltrados);
}

// SLIDESHOW 

// Inicializa os event listeners do slideshow
function inicializarSlideshow() {
    document.querySelector('.close-modal').addEventListener('click', fecharSlideshow);
    document.querySelector('.prev-slide').addEventListener('click', perfilAnterior);
    document.querySelector('.next-slide').addEventListener('click', proximoPerfil);
    
    // Fecha o modal ao clicar fora do conteúdo
    document.getElementById('slideshow-modal').addEventListener('click', (e) => {
        if (e.target.id === 'slideshow-modal') {
            fecharSlideshow();
        }
    });
}

// Abre o modal no perfil do ID especificado
function abrirSlideshow(profissionalId) {
    perfilAtualIndex = profissionais.findIndex(p => p.id === profissionalId);
    if (perfilAtualIndex === -1) return;

    document.getElementById('slideshow-modal').style.display = 'block';
    renderizarPerfilDetalhado(perfilAtualIndex);
}

// Fecha o modal
function fecharSlideshow() {
    document.getElementById('slideshow-modal').style.display = 'none';
}

// Avança para o próximo perfil (navegação circular)
function proximoPerfil() {
    perfilAtualIndex = (perfilAtualIndex + 1) % profissionais.length;
    renderizarPerfilDetalhado(perfilAtualIndex);
}

// Volta para o perfil anterior (navegação circular)
function perfilAnterior() {
    perfilAtualIndex = (perfilAtualIndex - 1 + profissionais.length) % profissionais.length;
    renderizarPerfilDetalhado(perfilAtualIndex);
}

// Renderiza o conteúdo completo do perfil no modal
function renderizarPerfilDetalhado(index) {
    const profissional = profissionais[index];
    document.getElementById('perfil-detalhado').innerHTML = `
        <div class="perfil-header">
            <div class="perfil-foto-grande">
                <i data-lucide="${profissional.icone}"></i>
            </div>
            <div class="perfil-info-basica">
                <h2>${profissional.nome}</h2>
                <p class="cargo-detalhado">${profissional.cargo}</p>
                <p class="localizacao"><i data-lucide="map-pin"></i> ${profissional.localizacao}</p>
                <p class="taxa-crescimento-detalhado"><i data-lucide="trending-up"></i> Taxa de Crescimento: <strong>${profissional.taxaCrescimento}%</strong> ao ano</p>
                <p class="area-detalhado"><i data-lucide="building-2"></i> Área: ${profissional.area}</p>
            </div>
        </div>
        <div class="perfil-secao">
            <h3>Sobre</h3>
            <p>${profissional.bio}</p>
        </div>
        <div class="perfil-secao">
            <h3>Formação</h3>
            <p>${profissional.formacao}</p>
        </div>
        <div class="perfil-secao">
            <h3>Experiência</h3>
            <p>${profissional.experiencia} anos de experiência profissional</p>
        </div>
        <div class="perfil-secao">
            <h3>Habilidades Técnicas</h3>
            <div class="skills-list">
                ${profissional.skills.map(skill => `<span class="skill-badge">${skill}</span>`).join("")}
            </div>
        </div>
        <div class="perfil-secao">
            <h3>Soft Skills</h3>
            <div class="softskills-list">
                ${profissional.softSkills.map(skill => `<span class="softskill-badge">${skill}</span>`).join("")}
            </div>
        </div>
        <div class="perfil-secao">
            <h3>Hobbies e Interesses</h3>
            <div class="hobbies-list">
                ${profissional.hobbies.map(hobby => `<span class="hobby-badge">${hobby}</span>`).join("")}
            </div>
        </div>
        <div class="perfil-acoes">
            <button class="btn btn-primary btn-acao">Recomendar Profissional</button>
            <button class="btn btn-secondary btn-acao">Enviar Mensagem</button>
        </div>
    `;
    
    // Inicializa os ícones no modal
    lucide.createIcons();
    renderizarIndicadores();
}

// Cria os indicadores de navegação (bolinhas)
function renderizarIndicadores() {
    const container = document.getElementById('slide-indicators');
    container.innerHTML = "";
    profissionais.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.className = 'indicator-dot';
        if (index === perfilAtualIndex) {
            dot.classList.add('active');
        }
        // Navega ao clicar no indicador
        dot.addEventListener('click', () => {
            perfilAtualIndex = index;
            renderizarPerfilDetalhado(perfilAtualIndex);
        });
        container.appendChild(dot);
    });
}


// SEÇÃO 3: QUIZ

function inicializarQuiz() {
    renderizarQuiz();
}

// Renderiza as perguntas do quiz na página

function renderizarQuiz() {
    const container = document.getElementById('quiz-container');
    container.innerHTML = "";
    respostasUsuario = new Array(quizData.length).fill(null);

    quizData.forEach((pergunta, index) => {
        const perguntaDiv = document.createElement('div');
        perguntaDiv.className = 'quiz-pergunta';
        perguntaDiv.innerHTML = `
            <div class="pergunta-texto">
                <span class="pergunta-numero">${index + 1}</span>
                <span>${pergunta.pergunta}</span>
            </div>
            <div class="quiz-opcoes" data-pergunta="${index}">
                ${pergunta.opcoes.map((opcao, opcaoIndex) => `
                    <button class="opcao-btn" data-opcao="${opcaoIndex}">${opcao}</button>
                `).join("")}
            </div>
            <div class="explicacao" id="explicacao-${index}">
                <strong>Explicação:</strong> ${pergunta.explicacao}
            </div>
        `;
        container.appendChild(perguntaDiv);
    });

    const btnFinalizar = document.createElement('button');
    btnFinalizar.id = 'btn-finalizar-quiz';
    btnFinalizar.className = 'btn btn-primary btn-finalizar-quiz';
    btnFinalizar.textContent = 'Finalizar Quiz';
    btnFinalizar.disabled = true;
    btnFinalizar.addEventListener('click', finalizarQuiz);
    container.appendChild(btnFinalizar);

    adicionarEventosQuiz();
}

// Adiciona listeners de clique aos botões de opção do quiz

function adicionarEventosQuiz() {
    document.querySelectorAll('.opcao-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const perguntaIndex = parseInt(this.closest('.quiz-opcoes').dataset.pergunta);
            const opcaoSelecionada = parseInt(this.dataset.opcao);
            verificarResposta(perguntaIndex, opcaoSelecionada, this);
        });
    });
}

// Verifica a resposta selecionada, atualiza a UI e armazena a resposta

function verificarResposta(perguntaIndex, opcaoSelecionada, btnClicado) {
    if (respostasUsuario[perguntaIndex] !== null) return;

    const pergunta = quizData[perguntaIndex];
    const respostaCorreta = pergunta.respostaCorreta;
    respostasUsuario[perguntaIndex] = opcaoSelecionada;

    const opcoesPergunta = btnClicado.closest('.quiz-opcoes').querySelectorAll('.opcao-btn');

    opcoesPergunta.forEach((btn, index) => {
        btn.classList.add('desabilitado');
        if (index === respostaCorreta) {
            btn.classList.add('correta');
        }
    });

    if (opcaoSelecionada !== respostaCorreta) {
        btnClicado.classList.add('incorreta');
    }

    document.getElementById(`explicacao-${perguntaIndex}`).classList.add('mostrar');
    
    if (respostasUsuario.every(r => r !== null)) {
        document.getElementById('btn-finalizar-quiz').disabled = false;
    }
}

// Calcula e exibe o resultado final do quiz

function finalizarQuiz() {
    let acertos = 0;
    quizData.forEach((pergunta, index) => {
        if (respostasUsuario[index] === pergunta.respostaCorreta) {
            acertos++;
        }
    });

    const porcentagem = Math.round((acertos / quizData.length) * 100);
    let mensagem, icone;

    if (porcentagem >= 80) {
        mensagem = "Excelente! Você está muito bem informado sobre o futuro do trabalho!";
        icone = "trophy"; //
    } else if (porcentagem >= 60) {
        mensagem = "Muito bom! Você conhece as principais tendências.";
        icone = "thumbs-up";
    } else {
        mensagem = "Bom começo! Continue aprendendo sobre o futuro do trabalho.";
        icone = "lightbulb";
    }

    document.getElementById('quiz-container').style.display = 'none';
    const resultadoDiv = document.getElementById('quiz-resultado');
    resultadoDiv.style.display = 'block';
    resultadoDiv.innerHTML = `
        <div class="resultado-icone">
            <i data-lucide="${icone}"></i>
        </div>
        <h2 class="resultado-titulo">Quiz Concluído!</h2>
        <div class="resultado-pontuacao">${acertos} / ${quizData.length}</div>
        <p class="resultado-mensagem">Você acertou <strong>${porcentagem}%</strong> das questões!</p>
        <p>${mensagem}</p>
        <button class="btn btn-refazer-quiz" id="btn-refazer">Refazer Quiz</button>
    `;

    // Inicializa os ícones Lucide
    lucide.createIcons();

    document.getElementById('btn-refazer').addEventListener('click', refazerQuiz);
}

function refazerQuiz() {
    document.getElementById('quiz-resultado').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    renderizarQuiz();
}


// PAIR FOCUS (TIMER POMODORO)

function inicializarPairFocus() {
    document.getElementById('timer-btn').addEventListener('click', toggleTimer);
    document.getElementById('timer-reset').addEventListener('click', resetarTimer);
    
    document.querySelectorAll('.mood-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
}

// função para resetar o timer

function resetarTimer() {
    clearInterval(timerInterval);
    timerAtivo = false;
    tempoRestante = 25 * 60;
    atualizarDisplayTimer();
    
    const btn = document.getElementById('timer-btn');
    btn.textContent = 'Iniciar Sessão';
    btn.classList.add('btn-primary');
    btn.classList.remove('btn-secondary');
}

function toggleTimer() {
    const btn = document.getElementById('timer-btn');
    timerAtivo = !timerAtivo;

    if (timerAtivo) {
        btn.textContent = 'Pausar Sessão';
        btn.classList.add('btn-secondary');
        btn.classList.remove('btn-primary');
        
        timerInterval = setInterval(() => {
            tempoRestante--;
            atualizarDisplayTimer();
            if (tempoRestante <= 0) {
                finalizarSessao();
            }
        }, 1000);
    } else {
        btn.textContent = 'Retomar Sessão';
        clearInterval(timerInterval);
    }
}

function atualizarDisplayTimer() {
    const minutos = Math.floor(tempoRestante / 60);
    const segundos = tempoRestante % 60;
    document.getElementById('timer-display').textContent = 
        `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
}

function finalizarSessao() {
    clearInterval(timerInterval);
    timerAtivo = false;
    alert('Sessão Pomodoro de 25 minutos concluída! Hora de uma pausa de 5 minutos.');
    tempoRestante = 25 * 60;
    atualizarDisplayTimer();

    const btn = document.getElementById('timer-btn');
    btn.textContent = 'Iniciar Sessão';
    btn.classList.add('btn-primary');
    btn.classList.remove('btn-secondary');
}

// DASHBOARD (SIMULAÇÃO EDGE COMPUTING)

function inicializarDashboard() {
    atualizarDashboard();
    setInterval(atualizarDashboard, 5000); 
}

// Simula a leitura de sensores e atualiza a UI do dashboard
 
function atualizarDashboard() {
    // Simula dados dos sensores aleatoriamente (igual ao nosso projeto do Arduino)
    const luz = Math.floor(Math.random() * 1024); // 0-1023 (sensor LDR)
    const distancia = Math.floor(Math.random() * 100) + 20; // 20-120cm (sensor HC-SR04)

    // Classifica os dados
    const nivelLuz = classificarLuz(luz);
    const nivelPostura = classificarPostura(distancia);

    // Atualiza UI de Luz
    const luzProgress = document.getElementById('luz-progress');
    luzProgress.style.width = `${(luz / 1023) * 100}%`;
    luzProgress.className = `progress-fill ${nivelLuz.nivel}`;
    document.getElementById('luz-status').textContent = nivelLuz.texto;
    document.getElementById('luz-value').textContent = `${luz} lux`;

    // Atualiza UI de Postura 
    const posturaProgress = document.getElementById('postura-progress');

    // Calcula porcentagem - quanto mais perto de 50cm (ideal), maior a barra
    const porcentagemPostura = Math.max(0, 100 - Math.abs(distancia - 50) * 2);
    posturaProgress.style.width = `${porcentagemPostura}%`;
    posturaProgress.className = `progress-fill ${nivelPostura.nivel}`;
    document.getElementById('postura-status').textContent = nivelPostura.texto;
    document.getElementById('postura-value').textContent = `${distancia}cm`;

    // Atualiza Badge Geral (pior dos dois prevalece, igual ao nosso projeto no Arduino)
    let classificacaoGeral = 'ouro';
    if (nivelLuz.nivel === 'bronze' || nivelPostura.nivel === 'bronze') {
        classificacaoGeral = 'bronze';
    } else if (nivelLuz.nivel === 'prata' || nivelPostura.nivel === 'prata') {
        classificacaoGeral = 'prata';
    }

    const badgeGeral = document.getElementById('badge-geral');
    badgeGeral.className = `classificacao-badge ${classificacaoGeral}`;
    document.getElementById('badge-texto').textContent = classificacaoGeral.toUpperCase();
    
    const recMap = {
        ouro: "Seu ambiente está ótimo! Condições ideais de trabalho.",
        prata: "Ambiente bom, mas pode melhorar. Ajuste luz ou postura.",
        bronze: "Atenção! Ambiente precisa de ajustes urgentes."
    };
    document.getElementById('badge-rec').textContent = recMap[classificacaoGeral];
}

// Classifica nível de luminosidade

function classificarLuz(valor) {
    if (valor > 700) return { nivel: 'ouro', texto: 'Nível Ouro - Iluminação Ideal' };
    if (valor >= 300) return { nivel: 'prata', texto: 'Nível Prata - Iluminação Adequada' };
    return { nivel: 'bronze', texto: 'Nível Bronze - Ambiente Escuro' };
}

// Classifica nível de postura ergonômica

function classificarPostura(distancia) {
    if (distancia >= 40 && distancia <= 60) {
        return { nivel: 'ouro', texto: 'Nível Ouro - Postura Ideal (40-60cm)' };
    }
    if ((distancia >= 25 && distancia < 40) || (distancia > 60 && distancia <= 80)) {
        return { nivel: 'prata', texto: 'Nível Prata - Ajuste Recomendado' };
    }
    return { nivel: 'bronze', texto: 'Nível Bronze - Postura Inadequada' };
}

// Gráfico de Monitoramento

document.addEventListener('DOMContentLoaded', () => {
    desenharGraficoHistorico();
});

// desenhando o gráfico manualmente
function desenharGraficoHistorico() {
    const svg = document.getElementById('grafico-historico');
    if (!svg) return;

    const width = 1100;
    const height = 350;
    const paddingLeft = 70;
    const paddingRight = 70;
    const paddingTop = 40;
    const paddingBottom = 50;
    
    // dados simulados dos dias da semana
    const dias = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    const luzData = [650, 720, 580, 780, 820, 690, 460];
    const posturaData = [67, 49, 92, 70, 95, 65, 90];
    
    svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
    svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    
    // limpar conteúdo anterior
    svg.innerHTML = '';
    
    // calcula Y para luminosidade (0-1023)
    const calcYLuz = (value) => {
        const max = 1023;
        return paddingTop + ((max - value) / max) * (height - paddingTop - paddingBottom);
    };
    
    // calcula Y para postura (20-120)
    const calcYPostura = (value) => {
        const min = 20;
        const max = 120;
        return paddingTop + ((max - value) / (max - min)) * (height - paddingTop - paddingBottom);
    };
    
    // calcula posição X
    const calcX = (index, total) => {
        return paddingLeft + ((width - paddingLeft - paddingRight) / (total - 1)) * index;
    };
    
    // grid horizontal (linhas do fundo)
    for (let i = 0; i <= 4; i++) {
        const y = paddingTop + (i * (height - paddingTop - paddingBottom) / 4);
        svg.innerHTML += `<line x1="${paddingLeft}" y1="${y}" x2="${width - paddingRight}" y2="${y}" stroke="#374151" stroke-width="1" opacity="0.3"/>`;
    }
    
    // eixo Y esquerdo - Luminosidade
    svg.innerHTML += `<text x="20" y="${height/2}" text-anchor="middle" font-size="14" fill="#fbbf24" font-weight="700" transform="rotate(-90, 20, ${height/2})">Luminosidade (lux)</text>`;
    
    const valoresLuz = [1000, 750, 500, 250, 0];
    valoresLuz.forEach((valor) => {
        const y = calcYLuz(valor);
        svg.innerHTML += `<text x="${paddingLeft - 15}" y="${y + 5}" text-anchor="end" font-size="13" fill="#fbbf24" font-weight="600">${valor}</text>`;
    });
    
    // eixo Y direito - Postura
    svg.innerHTML += `<text x="${width - 20}" y="${height/2}" text-anchor="middle" font-size="14" fill="#3b82f6" font-weight="700" transform="rotate(90, ${width - 20}, ${height/2})">Postura (cm)</text>`;
    
    const valoresPostura = [120, 90, 60, 30];
    valoresPostura.forEach((valor) => {
        const y = calcYPostura(valor);
        svg.innerHTML += `<text x="${width - paddingRight + 10}" y="${y + 5}" text-anchor="start" font-size="13" fill="#3b82f6" font-weight="600">${valor}</text>`;
    });
    
    // linha de luminosidade
    let pathLuz = `M ${calcX(0, 7)} ${calcYLuz(luzData[0])}`;
    for (let i = 1; i < luzData.length; i++) {
        pathLuz += ` L ${calcX(i, 7)} ${calcYLuz(luzData[i])}`;
    }
    svg.innerHTML += `<path d="${pathLuz}" stroke="#fbbf24" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
    
    // pontos de luminosidade
    luzData.forEach((value, i) => {
        const x = calcX(i, 7);
        const y = calcYLuz(value);
        svg.innerHTML += `<circle cx="${x}" cy="${y}" r="7" fill="#fbbf24"/>`;
        svg.innerHTML += `<circle cx="${x}" cy="${y}" r="3" fill="#1f2937"/>`;
    });
    
    // linha de postura
    let pathPostura = `M ${calcX(0, 7)} ${calcYPostura(posturaData[0])}`;
    for (let i = 1; i < posturaData.length; i++) {
        pathPostura += ` L ${calcX(i, 7)} ${calcYPostura(posturaData[i])}`;
    }
    svg.innerHTML += `<path d="${pathPostura}" stroke="#3b82f6" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
    
    // pontos de postura
    posturaData.forEach((value, i) => {
        const x = calcX(i, 7);
        const y = calcYPostura(value);
        svg.innerHTML += `<circle cx="${x}" cy="${y}" r="7" fill="#3b82f6"/>`;
        svg.innerHTML += `<circle cx="${x}" cy="${y}" r="3" fill="#1f2937"/>`;
    });
    
    // label dos dias
    dias.forEach((dia, i) => {
        const x = calcX(i, 7);
        svg.innerHTML += `<text x="${x}" y="${height - 15}" text-anchor="middle" font-size="15" fill="#9ca3af" font-weight="600">${dia}</text>`;
    });
}