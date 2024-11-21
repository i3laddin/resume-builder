import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { PROFICIENCY_LEVELS } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const calculateLevelWidth = (level: string): string => {
  const index = PROFICIENCY_LEVELS.indexOf(level);
  
  if (index === -1) {
      throw new Error("Invalid skill level provided");
  }

  const percentage = ((index + 1) / PROFICIENCY_LEVELS.length) * 100;
  return `${percentage}%`;
};


export const isStateEmpty = <T extends object>(state: T): boolean => Object.values(state).every(
  (value) =>
    Array.isArray(value)
      ? value.length === 0
      : 
      value === null ||
      value === undefined ||
      (typeof value === 'object' && Object.keys(value).length === 0) ||
      value === ''
);

