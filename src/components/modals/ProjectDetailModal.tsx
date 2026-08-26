import React from 'react';
import { X, ExternalLink, CheckCircle2, AlertTriangle, ArrowRight, GitCommit, Layers, Activity } from 'lucide-react';
import { GitHubIcon } from '../common/Icons';
import type { ProjectCaseStudy } from '../../types';
import { Badge } from '../common/Badge';

interface ProjectDetailModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-surface-dark border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-start justify-between p-6 border-b border-slate-800 bg-slate-900/80">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="primary" dot>{project.category.toUpperCase()}</Badge>
              {project.featured && <Badge variant="emerald">FLAGSHIP CASE STUDY</Badge>}
            </div>
            <h2 className="text-2xl font-bold font-display text-white">{project.title}</h2>
            <p className="text-sm text-slate-400 mt-1">{project.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="flex-1 p-6 overflow-y-auto space-y-8 text-slate-300">
          {/* Tagline & Metrics */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <p className="text-sm italic text-sky-200 mb-4">"{project.tagline}"</p>
            {project.metrics && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-800/80">
                {project.metrics.map((m, i) => (
                  <div key={i} className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800">
                    <p className="text-xs text-slate-400 font-mono">{m.label}</p>
                    <p className="text-lg font-bold text-emerald-400 font-mono mt-0.5">{m.value}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-rose-950/20 border border-rose-900/30">
              <h3 className="text-sm font-bold text-rose-400 flex items-center gap-2 mb-2 font-mono uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4" />
                The Problem
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{project.problem}</p>
            </div>

            <div className="p-5 rounded-xl bg-emerald-950/20 border border-emerald-900/30">
              <h3 className="text-sm font-bold text-emerald-400 flex items-center gap-2 mb-2 font-mono uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                Architectural Solution
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Step-by-Step Architecture Pipeline */}
          {project.architectureSteps && project.architectureSteps.length > 0 && (
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2 mb-4 font-mono">
                <Layers className="w-4 h-4 text-sky-400" />
                System Pipeline & Data Flow
              </h3>
              <div className="space-y-3">
                {project.architectureSteps.map((step) => (
                  <div
                    key={step.step}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors gap-2"
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-sky-500/20 text-sky-400 text-xs font-mono font-bold flex items-center justify-center shrink-0 border border-sky-500/30 mt-0.5">
                        {step.step}
                      </span>
                      <div>
                        <h4 className="text-sm font-semibold text-white">{step.title}</h4>
                        <p className="text-xs text-slate-400">{step.description}</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-950 text-sky-300 border border-slate-800 self-start sm:self-center shrink-0">
                      {step.tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ADR (Architectural Decision Record) */}
          {project.adr && (
            <div className="p-5 rounded-xl bg-slate-900/90 border border-sky-500/30">
              <div className="flex items-center gap-2 mb-3">
                <GitCommit className="w-4 h-4 text-sky-400" />
                <span className="text-xs font-mono font-bold uppercase text-sky-400">Architectural Decision Record (ADR)</span>
              </div>
              <h4 className="text-base font-bold text-white mb-2">{project.adr.title}</h4>
              <div className="space-y-2 text-xs sm:text-sm text-slate-300">
                <p><strong className="text-slate-400">Context:</strong> {project.adr.context}</p>
                <p><strong className="text-emerald-400">Decision:</strong> {project.adr.decision}</p>
                <p><strong className="text-sky-300">Consequences:</strong> {project.adr.consequences}</p>
              </div>
            </div>
          )}

          {/* Tech Stack Tags */}
          <div>
            <h3 className="text-xs font-mono uppercase text-slate-400 mb-3 tracking-wider">Technologies Utilized</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span key={i} className="px-3 py-1 rounded-lg bg-slate-800/80 text-xs font-mono text-slate-200 border border-slate-700">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Highlights */}
          <div>
            <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
              <Activity className="w-4 h-4 text-emerald-400" />
              Engineering Highlights
            </h3>
            <ul className="space-y-2">
              {project.keyHighlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <span className="text-emerald-400 mt-1">▹</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Limitations & Roadmap */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-800">
            <div>
              <h4 className="text-xs font-mono uppercase text-amber-400 font-bold mb-2">Current System Limitations</h4>
              <ul className="space-y-1.5 text-xs text-slate-400">
                {project.limitations.map((lim, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-amber-500">•</span>
                    <span>{lim}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-mono uppercase text-sky-400 font-bold mb-2">Engineering Roadmap</h4>
              <ul className="space-y-1.5 text-xs text-slate-400">
                {project.roadmap.map((item, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <ArrowRight className="w-3 h-3 text-sky-400 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/90 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono text-white transition-colors border border-slate-700"
              >
                <GitHubIcon className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-600/20 hover:bg-sky-600/30 text-sky-400 text-xs font-mono transition-colors border border-sky-500/40"
              >
                <ExternalLink className="w-4 h-4" />
                <span>System Demo / Walkthrough</span>
              </a>
            )}
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white text-xs font-mono transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
