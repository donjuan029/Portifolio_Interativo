import React, { useState } from 'react';
import { Server, Cloud, ShieldCheck, BrainCircuit, Layout, GraduationCap, ArrowRight, CheckCircle2, Award, Sparkles } from 'lucide-react';
import { mindMapData } from '../../data/mindmapData';
import type { MindMapNode } from '../../data/mindmapData';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import { SectionHeading } from '../common/SectionHeading';
import { Badge } from '../common/Badge';

export const TechnicalMindMap: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].mindmap;
  const [selectedNode, setSelectedNode] = useState<MindMapNode>(mindMapData[0]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server':
        return <Server className="w-5 h-5" />;
      case 'Cloud':
        return <Cloud className="w-5 h-5" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5" />;
      case 'Layout':
        return <Layout className="w-5 h-5" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="specialization-map" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        tag={t.tag}
        title={t.title}
        subtitle={t.subtitle}
        tagVariant="emerald"
      />

      {/* Interactive Hub Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: 6 Interactive Pillar Cards */}
        <div className="lg:col-span-5 space-y-3">
          <p className="text-xs font-mono text-slate-400 mb-2 uppercase tracking-wider">
            {t.clickPrompt}
          </p>

          {mindMapData.map((node) => {
            const isSelected = selectedNode.id === node.id;
            return (
              <button
                key={node.id}
                onClick={() => setSelectedNode(node)}
                className={`w-full flex items-center justify-between p-4 rounded-xl text-left border transition-all ${
                  isSelected
                    ? 'bg-slate-900 border-sky-400/80 shadow-lg shadow-sky-500/10 translate-x-1'
                    : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/40'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className="p-2.5 rounded-lg border transition-colors shrink-0"
                    style={{
                      backgroundColor: `${node.accentColor}15`,
                      borderColor: `${node.accentColor}40`,
                      color: node.accentColor,
                    }}
                  >
                    {getIcon(node.iconName)}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white font-display">
                      {language === 'en' ? node.pillarEn : node.pillarPt}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-400">
                      {node.badgeText}
                    </span>
                  </div>
                </div>
                <ArrowRight
                  className={`w-4 h-4 transition-transform ${
                    isSelected ? 'text-sky-400 translate-x-1' : 'text-slate-600'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Right Column: Deep Competency Inspection Pane */}
        <div className="lg:col-span-7 bg-surface-dark border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
          {/* Selected Header */}
          <div className="flex items-start justify-between pb-5 border-b border-slate-800">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Badge variant="primary" dot>
                  {selectedNode.badgeText}
                </Badge>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-1">
                {language === 'en' ? selectedNode.pillarEn : selectedNode.pillarPt}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {language === 'en' ? selectedNode.descriptionEn : selectedNode.descriptionPt}
              </p>
            </div>
          </div>

          {/* Detailed Competency Blocks */}
          <div className="space-y-4">
            {selectedNode.competencies.map((comp, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/90 hover:border-slate-700 transition-colors space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-slate-100 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    {language === 'en' ? comp.titleEn : comp.titlePt}
                  </h4>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {language === 'en' ? comp.detailsEn : comp.detailsPt}
                </p>

                {/* Tools & Badges */}
                <div className="pt-2 flex flex-wrap items-center gap-1.5">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mr-1">
                    Tools:
                  </span>
                  {comp.tools.map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-slate-950 text-[11px] font-mono text-sky-300 border border-slate-800"
                    >
                      {tool}
                    </span>
                  ))}
                  {comp.certsOrBadges && comp.certsOrBadges.map((cert, cIdx) => (
                    <span
                      key={cIdx}
                      className="px-2 py-0.5 rounded bg-amber-950/40 text-[11px] font-mono text-amber-300 border border-amber-800/50 flex items-center gap-1"
                    >
                      <Award className="w-3 h-3 text-amber-400" />
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer note referencing the original technical mind map */}
          <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span>Specialization Map: UNICSUL • SENAI • FIAP • DIO</span>
            <span className="text-emerald-400">Verified Alignment</span>
          </div>
        </div>
      </div>
    </section>
  );
};
