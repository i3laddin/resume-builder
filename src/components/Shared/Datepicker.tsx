"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "../../lib/utils/utils";
import { Button } from "../../components/ui/button";
import { Calendar } from "../../components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../../components/ui/popover";
import { Label } from "../ui/label";

export function DatePickerDemo({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="w-[100%] p-[10px]">
          <Label>Date of birth</Label>
          <Button variant={"outline"} className={cn("w-[100%] p-[10px] justify-start text-left font-normal", !value && "text-muted-foreground")}>
            <CalendarIcon />
            {value ? format(value, "PPP") : <span>Pick a date</span>}
          </Button>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="center">
        <Calendar
          mode="single"
          selected={value ? new Date(value) : undefined}
          onSelect={(date) => onChange(date ? date.toISOString().split("T")[0] : "")}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
