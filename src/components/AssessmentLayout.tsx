import { ReactNode } from "react";
import { Progress } from "@/components/ui/progress";

interface AssessmentLayoutProps {
  children: ReactNode;
  currentStep: number;
  totalSteps: number;
  stepTitle: string;
  progress: number;
}

const AssessmentLayout = ({
  children,
  currentStep,
  totalSteps,
  stepTitle,
  progress,
}: AssessmentLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8">
        {/* Progress Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm text-muted-foreground">
              Step {currentStep} of {totalSteps}
            </div>
            <div className="text-sm text-muted-foreground">
              {Math.round(progress)}% Complete
            </div>
          </div>
          <Progress value={progress} className="mb-4" />
          <h1 className="text-2xl font-bold text-foreground">{stepTitle}</h1>
        </div>

        {/* Assessment Content */}
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AssessmentLayout;