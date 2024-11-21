import React from "react";
import { ChevronsUpDown } from "lucide-react";

import { useResumeContext } from "../../context/ResumeContext";
import Input from "../Shared/Input";
import { Button } from "../ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { DatePickerDemo } from "../Shared/Datepicker";

const ExtraContacts: React.FC = () => {
  const { state, updateField } = useResumeContext();
  const [isOpen, setIsOpen] = React.useState(false);

  const handleChange = (field: "address" | "postalCode" | "drivingLicense" | "nationality" | "placeOfBirth" | "dateOfBirth", value: string) => {
    updateField(field, value);
  };
  return (
    <div className="space-y-4">
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="space-y-2">
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-sm font-semibold">Edit Additional Details</h4>

          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm">
              <ChevronsUpDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="space-y-2">
          <div className="flex flex-row w-100">
            <Input label="Address" value={state.address || ""} onChange={(value) => handleChange("address", value)} />
            <Input label="Postal Code" value={state.postalCode || ""} onChange={(value) => handleChange("postalCode", value)} />
          </div>
          <div className="flex flex-row w-100">
            <Input label="Driving License" value={state.drivingLicense || ""} onChange={(value) => handleChange("drivingLicense", value)} />
            <Input label="Nationality" value={state.nationality || ""} onChange={(value) => handleChange("nationality", value)} />
          </div>
          <div className="flex flex-row w-100">
            <Input label="Place Of Birth" value={state.placeOfBirth || ""} onChange={(value) => handleChange("placeOfBirth", value)} />

            <DatePickerDemo value={state.dateOfBirth || ""} onChange={(value) => handleChange("dateOfBirth", value)} />
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default ExtraContacts;
