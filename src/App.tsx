import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CommandPalette } from './components/layout/CommandPalette';
import { Hero } from './components/sections/Hero';
import { RecruiterBanner } from './components/sections/RecruiterBanner';
import { TechnicalMindMap } from './components/sections/TechnicalMindMap';
import { FeaturedProject } from './components/sections/FeaturedProject';
import { ProjectsGrid } from './components/sections/ProjectsGrid';
import { AIEngineering } from './components/sections/AIEngineering';
import { ArchitectureExplorer } from './components/sections/ArchitectureExplorer';
import { CloudAndSecurity } from './components/sections/CloudAndSecurity';
import { EngineeringLab } from './components/sections/EngineeringLab';
import { CertificationsWall } from './components/sections/CertificationsWall';
import { LearningJourney } from './components/sections/LearningJourney';
import { EngineeringManifesto } from './components/sections/EngineeringManifesto';
import { ResumeView } from './components/sections/ResumeView';
import { Contact } from './components/sections/Contact';
import { InteractiveTerminal } from './components/common/InteractiveTerminal';
import { ProjectDetailModal } from './components/modals/ProjectDetailModal';
import { CertDetailModal } from './components/modals/CertDetailModal';
import type { ProjectCaseStudy, Certification } from './types';

export const App: React.FC = () => {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <div className="min-h-screen bg-background-dark text-slate-100 font-sans selection:bg-sky-500 selection:text-white relative">
      {/* Top Navbar */}
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Main Content Flow */}
      <main>
        {/* Recruiter Fast-Track (Appears when Recruiter Mode is active) */}
        <div className="pt-20">
          <RecruiterBanner />
        </div>

        {/* Hero Section */}
        <Hero />

        {/* Technical Specialization Mind Map (Directly from User Infographic) */}
        <TechnicalMindMap />

        {/* Featured Flagship Case Study: FinAI Assistant */}
        <FeaturedProject onSelectProject={setSelectedProject} />

        {/* Engineering Case Studies Grid */}
        <ProjectsGrid onSelectProject={setSelectedProject} />

        {/* AI Engineering & Autonomous Agents */}
        <AIEngineering />

        {/* Software & Cloud Architecture Explorer */}
        <ArchitectureExplorer />

        {/* Multi-Cloud & Security Mindset */}
        <CloudAndSecurity />

        {/* Engineering Lab & Code Experiments */}
        <EngineeringLab />

        {/* Certifications Wall */}
        <CertificationsWall onSelectCert={setSelectedCert} />

        {/* Learning Journey & Currently Exploring */}
        <LearningJourney />

        {/* Engineering Manifesto */}
        <EngineeringManifesto />

        {/* Printable ATS Resume */}
        <ResumeView />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Command Palette (Ctrl+K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />

      {/* Developer Terminal Easter Egg */}
      <InteractiveTerminal />

      {/* Modals */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <CertDetailModal
        cert={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </div>
  );
};
export default App;
