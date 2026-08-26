import React, { useState } from 'react';
import { Code, ChevronDown, ChevronUp, Activity } from 'lucide-react';
import { labExperimentsData } from '../../data/labData';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import { SectionHeading } from '../common/SectionHeading';
import { Badge } from '../common/Badge';

export const EngineeringLab: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].lab;
  const [expandedId, setExpandedId] = useState<string | null>(labExperimentsData[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="engineering-lab" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        tag={t.tag}
        title={t.title}
        subtitle={t.subtitle}
        tagVariant="emerald"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {labExperimentsData.map((exp) => {
          const isExpanded = expandedId === exp.id;
          return (
            <div
              key={exp.id}
              className="bg-surface-dark border border-slate-800/80 hover:border-emerald-500/30 rounded-2xl p-6 shadow-xl transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Domain & Status */}
                <div className="flex items-center justify-between">
                  <Badge variant={exp.domain === 'AI Agents' ? 'violet' : exp.domain === 'Cloud Infra' ? 'primary' : 'emerald'}>
                    {exp.domain}
                  </Badge>
                  <span className="text-[11px] font-mono text-emerald-400 font-semibold flex items-center gap-1">
                    <Activity className="w-3 h-3 text-emerald-400" />
                    {exp.status}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold font-display text-white">
                  {exp.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {exp.description}
                </p>

                {/* Hypothesis & Results */}
                <div className="space-y-2 text-xs bg-slate-950/70 p-3.5 rounded-xl border border-slate-800">
                  <p>
                    <strong className="text-sky-400 font-mono">{t.hypothesis}:</strong>{' '}
                    <span className="text-slate-300">{exp.hypothesis}</span>
                  </p>
                  <p>
                    <strong className="text-emerald-400 font-mono">{t.results}:</strong>{' '}
                    <span className="text-slate-300">{exp.results}</span>
                  </p>
                </div>

                {/* Code Snippet Accordion */}
                {exp.codeSnippet && (
                  <div>
                    <button
                      onClick={() => toggleExpand(exp.id)}
                      className="w-full flex items-center justify-between p-2 rounded-lg bg-slate-900 text-xs font-mono text-slate-400 hover:text-white border border-slate-800 transition-colors"
                    >
                      <span className="flex items-center gap-1.5">
                        <Code className="w-3.5 h-3.5 text-sky-400" />
                        {t.viewSnippet}
                      </span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>

                    {isExpanded && (
                      <pre className="mt-2 p-3.5 rounded-xl bg-slate-950 text-[11px] font-mono text-slate-200 overflow-x-auto border border-slate-800 max-h-52 leading-relaxed">
                        <code>{exp.codeSnippet}</code>
                      </pre>
                    )}
                  </div>
                )}
              </div>

              {/* Tech Stack Chips */}
              <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-1.5">
                {exp.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded bg-slate-950 text-[10px] font-mono text-slate-400 border border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
