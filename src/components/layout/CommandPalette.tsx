import React, { useState, useEffect } from 'react';
import { Search, Command, Briefcase, Cpu, Cloud, Shield, Terminal, Award, FileText, ArrowRight, ExternalLink, Globe, Moon, Sun } from 'lucide-react';
import { useViewMode } from '../../context/ViewModeContext';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { profileData } from '../../data/profileData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const { mode, toggleMode } = useViewMode();
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose(); // toggle
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      id: 'sec-overview',
      name: language === 'en' ? 'Navigate to Overview' : 'Ir para Visão Geral',
      category: 'Navigation',
      icon: <Command className="w-4 h-4 text-sky-400" />,
      perform: () => {
        document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'sec-mindmap',
      name: language === 'en' ? 'Technical Specialization Map' : 'Mapa de Especialização Técnica',
      category: 'Navigation',
      icon: <Cpu className="w-4 h-4 text-emerald-400" />,
      perform: () => {
        document.getElementById('specialization-map')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'sec-featured',
      name: language === 'en' ? 'Featured Case Study: FinAI Assistant' : 'Case em Destaque: FinAI Assistant',
      category: 'Navigation',
      icon: <Briefcase className="w-4 h-4 text-sky-400" />,
      perform: () => {
        document.getElementById('featured-case')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'sec-ai',
      name: language === 'en' ? 'AI Engineering & Agents' : 'Engenharia de IA & Agentes',
      category: 'Navigation',
      icon: <Cpu className="w-4 h-4 text-violet-400" />,
      perform: () => {
        document.getElementById('ai-engineering')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'sec-arch',
      name: language === 'en' ? 'Software & Cloud Architecture' : 'Arquitetura de Software e Cloud',
      category: 'Navigation',
      icon: <Cloud className="w-4 h-4 text-cyan-400" />,
      perform: () => {
        document.getElementById('architecture')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'sec-cloud-sec',
      name: language === 'en' ? 'Multi-Cloud & Security Mindset' : 'Multi-Cloud & Mentalidade de Segurança',
      category: 'Navigation',
      icon: <Shield className="w-4 h-4 text-rose-400" />,
      perform: () => {
        document.getElementById('cloud-security')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'sec-lab',
      name: language === 'en' ? 'Engineering Lab Experiments' : 'Experimentos do Laboratório',
      category: 'Navigation',
      icon: <Terminal className="w-4 h-4 text-emerald-400" />,
      perform: () => {
        document.getElementById('engineering-lab')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'sec-certs',
      name: language === 'en' ? 'Certifications & Cloud Wall' : 'Mural de Certificações',
      category: 'Navigation',
      icon: <Award className="w-4 h-4 text-amber-400" />,
      perform: () => {
        document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'sec-resume',
      name: language === 'en' ? 'Professional Résumé' : 'Currículo Profissional',
      category: 'Navigation',
      icon: <FileText className="w-4 h-4 text-sky-400" />,
      perform: () => {
        document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'act-mode',
      name: mode === 'recruiter' ? 'Switch to Deep Engineer Mode' : 'Switch to 60s Recruiter View',
      category: 'Mode Switch',
      icon: <Briefcase className="w-4 h-4 text-amber-400" />,
      perform: () => {
        toggleMode();
        onClose();
      }
    },
    {
      id: 'act-lang',
      name: language === 'en' ? 'Mudar idioma para Português (PT-BR)' : 'Switch language to English (EN-US)',
      category: 'Language',
      icon: <Globe className="w-4 h-4 text-sky-400" />,
      perform: () => {
        toggleLanguage();
        onClose();
      }
    },
    {
      id: 'act-theme',
      name: theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme',
      category: 'Preferences',
      icon: theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-sky-400" />,
      perform: () => {
        toggleTheme();
        onClose();
      }
    },
    {
      id: 'ext-linkedin',
      name: 'Open LinkedIn Profile',
      category: 'External Links',
      icon: <ExternalLink className="w-4 h-4 text-sky-400" />,
      perform: () => {
        window.open(profileData.links.linkedin, '_blank');
        onClose();
      }
    },
    {
      id: 'ext-github',
      name: 'Open GitHub Profile (donjuan029)',
      category: 'External Links',
      icon: <ExternalLink className="w-4 h-4 text-emerald-400" />,
      perform: () => {
        window.open(profileData.links.github, '_blank');
        onClose();
      }
    },
  ];

  const filteredActions = actions.filter((a) =>
    a.name.toLowerCase().includes(query.toLowerCase()) ||
    a.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/75 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden font-sans">
        {/* Search Input */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-800 bg-slate-950/80">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={language === 'en' ? "Type a command or search sections..." : "Digite um comando ou busque seções..."}
            className="flex-1 bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none font-mono"
          />
          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
            ESC
          </span>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filteredActions.length === 0 ? (
            <div className="p-6 text-center text-xs text-slate-500 font-mono">
              No matching commands found for "{query}".
            </div>
          ) : (
            filteredActions.map((action) => (
              <button
                key={action.id}
                onClick={action.perform}
                className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-slate-800/80 text-left transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-950/80 border border-slate-800 group-hover:border-slate-700">
                    {action.icon}
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-white">
                      {action.name}
                    </p>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                      {action.category}
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
              </button>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 bg-slate-950/90 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>Quick Navigation & Mode Toggle</span>
          <span>Juan Carlo Andrade Cruz</span>
        </div>
      </div>
    </div>
  );
};
