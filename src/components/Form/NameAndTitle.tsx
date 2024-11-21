import React from "react";
import { ResumeState, useResumeContext } from "../../context/ResumeContext";
import Input from "../Shared/Input";

const NameAndTitle: React.FC = () => {
  const { state, updateField } = useResumeContext();

  const handleChange = (field: keyof ResumeState, value: string) => {
    updateField(field, value);
  };

  return (
    <div className="flex flex-row w-100 align-center">
      <Input label="Name" value={state.name} onChange={(value) => handleChange("name", value)} />
      <Input label="Title" value={state.title} onChange={(value) => handleChange("title", value)} />
    </div>
  );
};

export default NameAndTitle;
