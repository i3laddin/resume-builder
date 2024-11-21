import React, { useId } from "react";
import withDebounce from "../../hoc/withDebounce";
import { Textarea } from "../../components/ui/textarea";
import { Label } from "../../components/ui/label";

interface TextareaProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const TextareaGroup: React.FC<TextareaProps> = ({ label, value, onChange, placeholder }) => {
  const id = useId();

  return (
    <div className="space-y-2">
      <Label htmlFor={`${label}-${id}`}>{label}</Label>
      <Textarea id={`${label}-${id}`} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} rows={4} />
    </div>
  );
};

export default withDebounce(TextareaGroup);
