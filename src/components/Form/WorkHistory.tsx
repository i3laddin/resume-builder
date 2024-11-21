import React from "react";
import Input from "../Shared/Input";
import { useResumeContext, WorkHistoryItem } from "../../context/ResumeContext";
import { FORM_LABELS } from "../../lib/utils/constants";
import { Textarea } from "../Shared";
import { Button } from "../../components/ui/button";
import SingleItem from "../Shared/SingleItem";

const WorkHistory: React.FC = () => {
  const { state, updateArrayItem, addArrayItem, deleteArrayItem } = useResumeContext();

  const handleChange = (index: number, field: keyof WorkHistoryItem, value: string) => {
    updateArrayItem("workHistory", index, { [field]: value });
  };

  const addWorkHistory = () => {
    addArrayItem("workHistory", { company: "", role: "", startDate: "", endDate: "", description: "" });
  };

  const removeWorkHistory = (index: number) => {
    deleteArrayItem("workHistory", index);
  };

  return (
    <div className="space-y-4">
      {state.workHistory.map((entry, index) => (
        <SingleItem onRemove={() => removeWorkHistory(index)} title={entry.role || "untitled"} subTitle={entry.company} key={index} className="space-y-2 flex flex-col border-b pb-4">
          <Input label={FORM_LABELS.workHistory.company} value={entry.company} onChange={(value) => handleChange(index, "company", value)} />
          <Input label={FORM_LABELS.workHistory.role} value={entry.role} onChange={(value) => handleChange(index, "role", value)} />
          <Input label={FORM_LABELS.workHistory.startDate} value={entry.startDate} onChange={(value) => handleChange(index, "startDate", value)} />
          <Input label={FORM_LABELS.workHistory.endDate} value={entry.endDate || ""} onChange={(value) => handleChange(index, "endDate", value)} />
          <Textarea label={FORM_LABELS.workHistory.description} value={entry.description || ""} onChange={(value) => handleChange(index, "description", value)} />
        </SingleItem>
      ))}
      <Button onClick={addWorkHistory}>Add Work History</Button>
    </div>
  );
};

export default WorkHistory;
