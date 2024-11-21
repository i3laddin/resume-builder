import React from "react";
import { Language, useResumeContext } from "../../context/ResumeContext";
import { FORM_LABELS, PROFICIENCY_LEVELS } from "../../lib/utils/constants";
import Input from "../Shared/Input";
import { Button } from "../ui/button";
import Select from "../Shared/Select";
import SingleItem from "../Shared/SingleItem";

const Languages: React.FC = () => {
  const { state, updateArrayItem, addArrayItem, deleteArrayItem } = useResumeContext();

  const handleChange = (index: number, field: keyof Language, value: string) => {
    updateArrayItem("languages", index, { [field]: value });
  };

  const addLanguage = () => {
    addArrayItem("languages", { language: "", proficiency: PROFICIENCY_LEVELS[0] });
  };

  const removeLanguage = (index: number) => {
    deleteArrayItem("languages", index);
  };

  return (
    <div className="space-y-4">
      {state.languages.map((entry, index) => (
        <SingleItem onRemove={() => removeLanguage(index)} title={entry.language || "untitled"} subTitle={entry.proficiency} key={index} className="border-b">
          <Input label={FORM_LABELS.languages.language} value={entry.language} onChange={(value) => handleChange(index, "language", value)} />
          <Select label="level" items={PROFICIENCY_LEVELS} value={entry.proficiency} onChange={(value) => handleChange(index, "proficiency", value)} />
        </SingleItem>
      ))}
      <Button onClick={addLanguage}>Add Language</Button>
    </div>
  );
};

export default Languages;
