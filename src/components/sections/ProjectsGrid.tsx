import React, { useState } from 'react';
import { ArrowRight, GitCommit } from 'lucide-react';
import { GitHubIcon } from '../common/Icons';
import { projectsData } from '../../data/projectsData';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import { SectionHeading } from '../common/SectionHeading';
import { Badge } from '../common/Badge';
import type { ProjectCaseStudy } from '../../types';

interface ProjectsGridProps {
  onSelectProject: (project: ProjectCaseStudy) => void;
}

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({ onSelectProject }) => {
  const { language } = useLanguage();
  const t = translations[language].projects;
  const [filter, setFilter] = useState<'all' | 'ai' | 'backend' | 'cloud' | 'security'>('all');

  const filteredProjects = projectsData.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        tag={t.tag}
        title={t.title}
        subtitle={t.subtitle}
        tagVariant="violet"
      />

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
            filter === 'all'
              ? 'bg-sky-500 text-slate-950 font-bold shadow-md shadow-sky-500/20'
              : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          {t.filters.all}
        </button>
        <button
          onClick={() => setFilter('ai')}
          className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
            filter === 'ai'
              ? 'bg-violet-500 text-white font-bold shadow-md shadow-violet-500/20'
              : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          {t.filters.ai}
        </button>
        <button
          onClick={() => setFilter('backend')}
          className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
            filter === 'backend'
              ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
              : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          {t.filters.backend}
        </button>
        <button
          onClick={() => setFilter('security')}
          className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
            filter === 'security'
              ? 'bg-rose-500 text-white font-bold shadow-md shadow-rose-500/20'
              : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          {t.filters.security}
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((proj) => (
          <div
            key={proj.id}
            className="group bg-surface-dark border border-slate-800/80 hover:border-sky-500/40 rounded-2xl p-6 shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-4">
              {/* Header Badge */}
              <div className="flex items-center justify-between">
                <Badge variant={proj.category === 'ai' ? 'violet' : proj.category === 'backend' ? 'emerald' : 'rose'}>
                  {proj.category.toUpperCase()}
                </Badge>
                {proj.adr && (
                  <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                    <GitCommit className="w-3 h-3 text-sky-400" />
                    ADR Included
                  </span>
                )}
              </div>

              {/* Title & Tagline */}
              <div>
                <h3 className="text-xl font-bold font-display text-white group-hover:text-sky-400 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1 font-mono">{proj.subtitle}</p>
              </div>

              {/* Problem & Solution Compact */}
              <div className="space-y-2 text-xs text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800/60">
                <p>
                  <strong className="text-rose-400 font-mono">Problem:</strong> {proj.problem}
                </p>
                <p>
                  <strong className="text-emerald-400 font-mono">Solution:</strong> {proj.solution}
                </p>
              </div>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {proj.techStack.slice(0, 5).map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded bg-slate-900 text-[11px] font-mono text-slate-300 border border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
                {proj.techStack.length > 5 && (
                  <span className="px-2 py-0.5 rounded bg-slate-900 text-[11px] font-mono text-slate-400 border border-slate-800">
                    +{proj.techStack.length - 5} more
                  </span>
                )}
              </div>
            </div>

            {/* Card Actions */}
            <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
              <button
                onClick={() => onSelectProject(proj)}
                className="flex items-center gap-2 text-xs font-mono font-bold text-sky-400 hover:text-sky-300 transition-colors"
              >
                <span>{t.viewDetails}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center gap-2">
                {proj.links.github && (
                  <a
                    href={proj.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
                    title="Source Code"
                  >
                    <GitHubIcon className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
