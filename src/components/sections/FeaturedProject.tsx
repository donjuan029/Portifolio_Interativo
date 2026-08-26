import React, { useState } from 'react';
import { Mic, Brain, Database, Volume2, ArrowRight, GitCommit, CheckCircle2, AlertTriangle, Layers, Sparkles } from 'lucide-react';
import { projectsData } from '../../data/projectsData';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import { SectionHeading } from '../common/SectionHeading';
import { Badge } from '../common/Badge';
import type { ProjectCaseStudy } from '../../types';

interface FeaturedProjectProps {
  onSelectProject: (project: ProjectCaseStudy) => void;
}

export const FeaturedProject: React.FC<FeaturedProjectProps> = ({ onSelectProject }) => {
  const { language } = useLanguage();
  const t = translations[language].featured;
  const project = projectsData[0]; // FinAI Assistant
  const [activeStep, setActiveStep] = useState(2); // default step 3

  const flowIcons = [
    <Mic className="w-4 h-4 text-sky-400" />,
    <Sparkles className="w-4 h-4 text-cyan-400" />,
    <Brain className="w-4 h-4 text-violet-400" />,
    <Database className="w-4 h-4 text-emerald-400" />,
    <Volume2 className="w-4 h-4 text-amber-400" />,
  ];

  return (
    <section id="featured-case" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        tag={t.tag}
        title={project.title}
        subtitle={project.tagline}
        tagVariant="primary"
      />

      <div className="bg-surface-dark border border-slate-700/80 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl space-y-8">
        {/* Header Badges & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="emerald" dot>ZERO HALLUCINATION ARCHITECTURE</Badge>
              <Badge variant="violet">MULTIMODAL AI</Badge>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">{project.subtitle}</h3>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onSelectProject(project)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-mono font-bold text-xs transition-all shadow-md shadow-sky-500/20"
            >
              <span>{t.viewFullCaseStudy}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Problem vs Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-xl bg-rose-950/20 border border-rose-900/30 space-y-2">
            <span className="text-xs font-mono font-bold uppercase text-rose-400 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4" />
              {t.problemTitle}
            </span>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-5 rounded-xl bg-emerald-950/20 border border-emerald-900/30 space-y-2">
            <span className="text-xs font-mono font-bold uppercase text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              {t.solutionTitle}
            </span>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Interactive Step-by-Step Architecture Pipeline */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase text-sky-400 font-bold flex items-center gap-2">
              <Layers className="w-4 h-4" />
              {t.architectureFlow} (Click Steps to Inspect)
            </span>
            <span className="text-[11px] font-mono text-slate-400">Step {activeStep + 1} of 5</span>
          </div>

          {/* Interactive Steps Carousel / Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5">
            {project.architectureSteps?.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStep(idx)}
                  className={`p-3.5 rounded-xl text-left border transition-all ${
                    isActive
                      ? 'bg-slate-900 border-sky-400 shadow-md shadow-sky-500/10'
                      : 'bg-slate-950/70 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="w-5 h-5 rounded-full bg-slate-800 text-[11px] font-mono font-bold flex items-center justify-center text-slate-300">
                      {step.step}
                    </span>
                    {flowIcons[idx]}
                  </div>
                  <h4 className="text-xs font-bold text-white line-clamp-1">{step.title}</h4>
                  <span className="text-[10px] font-mono text-sky-400/80 block mt-1 line-clamp-1">
                    {step.tech}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Step Deep Detail Card */}
          {project.architectureSteps && (
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20 shrink-0 mt-0.5">
                  {flowIcons[activeStep]}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    Step {project.architectureSteps[activeStep].step}: {project.architectureSteps[activeStep].title}
                  </h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    {project.architectureSteps[activeStep].description}
                  </p>
                </div>
              </div>
              <span className="px-3 py-1 rounded bg-slate-900 text-xs font-mono text-emerald-400 border border-slate-700 shrink-0">
                Technology: {project.architectureSteps[activeStep].tech}
              </span>
            </div>
          )}
        </div>

        {/* ADR & Benchmarks Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4 border-t border-slate-800">
          {/* Left: ADR */}
          <div className="lg:col-span-8 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-sky-400 font-bold">
              <GitCommit className="w-4 h-4" />
              <span>Architectural Decision (ADR-001)</span>
            </div>
            <h4 className="text-sm font-bold text-white">{project.adr?.title}</h4>
            <p className="text-xs text-slate-300">
              <strong className="text-slate-400">Decision:</strong> {project.adr?.decision}
            </p>
            <p className="text-xs text-emerald-400">
              <strong>Outcome:</strong> {project.adr?.consequences}
            </p>
          </div>

          {/* Right: Metrics */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-2.5">
            {project.metrics?.map((m, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                  {m.label}
                </span>
                <span className="text-lg font-bold font-mono text-emerald-400 mt-0.5 block">
                  {m.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <span className="text-xs font-mono text-slate-400 mr-2 uppercase">Stack:</span>
          {project.techStack.map((tech, i) => (
            <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-slate-300 border border-slate-800">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
