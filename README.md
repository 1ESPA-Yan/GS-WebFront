<div align="center">

# FocusTogether
### Trabalhe sozinho. Cresça junto.

</div>

---

## Resumo do Projeto

**FocusTogether** é uma plataforma web colaborativa desenvolvida para combater o isolamento profissional no trabalho remoto. O projeto integra Edge Computing, gamificação humanizada e análise de dados para criar um ecossistema digital que equilibra produtividade, bem-estar e desenvolvimento de carreira.

A solução aborda três pilares fundamentais do futuro do trabalho:

**Foco Consciente**: Sistema de monitoramento ambiental via Edge Computing que simula sensores Arduino (LDR para luminosidade e HC-SR04 para postura ergonômica), classificando as condições de trabalho em Bronze, Prata ou Ouro e oferecendo recomendações personalizadas.

**Conexão Humana**: Ambiente de co-working virtual com sessões Pomodoro de 25 minutos, sistema de matching inteligente entre profissionais (Júnior + Sênior = mentoria natural) e check-ins de humor para criar conexões genuínas.

**Carreira do Amanhã**: Exploração de profissões emergentes com altas taxas de crescimento, trilhas de aprendizado detalhadas e conexão com profissionais na mesma jornada de desenvolvimento.

---

## Links

**Repositório GitHub**: [https://github.com/1ESPA-Yan/GS-WebFront](https://github.com/1ESPA-Yan/GS-WebFront)

**Site ao vivo**: [https://1espa-yan.github.io/GS-WebFront/](https://1espa-yan.github.io/GS-WebFront/)

---

## Funcionalidades

### Exploração de Profissionais

Sistema completo de visualização e filtro de profissionais remotos, incluindo:

- Grid responsivo com 12 perfis profissionais cadastrados
- Sistema de busca por nome, cargo ou skills técnicas
- Filtros por área de atuação (Tecnologia, Design, Marketing, Gestão, Educação)
- Cards interativos com animações de hover e fade-in
- Taxa de crescimento da profissão destacada em cada card
- Modal com slideshow de perfis detalhados contendo:
  - Informações pessoais e profissionais completas
  - Experiência, formação acadêmica e localização
  - Skills técnicas e soft skills
  - Hobbies e interesses pessoais
  - Navegação entre perfis (anterior/próximo)
  - Indicadores de posição no slideshow

### Pair Focus - Sessões Colaborativas

Ambiente de co-working virtual simulado com:

- Timer Pomodoro funcional de 25 minutos
- Controles de iniciar, pausar e resetar a sessão
- Check-in de humor com 4 opções (feliz, focado, cansado, estressado)
- Interface visual simulando aplicativo de desktop
- Feedback ao finalizar cada sessão Pomodoro

### Dashboard de Monitoramento Ambiental

Simulação de Edge Computing com leitura de sensores em tempo real:

- **Monitoramento de Luminosidade**: Simula sensor LDR (0-1023 lux) com classificação:
  - Bronze: < 300 lux (ambiente escuro)
  - Prata: 300-700 lux (adequado)
  - Ouro: > 700 lux (ideal)

- **Monitoramento de Postura Ergonômica**: Simula sensor ultrassônico HC-SR04 medindo distância da tela:
  - Ouro: 40-60cm (postura ideal)
  - Prata: 25-40cm ou 60-80cm (ajuste recomendado)
  - Bronze: < 25cm ou > 80cm (postura inadequada)

- **Classificação Geral do Ambiente**: Badge visual combinando ambos os sensores
- **Gráfico Histórico Semanal**: Visualização em SVG nativo mostrando 7 dias de dados de luminosidade e postura
- **Recomendações Personalizadas**: Mensagens contextuais baseadas nas condições detectadas
- **Atualização em Tempo Real**: Dados simulados atualizados a cada 5 segundos

### Sistema de Conquistas (Gamificação)

Badges desbloqueáveis que incentivam comportamentos saudáveis:

- **Study Buddy**: Complete 10 sessões de Pair Focus
- **Foco Zen**: Mantenha 7 dias consecutivos com ambiente Ouro (conquistado)
- **Mentor Emergente**: Ajude 5 profissionais júnior em mentorias
- **Conector de Talentos**: Indique 10 profissionais para Pair Focus
- **Guardião da Ergonomia**: Mantenha postura ideal por 30 dias

Cada conquista possui:
- Barra de progresso animada
- Contador de conclusão
- Status visual (em progresso, conquistado, bloqueado)
- Resumo estatístico com total de conquistas e percentual médio

### Quiz Educativo

Sistema de perguntas e respostas sobre o futuro do trabalho:

- 8 perguntas de múltipla escolha
- Temas: OIT, isolamento profissional, automação, ergonomia, técnica Pomodoro, ODS da ONU
- Feedback imediato ao selecionar resposta (correta/incorreta)
- Explicação detalhada para cada pergunta
- Sistema de pontuação final com mensagem motivacional
- Opção de refazer o quiz

### Trilhas de Profissões Emergentes

Exploração de carreiras do futuro com informações detalhadas:

- **Desenvolvedor de IA** (+300% crescimento)
- **Especialista em Ética de IA** (+250% crescimento)
- **Engenheiro de Energia Renovável** (+180% crescimento)
- **Designer de Experiência Remota** (+150% crescimento)

Cada profissão inclui:
- Taxa de crescimento anual
- Faixa salarial estimada
- Tempo de estudo necessário
- Skills técnicas requeridas
- Número de profissionais já estudando a área
- Trilha de aprendizado com 4 etapas (via alert)

### Sistema de Matching para Pair Focus

Conecta profissionais para sessões colaborativas:

- 4 profissionais disponíveis online
- Indicador de status em tempo real (bolinha verde pulsante)
- Informações de cada profissional:
  - Nível (Júnior, Pleno, Sênior) com badge colorida
  - Objetivo da sessão
  - Horário de disponibilidade
  - Áreas de interesse técnico
- Modal de confirmação de match
- Simulação de início de sessão Pomodoro

### Sistema de Navegação

- Menu responsivo com links suaves para todas as seções
- Menu hambúrguer em dispositivos móveis
- Toggle de tema claro/escuro com persistência visual
- Footer com links rápidos e informações institucionais

---

## Tecnologias Utilizadas

### Front-End

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

**HTML5**
- Estrutura semântica com tags apropriadas (header, nav, section, footer)
- Acessibilidade com atributos ARIA onde necessário
- Meta tags para SEO e responsividade

**CSS3**
- Flexbox para layouts flexíveis
- CSS Grid para grids bidimensionais (dashboard, cards de profissões)
- Variáveis CSS (Custom Properties) para tema claro/escuro
- Animações e transições suaves
- Media queries para responsividade completa
- Gradientes lineares e radiais
- Box-shadow e border-radius para profundidade visual

**JavaScript Vanilla**
- Manipulação de DOM (querySelector, addEventListener, createElement)
- Arrays e objetos para armazenamento de dados
- Funções puras e reutilizáveis
- SetInterval para simulações em tempo real
- Controle de estado da aplicação
- Event handling (click, input, change)
- Template literals para renderização dinâmica

### Biblioteca de Ícones

![Lucide](https://img.shields.io/badge/Lucide-Icons-6366f1?style=flat)

**Lucide Icons** (https://lucide.dev/)
- Biblioteca de ícones SVG leves e customizáveis
- +1000 ícones disponíveis
- Carregamento via CDN
- Inicialização via `lucide.createIcons()`
- Ícones utilizados: laptop, palette, pen-tool, globe, calculator, smartphone, briefcase, brain, shield-check, sun, layout, cloud-rain, trending-up, users, zap, lightbulb, person-standing, activity, award, target, rotate-ccw, smile, annoyed, frown, angry, menu, moon

### Ferramentas de Desenvolvimento

![Git](https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)
![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=flat&logo=visual-studio-code&logoColor=white)

**Git/GitHub**
- Controle de versão distribuído
- Commits semânticos
- Branches para desenvolvimento
- GitHub Pages para hospedagem

**Visual Studio Code**
- Editor de código principal
- Extensões: Live Server, ESLint

---

## Estrutura de Arquivos

```
GS-WebFront/
│
├── index.html                  # Página principal do projeto
├── equipe.txt                  # Informações da equipe (nomes e RMs)
├── README.md                   # Documentação do projeto
│
└── src/
    ├── css/
    │   └── style.css           # Estilos globais, variáveis, responsividade
    │
    └── js/
        ├── dados.js            # Arrays de profissionais e perguntas do quiz
        └── script.js           # Lógica da aplicação e interatividade
```

**Descrição dos Arquivos**

`index.html`: Estrutura completa da página com todas as seções (header, hero, profissionais, modal, pair focus, dashboard, conquistas, quiz, trilhas, matching, footer)

`style.css`: Todos os estilos da aplicação incluindo reset, variáveis CSS, estilos de componentes, animações, tema escuro e media queries para responsividade

`dados.js`: Contém o array `profissionais` com 12 objetos detalhados e o array `quizData` com 8 perguntas e respostas

`script.js`: Toda a lógica JavaScript incluindo inicialização, renderização, filtros, slideshow, quiz, timer Pomodoro, dashboard, gráfico SVG e sistema de abas

---

## Como Executar o Projeto

### Pré-requisitos

- Navegador web moderno (Google Chrome, Mozilla Firefox, Microsoft Edge ou Safari)
- Conexão com internet (para carregar a biblioteca Lucide Icons via CDN)

### Opção 1: Acesso Direto Online

Acesse o site hospedado no GitHub Pages:

[https://1espa-yan.github.io/GS-WebFront/](https://1espa-yan.github.io/GS-WebFront/)

### Opção 2: Execução Local

**Passo 1: Clone o repositório**

```bash
git clone https://github.com/1ESPA-Yan/GS-WebFront.git
```

**Passo 2: Navegue até a pasta do projeto**

```bash
cd GS-WebFront
```

**Passo 3: Abra o projeto**

Escolha uma das opções:

**A) Duplo clique no arquivo `index.html`**
- O navegador padrão abrirá automaticamente o site

**B) Use o Live Server (recomendado para desenvolvimento)**
1. Instale a extensão "Live Server" no VS Code
2. Abra a pasta do projeto no VS Code
3. Clique com botão direito em `index.html`
4. Selecione "Open with Live Server"

---

## Design e UX

### Tema Claro e Escuro

A aplicação possui sistema de alternância entre tema claro e escuro implementado via:

- Toggle visual no header (ícones de sol e lua)
- Variáveis CSS que mudam dinamicamente
- Transições suaves entre temas (0.3s)
- Todas as cores adaptáveis (backgrounds, textos, borders, cards)

**Variáveis do Tema Claro:**
- Background principal: branco (#ffffff)
- Texto principal: cinza escuro (#1f2937)
- Azul primário: #93c5fd

**Variáveis do Tema Escuro:**
- Background principal: cinza muito escuro (#111827)
- Texto principal: branco sujo (#f9fafb)
- Azul primário: #60a5fa

### Responsividade

Layout totalmente responsivo com três breakpoints principais:

**Desktop (> 768px)**
- Dashboard em grid de 3 colunas
- Cards de profissionais em linha
- Menu horizontal completo
- Gráfico histórico em largura total

**Tablet (481px - 768px)**
- Dashboard em 2 colunas
- Cards adaptados
- Espaçamentos reduzidos

**Mobile (≤ 480px)**
- Dashboard em coluna única
- Menu hambúrguer
- Cards em largura total
- Fontes reduzidas
- Timer Pomodoro menor (200px)
- Gráfico adaptado (300px de altura)

### Animações e Micro-interações

- Fade-in dos cards de profissionais (staggered animation)
- Hover effects com translateY e scale
- Transições suaves em todos os botões
- Pulse animation no indicador de status online
- Barra de progresso animada (transition: width 0.6s)
- Rotação do gráfico de luminosidade

---

## Funcionalidades Técnicas

### Simulação de Edge Computing

O dashboard simula a leitura de sensores Arduino em tempo real:

```javascript
// Simulação de sensores
const luz = Math.floor(Math.random() * 1023);        // Sensor LDR: 0-1023
const distancia = Math.floor(Math.random() * 100) + 20; // HC-SR04: 20-120cm

// Classificação de luminosidade
function classificarLuz(valor) {
    if (valor > 700) return { nivel: 'ouro', texto: 'Nível Ouro - Iluminação Ideal' };
    if (valor >= 300) return { nivel: 'prata', texto: 'Nível Prata - Iluminação Adequada' };
    return { nivel: 'bronze', texto: 'Nível Bronze - Ambiente Escuro' };
}

// Classificação ergonômica
function classificarPostura(distancia) {
    if (distancia >= 40 && distancia <= 60) {
        return { nivel: 'ouro', texto: 'Nível Ouro - Postura Ideal (40-60cm)' };
    }
    // ... demais classificações
}
```

A classificação geral do ambiente segue a regra: **o pior nível prevalece** (Bronze > Prata > Ouro), igual ao comportamento de um sistema Arduino real.

### Gráfico SVG Nativo

Gráfico histórico semanal desenhado manualmente sem bibliotecas externas:

- Criado inteiramente com JavaScript manipulando elementos SVG
- ViewBox responsivo: `0 0 1100 350`
- Duas linhas de dados: luminosidade (amarelo) e postura (azul)
- Grid horizontal de referência
- Eixos Y duplos (esquerdo para lux, direito para cm)
- Labels dos dias da semana
- Pontos interativos com círculos duplos
- Legendas coloridas identificando cada linha

```javascript
// Exemplo de desenho de linha
let pathLuz = `M ${calcX(0, 7)} ${calcYLuz(luzData[0])}`;
for (let i = 1; i < luzData.length; i++) {
    pathLuz += ` L ${calcX(i, 7)} ${calcYLuz(luzData[i])}`;
}
svg.innerHTML += `<path d="${pathLuz}" stroke="#fbbf24" stroke-width="4" fill="none"/>`;
```

### Sistema de Navegação por Abas

As seções de Trilhas e Matching utilizam um sistema de abas simples:

```javascript
function mudarAba(aba) {
    // Remove active de todos os botões e conteúdos
    document.querySelectorAll('.tab-btn').forEach(btn => 
        btn.classList.remove('active')
    );
    document.querySelectorAll('.tab-content').forEach(content => 
        content.classList.remove('active')
    );
    
    // Adiciona active na aba selecionada
    event.target.classList.add('active');
    document.getElementById(aba).classList.add('active');
}
```

### Timer Pomodoro Funcional

Implementação de contador regressivo de 25 minutos:

```javascript
let tempoRestante = 25 * 60; // 25 minutos em segundos

function toggleTimer() {
    if (timerAtivo) {
        timerInterval = setInterval(() => {
            tempoRestante--;
            atualizarDisplayTimer();
            if (tempoRestante <= 0) {
                finalizarSessao();
            }
        }, 1000);
    }
}
```

### Sistema de Filtros

Busca e filtra em tempo real:

```javascript
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
```

---

## Alinhamento com os Objetivos de Desenvolvimento Sustentável (ODS) da ONU

O projeto FocusTogether está alinhado com 6 dos 17 Objetivos de Desenvolvimento Sustentável da ONU:

**ODS 3 - Saúde e Bem-Estar**: O sistema de monitoramento ambiental promove pausas ativas e consciência sobre ergonomia, prevenindo problemas de saúde relacionados ao trabalho remoto como fadiga ocular, problemas posturais e burnout.

**ODS 4 - Educação de Qualidade**: As trilhas de aprendizado, quiz educativo e sistema de matching para mentoria facilitam o acesso a conhecimento de qualidade e desenvolvimento profissional contínuo.

**ODS 8 - Trabalho Decente e Crescimento Econômico**: A plataforma combate o isolamento profissional e promove ambientes de trabalho saudáveis, contribuindo para o bem-estar mental dos trabalhadores remotos e melhores condições de trabalho.

**ODS 9 - Indústria, Inovação e Infraestrutura**: O uso de Edge Computing democratiza o acesso à tecnologia de ponta, permitindo que profissionais monitorem suas condições de trabalho sem necessidade de infraestrutura complexa ou cloud computing.

**ODS 10 - Redução das Desigualdades**: O sistema de matching conecta profissionais júnior com sênior para mentoria acessível, reduzindo barreiras de acesso ao desenvolvimento profissional independentemente da localização geográfica ou recursos financeiros.

**ODS 13 - Ação Contra a Mudança Global do Clima**: O processamento local de dados via Edge Computing (ao invés de enviar dados para servidores cloud) reduz o tráfego de rede e o consumo energético, contribuindo para práticas mais sustentáveis.

---

## Licença

Este projeto foi desenvolvido para fins educacionais como parte da **Global Solution 2025** da FIAP - Faculdade de Informática e Administração Paulista.

O código é disponibilizado para consulta e aprendizado. Para uso comercial ou redistribuição, entre em contato com os autores.

---

## Equipe

| Nome | RM |
|------|-----|
| João Victor | 566640 |
| Gustavo Macedo | 567594 |
| Yan Lucas | 567046 |

---

<div align="center">

**Desenvolvido com dedicação pela equipe FocusTogether**

**© 2025 FocusTogether | Projeto Educacional**

</div>