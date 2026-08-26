import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import { SectionHeading } from '../common/SectionHeading';

export const EngineeringManifesto: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].manifesto;

  return (
    <section id="manifesto" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        tag={t.tag}
        title={t.title}
        subtitle={t.subtitle}
        tagVariant="primary"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {t.items.map((item, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-surface-dark border border-slate-800/90 hover:border-sky-500/40 shadow-xl transition-all space-y-2 flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-mono font-extrabold text-sky-400 block tracking-wider uppercase mb-1">
                {item.lead}
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
            <div className="pt-3 border-t border-slate-900 flex justify-end">
              <span className="text-[10px] font-mono text-slate-600 font-bold">
                0{idx + 1}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
