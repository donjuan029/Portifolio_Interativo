import React, { useState } from 'react';
import { CheckCircle2, Shield, Brain, Database, Cloud, Layers } from 'lucide-react';
import { certificationsData } from '../../data/certificationsData';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import { SectionHeading } from '../common/SectionHeading';
import { Badge } from '../common/Badge';
import type { Certification } from '../../types';

interface CertificationsWallProps {
  onSelectCert: (cert: Certification) => void;
}

export const CertificationsWall: React.FC<CertificationsWallProps> = ({ onSelectCert }) => {
  const { language } = useLanguage();
  const t = translations[language].certs;
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredCerts = certificationsData.filter((c) => {
    if (activeCategory === 'all') return true;
    return c.category.toLowerCase() === activeCategory.toLowerCase();
  });

  const getCategoryIcon = (cat: string) => {
    switch (cat.toLowerCase()) {
      case 'cloud':
        return <Cloud className="w-4 h-4 text-sky-400" />;
      case 'security':
        return <Shield className="w-4 h-4 text-rose-400" />;
      case 'ai':
        return <Brain className="w-4 h-4 text-violet-400" />;
      case 'data':
        return <Database className="w-4 h-4 text-emerald-400" />;
      default:
        return <Layers className="w-4 h-4 text-amber-400" />;
    }
  };

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        tag={t.tag}
        title={t.title}
        subtitle={t.subtitle}
        tagVariant="amber"
      />

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-10">
        {['all', 'Cloud', 'AI', 'Security', 'Data', 'Enterprise'].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
              activeCategory === cat
                ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            {cat === 'all' ? t.filterAll : cat}
          </button>
        ))}
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCerts.map((cert) => (
          <div
            key={cert.id}
            onClick={() => onSelectCert(cert)}
            className="group cursor-pointer bg-surface-dark border border-slate-800/80 hover:border-amber-500/50 rounded-2xl p-6 shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Badge variant={cert.category === 'Security' ? 'rose' : cert.category === 'AI' ? 'violet' : 'primary'}>
                    {cert.issuer}
                  </Badge>
                  {cert.code && (
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-950 text-amber-400 border border-slate-800 font-bold">
                      {cert.code}
                    </span>
                  )}
                </div>
                {getCategoryIcon(cert.category)}
              </div>

              <h3 className="text-base font-bold font-display text-white group-hover:text-amber-400 transition-colors line-clamp-2">
                {cert.name}
              </h3>

              <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                {cert.description}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1 text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {cert.status}
              </span>
              <span className="group-hover:text-amber-400 transition-colors flex items-center gap-1">
                Details & Skills ▹
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
