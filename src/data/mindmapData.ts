export interface MindMapNode {
  id: string;
  pillarEn: string;
  pillarPt: string;
  category: 'backend' | 'cloud' | 'security' | 'ai' | 'frontend' | 'education';
  accentColor: string; // Tailwind color class or hex
  badgeText: string;
  iconName: string;
  descriptionEn: string;
  descriptionPt: string;
  competencies: {
    titleEn: string;
    titlePt: string;
    detailsEn: string;
    detailsPt: string;
    tools: string[];
    certsOrBadges?: string[];
  }[];
}

export const mindMapData: MindMapNode[] = [
  {
    id: "backend-core",
    pillarEn: "Engineering Core & Backend",
    pillarPt: "Core de Engenharia e Backend",
    category: "backend",
    accentColor: "#10b981", // Emerald
    badgeText: "Architecture & Systems",
    iconName: "Server",
    descriptionEn: "Robust backend engineering, object-oriented design patterns, distributed services, and automated CI/CD pipelines.",
    descriptionPt: "Engenharia backend robusta, design patterns orientados a objetos, serviços distribuídos e pipelines de CI/CD automatizados.",
    competencies: [
      {
        titleEn: "Build & Dependency Management",
        titlePt: "Gestão de Dependências e Build",
        detailsEn: "Technical expertise in project dependency lifecycle, packaging, and builds using Maven and Gradle.",
        detailsPt: "Competência técnica no gerenciamento de ciclo de vida de dependências, empacotamento e builds com Maven e Gradle.",
        tools: ["Maven", "Gradle", "JVM", "Java 17+"]
      },
      {
        titleEn: "Java Ecosystem & Spring Framework",
        titlePt: "Ecossistema Java e Spring Framework",
        detailsEn: "Proficiency in enterprise Java development, RESTful API architecture, Spring Web, Spring Security, and Spring Data JPA.",
        detailsPt: "Domínio em ambiente de desenvolvimento Java, arquitetura de APIs RESTful com Spring Web, Spring Security e Spring Data JPA.",
        tools: ["Java", "Spring Boot", "Spring Security", "Hibernate", "REST APIs"]
      },
      {
        titleEn: "DevOps Culture & CI/CD",
        titlePt: "Cultura DevOps e CI/CD",
        detailsEn: "Containerization with Docker, multi-stage Dockerfiles, and automated continuous deployment workflows with Jenkins.",
        detailsPt: "Implementação de containers com Docker, Dockerfiles multi-estágio e automação de esteiras de deploy com Jenkins.",
        tools: ["Docker", "Jenkins", "Git", "GitHub Actions"]
      }
    ]
  },
  {
    id: "multi-cloud",
    pillarEn: "Multi-Cloud Ecosystem",
    pillarPt: "Ecossistema Multi-Cloud",
    category: "cloud",
    accentColor: "#38bdf8", // Sky
    badgeText: "Multi-Cloud Infrastructure",
    iconName: "Cloud",
    descriptionEn: "Multi-cloud architecture covering Azure, AWS, Google Cloud, and Oracle Cloud with emphasis on reliability and compliance.",
    descriptionPt: "Arquitetura multi-cloud cobrindo Azure, AWS, Google Cloud e Oracle Cloud com ênfase em confiabilidade e conformidade.",
    competencies: [
      {
        titleEn: "Microsoft Azure",
        titlePt: "Microsoft Azure",
        detailsEn: "Platform fundamentals, cloud security, identity integration, data platforms, and AI engineering services.",
        detailsPt: "Especialização em fundamentos de plataforma (AZ-900), segurança em nuvem (SC-900), dados (DP-900) e IA (AI-900 / AI-102).",
        tools: ["Azure App Services", "Azure Entra ID", "Azure AI Foundry", "Azure SQL"],
        certsOrBadges: ["AZ-900", "SC-900", "AI-900", "DP-900", "AI-102"]
      },
      {
        titleEn: "Amazon Web Services (AWS)",
        titlePt: "Amazon Web Services (AWS)",
        detailsEn: "Fundamental and associate architectural patterns: EC2, S3, IAM, VPC, and serverless compute primitives.",
        detailsPt: "Padrões arquiteturais fundamentais: EC2, S3, IAM, VPC e primitivas de computação serverless (Cloud Practitioner & Solutions Architect).",
        tools: ["AWS EC2", "AWS S3", "AWS Lambda", "AWS IAM", "AWS VPC"],
        certsOrBadges: ["Cloud Practitioner Concepts", "Solutions Architect Foundations"]
      },
      {
        titleEn: "Google Cloud & Oracle Cloud (OCI)",
        titlePt: "Google Cloud e OCI",
        detailsEn: "Core concepts in Cloud AI Foundations and implementation of cybersecurity & infrastructure services.",
        detailsPt: "Conhecimentos em AI Foundations e implantação de serviços de infraestrutura e cibersegurança no Google Cloud e OCI.",
        tools: ["Google Cloud Vertex AI", "OCI IAM", "Cloud Compute", "Cloud Storage"]
      }
    ]
  },
  {
    id: "cybersecurity-networks",
    pillarEn: "Cybersecurity & Networks",
    pillarPt: "Cibersegurança e Redes",
    category: "security",
    accentColor: "#f43f5e", // Rose
    badgeText: "Zero Trust & Protection",
    iconName: "ShieldCheck",
    descriptionEn: "Defensive security principles, threat modeling, network fundamentals, IAM governance, and DevSecOps practices.",
    descriptionPt: "Princípios de segurança defensiva, modelagem de ameaças, redes de computadores, governança de IAM e práticas DevSecOps.",
    competencies: [
      {
        titleEn: "Cybersecurity Specialization (FIAP)",
        titlePt: "Cybersecurity FIAP",
        detailsEn: "Extension course (Nano Course) focused on digital threat defense, data protection regulations, and attack vectors.",
        detailsPt: "Curso de extensão focado em ameaças digitais, vetores de ataque e proteção de dados em conformidade regulatória.",
        tools: ["Threat Modeling", "OWASP Top 10", "Data Privacy", "Vulnerability Assessment"],
        certsOrBadges: ["FIAP Nano Course"]
      },
      {
        titleEn: "Fortinet Certified Fundamentals (FCF)",
        titlePt: "Formação Fortinet (FCF)",
        detailsEn: "Completed Fortinet Certified Fundamentals program covering Threat Landscape and Networking Fundamentals.",
        detailsPt: "Conclusão do programa Fortinet Certified Fundamentals em Cybersecurity (Threat Landscape e Networking Fundamentals).",
        tools: ["Fortinet FCF", "Network Security", "Firewalls", "Threat Landscape"],
        certsOrBadges: ["Fortinet FCF"]
      },
      {
        titleEn: "Cloud Security & Compliance",
        titlePt: "Segurança em Nuvem e Infraestrutura",
        detailsEn: "Implementation of cybersecurity services, identity access management, and compliance governance (Microsoft SC-900).",
        detailsPt: "Foco em implantação de serviços de cibersegurança, gestão de identidades e conformidade (Microsoft SC-900).",
        tools: ["Microsoft Entra ID", "Zero Trust Architecture", "OAuth2 / OIDC", "Role-Based Access (RBAC)"],
        certsOrBadges: ["SC-900 Certified"]
      }
    ]
  },
  {
    id: "ai-prompt-engineering",
    pillarEn: "Artificial Intelligence & Prompt Engineering",
    pillarPt: "Inteligência Artificial e Prompt Engineering",
    category: "ai",
    accentColor: "#8b5cf6", // Violet
    badgeText: "GenAI & Autonomous Agents",
    iconName: "BrainCircuit",
    descriptionEn: "Generative AI applications, autonomous agents, prompt orchestration, Whisper speech synthesis, and LLM integrations.",
    descriptionPt: "Aplicações de IA generativa, agentes autônomos, orquestração de prompts, síntese de fala com Whisper e integrações LLM.",
    competencies: [
      {
        titleEn: "AI & Generative AI Foundations",
        titlePt: "Fundamentos de IA e IA Generativa",
        detailsEn: "Solid grounding via Microsoft AI-900, AI-102 and SENAI certifications, including traditional ML, computer vision, NLP, and LLM applications.",
        detailsPt: "Base sólida via Microsoft AI-900, AI-102 e SENAI, incluindo ML tradicional, visão computacional, NLP e aplicações práticas de LLMs.",
        tools: ["Azure OpenAI", "Whisper", "LangChain", "Vector Embeddings"],
        certsOrBadges: ["AI-900", "AI-102", "SENAI GenAI"]
      },
      {
        titleEn: "Advanced Prompt Engineering & LLMs",
        titlePt: "Engenharia de Prompts Avançada",
        detailsEn: "Specialization in prompt design, structured outputs, chain-of-thought, few-shot prompting for Anthropic Claude and OpenAI models.",
        detailsPt: "Especialização em design de prompts, saídas estruturadas, chain-of-thought e few-shot prompting para Claude e modelos GPT.",
        tools: ["Claude 3.5", "GPT-4o", "Few-Shot Prompts", "Structured JSON Outputs"]
      },
      {
        titleEn: "AI Agents & Developer Copilots",
        titlePt: "Ecossistema de Agentes & GitHub Copilot",
        detailsEn: "Building autonomous tool-calling agents with Microsoft AI Foundry and Google Antigravity, combined with full mastery of GitHub Copilot & Chat.",
        detailsPt: "Criação de agentes autônomos com chamada de ferramentas (Microsoft AI Foundry e Google Antigravity) e domínio do GitHub Copilot.",
        tools: ["Microsoft AI Foundry", "Google Antigravity", "GitHub Copilot Chat", "Tool Calling"]
      }
    ]
  },
  {
    id: "frontend-ux-enterprise",
    pillarEn: "Frontend, UX/UI & Enterprise Platforms",
    pillarPt: "Frontend, UX/UI e Enterprise",
    category: "frontend",
    accentColor: "#f59e0b", // Amber
    badgeText: "Web & Enterprise Tech",
    iconName: "Layout",
    descriptionEn: "Modern reactive web interfaces, responsive design systems, accessibility (WCAG), and enterprise ITSM platforms.",
    descriptionPt: "Interfaces web reativas modernas, design systems responsivos, acessibilidade (WCAG) e plataformas corporativas ITSM.",
    competencies: [
      {
        titleEn: "Web & Frontend Development",
        titlePt: "Desenvolvimento Web e Frontend",
        detailsEn: "Proficiency in JavaScript, TypeScript, modern frontend architecture using Angular and React with component modularity.",
        detailsPt: "Proficiência em JavaScript, TypeScript e arquitetura de projetos modernos utilizando Angular e React.",
        tools: ["TypeScript", "React", "Angular", "Tailwind CSS", "HTML5/CSS3"]
      },
      {
        titleEn: "User Experience & Interface Design",
        titlePt: "Design de Experiência e Interface",
        detailsEn: "Specialization in UI/UX design with Figma, focusing on usability, accessibility, design systems, and mobile-first responsiveness.",
        detailsPt: "Especialização em Design UX/UI no Figma com foco em usabilidade, design tokens, acessibilidade e responsividade.",
        tools: ["Figma", "UI Systems", "WCAG 2.1", "Wireframing"]
      },
      {
        titleEn: "ServiceNow Enterprise Platform (CSA)",
        titlePt: "Plataforma Enterprise ServiceNow (CSA)",
        detailsEn: "Knowledge in ServiceNow administration, IT governance, workflow automation, incident management, and CMDB.",
        detailsPt: "Formação em Administração da plataforma ServiceNow sobre governança, automação de fluxos e CMDB.",
        tools: ["ServiceNow", "ITSM", "Workflow Automation", "CMDB"],
        certsOrBadges: ["ServiceNow CSA Fundamentals"]
      }
    ]
  },
  {
    id: "education-partners",
    pillarEn: "Academic & Institutional Foundations",
    pillarPt: "Formação Acadêmica & Parcerias",
    category: "education",
    accentColor: "#06b6d4", // Cyan
    badgeText: "Continuous Learning",
    iconName: "GraduationCap",
    descriptionEn: "Formal Computer Software Engineering degree at UNICSUL combined with top-tier continuous training at SENAI, FIAP, and DIO.",
    descriptionPt: "Bacharelado formal em Engenharia de Software na UNICSUL combinado com capacitações contínuas de alto nível no SENAI, FIAP e DIO.",
    competencies: [
      {
        titleEn: "B.S. in Software Engineering — UNICSUL",
        titlePt: "Bacharelado em Engenharia de Software — UNICSUL",
        detailsEn: "Currently in 6th semester at Universidade Cruzeiro do Sul. Core focus on algorithms, system architecture, database theory, and distributed computing.",
        detailsPt: "Cursando o 6º semestre na Universidade Cruzeiro do Sul. Foco central em algoritmos, arquitetura de sistemas, banco de dados e computação distribuída.",
        tools: ["UNICSUL", "6º Semestre", "Engenharia de Software"]
      },
      {
        titleEn: "SENAI AI Specialization",
        titlePt: "Especialização em IA — SENAI",
        detailsEn: "Hands-on generative AI application development with Google Antigravity, Microsoft AI Foundry, and IA-103 Agent workflows.",
        detailsPt: "Desenvolvimento prático de aplicações com IA Generativa utilizando Google Antigravity, Microsoft AI Foundry e Agentes IA-103.",
        tools: ["SENAI", "Google Antigravity", "Microsoft AI Foundry"]
      },
      {
        titleEn: "FIAP & DIO Ecosystem",
        titlePt: "FIAP & DIO Ecosystem",
        detailsEn: "Cybersecurity extension at FIAP and ongoing engineering tracks in Java, Cloud, and DevOps on Digital Innovation One (DIO).",
        detailsPt: "Extensão em cibersegurança na FIAP e trilhas contínuas de engenharia em Java, Cloud e DevOps na Digital Innovation One (DIO).",
        tools: ["FIAP", "DIO", "DevOps Tracks"]
      }
    ]
  }
];
