/**
 * SEUS CERTIFICADOS
 * =================
 * Edite este arquivo para adicionar, remover ou atualizar seus certificados.
 *
 * Campos:
 *   id          → número único (qualquer inteiro)
 *   name        → nome do certificado
 *   institution → escola / plataforma / instituição
 *   type        → "idioma" | "curso" | "escola"
 *   date        → "Mês AAAA"  (ex: "Jan 2024")
 *   hours       → carga horária como string (ex: "40h") — opcional
 *   description → breve descrição do conteúdo
 *   image       → caminho para imagem do certificado  (ex: "img/cert1.jpg")
 *                 ↳ deixe "" para usar placeholder
 *   link        → URL do certificado online — deixe "" se não tiver
 */

const CERTIFICATES = [
  {
    id: 1,
    name: "Técnico em Desenvolvimento de Sistemas — SENAI",
    institution: "SENAI",
    type: "escola",
    date: "Dez 2024",
    hours: "",
    description: "Certificação técnica em desenvolvimento de sistemas integrado ao ensino médio, referente ao período de 2022 a 2024.",
    image: "img/c1.png",
    link: ""
  },
  {
    id: 2,
    name: "Level 4 - A2 English",
    institution: "Open English",
    type: "idioma",
    date: "Dez 2025",
    hours: "",
    description: "Certificação de proficiência em inglês nível A2, abrangendo habilidades de compreensão auditiva, leitura, escrita e conversação básica.",
    image: "img/c2.png",
    link: ""
  },
  {
    id: 3,
    name: "Inglês Avançado — C1",
    institution: "CNA Brasil",
    type: "idioma",
    date: "Mar 2022",
    hours: "360h",
    description: "Conclusão do curso de inglês nível avançado com foco em conversação, gramática e escrita.",
    image: "",
    link: ""
  },

  // ── CURSOS ───────────────────────────────────────────────
  {
    id: 4,
    name: "Excel do Básico ao Avançado",
    institution: "Udemy",
    type: "curso",
    date: "Fev 2024",
    hours: "27h",
    description: "Domínio completo do Excel: fórmulas, tabelas dinâmicas, gráficos, Power Query e macros VBA.",
    image: "",
    link: ""
  },
  {
    id: 5,
    name: "Python para Data Science",
    institution: "Data Science Academy",
    type: "curso",
    date: "Ago 2023",
    hours: "72h",
    description: "Fundamentos de Python aplicados à ciência de dados: NumPy, Pandas, Matplotlib e Machine Learning.",
    image: "",
    link: ""
  },
  {
    id: 6,
    name: "Comunicação e Oratória",
    institution: "Coursera / Univ. Michigan",
    type: "curso",
    date: "Mai 2023",
    hours: "18h",
    description: "Técnicas de comunicação interpessoal, apresentações eficazes e desenvolvimento de oratória profissional.",
    image: "",
    link: ""
  },
  {
    id: 7,
    name: "Gestão de Projetos — PMBok",
    institution: "FGV Online",
    type: "curso",
    date: "Jan 2023",
    hours: "60h",
    description: "Gerenciamento de projetos com base no Guia PMBok, abordando iniciação, planejamento, execução e encerramento.",
    image: "",
    link: ""
  },
  {
    id: 8,
    name: "Marketing Digital",
    institution: "Rock University",
    type: "curso",
    date: "Out 2022",
    hours: "40h",
    description: "Estratégias de inbound marketing, SEO, redes sociais, e-mail marketing e análise de métricas.",
    image: "",
    link: ""
  },

  // ── ESCOLAS / FORMAÇÕES ───────────────────────────────────
  {
    id: 9,
    name: "Ensino Médio Completo",
    institution: "Colégio Estadual — SC",
    type: "escola",
    date: "Dez 2020",
    hours: "",
    description: "Conclusão do ensino médio com ênfase em ciências humanas e língua portuguesa.",
    image: "",
    link: ""
  },
  {
    id: 10,
    name: "Técnico em Administração",
    institution: "SENAC Santa Catarina",
    type: "escola",
    date: "Jul 2021",
    hours: "800h",
    description: "Curso técnico profissionalizante em Administração, com disciplinas de contabilidade, gestão de pessoas e marketing.",
    image: "",
    link: ""
  },
  {
    id: 11,
    name: "Extensão em Negócios",
    institution: "SEBRAE SC",
    type: "escola",
    date: "Mar 2022",
    hours: "120h",
    description: "Programa de extensão focado em empreendedorismo, plano de negócios e finanças para pequenas empresas.",
    image: "",
    link: ""
  }
];
