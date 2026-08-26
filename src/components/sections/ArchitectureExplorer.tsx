import React, { useState } from 'react';
import { Layers, CheckCircle2, XCircle, Network } from 'lucide-react';
import { architectureData } from '../../data/architectureData';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import { SectionHeading } from '../common/SectionHeading';
import { Badge } from '../common/Badge';
import type { SystemArchitecture } from '../../types';

export const ArchitectureExplorer: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].architecture;
  const [selectedArch, setSelectedArch] = useState<SystemArchitecture>(architectureData[0]);

  return (
    <section id="architecture" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        tag={t.tag}
        title={t.title}
        subtitle={t.subtitle}
        tagVariant="primary"
      />

      {/* Architecture Selection Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {architectureData.map((arch) => {
          const isSelected = selectedArch.id === arch.id;
          return (
            <button
              key={arch.id}
              onClick={() => setSelectedArch(arch)}
              className={`p-4 rounded-xl text-left border transition-all ${
                isSelected
                  ? 'bg-slate-900 border-sky-400 shadow-lg shadow-sky-500/10'
                  : 'bg-slate-950/70 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <Badge variant={isSelected ? 'primary' : 'slate'}>{arch.type}</Badge>
                <Layers className={`w-4 h-4 ${isSelected ? 'text-sky-400' : 'text-slate-600'}`} />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-white line-clamp-1">{arch.title}</h4>
            </button>
          );
        })}
      </div>

      {/* Selected Architecture Blueprint Viewer */}
      <div className="bg-surface-dark border border-slate-700/80 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl space-y-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="primary" dot>{selectedArch.type}</Badge>
          </div>
          <h3 className="text-2xl font-bold font-display text-white">{selectedArch.title}</h3>
          <p className="text-sm text-slate-400 mt-2 max-w-3xl leading-relaxed">
            {selectedArch.summary}
          </p>
        </div>

        {/* Components & Protocols Pipeline */}
        <div>
          <h4 className="text-xs font-mono uppercase text-sky-400 font-bold mb-4 flex items-center gap-2">
            <Network className="w-4 h-4" />
            {t.componentsLabel}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {selectedArch.components.map((comp, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <h5 className="text-sm font-bold text-white">{comp.name}</h5>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-sky-300 border border-slate-800">
                      {comp.protocol}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{comp.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trade-off Analysis Grid (Pros vs Cons) */}
        <div className="pt-4 border-t border-slate-800">
          <h4 className="text-xs font-mono uppercase text-slate-400 font-bold mb-4">
            {t.tradeoffsLabel}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pros */}
            <div className="p-5 rounded-xl bg-emerald-950/20 border border-emerald-900/30 space-y-3">
              <span className="text-xs font-mono font-bold uppercase text-emerald-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                {t.pros}
              </span>
              <ul className="space-y-2">
                {selectedArch.tradeoffs.pros.map((pro, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <span className="text-emerald-400 mt-0.5">✓</span>
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons / Constraints */}
            <div className="p-5 rounded-xl bg-amber-950/20 border border-amber-900/30 space-y-3">
              <span className="text-xs font-mono font-bold uppercase text-amber-400 flex items-center gap-2">
                <XCircle className="w-4 h-4" />
                {t.cons}
              </span>
              <ul className="space-y-2">
                {selectedArch.tradeoffs.cons.map((con, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <span className="text-amber-400 mt-0.5">!</span>
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
