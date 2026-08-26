import React from 'react';
import { ArrowRight, Shield, Cloud, Cpu, CheckCircle2 } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../common/Icons';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import { profileData } from '../../data/profileData';
import { Badge } from '../common/Badge';

export const Hero: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-grid-pattern bg-radial-glow overflow-hidden"
    >
      {/* Ambient background glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center space-y-8 z-10">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          <Badge variant="primary" dot>
            {t.badge}
          </Badge>
          <Badge variant="emerald" dot>
            {t.openToWork}
          </Badge>
        </div>

        {/* Main Headline */}
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-white leading-[1.1]">
            <span className="text-gradient-sky">{t.headlinePrefix}</span>{' '}
            <span className="text-slate-100">{t.headlineSuffix}</span>
          </h1>
          <p className="text-base sm:text-xl font-mono text-sky-300/90 font-medium tracking-wide">
            {t.subheadline}
          </p>
        </div>

        {/* Engineering Value Proposition */}
        <p className="max-w-3xl mx-auto text-sm sm:text-base text-slate-400 leading-relaxed">
          {profileData.coreSummary[language]}
        </p>

        {/* Core Pillars Quick Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300">
            <Cpu className="w-3.5 h-3.5 text-violet-400" />
            AI Foundry & Antigravity
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300">
            <Cloud className="w-3.5 h-3.5 text-sky-400" />
            Azure & Multi-Cloud
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300">
            <Shield className="w-3.5 h-3.5 text-rose-400" />
            Zero Trust & SC-900
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            Java 17+ & Spring Boot
          </span>
        </div>

        {/* Call-to-Actions */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 pt-4">
          <a
            href="#featured-case"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-mono font-bold text-xs sm:text-sm shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all group"
          >
            <span>{t.exploreWork}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#specialization-map"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-mono text-xs sm:text-sm border border-slate-700 transition-all hover:border-slate-600"
          >
            <span>{t.viewMindMap}</span>
          </a>

          <a
            href={profileData.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-sky-400 font-mono text-xs sm:text-sm border border-sky-500/30 transition-all hover:border-sky-500/60"
          >
            <LinkedInIcon className="w-4 h-4" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>

          <a
            href={profileData.links.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 font-mono text-xs sm:text-sm border border-slate-800 transition-all hover:border-slate-700"
          >
            <GitHubIcon className="w-4 h-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};
