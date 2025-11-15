// váriaveis
let perfilAtualIndex = 0;

// inicialização

document.addEventListener('DOMContentLoaded', () => {
    inicializarProfissionais();
    inicializarFiltros();
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