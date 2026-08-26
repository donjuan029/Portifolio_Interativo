import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowRight } from 'lucide-react';
import { GitHubIcon, LinkedInIcon, YouTubeIcon } from '../common/Icons';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import { SectionHeading } from '../common/SectionHeading';
import { profileData } from '../../data/profileData';

export const Contact: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].contact;
  const [copied, setCopied] = useState(false);

  const emailAddress = "juancarloandrade31@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        tag={t.tag}
        title={t.title}
        subtitle={t.subtitle}
        tagVariant="emerald"
        align="center"
      />

      <div className="max-w-4xl mx-auto bg-surface-dark border border-slate-700/80 rounded-2xl p-6 sm:p-10 lg:p-12 shadow-2xl space-y-8 text-center">
        {/* Email Direct Action */}
        <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
            Direct Inquiries & Recruitment
          </span>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <span className="text-base sm:text-xl font-mono font-bold text-sky-400">
              {emailAddress}
            </span>
            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-200 border border-slate-700 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
              <span>{copied ? t.copiedEmail : "Copy"}</span>
            </button>
          </div>
          <a
            href={profileData.links.email}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-mono font-bold text-xs shadow-md shadow-sky-500/20 transition-all mt-2"
          >
            <Mail className="w-4 h-4" />
            <span>{t.sendEmail}</span>
          </a>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          {/* LinkedIn */}
          <a
            href={profileData.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-sky-500/40 transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 inline-block mb-3">
                <LinkedInIcon className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white group-hover:text-sky-400 transition-colors">
                LinkedIn
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                Professional network & recommendations.
              </p>
            </div>
            <div className="pt-4 flex items-center gap-1 text-xs font-mono text-sky-400">
              <span>{t.linkedInCta}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* GitHub */}
          <a
            href={profileData.links.github}
            target="_blank"
            rel="noreferrer"
            className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500/40 transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 inline-block mb-3">
                <GitHubIcon className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                GitHub (@donjuan029)
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                Repositories, code samples & commits.
              </p>
            </div>
            <div className="pt-4 flex items-center gap-1 text-xs font-mono text-emerald-400">
              <span>{t.githubCta}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* YouTube */}
          <a
            href={profileData.links.youtube}
            target="_blank"
            rel="noreferrer"
            className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-rose-500/40 transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20 inline-block mb-3">
                <YouTubeIcon className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white group-hover:text-rose-400 transition-colors">
                Don Games Tech
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                Tech experiments, AI & development.
              </p>
            </div>
            <div className="pt-4 flex items-center gap-1 text-xs font-mono text-rose-400">
              <span>{t.youtubeCta}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
