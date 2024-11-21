import React from "react";
import { Skill, useResumeContext } from "../../context/ResumeContext";
import { FORM_LABELS, PROFICIENCY_LEVELS } from "../../lib/utils/constants"; 
import Input from "../Shared/Input";
import { Button } from "../ui/button";
import Select from "../Shared/Select";
import SingleItem from "../Shared/SingleItem";

const Skills: React.FC = () => {
  const { state, updateArrayItem, addArrayItem, deleteArrayItem } = useResumeContext();

  const handleChange = (index: number, field: keyof Skill, value: string) => {
    updateArrayItem("skills", index, { [field]: value });
  };

  const addSkill = () => {
    addArrayItem("skills", { name: "", proficiency: PROFICIENCY_LEVELS[0] });
  };

  const removeSkill = (index: number) => {
    deleteArrayItem("skills", index);
  };

  return (
    <div className="space-y-4">
      {state.skills.map((entry, index) => (
        <SingleItem onRemove={() => removeSkill(index)} title={entry.name || "untitled"} subTitle={entry.proficiency} key={index} className="border-b">
          <Input label={FORM_LABELS.skills.name} value={entry.name} onChange={(value) => handleChange(index, "name", value)} />
          <Select label="level" items={PROFICIENCY_LEVELS} value={entry.proficiency} onChange={(value) => handleChange(index, "proficiency", value)} />
        </SingleItem>
      ))}
      <Button onClick={addSkill}>Add Skill</Button>
    </div>
  );
};

export default Skills;
