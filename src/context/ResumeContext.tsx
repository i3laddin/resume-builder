import React, { createContext, ReactNode, useState } from "react";

export interface WorkHistoryItem {
  company: string;
  role: string;
  startDate: string;
  endDate?: string;
  description?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  startDate: string;
  endDate?: string;
}

export interface Language {
  language: string;
  proficiency: string;
}

export interface Skill {
  name: string;
  proficiency: string;
}

export interface Certification {
  name: string;
  issuer: string;
  issueDate: string;
}

export interface ResumeState {
  name: string;
  title: string;
  summary: string;
  email: string;
  phone: string;
  address?: string;
  linkedin?: string;
  github?: string;
  postalCode?: string;
  drivingLicense?: string;
  nationality?: string;
  placeOfBirth?: string;
  dateOfBirth?: string;
  workHistory: WorkHistoryItem[];
  education: EducationItem[];
  skills: Skill[];
  techSkills: Skill[];
  languages: Language[];
  certifications: Certification[];
}

const initialState: ResumeState = {
  name: "",
  title: "",
  summary: "",
  email: "",
  phone: "",
  address: "",
  linkedin: "",
  github: "",
  postalCode: "",
  drivingLicense: "",
  nationality: "",
  placeOfBirth: "",
  dateOfBirth: "",
  workHistory: [],
  education: [],
  skills: [],
  techSkills: [],
  languages: [],
  certifications: [],
};

type ContextType = {
  state: ResumeState;
  updateField: <K extends keyof ResumeState>(field: K, value: ResumeState[K]) => void;
  addArrayItem: <K extends keyof ResumeState>(field: K, newItem: ResumeState[K] extends Array<infer U> ? U : never) => void;
  updateArrayItem: <K extends keyof ResumeState>(field: K, index: number, value: ResumeState[K] extends Array<infer U> ? Partial<U> : never) => void;
  deleteArrayItem: <K extends keyof ResumeState>(field: K, index: number) => void;
};

const ResumeContext = createContext<ContextType | undefined>(undefined);

export const ResumeProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<ResumeState>(initialState);

  const updateField: ContextType["updateField"] = (field, value) => {
    setState((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const addArrayItem: ContextType["addArrayItem"] = (field, newItem) => {
    setState((prevState) => ({
      ...prevState,
      [field]: [...(prevState[field] as any[]), newItem],
    }));
  };

  const updateArrayItem: ContextType["updateArrayItem"] = (field, index, value) => {
    setState((prevState) => {
      const array = [...(prevState[field] as any[])];
      array[index] = { ...array[index], ...value };
      return { ...prevState, [field]: array };
    });
  };

  const deleteArrayItem: ContextType["deleteArrayItem"] = (field, index) => {
    setState((prevState) => {
      const array = [...(prevState[field] as any[])];
      array.splice(index, 1);
      return { ...prevState, [field]: array };
    });
  };

  return <ResumeContext.Provider value={{ state, updateField, addArrayItem, updateArrayItem, deleteArrayItem }}>{children}</ResumeContext.Provider>;
};

export const useResumeContext = () => {
  const context = React.useContext(ResumeContext);
  if (!context) {
    throw new Error("useResumeContext must be used within a ResumeProvider");
  }
  return context;
};
