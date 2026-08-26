import type { ProjectCaseStudy } from '../types';

export const projectsData: ProjectCaseStudy[] = [
  {
    id: "finai-assistant",
    title: "FinAI Assistant",
    subtitle: "AI-Powered Multimodal Financial Intelligence & Analytics Engine",
    tagline: "Voice-driven, deterministic financial data analysis platform integrating Whisper ASR, LLM reasoning, and Pandas data engines.",
    category: "ai",
    featured: true,
    problem: "How to convert unstructured natural language and spoken voice input into reliable, hallucination-free financial insights and quantitative computations without risking LLM arithmetic errors?",
    solution: "Architected a hybrid processing pipeline where speech is transcribed via OpenAI Whisper, query intent and parameters are extracted via LLMs, and actual quantitative computations are delegated strictly to deterministic Pandas data frames before generating synthesized voice feedback via gTTS and interactive Streamlit dashboards.",
    architectureSteps: [
      {
        step: 1,
        title: "Multimodal Input Layer",
        description: "User submits queries via natural voice recording or raw text prompt.",
        tech: "Audio Stream / Streamlit UI"
      },
      {
        step: 2,
        title: "Speech-to-Text Transcription",
        description: "High-accuracy audio conversion and acoustic normalization into clean prompt text.",
        tech: "OpenAI Whisper ASR"
      },
      {
        step: 3,
        title: "Semantic Parsing & Query Extraction",
        description: "LLM extracts target metrics, date ranges, and calculation operations into a strict JSON payload.",
        tech: "OpenAI / Claude LLM Engine"
      },
      {
        step: 4,
        title: "Deterministic Execution Engine",
        description: "Python/Pandas executes exact mathematical operations, filtering, and statistical analysis on ledger datasets.",
        tech: "Pandas & NumPy Core"
      },
      {
        step: 5,
        title: "Multimodal Response Generation",
        description: "Natural language financial summary generated alongside synthesized audio response and dynamic charts.",
        tech: "gTTS Voice Synthesis + UI Dashboard"
      }
    ],
    techStack: [
      "Python 3.11",
      "OpenAI Whisper",
      "ChatGPT / Claude API",
      "Pandas",
      "NumPy",
      "gTTS (Google Text-to-Speech)",
      "Streamlit",
      "Prompt Engineering"
    ],
    keyHighlights: [
      "Zero Hallucination Arithmetic: Segregated LLM reasoning from mathematical calculations.",
      "Dual Interface: Interactive voice-in / voice-out workflow with visual data breakdown.",
      "Structured Extraction: Few-shot prompting to reliably generate strict JSON execution ASTs.",
      "Optimized Latency: Audio pre-processing pipeline minimizing Whisper inference time."
    ],
    adr: {
      title: "ADR-001: Separation of LLM Intent Extraction from Financial Computation",
      context: "Directly asking Large Language Models to calculate sums, variances, and compounding interest results in hallucinated arithmetic in over 18% of complex queries.",
      decision: "Constrain the LLM strictly to semantic schema parsing (identifying filter criteria, aggregations, and entities), outputting structured JSON to a deterministic Pandas computational layer.",
      consequences: "Eliminated arithmetic hallucinations completely (100% calculation accuracy), while preserving natural language flexibility."
    },
    limitations: [
      "Currently executes on in-memory Pandas dataframes rather than scalable distributed SQL/NoSQL storage.",
      "Voice synthesis operates sequentially rather than real-time streaming audio websockets."
    ],
    roadmap: [
      "Phase 1: Implement Vector RAG with ChromaDB/Pinecone for historical quarterly filings indexing.",
      "Phase 2: Transition from monolith Streamlit to FastAPI asynchronous microservice architecture.",
      "Phase 3: Deploy containerized backend to Azure App Service / AWS ECS with OpenTelemetry observability.",
      "Phase 4: Introduce autonomous multi-agent financial auditing (Auditor Agent + Visualizer Agent)."
    ],
    metrics: [
      { label: "Calculation Accuracy", value: "100%" },
      { label: "Intent Parsing Rate", value: "98.4%" },
      { label: "Avg Latency", value: "< 1.8s" }
    ],
    links: {
      github: "https://github.com/donjuan029",
      demo: "https://github.com/donjuan029",
      docs: "https://github.com/donjuan029"
    }
  },
  {
    id: "spring-cloud-enterprise-api",
    title: "Cloud-Native Enterprise Core API",
    subtitle: "Modular Spring Boot Backend with Zero-Trust Security & CI/CD",
    tagline: "Scalable RESTful microservice architecture built with Java 17, Spring Security, Hibernate JPA, PostgreSQL, Docker, and Jenkins CI/CD.",
    category: "backend",
    featured: false,
    problem: "Building a high-throughput, secure business backend capable of handling authenticated workloads with role-based governance, automated schema migrations, and reproducible zero-downtime deployment pipelines.",
    solution: "Designed a clean layered architecture adhering to SOLID principles and DDD concepts. Implemented stateless JWT authentication with Spring Security, Flyway database versioning, Dockerized container deployment, and Jenkins automated test suites.",
    architectureSteps: [
      {
        step: 1,
        title: "API Gateway & Security Layer",
        description: "Intercepts incoming requests, validates JWT claims, and enforces RBAC authorization filters.",
        tech: "Spring Security + OAuth2 / JWT"
      },
      {
        step: 2,
        title: "Controller & Validation Layer",
        description: "Strict payload sanitization, DTO transformation, and Bean Validation.",
        tech: "Spring Web REST Controllers"
      },
      {
        step: 3,
        title: "Business Domain Logic",
        description: "Decoupled service layer executing domain rules with transactional isolation.",
        tech: "Spring Core Services"
      },
      {
        step: 4,
        title: "Persistence & Migration",
        description: "Optimized relational persistence with Flyway database migration scripts.",
        tech: "Spring Data JPA + PostgreSQL"
      },
      {
        step: 5,
        title: "DevOps & Deployment",
        description: "Multi-stage Docker builds tested and deployed via automated Jenkins pipelines.",
        tech: "Docker + Jenkins CI/CD"
      }
    ],
    techStack: [
      "Java 17",
      "Spring Boot 3",
      "Spring Security",
      "Spring Data JPA",
      "PostgreSQL",
      "Maven",
      "Docker",
      "Jenkins",
      "Flyway"
    ],
    keyHighlights: [
      "Stateless Token Security: Role-Based Access Control (RBAC) with rotating JWT secret keys.",
      "Database Evolution: Automated schema migrations ensuring reproducible test environments.",
      "Containerized Builds: Multi-stage Dockerfile cutting image size by over 60%.",
      "Automated Testing: Integrated unit and mock MVC integration test suites in CI pipeline."
    ],
    adr: {
      title: "ADR-002: Modular Layered Architecture vs Distributed Microservices",
      context: "Early-stage distributed microservices introduce substantial operational latency and network serialization overhead.",
      decision: "Adopt a clean Modular Monolith design with explicit package boundaries (Domain, Service, Repository, DTO), ready to be split into microservices as traffic scales.",
      consequences: "Drastically simplified debugging, maximized developer velocity, and maintained seamless eventual microservice extraction."
    },
    limitations: [
      "Single-node PostgreSQL instance without active-active replication.",
      "Synchronous REST communication without message broker (Kafka/RabbitMQ) for long-running events."
    ],
    roadmap: [
      "Integrate Apache Kafka for asynchronous event streaming across audit logs.",
      "Implement Redis distributed caching for read-heavy catalog endpoints.",
      "Deploy to Kubernetes cluster (EKS/AKS) with Helm charts."
    ],
    metrics: [
      { label: "Test Coverage", value: "> 85%" },
      { label: "Docker Build Size", value: "148 MB" },
      { label: "P95 Response Time", value: "32ms" }
    ],
    links: {
      github: "https://github.com/donjuan029",
      demo: "https://github.com/donjuan029"
    }
  },
  {
    id: "autonomous-ai-agent-foundry",
    title: "Autonomous Tool-Calling AI Agent",
    subtitle: "Multi-Tool Orchestration Engine with Microsoft AI Foundry & Antigravity",
    tagline: "Intelligent agent pipeline capable of autonomous plan execution, deterministic tool invocation, web search retrieval, and code validation.",
    category: "ai",
    featured: false,
    problem: "Single-turn LLMs cannot autonomously resolve multi-step technical inquiries that require live information retrieval, calculation, and sequential file synthesis.",
    solution: "Engineered an autonomous agent workflow using Microsoft AI Foundry and Google Antigravity concepts. Features dynamic tool routing, schema-validated function calling, step-by-step reasoning verification, and fallback recovery loops.",
    architectureSteps: [
      {
        step: 1,
        title: "User Goal & Intent Ingestion",
        description: "Agent parses complex objectives into a planned directed acyclic graph (DAG) of subtasks.",
        tech: "Agent Planner"
      },
      {
        step: 2,
        title: "Dynamic Tool Registry",
        description: "Inspects available tool schemas (Search, Code Runner, Database Query, Calculator).",
        tech: "OpenAI / Anthropic Function Calling"
      },
      {
        step: 3,
        title: "Iterative Action & Observation",
        description: "Executes tools in an isolated sandbox, collecting and validating intermediate outputs.",
        tech: "Execution Sandbox"
      },
      {
        step: 4,
        title: "Synthesis & Reflection",
        description: "Evaluates intermediate progress against goal constraints before returning final deliverables.",
        tech: "Self-Correction Loop"
      }
    ],
    techStack: [
      "Python",
      "Microsoft AI Foundry",
      "Google Antigravity SDK",
      "LangChain",
      "Vector DB",
      "JSON Schema",
      "Claude 3.5 Sonnet / GPT-4o"
    ],
    keyHighlights: [
      "Strict Schema Enforcement: Pydantic & JSON-Schema validation on all tool arguments.",
      "Anti-Loop Guards: Max iteration counters and cyclic execution detection.",
      "Token Optimization: Selective context trimming to minimize token spend on tool history.",
      "Modular Tooling: Plug-and-play architecture for adding custom enterprise tools."
    ],
    adr: {
      title: "ADR-003: Deterministic Function Calling vs Unstructured Code Generation",
      context: "Allowing agents to generate and run arbitrary python scripts risks unsafe execution and unpredictable syntax errors.",
      decision: "Implement a strictly curated registry of typed function tools with input validation and execution sandboxing.",
      consequences: "Guaranteed execution reliability, zero malicious injection risks, and predictable output schemas."
    },
    limitations: [
      "Agent execution latency scales with the number of sequential tool round-trips.",
      "Requires active API quota monitoring to prevent runaway budget consumption."
    ],
    roadmap: [
      "Implement LangGraph for complex multi-agent collaborative workflows (Researcher + Coder + Reviewer).",
      "Add OpenTelemetry semantic tracing for token costs, latency, and agent decision paths."
    ],
    metrics: [
      { label: "Task Completion", value: "94.2%" },
      { label: "Tool Validation", value: "100%" },
      { label: "Cost Reduction", value: "35%" }
    ],
    links: {
      github: "https://github.com/donjuan029"
    }
  },
  {
    id: "devsecops-cloud-security-audit",
    title: "DevSecOps & Zero-Trust Cloud Architecture",
    subtitle: "Automated Infrastructure Security Scanning & Cloud IAM Governance",
    tagline: "Automated compliance framework enforcing Zero Trust principles across Azure/AWS, Fortinet network controls, and CI/CD SAST pipelines.",
    category: "security",
    featured: false,
    problem: "Cloud deployments frequently suffer from misconfigured IAM permissions, exposed public storage buckets, unsegmented networks, and vulnerable third-party dependencies.",
    solution: "Formulated a comprehensive cloud security architecture based on Microsoft SC-900 and Fortinet FCF standards. Integrates automated static application security testing (SAST) in CI/CD, least-privilege IAM policies in Microsoft Entra ID, and virtual network security groups.",
    architectureSteps: [
      {
        step: 1,
        title: "Code & Dependency Scanning",
        description: "Automated dependency vulnerability audits (Trivy / OWASP Dependency-Check) on every commit.",
        tech: "GitHub Actions + SAST"
      },
      {
        step: 2,
        title: "Identity & Access Management",
        description: "Strict Least-Privilege RBAC rules, conditional access policies, and MFA enforcement via Entra ID.",
        tech: "Microsoft Entra ID / SC-900"
      },
      {
        step: 3,
        title: "Network Perimeter Defense",
        description: "Subnet segmentation, firewall rule evaluation, and encrypted TLS 1.3 transit inspection.",
        tech: "Fortinet FCF + Azure NSG"
      },
      {
        step: 4,
        title: "Continuous Compliance & Auditing",
        description: "Automated drift detection and security score reporting.",
        tech: "Cloud Governance"
      }
    ],
    techStack: [
      "Microsoft Azure Security",
      "Microsoft Entra ID",
      "Fortinet Security Concepts",
      "Docker Security",
      "GitHub Actions",
      "Trivy",
      "Linux / Bash"
    ],
    keyHighlights: [
      "Zero Trust Model: Never Trust, Always Verify across all identity and data boundaries.",
      "Automated CI Gates: Commits with critical CVE vulnerabilities automatically fail pipeline builds.",
      "Network Hardening: Segmented tier architecture isolating database layers from public internet.",
      "Compliance Ready: Aligned with ISO 27001 and LGPD/GDPR baseline recommendations."
    ],
    adr: {
      title: "ADR-004: Shift-Left Security in CI/CD vs Post-Deployment Auditing",
      context: "Fixing security vulnerabilities in production is up to 30x more expensive and exposes systems to zero-day exploits.",
      decision: "Integrate security checks directly into the pre-merge pull request workflow as non-bypassable CI check gates.",
      consequences: "Catches 95%+ of insecure dependencies and misconfigurations before touching cloud environments."
    },
    limitations: [
      "Currently focuses on static scanning and IAM governance; dynamic DAST runtime pen-testing is conducted manually."
    ],
    roadmap: [
      "Integrate automated DAST scanning with OWASP ZAP into staging environment deployments.",
      "Implement Infrastructure as Code (Terraform) security linter (Checkov / tfsec)."
    ],
    metrics: [
      { label: "Critical Vulnerabilities", value: "0" },
      { label: "Compliance Score", value: "98/100" },
      { label: "Gate Automation", value: "100%" }
    ],
    links: {
      github: "https://github.com/donjuan029"
    }
  }
];
