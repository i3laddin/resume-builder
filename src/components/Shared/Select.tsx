import React from "react";
import withDebounce from "../../hoc/withDebounce";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { Label } from "../ui/label";

const SelectGroup: React.FC<{
  value: string;
  label: string;
  onChange: (value: string) => void;
  items: string[];
}> = ({ label, items, value, onChange }) => {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <Select onValueChange={onChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={`Select a ${label}`} />
        </SelectTrigger>
        <SelectContent>
          {items.map((item, index) => (
            <SelectItem key={index} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default withDebounce(SelectGroup);
