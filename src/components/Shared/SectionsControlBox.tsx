import React from "react";
import { useResumeVisibilityContext, SectionVisibility } from "../../context/ResumeVisibility";

import { Eye, EyeOff } from "lucide-react";

const SectionsControlBox: React.FC = () => {
  const { sectionVisibility, toggleSectionVisibility, sectionTitles } = useResumeVisibilityContext();

  return (
    <div className="border p-4 rounded-lg shadow-md w-full bg-white">
      <h3 className="text-lg font-bold mb-4">Sections Control</h3>
      <ul className="space-y-2">
        {Object.keys(sectionVisibility).map((sectionKey) => {
          const key = sectionKey as keyof SectionVisibility;
          const isVisible = sectionVisibility[key];
          return (
            <li key={key} className="flex justify-between items-center p-2 border rounded hover:bg-gray-100 transition">
              <span className="text-sm font-medium">{sectionTitles[key]}</span>
              <button onClick={() => toggleSectionVisibility(key)} className="text-gray-600 hover:text-gray-800" aria-label={isVisible ? `Hide ${sectionTitles[key]}` : `Show ${sectionTitles[key]}`}>
                {isVisible ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SectionsControlBox;
