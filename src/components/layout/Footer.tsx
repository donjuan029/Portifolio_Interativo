import React from 'react';
import { ArrowUp, Shield } from 'lucide-react';
import { GitHubIcon, LinkedInIcon, YouTubeIcon } from '../common/Icons';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import { profileData } from '../../data/profileData';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/90 text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Identity & Status */}
        <div className="text-center md:text-left space-y-1.5">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="font-display font-bold text-white text-base">Juan Carlo Andrade Cruz</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-xs font-mono text-slate-400">UNICSUL 6º Sem</span>
          </div>
          <p className="text-xs text-slate-400 font-mono">
            {t.role}
          </p>
        </div>

        {/* Social & Channel Links */}
        <div className="flex items-center gap-4">
          <a
            href={profileData.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-sky-400 border border-slate-800 transition-colors"
            title="LinkedIn Profile"
          >
            <LinkedInIcon className="w-4 h-4" />
          </a>
          <a
            href={profileData.links.github}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-emerald-400 border border-slate-800 transition-colors"
            title="GitHub Profile"
          >
            <GitHubIcon className="w-4 h-4" />
          </a>
          <a
            href={profileData.links.youtube}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-rose-400 border border-slate-800 transition-colors"
            title="YouTube Channel: Don Games Tech"
          >
            <YouTubeIcon className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors ml-2"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-mono">
        <p>{t.copyright}</p>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            Zero-Trust Mindset
          </span>
          <span>{t.allRights}</span>
        </div>
      </div>
    </footer>
  );
};
