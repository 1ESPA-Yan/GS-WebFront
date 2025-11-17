// array de profissionais
// As 10 profissões que mais sofrem com trabalho remoto isolado

const profissionais = [
    {
        id: 1,
        nome: "Ana Silva",
        cargo: "Desenvolvedora de Software",
        profissao: "Desenvolvedor de Software",
        area: "Tecnologia",
        icone: "laptop",
        taxaCrescimento: 85.0, 
        skills: ["Python", "JavaScript", "React", "Node.js", "Git"],
        softSkills: ["Resolução de problemas", "Trabalho em equipe", "Comunicação"],
        experiencia: 5,
        formacao: "Ciência da Computação - FIAP",
        localizacao: "São Paulo, SP",
        hobbies: ["Open source", "Café especial", "Jogos indie"],
        bio: "Desenvolvedora full-stack que trabalha remotamente há 3 anos. Enfrenta desafios de iluminação inadequada em home office e sente falta de pair programming presencial. Busca conexões para combater o isolamento."
    },
    {
        id: 2,
        nome: "Carlos Mendes",
        cargo: "Designer Gráfico",
        profissao: "Designer Gráfico",
        area: "Design",
        icone: "palette",
        taxaCrescimento: 75.0,
        skills: ["Figma", "Adobe Creative Suite", "UI/UX", "Prototipagem", "Branding"],
        softSkills: ["Criatividade", "Atenção aos detalhes", "Empatia"],
        experiencia: 4,
        formacao: "Design Gráfico",
        localizacao: "Rio de Janeiro, RJ",
        hobbies: ["Sketching", "Fotografia", "Museus"],
        bio: "Designer focado em identidades visuais. O trabalho solitário em projetos freelance gera isolamento profissional. Muitas horas na tela com postura inadequada causam fadiga."
    },
    {
        id: 3,
        nome: "Beatriz Costa",
        cargo: "Analista de Dados",
        profissao: "Analista de Dados",
        area: "Tecnologia",
        icone: "bar-chart-3",
        taxaCrescimento: 80.0,
        skills: ["Python", "SQL", "Power BI", "Excel Avançado", "Estatística"],
        softSkills: ["Pensamento analítico", "Curiosidade", "Organização"],
        experiencia: 6,
        formacao: "Estatística - USP",
        localizacao: "Belo Horizonte, MG",
        hobbies: ["Podcasts de dados", "Corrida", "Leitura"],
        bio: "Analista que passa longas horas analisando dados em ambiente com iluminação artificial. Pouca interação social diária gera sensação de isolamento. Busca comunidades para networking."
    },
    {
        id: 4,
        nome: "Daniel Oliveira",
        cargo: "Redator de Conteúdo",
        profissao: "Redator de Conteúdo",
        area: "Marketing",
        icone: "pen-tool",
        taxaCrescimento: 70.0,
        skills: ["Copywriting", "SEO", "WordPress", "Storytelling", "Revisão"],
        softSkills: ["Criatividade", "Adaptabilidade", "Comunicação escrita"],
        experiencia: 3,
        formacao: "Jornalismo",
        localizacao: "Brasília, DF",
        hobbies: ["Escrever contos", "Violão", "Cinema"],
        bio: "Redator freelancer que trabalha isolado criando conteúdo. Má postura ao escrever por horas causa desconforto. Sente falta de feedback imediato e brainstorming presencial."
    },
    {
        id: 5,
        nome: "Eduarda Santos",
        cargo: "Tradutora Remota",
        profissao: "Tradutor/Intérprete Remoto",
        area: "Educação",
        icone: "globe",
        taxaCrescimento: 65.0,
        skills: ["Inglês Fluente", "Espanhol", "Localização", "Revisão", "CAT Tools"],
        softSkills: ["Precisão", "Concentração", "Paciência"],
        experiencia: 7,
        formacao: "Letras - Tradução",
        localizacao: "Porto Alegre, RS",
        hobbies: ["Séries legendadas", "Viagens", "Idiomas"],
        bio: "Tradutora que trabalha sozinha em projetos de localização. Concentração intensa por horas em ambiente pouco iluminado. Isolamento profissional é desafio constante."
    },
    {
        id: 6,
        nome: "Felipe Rodrigues",
        cargo: "Especialista em Cibersegurança",
        profissao: "Especialista em Cibersegurança",
        area: "Tecnologia",
        icone: "shield",
        taxaCrescimento: 90.0,
        skills: ["Pentest", "Network Security", "Python", "Linux", "Análise de Vulnerabilidades"],
        softSkills: ["Atenção aos detalhes", "Pensamento crítico", "Discrição"],
        experiencia: 8,
        formacao: "Segurança da Informação",
        localizacao: "São Paulo, SP",
        hobbies: ["CTF", "Hacking ético", "Café"],
        bio: "Especialista que monitora sistemas em turnos noturnos. Trabalho solo em ambientes escuros analisando logs. Isolamento extremo devido à natureza confidencial do trabalho."
    },
    {
        id: 7,
        nome: "Gabriela Lima",
        cargo: "Contadora Digital",
        profissao: "Contador Digital",
        area: "Gestão",
        icone: "calculator",
        taxaCrescimento: 60.0,
        skills: ["Contabilidade", "Excel", "ERP", "Legislação Fiscal", "Relatórios"],
        softSkills: ["Organização", "Precisão", "Responsabilidade"],
        experiencia: 10,
        formacao: "Ciências Contábeis + CRC",
        localizacao: "Curitiba, PR",
        hobbies: ["Investimentos", "Yoga", "Jardinagem"],
        bio: "Contadora que atende clientes remotamente. Trabalho repetitivo e solitário fechando balanços. Longas horas na tela com pouca interação humana causam fadiga mental."
    },
    {
        id: 8,
        nome: "Henrique Alves",
        cargo: "Suporte Técnico Remoto",
        profissao: "Suporte Técnico Remoto",
        area: "Tecnologia",
        icone: "headphones",
        taxaCrescimento: 55.0,
        skills: ["Troubleshooting", "Windows/Linux", "Atendimento", "Ticketing", "Redes"],
        softSkills: ["Paciência", "Comunicação", "Empatia"],
        experiencia: 4,
        formacao: "Técnico em Informática",
        localizacao: "Recife, PE",
        hobbies: ["Games", "Tecnologia", "Streaming"],
        bio: "Atende tickets remotamente em home office. Estresse do atendimento isolado sem suporte da equipe. Condições de trabalho variáveis (iluminação, ergonomia) afetam desempenho."
    },
    {
        id: 9,
        nome: "Isabela Ferreira",
        cargo: "Social Media Manager",
        profissao: "Social Media Manager",
        area: "Marketing",
        icone: "smartphone",
        taxaCrescimento: 72.0,
        skills: ["Instagram", "TikTok", "Canva", "Copywriting", "Analytics"],
        softSkills: ["Criatividade", "Agilidade", "Comunicação"],
        experiencia: 3,
        formacao: "Publicidade e Propaganda",
        localizacao: "Salvador, BA",
        hobbies: ["Fotografia", "Tendências", "Café"],
        bio: "Gerencia redes sociais 24/7 de forma remota. Pressão constante e trabalho solitário geram estresse. Postura inadequada usando celular por horas causa problemas."
    },
    {
        id: 10,
        nome: "João Pedro",
        cargo: "Consultor de Negócios Online",
        profissao: "Consultor de Negócios Online",
        area: "Gestão",
        icone: "briefcase",
        taxaCrescimento: 68.0,
        skills: ["Consultoria", "Excel", "Apresentações", "CRM", "Análise de Mercado"],
        softSkills: ["Persuasão", "Relacionamento", "Estratégia"],
        experiencia: 6,
        formacao: "Administração - FGV",
        localizacao: "Fortaleza, CE",
        hobbies: ["Networking", "Leitura", "Golfe"],
        bio: "Consultor que atende clientes via videoconferência. Reuniões virtuais não substituem conexão presencial. Isolamento profissional afeta networking e desenvolvimento."
    }
];


