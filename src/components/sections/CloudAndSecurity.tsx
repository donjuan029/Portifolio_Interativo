import React from 'react';
import { Cloud, Lock, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import { SectionHeading } from '../common/SectionHeading';
import { Badge } from '../common/Badge';

export const CloudAndSecurity: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].cloudSecurity;

  const cloudProviders = [
    {
      name: "Microsoft Azure",
      badge: "Certified Multi-Pillar",
      status: "Specialist / Certified",
      color: "border-sky-500/40 bg-sky-950/20",
      services: ["Azure Entra ID (IAM)", "Azure AI Foundry", "App Services & Functions", "Azure SQL & Cosmos", "Microsoft Sentinel"],
      certs: ["AZ-900", "SC-900", "AI-900", "DP-900", "AI-102"]
    },
    {
      name: "Amazon Web Services (AWS)",
      badge: "Foundations & Architecture",
      status: "Building / Architecture",
      color: "border-amber-500/40 bg-amber-950/20",
      services: ["AWS EC2 Compute", "AWS S3 Object Storage", "AWS Lambda Serverless", "AWS IAM Governance", "VPC & Subnet Peering"],
      certs: ["Cloud Practitioner Concepts", "Solutions Architect Foundations"]
    },
    {
      name: "Google Cloud & Oracle (OCI)",
      badge: "AI & Infrastructure",
      status: "Exploring / Applied",
      color: "border-emerald-500/40 bg-emerald-950/20",
      services: ["Google Vertex AI", "Google Antigravity SDK", "OCI IAM & Cloud Guard", "Cloud Compute & Storage", "Zero-Trust Mesh"],
      certs: ["AI Foundations", "Cloud Security Implementation"]
    }
  ];

  return (
    <section id="cloud-security" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        tag={t.tag}
        title={t.title}
        subtitle={t.subtitle}
        tagVariant="rose"
      />

      {/* Quote Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-rose-950/40 via-slate-900 to-slate-950 border border-rose-500/30 mb-12 text-center">
        <p className="text-sm sm:text-base font-display font-semibold italic text-rose-200">
          {t.quote}
        </p>
      </div>

      {/* Multi-Cloud Matrix Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {cloudProviders.map((provider, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-2xl border ${provider.color} bg-surface-dark shadow-xl space-y-4 flex flex-col justify-between`}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <Badge variant="primary">{provider.badge}</Badge>
                <Cloud className="w-4 h-4 text-sky-400" />
              </div>
              <h3 className="text-xl font-bold font-display text-white">{provider.name}</h3>
              <span className="text-[11px] font-mono text-emerald-400 block mt-0.5 font-semibold">
                Status: {provider.status}
              </span>

              <div className="pt-4 space-y-2">
                <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider block">
                  Core Applied Services:
                </span>
                <ul className="space-y-1.5">
                  {provider.services.map((svc, sIdx) => (
                    <li key={sIdx} className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                      <span className="text-sky-400">▹</span>
                      <span>{svc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80">
              <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1.5">
                Target Alignment:
              </span>
              <div className="flex flex-wrap gap-1">
                {provider.certs.map((c, cIdx) => (
                  <span key={cIdx} className="px-2 py-0.5 rounded bg-slate-900 text-[10px] font-mono text-slate-300 border border-slate-800">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Security Mindset Pillars */}
      <div className="bg-surface-dark border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl">
        <h3 className="text-lg font-bold font-display text-white mb-6 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-rose-400" />
          Security Mindset & Defensive Architecture
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.securityPillars.map((sp, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Lock className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                {sp.title}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {sp.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
