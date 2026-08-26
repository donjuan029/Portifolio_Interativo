export type ViewMode = 'recruiter' | 'engineer';
export type Language = 'en' | 'pt';
export type Theme = 'dark' | 'light';

export interface ProjectADR {
  title: string;
  context: string;
  decision: string;
  consequences: string;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: 'ai' | 'cloud' | 'backend' | 'security' | 'frontend';
  featured?: boolean;
  problem: string;
  solution: string;
  architectureDiagram?: string;
  architectureSteps?: {
    step: number;
    title: string;
    description: string;
    tech: string;
  }[];
  techStack: string[];
  keyHighlights: string[];
  adr?: ProjectADR;
  limitations: string[];
  roadmap: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
  links: {
    github?: string;
    demo?: string;
    docs?: string;
  };
}

export interface MindMapNode {
  id: string;
  pillar: string;
  title: string;
  icon: string;
  accentColor: string;
  competencies: {
    name: string;
    description: string;
    tools: string[];
    certifications?: string[];
  }[];
}

export interface Certification {
  id: string;
  code?: string;
  name: string;
  issuer: 'Microsoft' | 'Fortinet' | 'ServiceNow' | 'FIAP' | 'SENAI' | 'Google' | 'Oracle' | 'AWS';
  category: 'Cloud' | 'Security' | 'AI' | 'Data' | 'Enterprise' | 'DevOps';
  level: 'Fundamentals' | 'Associate' | 'Specialist' | 'Executive';
  status: 'Certified' | 'Completed' | 'In Progress';
  description: string;
  skills: string[];
  credentialUrl?: string;
}

export interface LabExperiment {
  id: string;
  title: string;
  domain: 'AI Agents' | 'Cloud Infra' | 'DevSecOps' | 'Data Pipeline' | 'Prompt Eng';
  status: 'Experimental' | 'Benchmarked' | 'Active Prototype';
  description: string;
  hypothesis: string;
  techStack: string[];
  codeSnippet?: string;
  results: string;
}

export interface SystemArchitecture {
  id: string;
  title: string;
  type: 'RAG Pipeline' | 'Modular Microservices' | 'Multi-Agent Swarm' | 'Zero-Trust Cloud';
  summary: string;
  components: {
    name: string;
    role: string;
    protocol: string;
  }[];
  tradeoffs: {
    pros: string[];
    cons: string[];
  };
}

export interface LearningMilestone {
  period: string;
  title: string;
  institution?: string;
  status: 'Completed' | 'Current 6th Sem' | 'Next Frontier';
  focus: string[];
  description: string;
}
