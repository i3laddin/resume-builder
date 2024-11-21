import React from "react";
import { Skill, useResumeContext } from "../../context/ResumeContext";
import { PROFICIENCY_LEVELS } from "../../lib/utils/constants";
import Input from "../Shared/Input";
import { Button } from "../ui/button";
import Select from "../Shared/Select";
import SingleItem from "../Shared/SingleItem";

const TechSkills: React.FC = () => {
  const { state, updateArrayItem, addArrayItem, deleteArrayItem } = useResumeContext();

  const handleChange = (index: number, field: keyof Skill, value: string) => {
    updateArrayItem("techSkills", index, { [field]: value });
  };

  const addTechSkill = () => {
    addArrayItem("techSkills", { name: "", proficiency: PROFICIENCY_LEVELS[0] });
  };

  const removeTechSkill = (index: number) => {
    deleteArrayItem("techSkills", index);
  };

  return (
    <div className="space-y-4">
      {state.techSkills.map((entry, index) => (
        <SingleItem onRemove={() => removeTechSkill(index)} title={entry.name || "untitled"} subTitle={entry.proficiency} key={index} className="border-b">
          <Input label="Tech Skill" value={entry.name} onChange={(value) => handleChange(index, "name", value)} />
          <Select label="level" items={PROFICIENCY_LEVELS} value={entry.proficiency} onChange={(value) => handleChange(index, "proficiency", value)} />
        </SingleItem>
      ))}
      <Button onClick={addTechSkill}>Add Tech Skill</Button>
    </div>
  );
};

export default TechSkills;
