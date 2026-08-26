import React from 'react';
import { X, Award, ExternalLink, CheckCircle2 } from 'lucide-react';
import type { Certification } from '../../types';
import { Badge } from '../common/Badge';

interface CertDetailModalProps {
  cert: Certification | null;
  onClose: () => void;
}

export const CertDetailModal: React.FC<CertDetailModalProps> = ({ cert, onClose }) => {
  if (!cert) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-surface-dark border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-slate-800 bg-slate-900/80">
          <div className="flex items-start gap-3.5">
            <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="primary">{cert.issuer}</Badge>
                {cert.code && <Badge variant="emerald">{cert.code}</Badge>}
              </div>
              <h3 className="text-lg font-bold text-white font-display leading-snug">{cert.name}</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5 text-sm text-slate-300">
          <div>
            <h4 className="text-xs font-mono uppercase text-slate-400 mb-1.5 font-bold">Scope & Description</h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
              {cert.description}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase text-slate-400 mb-2.5 font-bold">Verified Skills & Competencies</h4>
            <div className="flex flex-wrap gap-2">
              {cert.skills.map((skill, i) => (
                <span
                  key={i}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800/90 text-xs font-mono text-slate-200 border border-slate-700"
                >
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-slate-800 text-xs font-mono text-slate-400">
            <span>Status: <strong className="text-emerald-400">{cert.status}</strong></span>
            <span>Category: <strong className="text-sky-300">{cert.category}</strong></span>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/90 flex items-center justify-between">
          {cert.credentialUrl ? (
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-600/20 hover:bg-sky-600/30 text-sky-400 text-xs font-mono transition-colors border border-sky-500/40"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Verify on LinkedIn Profile</span>
            </a>
          ) : (
            <div />
          )}
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
