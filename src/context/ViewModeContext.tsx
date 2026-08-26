import React, { createContext, useContext, useState } from 'react';
import type { ViewMode } from '../types';

interface ViewModeContextType {
  mode: ViewMode;
  setMode: (mode: ViewMode) => void;
  toggleMode: () => void;
}

const ViewModeContext = createContext<ViewModeContextType | undefined>(undefined);

export const ViewModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setModeState] = useState<ViewMode>(() => {
    const saved = localStorage.getItem('portfolio_view_mode');
    return (saved === 'recruiter' || saved === 'engineer') ? saved : 'engineer';
  });

  const setMode = (newMode: ViewMode) => {
    setModeState(newMode);
    localStorage.setItem('portfolio_view_mode', newMode);
  };

  const toggleMode = () => {
    setMode(mode === 'engineer' ? 'recruiter' : 'engineer');
  };

  return (
    <ViewModeContext.Provider value={{ mode, setMode, toggleMode }}>
      {children}
    </ViewModeContext.Provider>
  );
};

export const useViewMode = () => {
  const context = useContext(ViewModeContext);
  if (!context) {
    throw new Error('useViewMode must be used within a ViewModeProvider');
  }
  return context;
};
