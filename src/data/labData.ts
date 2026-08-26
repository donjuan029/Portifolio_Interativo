import type { LabExperiment } from '../types';

export const labExperimentsData: LabExperiment[] = [
  {
    id: "exp-001",
    title: "Benchmarking LLM Function Calling Latency vs Direct Prompting",
    domain: "AI Agents",
    status: "Benchmarked",
    description: "Evaluated round-trip latency and parse reliability across 500 synthetic queries comparing strict JSON Schema tool calling against free-form Markdown extraction.",
    hypothesis: "Strict JSON schema function calling adds ~45ms in schema compilation overhead but achieves 100% syntactic parse accuracy versus an 8.6% syntax failure rate with Markdown regex parsing.",
    techStack: ["Python 3.11", "OpenAI API", "Pydantic v2", "Benchmark Suite"],
    codeSnippet: `def benchmark_tool_calling(client, model, queries):\n    latencies, errors = [], 0\n    for q in queries:\n        t0 = time.perf_counter()\n        response = client.chat.completions.create(\n            model=model,\n            messages=[{"role": "user", "content": q}],\n            tools=[FINANCIAL_TOOL_SCHEMA],\n            tool_choice="auto"\n        )\n        latencies.append(time.perf_counter() - t0)\n        if not response.choices[0].message.tool_calls:\n            errors += 1\n    return {"p95_latency": np.percentile(latencies, 95), "error_rate": errors / len(queries)}`,
    results: "Validated that schema-enforced tool calling guarantees zero downstream parsing crashes in production, yielding a predictable P95 response latency of 1.12s."
  },
  {
    id: "exp-002",
    title: "Docker Multi-Stage Build Optimization for Java Spring Boot 3",
    domain: "Cloud Infra",
    status: "Active Prototype",
    description: "Constructed minimal scratch container images using Eclipse Temurin JRE Alpine and layered Spring Boot extraction (Layertools).",
    hypothesis: "Extracting spring-boot application layers and utilizing an Alpine JRE base reduces Docker image size by > 65% and accelerates cold-start container spin-up times.",
    techStack: ["Docker", "Java 17", "Spring Boot", "Alpine Linux"],
    codeSnippet: `FROM eclipse-temurin:17-jdk-alpine as builder\nWORKDIR /build\nCOPY . .\nRUN ./mvnw clean package -DskipTests\nRUN java -Djarmode=layertools -jar target/*.jar extract\n\nFROM eclipse-temurin:17-jre-alpine\nWORKDIR /app\nCOPY --from=builder /build/dependencies/ ./\nCOPY --from=builder /build/spring-boot-loader/ ./\nCOPY --from=builder /build/application/ ./\nENTRYPOINT ["java", "org.springframework.boot.loader.launch.JarLauncher"]`,
    results: "Compressed production image from 490 MB down to 142 MB (71% reduction) with a 40% improvement in continuous deployment upload times."
  },
  {
    id: "exp-003",
    title: "Automated Least-Privilege IAM Audit Script for Multi-Cloud Tenants",
    domain: "DevSecOps",
    status: "Experimental",
    description: "Engineered a Python script that cross-references role assignment definitions against active audit logs to detect over-permissioned service principals and dormant credentials.",
    hypothesis: "Automating dormant credential detection flags unused administrative privileges within 30 days of role dormancy.",
    techStack: ["Python", "Azure SDK", "AWS Boto3", "OAuth2 Token Inspector"],
    codeSnippet: `def audit_dormant_roles(access_logs, role_assignments, threshold_days=30):\n    dormant = []\n    for role in role_assignments:\n        last_active = access_logs.get_last_active_timestamp(role.principal_id)\n        if (datetime.utcnow() - last_active).days > threshold_days:\n            dormant.append({"principal": role.principal_id, "role": role.name, "days": (datetime.utcnow() - last_active).days})\n    return dormant`,
    results: "Successfully detected 14 unutilized test permissions in sandbox environments, generating automated alert reports."
  },
  {
    id: "exp-004",
    title: "Context Window Token Pruning Strategy for Multi-Turn Agent Swarms",
    domain: "Prompt Eng",
    status: "Benchmarked",
    description: "Developed a sliding-window context compression algorithm that summarizes prior tool execution outputs while retaining critical system constraints.",
    hypothesis: "Selective pruning of intermediate tool observations preserves 99% task intent while reducing total token consumption per session by > 40%.",
    techStack: ["Python", "Claude 3.5 Sonnet", "Tiktoken", "LangChain Core"],
    codeSnippet: `def prune_agent_history(messages, max_tokens=4000):\n    system_prompt = messages[0]\n    recent_turns = messages[-4:]\n    intermediate_tools = messages[1:-4]\n    summarized = summarize_tool_observations(intermediate_tools)\n    return [system_prompt, {"role": "system", "content": f"Prior observations: {summarized}"}] + recent_turns`,
    results: "Decreased average API cost per multi-turn task by 44% without decreasing benchmark task success rate."
  }
];
