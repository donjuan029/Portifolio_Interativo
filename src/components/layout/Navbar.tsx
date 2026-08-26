import React, { useState, useEffect } from 'react';
import { Command, Menu, X, Briefcase, Code2, Globe } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../common/Icons';
import { useViewMode } from '../../context/ViewModeContext';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import { profileData } from '../../data/profileData';

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandPalette }) => {
  const { mode, toggleMode } = useViewMode();
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].nav;
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.home, href: '#hero' },
    { label: t.mindmap, href: '#specialization-map' },
    { label: t.projects, href: '#featured-case' },
    { label: t.ai, href: '#ai-engineering' },
    { label: t.architecture, href: '#architecture' },
    { label: t.cloud, href: '#cloud-security' },
    { label: t.lab, href: '#engineering-lab' },
    { label: t.certs, href: '#certifications' },
    { label: t.resume, href: '#resume' },
    { label: t.contact, href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/30 py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-400 to-indigo-600 flex items-center justify-center text-slate-950 font-bold font-mono shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
            ⚡
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold font-display text-white text-sm sm:text-base tracking-tight group-hover:text-sky-400 transition-colors">
                Juan Carlo Cruz
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Available for opportunities" />
            </div>
            <span className="text-[10px] font-mono text-slate-400 block -mt-0.5">
              Software Engineer • 6º Sem
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 text-xs font-mono">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-2.5 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Control Action Center */}
        <div className="flex items-center gap-2">
          {/* Dual View Mode Switcher */}
          <button
            onClick={toggleMode}
            className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono border transition-all ${
              mode === 'recruiter'
                ? 'bg-amber-500/15 text-amber-300 border-amber-500/40 shadow-sm shadow-amber-500/20'
                : 'bg-sky-500/10 text-sky-300 border-sky-500/30 shadow-sm shadow-sky-500/20'
            }`}
            title={t.switchModeTip}
          >
            {mode === 'recruiter' ? (
              <>
                <Briefcase className="w-3.5 h-3.5 text-amber-400" />
                <span>Recruiter (60s)</span>
              </>
            ) : (
              <>
                <Code2 className="w-3.5 h-3.5 text-sky-400" />
                <span>Engineer Mode</span>
              </>
            )}
          </button>

          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-xs font-mono text-slate-300 border border-slate-700/80 transition-colors"
            title="Toggle Language (PT / EN)"
          >
            <Globe className="w-3.5 h-3.5 text-sky-400" />
            <span>{language.toUpperCase()}</span>
          </button>

          {/* Command Palette Button */}
          <button
            onClick={onOpenCommandPalette}
            className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-xs font-mono text-slate-400 border border-slate-700/80 transition-colors"
            title="Open Command Palette (Ctrl+K)"
          >
            <Command className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[10px]">Ctrl+K</span>
          </button>

          {/* GitHub CTA Link */}
          <a
            href={profileData.links.github}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono text-white transition-colors border border-slate-700"
          >
            <GitHubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 border-b border-slate-800 px-4 py-4 space-y-2 font-mono text-xs animate-fadeIn">
          {/* Mobile Mode Switcher */}
          <button
            onClick={() => {
              toggleMode();
              setMobileMenuOpen(false);
            }}
            className="w-full flex items-center justify-center gap-2 p-2 rounded-lg bg-slate-900 border border-slate-700 text-sky-300"
          >
            {mode === 'recruiter' ? <Briefcase className="w-4 h-4 text-amber-400" /> : <Code2 className="w-4 h-4 text-sky-400" />}
            <span>Mode: {mode === 'recruiter' ? 'Recruiter (60s)' : 'Engineer (Deep)'}</span>
          </button>

          <div className="grid grid-cols-2 gap-1 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg text-slate-300 hover:bg-slate-800/80 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex gap-2 pt-2 border-t border-slate-800">
            <a
              href={profileData.links.github}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
            >
              <GitHubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={profileData.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 p-2 rounded-lg bg-sky-950/40 border border-sky-800/40 text-sky-300"
            >
              <LinkedInIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
