import React from "react";
import Input from "../Shared/Input";
import { EducationItem, useResumeContext } from "../../context/ResumeContext";
import { FORM_LABELS } from "../../lib/utils/constants";
import { Button } from "../ui/button";
import SingleItem from "../Shared/SingleItem";

const Education: React.FC = () => {
  const { state, updateArrayItem, addArrayItem, deleteArrayItem } = useResumeContext();

  const handleChange = (index: number, field: keyof EducationItem, value: string) => {
    updateArrayItem("education", index, { [field]: value });
  };

  const addEducation = () => {
    addArrayItem("education", { institution: "", degree: "", startDate: "", endDate: "" });
  };

  const removeEducation = (index: number) => {
    deleteArrayItem("education", index);
  };

  return (
    <div className="space-y-4">
      {state.education.map((entry, index) => (
        <SingleItem onRemove={() => removeEducation(index)} title={entry.institution || "untitled"} subTitle={entry.degree} key={index} className="space-y-2 flex flex-col border-b pb-4">
          <Input label={FORM_LABELS.education.institution} value={entry.institution} onChange={(value) => handleChange(index, "institution", value)} />
          <Input label={FORM_LABELS.education.degree} value={entry.degree} onChange={(value) => handleChange(index, "degree", value)} />
          <Input label={FORM_LABELS.education.startDate} value={entry.startDate} onChange={(value) => handleChange(index, "startDate", value)} />
          <Input label={FORM_LABELS.education.endDate} value={entry.endDate || ""} onChange={(value) => handleChange(index, "endDate", value)} />
        </SingleItem>
      ))}
      <Button onClick={addEducation}>Add Education</Button>
    </div>
  );
};

export default Education;
