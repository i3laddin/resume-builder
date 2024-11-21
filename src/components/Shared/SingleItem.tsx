import React, { ReactNode } from "react";
import { ChevronsUpDown } from "lucide-react";
import { Button } from "../ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { Trash2 } from "lucide-react";

const SingleItem = ({ onRemove, children, title, subTitle, className }: { onRemove: () => void; children: ReactNode; title: string; subTitle: string; className: string }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="space-y-2">
      <div className="flex items-center justify-between space-x-4 px-4">
        <div>
          <h4 className="text-2xl font-semibold">{title}</h4>

          <h6 className="text-sm font-light">{subTitle}</h6>
        </div>
        <div>
          <Button onClick={onRemove}>
            <Trash2 />
            </Button>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm">
              <ChevronsUpDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
      </div>
      <CollapsibleContent className="space-y-2">
        <div className={`flex flex-row w-100 ${className}`}>{children}</div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default SingleItem;
