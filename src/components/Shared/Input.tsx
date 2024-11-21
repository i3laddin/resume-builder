import React, { useId } from "react";
import withDebounce from "../../hoc/withDebounce";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

const InputGroup: React.FC<{
  label: string;
  value: string;
  onChange: (value: string) => void;
}> = ({ label, value, onChange }) => {
  const id = useId();

  return (
    <div className="w-[100%] p-[10px]">
      <Label htmlFor={`${label}-${id}`}>{label}</Label>
      <Input id={`${label}-${id}`} value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
};

export default withDebounce(InputGroup);
