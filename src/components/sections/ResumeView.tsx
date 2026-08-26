import React from 'react';
import { Printer, ExternalLink, GraduationCap, Award, Layers, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import { SectionHeading } from '../common/SectionHeading';
import { Badge } from '../common/Badge';
import { profileData } from '../../data/profileData';
import { certificationsData } from '../../data/certificationsData';
import { projectsData } from '../../data/projectsData';

export const ResumeView: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].resume;

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        tag={t.tag}
        title={t.title}
        subtitle={t.subtitle}
        tagVariant="primary"
      />

      {/* Control Actions */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-2">
          <Badge variant="primary" dot>ATS COMPLIANT FORMAT</Badge>
          <span className="text-xs font-mono text-slate-400">Software Engineer • AI • Multi-Cloud</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-mono text-xs border border-slate-700 transition-all"
          >
            <Printer className="w-4 h-4 text-sky-400" />
            <span>{t.printCv}</span>
          </button>

          <a
            href={profileData.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-mono font-bold text-xs shadow-md shadow-sky-500/20 transition-all"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Connect on LinkedIn</span>
          </a>
        </div>
      </div>

      {/* Paper-styled ATS Resume Sheet */}
      <div className="bg-slate-950 border border-slate-700/80 rounded-2xl p-6 sm:p-10 lg:p-12 shadow-2xl space-y-10 font-sans print:bg-white print:text-black print:border-none print:shadow-none print:p-0">
        {/* Resume Header */}
        <div className="border-b border-slate-800 pb-8 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight">
                {profileData.name}
              </h3>
              <p className="text-sm font-mono text-sky-400 font-semibold mt-1">
                Software Engineer • AI & Cloud-Oriented Developer
              </p>
            </div>
            <div className="text-xs font-mono text-slate-400 space-y-1 text-left sm:text-right">
              <p>São Paulo, Brazil • Remote / International</p>
              <p className="text-sky-300">juancarloandrade31@gmail.com</p>
              <p>linkedin.com/in/juancarloandradecruz</p>
              <p>github.com/donjuan029</p>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2">
            {profileData.coreSummary[language]}
          </p>
        </div>

        {/* Education Section */}
        <div className="space-y-4">
          <h4 className="text-sm font-mono font-bold uppercase text-sky-400 tracking-wider flex items-center gap-2 border-b border-slate-800/80 pb-2">
            <GraduationCap className="w-4 h-4" />
            Academic Background
          </h4>
          <div className="space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <h5 className="text-sm font-bold text-white">
                {profileData.education.degree[language]}
              </h5>
              <span className="text-xs font-mono text-emerald-400 font-semibold">
                {profileData.education.status[language]} (Current: 6th of 8 Semesters)
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono">{profileData.education.institution}</p>
            <p className="text-xs text-slate-300">
              Core Focus: {profileData.education.focus[language]}
            </p>
          </div>
        </div>

        {/* Technical Specialization Courses */}
        <div className="space-y-4">
          <h4 className="text-sm font-mono font-bold uppercase text-sky-400 tracking-wider flex items-center gap-2 border-b border-slate-800/80 pb-2">
            <Award className="w-4 h-4" />
            Specialized Professional Training
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300">
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
              <p className="font-bold text-white">SENAI — Generative AI & Autonomous Agents</p>
              <p className="text-slate-400">Google Antigravity SDK, Microsoft AI Foundry, IA-103 Agent Workflows, Prompt Tuning.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
              <p className="font-bold text-white">FIAP — Cybersecurity & Digital Threat Protection</p>
              <p className="text-slate-400">Defense-in-depth, Threat Modeling, OWASP, and Data Protection Regulations.</p>
            </div>
          </div>
        </div>

        {/* Verified Industry Certifications */}
        <div className="space-y-4">
          <h4 className="text-sm font-mono font-bold uppercase text-sky-400 tracking-wider flex items-center gap-2 border-b border-slate-800/80 pb-2">
            <Award className="w-4 h-4" />
            Verified Industry Certifications
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {certificationsData.map((c) => (
              <div key={c.id} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold text-amber-400">{c.code || c.issuer}</span>
                  <span className="text-[10px] font-mono text-emerald-400">{c.status}</span>
                </div>
                <p className="text-xs font-semibold text-white leading-snug">{c.name}</p>
                <p className="text-[11px] text-slate-400 font-mono">{c.issuer} • {c.category}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Engineering Projects */}
        <div className="space-y-4">
          <h4 className="text-sm font-mono font-bold uppercase text-sky-400 tracking-wider flex items-center gap-2 border-b border-slate-800/80 pb-2">
            <Layers className="w-4 h-4" />
            Featured Technical Projects & Case Studies
          </h4>
          <div className="space-y-4">
            {projectsData.map((proj) => (
              <div key={proj.id} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
                <div className="flex items-center justify-between">
                  <h5 className="text-sm font-bold text-white">{proj.title} — {proj.subtitle}</h5>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-sky-300 border border-slate-800 uppercase">
                    {proj.category}
                  </span>
                </div>
                <p className="text-xs text-slate-300">{proj.solution}</p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {proj.techStack.map((tech, i) => (
                    <span key={i} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Matrix */}
        <div className="space-y-4">
          <h4 className="text-sm font-mono font-bold uppercase text-sky-400 tracking-wider flex items-center gap-2 border-b border-slate-800/80 pb-2">
            <CheckCircle2 className="w-4 h-4" />
            Core Technical Skills Matrix
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono text-slate-300">
            <div>
              <p className="font-bold text-white mb-1.5 text-sky-400">Languages & Core</p>
              <p className="text-slate-400">Java 17+, Python 3, TypeScript, JavaScript, SQL, Bash</p>
            </div>
            <div>
              <p className="font-bold text-white mb-1.5 text-emerald-400">Backend & Systems</p>
              <p className="text-slate-400">Spring Boot 3, Spring Security, Hibernate JPA, REST APIs, Docker, Jenkins</p>
            </div>
            <div>
              <p className="font-bold text-white mb-1.5 text-violet-400">AI & LLM Systems</p>
              <p className="text-slate-400">Whisper, Claude, GPT-4o, Microsoft AI Foundry, Google Antigravity, RAG, Prompt Eng</p>
            </div>
            <div>
              <p className="font-bold text-white mb-1.5 text-rose-400">Cloud & Security</p>
              <p className="text-slate-400">Azure (AZ-900, SC-900), AWS, Zero Trust, Entra ID, Fortinet FCF, ServiceNow</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
