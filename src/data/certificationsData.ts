import type { Certification } from '../types';

export const certificationsData: Certification[] = [
  {
    id: "az-900",
    code: "AZ-900",
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    category: "Cloud",
    level: "Fundamentals",
    status: "Certified",
    description: "Validation of foundational cloud concepts, core Azure architectural components, compute, networking, storage services, and governance tools.",
    skills: ["Azure Architecture", "Cloud Compute & Storage", "Virtual Networks", "Azure Resource Manager", "Cloud SLA & Cost Management"],
    credentialUrl: "https://www.linkedin.com/in/juancarloandradecruz/"
  },
  {
    id: "sc-900",
    code: "SC-900",
    name: "Microsoft Certified: Security, Compliance, and Identity Fundamentals",
    issuer: "Microsoft",
    category: "Security",
    level: "Fundamentals",
    status: "Certified",
    description: "Comprehensive understanding of Zero Trust architecture, Microsoft Entra ID access management, threat protection, and cloud compliance solutions.",
    skills: ["Zero Trust Security", "Microsoft Entra ID", "IAM Governance", "Microsoft Sentinel", "Data Loss Prevention"],
    credentialUrl: "https://www.linkedin.com/in/juancarloandradecruz/"
  },
  {
    id: "ai-900",
    code: "AI-900",
    name: "Microsoft Certified: Azure AI Fundamentals",
    issuer: "Microsoft",
    category: "AI",
    level: "Fundamentals",
    status: "Certified",
    description: "Fundamental principles of machine learning, computer vision, natural language processing (NLP), conversational AI, and responsible AI practices.",
    skills: ["Machine Learning Concepts", "Azure OpenAI", "Computer Vision", "Natural Language Processing", "Responsible AI"],
    credentialUrl: "https://www.linkedin.com/in/juancarloandradecruz/"
  },
  {
    id: "dp-900",
    code: "DP-900",
    name: "Microsoft Certified: Azure Data Fundamentals",
    issuer: "Microsoft",
    category: "Data",
    level: "Fundamentals",
    status: "Certified",
    description: "Core data concepts, relational vs non-relational database storage, data warehousing, and modern big data analytics architectures on Azure.",
    skills: ["Relational & NoSQL Data", "Azure SQL Database", "Azure Cosmos DB", "Data Ingestion & ETL", "Power BI Integration"],
    credentialUrl: "https://www.linkedin.com/in/juancarloandradecruz/"
  },
  {
    id: "pl-900",
    code: "PL-900",
    name: "Microsoft Certified: Power Platform Fundamentals",
    issuer: "Microsoft",
    category: "Enterprise",
    level: "Fundamentals",
    status: "Certified",
    description: "Enterprise workflow automation, data connectors, low-code/pro-code integration, Dataverse architecture, and Power Apps solutions.",
    skills: ["Power Automate", "Power Apps", "Dataverse", "Enterprise Connectors", "Workflow Automation"],
    credentialUrl: "https://www.linkedin.com/in/juancarloandradecruz/"
  },
  {
    id: "ai-102",
    code: "AI-102 / AI-103",
    name: "Azure AI Engineer: Generative AI & Autonomous Agents",
    issuer: "Microsoft",
    category: "AI",
    level: "Associate",
    status: "Certified",
    description: "Architecting and implementing multi-modal AI systems, Azure OpenAI Service deployments, custom semantic search pipelines, and agentic workflows.",
    skills: ["Azure OpenAI Service", "Agent Tool Calling", "Cognitive Search / Vector RAG", "Prompt Engineering", "AI Observability"],
    credentialUrl: "https://www.linkedin.com/in/juancarloandradecruz/"
  },
  {
    id: "fortinet-fcf",
    code: "FCF",
    name: "Fortinet Certified Fundamentals (FCF) in Cybersecurity",
    issuer: "Fortinet",
    category: "Security",
    level: "Fundamentals",
    status: "Certified",
    description: "In-depth understanding of the modern digital threat landscape, firewall architectures, network segmentation, and defensive cybersecurity operations.",
    skills: ["Threat Landscape", "Network Security Fundamentals", "Firewall Policies", "SOC Operations", "Threat Mitigation"],
    credentialUrl: "https://www.linkedin.com/in/juancarloandradecruz/"
  },
  {
    id: "servicenow-csa",
    code: "CSA",
    name: "ServiceNow Certified System Administrator Fundamentals",
    issuer: "ServiceNow",
    category: "Enterprise",
    level: "Fundamentals",
    status: "Certified",
    description: "Enterprise IT Service Management (ITSM), workflow configuration, CMDB administration, security rules, and user role management.",
    skills: ["ServiceNow Platform", "ITSM Workflows", "CMDB Configuration", "Business Rules", "Access Control Lists (ACL)"],
    credentialUrl: "https://www.linkedin.com/in/juancarloandradecruz/"
  },
  {
    id: "fiap-cybersecurity",
    code: "FIAP-NANO",
    name: "Cybersecurity & Digital Threat Protection",
    issuer: "FIAP",
    category: "Security",
    level: "Specialist",
    status: "Completed",
    description: "Intensive training on cyber attacks, vulnerability mitigation, data protection standards (LGPD/GDPR), and defensive posture.",
    skills: ["Digital Forensics Basics", "OWASP Security", "Data Protection Law", "Incident Response"],
    credentialUrl: "https://www.linkedin.com/in/juancarloandradecruz/"
  },
  {
    id: "senai-antigravity",
    code: "SENAI-AGY",
    name: "Generative AI Applications with Google Antigravity & AI Foundry",
    issuer: "SENAI",
    category: "AI",
    level: "Specialist",
    status: "Completed",
    description: "Advanced course on developing LLM applications, integrating autonomous tool-calling agents with Microsoft AI Foundry and Google Antigravity ecosystem.",
    skills: ["Google Antigravity", "Microsoft AI Foundry", "Agent Orchestration", "Function Calling", "Prompt Tuning"],
    credentialUrl: "https://www.linkedin.com/in/juancarloandradecruz/"
  }
];
