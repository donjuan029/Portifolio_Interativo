import React from 'react';
import { Download, ExternalLink, Code2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useViewMode } from '../../context/ViewModeContext';
import { translations } from '../../data/translations';
import { profileData } from '../../data/profileData';
import { Badge } from '../common/Badge';

export const RecruiterBanner: React.FC = () => {
  const { language } = useLanguage();
  const { mode, toggleMode } = useViewMode();
  const t = translations[language].recruiter;

  if (mode !== 'recruiter') {
    return null;
  }

  return (
    <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8 animate-fadeIn">
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-amber-950/40 via-slate-900/90 to-slate-950 border-2 border-amber-500/50 shadow-2xl shadow-amber-500/10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge variant="amber" dot>
                {t.badge}
              </Badge>
              <span className="text-xs font-mono text-slate-400">Time-to-Understand: &lt; 60s</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">{t.title}</h2>
            <p className="text-xs sm:text-sm font-mono text-amber-300 font-semibold">{t.roleTarget}</p>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#resume"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-mono font-bold text-xs shadow-md transition-all"
            >
              <Download className="w-4 h-4" />
              <span>{t.actions.downloadCv}</span>
            </a>
            <a
              href={profileData.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs border border-slate-700 transition-all"
            >
              <ExternalLink className="w-4 h-4 text-sky-400" />
              <span>{t.actions.messageLinkedIn}</span>
            </a>
            <button
              onClick={toggleMode}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sky-950/50 hover:bg-sky-900/50 text-sky-300 font-mono text-xs border border-sky-600/40 transition-all"
            >
              <Code2 className="w-4 h-4 text-sky-400" />
              <span>{t.actions.viewFullProfile}</span>
            </button>
          </div>
        </div>

        {/* Executive Quick Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {t.quickStats.map((stat, i) => (
            <div key={i} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                {stat.label}
              </span>
              <p className="text-sm font-bold text-white leading-snug">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Core summary paragraph */}
        <p className="mt-6 text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
          {t.summary}
        </p>
      </div>
    </section>
  );
};
