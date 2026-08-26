import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

export const InteractiveTerminal: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].terminal;
  const [isOpen, setIsOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: 'system.init()',
      output: (
        <div className="text-slate-300 space-y-1">
          <p className="text-emerald-400 font-semibold">{t.welcome}</p>
          <p className="text-xs text-slate-400">Juan Carlo Andrade Cruz [Version 2026.1] — Software Engineer • AI • Multi-Cloud</p>
        </div>
      )
    }
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let output: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        output = (
          <div className="text-xs space-y-1 text-slate-300">
            <p className="text-sky-400 font-semibold">Available Commands:</p>
            <p><span className="text-emerald-400 font-mono">whoami</span> — Display candidate background & academic trajectory</p>
            <p><span className="text-emerald-400 font-mono">skills</span> — Inspect engineering pillars and technical tools</p>
            <p><span className="text-emerald-400 font-mono">projects</span> — List flagship systems & case studies</p>
            <p><span className="text-emerald-400 font-mono">certs</span> — View verified credentials (AZ-900, SC-900, AI-102, FCF, CSA)</p>
            <p><span className="text-emerald-400 font-mono">contact</span> — Output direct connection channels</p>
            <p><span className="text-emerald-400 font-mono">sudo hire juan</span> — Execute recruitment sequence 🚀</p>
            <p><span className="text-emerald-400 font-mono">clear</span> — Wipe terminal output history</p>
          </div>
        );
        break;

      case 'whoami':
        output = (
          <div className="text-xs space-y-1 text-slate-300">
            <p className="text-sky-400 font-bold">Juan Carlo Andrade Cruz</p>
            <p>Role: Software Engineer / AI Engineer / Cloud-oriented Developer</p>
            <p>Education: B.S. in Software Engineering (6th Semester) — Universidade Cruzeiro do Sul (UNICSUL)</p>
            <p>Specialization: Generative AI (Google Antigravity & Microsoft AI Foundry), Java/Spring REST APIs, Multi-Cloud (Azure, AWS, GCP), DevSecOps & Zero-Trust.</p>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="text-xs space-y-1 text-slate-300">
            <p className="text-emerald-400 font-semibold">Core Technical Competencies:</p>
            <p>• <strong className="text-white">Backend:</strong> Java 17+, Spring Boot 3, REST APIs, Hibernate JPA, Maven, Gradle</p>
            <p>• <strong className="text-white">AI Engineering:</strong> OpenAI Whisper, Claude 3.5, Microsoft AI Foundry, Antigravity, Function Calling, Prompt Engineering, RAG</p>
            <p>• <strong className="text-white">Cloud & DevOps:</strong> Microsoft Azure (AZ-900), AWS, Google Cloud, Docker, Jenkins, CI/CD</p>
            <p>• <strong className="text-white">Security:</strong> SC-900, Fortinet FCF, Zero Trust, Microsoft Entra ID, DevSecOps</p>
            <p>• <strong className="text-white">Frontend & Enterprise:</strong> TypeScript, React, Angular, Tailwind CSS, ServiceNow (CSA)</p>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="text-xs space-y-1 text-slate-300">
            <p className="text-sky-400 font-semibold">Featured Engineering Systems:</p>
            <p>1. <strong className="text-white">FinAI Assistant:</strong> Whisper ASR + LLM + Deterministic Pandas execution + gTTS voice output.</p>
            <p>2. <strong className="text-white">Enterprise Core API:</strong> Modular Spring Boot 3, JWT/RBAC security, PostgreSQL, Docker multi-stage builds.</p>
            <p>3. <strong className="text-white">Autonomous Agent Foundry:</strong> Multi-tool calling agent with Microsoft AI Foundry and Antigravity SDK.</p>
            <p>4. <strong className="text-white">DevSecOps Cloud Audit:</strong> Zero-Trust IAM governance, automated SAST gates, and network segmentation.</p>
          </div>
        );
        break;

      case 'certs':
        output = (
          <div className="text-xs space-y-1 text-slate-300">
            <p className="text-amber-400 font-semibold">Verified Industry Credentials:</p>
            <p>• Microsoft: AZ-900 (Azure), SC-900 (Security), AI-900 (AI), DP-900 (Data), PL-900 (Power Platform), AI-102 (AI Engineer)</p>
            <p>• Fortinet: FCF — Fortinet Certified Fundamentals in Cybersecurity</p>
            <p>• ServiceNow: CSA — Certified System Administrator Fundamentals</p>
            <p>• SENAI: Generative AI Applications & AI Agents (Google Antigravity)</p>
            <p>• FIAP: Cybersecurity & Threat Defense</p>
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="text-xs space-y-1 text-slate-300">
            <p className="text-sky-400 font-semibold">Connection Channels:</p>
            <p>• LinkedIn: <a href="https://www.linkedin.com/in/juancarloandradecruz/" target="_blank" rel="noreferrer" className="text-sky-400 underline">linkedin.com/in/juancarloandradecruz</a></p>
            <p>• GitHub: <a href="https://github.com/donjuan029" target="_blank" rel="noreferrer" className="text-sky-400 underline">github.com/donjuan029</a></p>
            <p>• YouTube: <a href="https://www.youtube.com/@dongamestech" target="_blank" rel="noreferrer" className="text-sky-400 underline">Don Games Tech</a></p>
            <p>• Email: <span className="text-emerald-400">juancarloandrade31@gmail.com</span></p>
          </div>
        );
        break;

      case 'sudo hire juan':
      case 'hire juan':
        try {
          confetti({
            particleCount: 120,
            spread: 70,
            origin: { y: 0.6 }
          });
        } catch {
          // ignore
        }
        output = (
          <div className="text-xs space-y-1.5 p-2 bg-emerald-950/40 border border-emerald-500/40 rounded text-emerald-300">
            <p className="font-bold text-sm text-emerald-400">🎉 Candidate Selection Initiated!</p>
            <p>Access Granted: Ready to deliver high-impact software engineering, AI systems, and cloud architectures.</p>
            <p>Next Step: Reach out directly on LinkedIn or via email at <span className="underline">juancarloandrade31@gmail.com</span></p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        output = (
          <p className="text-xs text-rose-400">
            Command not recognized: '{cmd}'. Type <span className="font-mono underline text-white">help</span> to view valid commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: input, output }]);
    setInput('');
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900/90 text-sky-400 border border-slate-700/80 shadow-lg shadow-black/50 hover:border-sky-500/50 hover:bg-slate-800 transition-all text-xs font-mono group"
        title="Open Developer Terminal"
      >
        <TerminalIcon className="w-4 h-4 text-sky-400 group-hover:rotate-6 transition-transform" />
        <span className="hidden sm:inline">CLI Terminal</span>
        <span className="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] text-slate-400 border border-slate-700">~</span>
      </button>

      {/* Terminal Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div
            className={`w-full ${
              isMaximized ? 'h-[90vh] max-w-6xl' : 'max-w-2xl h-[480px]'
            } bg-slate-950/95 border border-slate-800 rounded-xl shadow-2xl flex flex-col overflow-hidden font-mono transition-all`}
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800 select-none">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-xs text-slate-400 ml-2 font-mono flex items-center gap-1">
                  <TerminalIcon className="w-3.5 h-3.5 text-sky-400" />
                  juan@engineering-workstation: ~
                </span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <button
                  onClick={() => setIsMaximized(!isMaximized)}
                  className="hover:text-white p-1 rounded hover:bg-slate-800 transition-colors"
                >
                  {isMaximized ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:text-rose-400 p-1 rounded hover:bg-slate-800 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Terminal Scroll Content */}
            <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto space-y-3 font-mono text-xs">
              {history.map((item, index) => (
                <div key={index} className="space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-400">
                    <span className="text-emerald-400 font-semibold">{t.prompt}</span>
                    <span className="text-white">{item.command}</span>
                  </div>
                  <div className="pl-4 border-l border-slate-800/80 py-0.5">
                    {item.output}
                  </div>
                </div>
              ))}
            </div>

            {/* Terminal Input Form */}
            <form onSubmit={handleCommand} className="flex items-center gap-2 p-3 bg-slate-900/90 border-t border-slate-800">
              <span className="text-emerald-400 font-mono text-xs font-semibold pl-1">{t.prompt}</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t.placeholder}
                className="flex-1 bg-transparent text-white text-xs font-mono focus:outline-none placeholder:text-slate-600"
              />
              <button
                type="submit"
                className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-sky-400 text-xs px-2 flex items-center gap-1 border border-slate-700"
              >
                <span>Enter</span>
                <CornerDownLeft className="w-3 h-3" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