// quiz - perguntas e respostas

const quizData = [
    {
        pergunta: "Segundo a OIT, qual porcentagem de organizações adotará modelos híbridos permanentes até 2030?",
        opcoes: ["30%", "50%", "70%", "90%"],
        respostaCorreta: 2,
        explicacao: "Estudos da OIT indicam que 70% das organizações adotarão modelos de trabalho híbridos até 2030, combinando presencial e remoto."
    },
    {
        pergunta: "Qual é o principal desafio relatado por 40% dos profissionais em trabalho remoto?",
        opcoes: ["Falta de equipamento adequado", "Isolamento profissional e solidão", "Internet instável", "Barulho excessivo"],
        respostaCorreta: 1,
        explicacao: "40% dos trabalhadores remotos relatam isolamento profissional como o maior desafio, afetando saúde mental e produtividade."
    },
    {
        pergunta: "Qual competência humana se tornará MAIS valiosa com a automação de tarefas técnicas?",
        opcoes: ["Programação avançada", "Criatividade e empatia", "Memorização de dados", "Digitação rápida"],
        respostaCorreta: 1,
        explicacao: "Com tarefas técnicas sendo automatizadas, habilidades exclusivamente humanas como criatividade, empatia e colaboração se tornam o diferencial competitivo."
    },
    {
        pergunta: "Qual a distância ergonômica ideal entre os olhos e a tela do computador?",
        opcoes: ["20-30cm", "40-60cm", "70-90cm", "Mais de 1 metro"],
        respostaCorreta: 1,
        explicacao: "A distância ergonômica ideal é de 40-60cm, conforme normas da ABNT. Distâncias menores ou maiores podem causar fadiga ocular e problemas posturais."
    },
    {
        pergunta: "O que é a técnica Pomodoro usada no Pair Focus?",
        opcoes: ["Uma receita italiana", "Sessões de foco de 25 minutos com pausas", "Um tipo de meditação", "Uma linguagem de programação"],
        respostaCorreta: 1,
        explicacao: "A técnica Pomodoro consiste em trabalhar focado por 25 minutos, seguido de uma pausa de 5 minutos, maximizando produtividade e prevenindo fadiga."
    },
    {
        pergunta: "Qual ODS da ONU está relacionado a 'Trabalho Decente e Crescimento Econômico'?",
        opcoes: ["ODS 4 - Educação", "ODS 8 - Trabalho Decente", "ODS 12 - Consumo Responsável", "ODS 16 - Paz e Justiça"],
        respostaCorreta: 1,
        explicacao: "O ODS 8 promove trabalho decente, crescimento econômico inclusivo e sustentável, abordando questões como condições de trabalho e bem-estar profissional."
    },
    {
        pergunta: "Segundo o FocusTogether, qual é a classificação de um ambiente de trabalho com iluminação de 750 lux?",
        opcoes: ["Bronze - Inadequado", "Prata - Adequado", "Ouro - Ideal", "Platina - Excepcional"],
        respostaCorreta: 2,
        explicacao: "Com 750 lux, a classificação é Ouro (ideal), pois está acima de 700 lux. Valores entre 300-700 são Prata, e abaixo de 300 são Bronze."
    },
    {
        pergunta: "Qual porcentagem de tarefas repetitivas será automatizada até 2030?",
        opcoes: ["10%", "25%", "40%", "60%"],
        respostaCorreta: 2,
        explicacao: "Estima-se que 40% das tarefas repetitivas serão automatizadas até 2030, exigindo requalificação profissional e foco em competências humanas."
    }
];