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
        id: 4,
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
        id: 5,
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
        id: 6,
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
        id: 7,
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
    },
    {
        id: 8,
        nome: "Marina Chen",
        cargo: "Desenvolvedora de IA Generativa",
        profissao: "Desenvolvedor de IA",
        area: "Tecnologia",
        icone: "brain",
        taxaCrescimento: 300.0,
        skills: ["Python", "TensorFlow", "PyTorch", "NLP", "Machine Learning"],
        softSkills: ["Pensamento crítico", "Ética", "Inovação"],
        experiencia: 4,
        formacao: "Ciência da Computação + IA - MIT",
        localizacao: "São Paulo, SP",
        hobbies: ["Pesquisa acadêmica", "Debates de ética", "Xadrez"],
        bio: "Especialista em IA Generativa trabalhando com LLMs e modelos de difusão. Lidera projetos de automação ética e busca colaboração com profissionais de áreas diversas para aplicações responsáveis de IA."
    },
    {
        id: 9,
        nome: "Ricardo Almeida",
        cargo: "Especialista em Ética de IA",
        profissao: "Especialista em Ética de IA",
        area: "Tecnologia",
        icone: "shield-check",
        taxaCrescimento: 250.0,
        skills: ["Auditoria de Algoritmos", "Governança de Dados", "LGPD", "Bias Detection", "Compliance"],
        softSkills: ["Pensamento crítico", "Comunicação", "Mediação"],
        experiencia: 6,
        formacao: "Direito Digital + Filosofia",
        localizacao: "Brasília, DF",
        hobbies: ["Filosofia", "Política digital", "Podcasts"],
        bio: "Atua na interseção entre tecnologia e sociedade, garantindo que sistemas de IA sejam justos e transparentes. Trabalha remotamente auditando algoritmos e desenvolvendo frameworks éticos para empresas tech."
    },
    {
        id: 10,
        nome: "Camila Ferreira",
        cargo: "Engenheira de Energia Renovável",
        profissao: "Engenheiro de Energia Renovável",
        area: "Tecnologia",
        icone: "sun",
        taxaCrescimento: 180.0,
        skills: ["Energia Solar", "Eólica", "Sistemas Fotovoltaicos", "IoT", "Sustentabilidade"],
        softSkills: ["Resolução de problemas", "Sustentabilidade", "Inovação"],
        experiencia: 5,
        formacao: "Engenharia Elétrica - UNICAMP",
        localizacao: "Campinas, SP",
        hobbies: ["Sustentabilidade", "Trilhas", "DIY Solar"],
        bio: "Projeta sistemas de energia limpa para comunidades remotas. Trabalha de forma descentralizada monitorando instalações via IoT. Busca conexões com engenheiros e desenvolvedores para soluções integradas."
    },
    {
        id: 11,
        nome: "Lucas Martins",
        cargo: "Designer de Experiência Remota",
        profissao: "Designer de Experiência Remota",
        area: "Design",
        icone: "layout",
        taxaCrescimento: 150.0,
        skills: ["UX/UI", "Realidade Virtual", "Metaverso", "Colaboração Remota", "Design Thinking"],
        softSkills: ["Empatia", "Criatividade", "Colaboração"],
        experiencia: 3,
        formacao: "Design de Interação - ESPM",
        localizacao: "São Paulo, SP",
        hobbies: ["VR Gaming", "Arte digital", "Eventos tech"],
        bio: "Especializado em criar experiências imersivas para trabalho remoto. Projeta ambientes virtuais de co-working e interfaces que promovem conexão humana. Sofre com isolamento e busca pair focus regular."
    },
    {
        id: 12,
        nome: "Paula Rodrigues",
        cargo: "Cientista de Dados Climáticos",
        profissao: "Analista de Dados",
        area: "Tecnologia",
        icone: "cloud-rain",
        taxaCrescimento: 165.0,
        skills: ["Python", "R", "Modelagem Climática", "Big Data", "Visualização"],
        softSkills: ["Pensamento analítico", "Comunicação científica", "Advocacy"],
        experiencia: 7,
        formacao: "Meteorologia + Data Science - USP",
        localizacao: "Rio de Janeiro, RJ",
        hobbies: ["Ativismo climático", "Fotografia natureza", "Ciência cidadã"],
        bio: "Analisa padrões climáticos para previsões de longo prazo e apoio a políticas públicas. Trabalha remotamente com grandes volumes de dados. Isolamento é desafio, mas encontra propósito na missão."
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
        opcoes: ["ODS 4", "ODS 8", "ODS 12", "ODS 16"],
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