import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AssessmentCardProps {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
  selected?: boolean;
  onClick?: () => void;
}

const AssessmentCard = ({
  children,
  className,
  interactive = false,
  selected = false,
  onClick,
}: AssessmentCardProps) => {
  return (
    <div
      className={cn(
        "assessment-card",
        interactive && "interactive",
        selected && "selected",
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default AssessmentCard;