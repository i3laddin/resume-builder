import React from "react";
import { Certification, useResumeContext } from "../../context/ResumeContext";
import { FORM_LABELS } from "../../lib/utils/constants";
import Input from "../Shared/Input";
import { Button } from "../ui/button";
import SingleItem from "../Shared/SingleItem";

const Certifications: React.FC = () => {
  const { state, updateArrayItem, addArrayItem, deleteArrayItem } = useResumeContext();

  const handleChange = (index: number, field: keyof Certification, value: string) => {
    updateArrayItem("certifications", index, { [field]: value });
  };

  const addCertification = () => {
    addArrayItem("certifications", { name: "", issuer: "", issueDate: "" });
  };

  const removeCertification = (index: number) => {
    deleteArrayItem("certifications", index);
  };

  return (
    <div className="space-y-4">
      {state.certifications.map((entry, index) => (
          <SingleItem onRemove={() => removeCertification(index)} title={entry.name || "untitled"} subTitle={entry.issueDate || "dummy"} key={index} className="space-y-2 flex flex-col border-b pb-4">
          <Input label={FORM_LABELS.certifications.name} value={entry.name} onChange={(value) => handleChange(index, "name", value)} />
          <Input label={FORM_LABELS.certifications.issuer} value={entry.issuer} onChange={(value) => handleChange(index, "issuer", value)} />
          <Input label={FORM_LABELS.certifications.issueDate} value={entry.issueDate} onChange={(value) => handleChange(index, "issueDate", value)} />
        </SingleItem>
      ))}
      <Button onClick={addCertification}>Add Certification</Button>
    </div>
  );
};

export default Certifications;
