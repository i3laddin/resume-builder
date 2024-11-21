import React from "react";
import { useResumeContext } from "../../context/ResumeContext";
import Input from "../Shared/Input";
import ExtraContacts from "./ExtraContacts";

const Contacts: React.FC = () => {
  const { state, updateField } = useResumeContext();

  const handleChange = (field: "email" | "phone" | "linkedin" | "github", value: string) => {
    updateField(field, value);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-row w-100">
        <Input label="Email" value={state.email} onChange={(value) => handleChange("email", value)} />
        <Input label="Phone" value={state.phone} onChange={(value) => handleChange("phone", value)} />
      </div>
      <div className="flex flex-row w-100">
        <Input label="LinkedIn" value={state.linkedin || ""} onChange={(value) => handleChange("linkedin", value)} />
        <Input label="GitHub" value={state.github || ""} onChange={(value) => handleChange("github", value)} />
      </div>
      <ExtraContacts />
    </div>
  );
};

export default Contacts;
