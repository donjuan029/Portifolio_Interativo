import React from 'react';
import { Bot, Search, Zap, Layers, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import { SectionHeading } from '../common/SectionHeading';
import { Badge } from '../common/Badge';

export const AIEngineering: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].aiSection;

  const pillarIcons = [
    <Sparkles className="w-5 h-5 text-violet-400" />,
    <Bot className="w-5 h-5 text-sky-400" />,
    <Search className="w-5 h-5 text-emerald-400" />,
    <Zap className="w-5 h-5 text-amber-400" />,
  ];

  return (
    <section id="ai-engineering" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        tag={t.tag}
        title={t.title}
        subtitle={t.subtitle}
        tagVariant="violet"
      />

      {/* AI Engineering Journey Progression */}
      <div className="mb-14 bg-surface-dark border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl">
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
          <h3 className="text-base sm:text-lg font-bold font-display text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-violet-400" />
            {t.journeyTitle}
          </h3>
          <Badge variant="violet" dot>SENAI • AI-102 • Antigravity</Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {t.journeySteps.map((step, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 relative group hover:border-violet-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-extrabold text-violet-400 block mb-2">
                  PHASE {step.step}
                </span>
                <h4 className="text-sm font-bold text-white mb-1.5">{step.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
              {idx < 4 && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-600">
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 4 Deep Technical Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {t.pillars.map((pillar, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-surface-dark border border-slate-800/80 hover:border-violet-500/40 shadow-xl transition-all flex flex-col justify-between"
          >
            <div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 inline-block mb-4">
                {pillarIcons[idx]}
              </div>
              <h3 className="text-base font-bold font-display text-white mb-3">
                {pillar.title}
              </h3>
              <ul className="space-y-2">
                {pillar.items.map((item, iIdx) => (
                  <li key={iIdx} className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-800/80">
              <span className="text-[10px] font-mono text-slate-500 uppercase">
                Production-Oriented
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
