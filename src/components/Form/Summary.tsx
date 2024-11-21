import React from "react";
import { useResumeContext } from "../../context/ResumeContext";
import Textarea from "../Shared/Textarea";

const Summary: React.FC = () => {
  const { state, updateField } = useResumeContext();

  const handleChange = (value: string) => {
    updateField("summary", value);
  };

  return (
    <div className="space-y-4">
      <Textarea label="Summary" value={state.summary} onChange={handleChange} />
    </div>
  );
};

export default Summary;
