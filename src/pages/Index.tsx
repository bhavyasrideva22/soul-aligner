import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import AssessmentOverview from "@/components/AssessmentOverview";

const Index = () => {
  const navigate = useNavigate();

  const handleStartAssessment = () => {
    navigate('/assessment');
  };

  return (
    <main className="min-h-screen">
      <HeroSection onStartAssessment={handleStartAssessment} />
      <AssessmentOverview onStartAssessment={handleStartAssessment} />
    </main>
  );
};

export default Index;