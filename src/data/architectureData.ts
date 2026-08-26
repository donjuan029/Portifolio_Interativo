import type { SystemArchitecture } from '../types';

export const architectureData: SystemArchitecture[] = [
  {
    id: "rag-pipeline",
    title: "Enterprise RAG (Retrieval-Augmented Generation) Architecture",
    type: "RAG Pipeline",
    summary: "Production-ready knowledge retrieval pipeline pairing high-density semantic vector search with contextual reranking and deterministic LLM response synthesis.",
    components: [
      {
        name: "Document Ingestion & Chunking",
        role: "Splits raw enterprise docs (PDF, Markdown, HTML) using semantic chunking with overlapping windows.",
        protocol: "Batch Pipeline"
      },
      {
        name: "Embedding Model & Vector Index",
        role: "Generates high-dimensional dense embeddings (text-embedding-3 / BAAI) stored in vector indices (Chroma/Pinecone).",
        protocol: "Cosine Similarity / HNSW"
      },
      {
        name: "Cross-Encoder Reranker",
        role: "Evaluates the top 20 retrieved chunks and reorders them based on contextual relevance to the query prompt.",
        protocol: "Inference Engine"
      },
      {
        name: "Guardrails & LLM Synthesizer",
        role: "Injects verified context into structured prompts with citation tags and anti-hallucination validation.",
        protocol: "Streaming HTTPS / JSON"
      }
    ],
    tradeoffs: {
      pros: [
        "Grounds LLM answers strictly on verified corporate data with direct citations.",
        "Drastically reduces hallucination rates compared to raw parametric model knowledge.",
        "Allows dynamic document updates without requiring costly fine-tuning or model retraining."
      ],
      cons: [
        "Retrieval latency adds 150ms-400ms to total time-to-first-token.",
        "Chunk size and overlap parameters require empirical domain-specific calibration."
      ]
    }
  },
  {
    id: "modular-monolith-cloud",
    title: "Modular Clean Architecture (Spring Boot & Multi-Cloud)",
    type: "Modular Microservices",
    summary: "Decoupled domain-centric backend architecture with strict package boundaries, ready for effortless microservice extraction without early distributed latency penalties.",
    components: [
      {
        name: "Edge API Gateway / Reverse Proxy",
        role: "Handles TLS termination, rate limiting, request tracing, and CORS security headers.",
        protocol: "HTTPS / HTTP/2"
      },
      {
        name: "Spring Security & Identity Provider",
        role: "Enforces stateless JWT authorization, claims inspection, and fine-grained RBAC permissions.",
        protocol: "OAuth2 / OIDC"
      },
      {
        name: "Domain Service Modules",
        role: "Isolated business logic containers with clean DTO boundaries and transactional service layers.",
        protocol: "In-Memory Inversion of Control"
      },
      {
        name: "Data Persistence & Flyway Versioning",
        role: "Relational mapping with connection pooling (HikariCP) and immutable database migration scripts.",
        protocol: "JDBC / TCP"
      }
    ],
    tradeoffs: {
      pros: [
        "Eliminates network overhead and complex distributed transaction (Saga) bugs during growth stage.",
        "Enforces clean separation of concerns: domain logic has zero dependency on persistence frameworks.",
        "Enables fast refactoring and single-command local testing with Docker."
      ],
      cons: [
        "Requires team discipline to prevent developers from bypassing package encapsulation.",
        "All domain modules scale together on the same runtime container until split."
      ]
    }
  },
  {
    id: "multi-agent-orchestrator",
    title: "Autonomous Multi-Agent Collaborative Workflow",
    type: "Multi-Agent Swarm",
    summary: "Cooperative agentic architecture where specialized AI workers (Planner, Coder, Auditor, Synthesizer) collaborate with tool sandboxes and stateful checkpoints.",
    components: [
      {
        name: "Supervisor / Planner Agent",
        role: "Deconstructs high-level user goals into structured dependency graphs and delegates tasks.",
        protocol: "DAG Orchestrator"
      },
      {
        name: "Specialized Worker Agents",
        role: "Domain-specific agents equipped with tailored toolsets (Search, Code Execution, SQL Querying).",
        protocol: "Function Calling / Tool RPC"
      },
      {
        name: "Critic / Auditor Agent",
        role: "Inspects worker outputs against strict quality and safety criteria before approving completion.",
        protocol: "Reflection Loop"
      },
      {
        name: "Stateful Memory & Audit Logger",
        role: "Maintains conversational memory, tool call history, token consumption, and execution telemetry.",
        protocol: "Key-Value Store / OpenTelemetry"
      }
    ],
    tradeoffs: {
      pros: [
        "Solves complex multi-step reasoning problems far beyond single-prompt capability.",
        "Independent tool sandboxes keep execution secure and modular.",
        "Self-correcting feedback loops dramatically increase end-to-end task completion rate."
      ],
      cons: [
        "Token consumption multiplies proportionally to the number of agent communication turns.",
        "Requires robust timeout mechanisms to prevent infinite circular delegation loops."
      ]
    }
  },
  {
    id: "zero-trust-cloud-infra",
    title: "Zero-Trust Multi-Cloud Defense Architecture",
    type: "Zero-Trust Cloud",
    summary: "Cloud infrastructure layout adhering to Zero Trust principles: explicit identity verification, least privilege access, micro-segmentation, and continuous telemetry.",
    components: [
      {
        name: "Identity & Conditional Access (Entra ID)",
        role: "Enforces biometric MFA, risk-based access policies, and ephemeral short-lived access tokens.",
        protocol: "SAML 2.0 / OIDC"
      },
      {
        name: "Virtual Network & Cloud Firewalls",
        role: "Isolates application subnets from database subnets with strict Fortinet & NSG security rules.",
        protocol: "VPC Peering / Private Endpoints"
      },
      {
        name: "Secrets Management (Key Vault / Secrets Mgr)",
        role: "Centralized encryption key rotation, zero hardcoded credentials, and hardware security modules (HSM).",
        protocol: "mTLS / REST"
      },
      {
        name: "Security Telemetry & SIEM",
        role: "Real-time log ingestion, anomaly detection, and automated incident alerting.",
        protocol: "Syslog / CloudWatch / Azure Monitor"
      }
    ],
    tradeoffs: {
      pros: [
        "Zero implicit trust: compromising one microservice does not grant lateral network access.",
        "Complete audit trail of every data access event for regulatory compliance (LGPD/GDPR/ISO).",
        "Cloud-agnostic security posture adaptable across Azure, AWS, and GCP."
      ],
      cons: [
        "Requires rigorous initial certificate and service principal configuration.",
        "Fine-grained RBAC definitions demand continuous policy maintenance."
      ]
    }
  }
];
