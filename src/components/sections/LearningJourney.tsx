import React from 'react';
import { GraduationCap, Compass } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import { SectionHeading } from '../common/SectionHeading';
import { Badge } from '../common/Badge';

export const LearningJourney: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].journey;

  const milestones = [
    {
      period: "2023 - 2024",
      titleEn: "Software Engineering Core & Algorithms",
      titlePt: "Fundamentos de Engenharia & Algoritmos",
      institution: "Universidade Cruzeiro do Sul (UNICSUL)",
      focus: ["Data Structures", "OOP", "Database Theory", "Computational Logic"],
      descEn: "Deep foundational study of algorithms, complexity analysis, relational database schemas, and structured software architecture.",
      descPt: "Estudo aprofundado de algoritmos, análise de complexidade, modelagem relacional de banco de dados e arquitetura de software."
    },
    {
      period: "2024",
      titleEn: "Enterprise Java & Backend Architecture",
      titlePt: "Java Corporativo & Arquitetura Backend",
      institution: "DIO & Systems Development",
      focus: ["Java 17+", "Spring Boot 3", "Spring Security", "REST APIs", "Docker"],
      descEn: "Building robust REST microservices, modular services, JWT token authentication, JPA persistence, and Docker multi-stage containers.",
      descPt: "Construção de microsserviços REST robustos, módulos desacoplados, autenticação JWT, persistência JPA e containers Docker."
    },
    {
      period: "2024 - 2025",
      titleEn: "Multi-Cloud, DevOps & Cybersecurity",
      titlePt: "Multi-Cloud, DevOps & Cibersegurança",
      institution: "Microsoft, Fortinet & FIAP",
      focus: ["AZ-900", "SC-900", "Fortinet FCF", "Jenkins CI/CD", "Zero Trust"],
      descEn: "Earning verified industry credentials in cloud infrastructure, defensive network security, identity governance, and automated CI/CD pipelines.",
      descPt: "Conquista de certificações oficiais em infraestrutura de nuvem, segurança defensiva de redes, governança de identidade e CI/CD."
    },
    {
      period: "2025 - Present",
      titleEn: "Generative AI, LLMs & Autonomous Agents",
      titlePt: "IA Generativa, LLMs & Agentes Autônomos",
      institution: "SENAI & Microsoft AI Foundry",
      focus: ["Google Antigravity", "AI-102 / AI-900", "Tool Calling", "Vector RAG", "Whisper"],
      descEn: "Architecting multimodal AI systems, autonomous tool-calling agents with Microsoft AI Foundry & Google Antigravity, and deterministic guardrails.",
      descPt: "Arquitetura de sistemas de IA multimodais, agentes com chamada de ferramentas (AI Foundry e Antigravity) e guardrails determinísticos."
    }
  ];

  return (
    <section id="learning-journey" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        tag={t.tag}
        title={t.title}
        subtitle={t.subtitle}
        tagVariant="primary"
      />

      {/* Current Academic Status Banner */}
      <div className="mb-12 p-6 rounded-2xl bg-gradient-to-r from-sky-950/40 via-slate-900 to-slate-950 border border-sky-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 shrink-0">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold font-display text-white">
              {t.currentSemesterBadge}
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Focus: Distributed Systems, Software Architecture, Advanced AI Integration & Cloud Systems
            </p>
          </div>
        </div>
        <Badge variant="emerald" dot>ACTIVE UNDERGRADUATE</Badge>
      </div>

      {/* Timeline Milestones */}
      <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-10 mb-16">
        {milestones.map((m, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline node marker */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-sky-400 group-hover:bg-sky-400 transition-colors" />

            <div className="bg-surface-dark border border-slate-800/80 group-hover:border-slate-700 rounded-2xl p-6 shadow-xl space-y-3 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="text-xs font-mono font-bold text-sky-400 uppercase">
                  {m.period} • {m.institution}
                </span>
              </div>

              <h4 className="text-lg font-bold font-display text-white">
                {language === 'en' ? m.titleEn : m.titlePt}
              </h4>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {language === 'en' ? m.descEn : m.descPt}
              </p>

              <div className="pt-2 flex flex-wrap gap-1.5">
                {m.focus.map((item, fIdx) => (
                  <span
                    key={fIdx}
                    className="px-2 py-0.5 rounded bg-slate-950 text-[11px] font-mono text-slate-300 border border-slate-800"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Currently Exploring Card */}
      <div className="bg-surface-dark border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl">
        <div className="flex items-center gap-2 mb-4">
          <Compass className="w-5 h-5 text-sky-400" />
          <h3 className="text-base sm:text-lg font-bold font-display text-white">
            {t.currentlyExploring}
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {t.exploringItems.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs font-mono text-slate-200 flex items-center gap-2.5"
            >
              <span className="text-sky-400 font-bold">▹</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
