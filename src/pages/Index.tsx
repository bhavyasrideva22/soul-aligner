import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import AssessmentOverview from "@/components/AssessmentOverview";

const Index = () => {
  const [showAssessment, setShowAssessment] = useState(false);

  const handleStartAssessment = () => {
    setShowAssessment(true);
    // TODO: Navigate to assessment flow
    console.log("Starting assessment...");
  };

  if (showAssessment) {
    return (
      <div className="min-h-screen bg-gradient-subtle flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Assessment Coming Soon!</h1>
          <p className="text-lg text-muted-foreground mb-6">
            The full assessment interface is being built. This demonstrates the beautiful foundation we've created.
          </p>
          <button 
            onClick={() => setShowAssessment(false)}
            className="text-primary hover:underline"
          >
            ← Back to Overview
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      <HeroSection onStartAssessment={handleStartAssessment} />
      <AssessmentOverview onStartAssessment={handleStartAssessment} />
    </main>
  );
};

export default Index;