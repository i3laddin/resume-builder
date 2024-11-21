import React, { useState } from "react";
import { SectionVisibility, useResumeVisibilityContext } from "../../context/ResumeVisibility";
import { Trash2 } from "lucide-react";

interface SectionWrapperProps {
  title: string;
  sectionKey: keyof SectionVisibility;
  children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ title, sectionKey, children }) => {
  const { sectionVisibility, toggleSectionVisibility, sectionTitles, updateSectionTitle } = useResumeVisibilityContext();

  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const handleDelete = () => {
    toggleSectionVisibility(sectionKey);
  };

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    if (newTitle.trim() !== "") {
      updateSectionTitle(sectionKey, newTitle);
    }
    setIsEditing(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === "Escape") {
      handleBlur();
    }
  };

    return (
      <div className="space-y-4 border p-4 rounded-lg">
        <div className="flex justify-between items-center">
          {isEditing ? (
            <input className="text-xl font-semibold border p-2 rounded" value={newTitle} onChange={handleChange} onBlur={handleBlur} onKeyDown={handleKeyDown} autoFocus />
          ) : (
            <h2 className="text-xl font-semibold" onDoubleClick={handleDoubleClick}>
              {sectionTitles[sectionKey]}
            </h2>
          )}
          <button className="text-red-500 hover:text-red-700" onClick={handleDelete}>
          <Trash2 />
          </button>
        </div>
        <div>{sectionVisibility[sectionKey] && children}</div>
      </div>
    )
  
};

export default SectionWrapper;
