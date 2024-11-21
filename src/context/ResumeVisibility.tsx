import React, { createContext, useState, ReactNode, useContext } from 'react';

export type SectionVisibility = {
  nameAndTitle: boolean;
  summary: boolean;
  contacts: boolean;
  workHistory: boolean;
  education: boolean;
  skills: boolean;
  techSkills: boolean;
  languages: boolean;
  certifications: boolean;
};

export type SectionTitles = {
  nameAndTitle: string;
  summary: string;
  contacts: string;
  workHistory: string;
  education: string;
  skills: string;
  techSkills: string;
  languages: string;
  certifications: string;
};

type ResumeVisibilityType = {
  sectionVisibility: SectionVisibility;
  sectionTitles: SectionTitles;
  toggleSectionVisibility: (section: keyof SectionVisibility) => void;
  updateSectionTitle: (section: keyof SectionTitles, newTitle: string) => void;
};

const initialSectionVisibility: SectionVisibility = {
  nameAndTitle: true,
  summary: true,
  contacts: true,
  workHistory: true,
  education: true,
  skills: true,
  techSkills: true,
  languages: true,
  certifications: true,
};

const initialSectionTitles: SectionTitles = {
  nameAndTitle: "Basic info",
  summary: "Summary",
  contacts: "Contacts",
  workHistory: "Work History",
  education: "Education",
  skills: "Skills",
  techSkills: "Tech Skills",
  languages: "Languages",
  certifications: "Certifications",
};

const ResumeVisibilityContext = createContext<ResumeVisibilityType | undefined>(undefined);

export const ResumeVisibilityProvider = ({ children }: { children: ReactNode }) => {
  const [sectionVisibility, setSectionVisibility] = useState<SectionVisibility>(initialSectionVisibility);
  const [sectionTitles, setSectionTitles] = useState<SectionTitles>(initialSectionTitles);

  const toggleSectionVisibility = (section: keyof SectionVisibility) => {
    setSectionVisibility((prevVisibility) => ({
      ...prevVisibility,
      [section]: !prevVisibility[section],
    }));
  };

  const updateSectionTitle = (section: keyof SectionTitles, newTitle: string) => {
    setSectionTitles((prevTitles) => ({
      ...prevTitles,
      [section]: newTitle,
    }));
  };

  
  return (
    <ResumeVisibilityContext.Provider value={{ sectionVisibility, sectionTitles, toggleSectionVisibility, updateSectionTitle }}>
      {children}
    </ResumeVisibilityContext.Provider>
  );
};

export const useResumeVisibilityContext = () => {
  const context = useContext(ResumeVisibilityContext);
  if (!context) {
    throw new Error('useResumeContext must be used within a ResumeProvider');
  }
  return context;
};
