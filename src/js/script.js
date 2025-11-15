// váriaveis
let perfilAtualIndex = 0;

// inicialização

document.addEventListener('DOMContentLoaded', () => {
    inicializarProfissionais();
    inicializarFiltros();
    inicializarSlideshow();
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