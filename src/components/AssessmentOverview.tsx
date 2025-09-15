import AssessmentCard from "./AssessmentCard";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Compass, 
  Target, 
  Users, 
  TrendingUp, 
  CheckCircle,
  Clock,
  BarChart3
} from "lucide-react";

interface AssessmentOverviewProps {
  onStartAssessment: () => void;
}

const AssessmentOverview = ({ onStartAssessment }: AssessmentOverviewProps) => {
  const assessmentSections = [
    {
      icon: Heart,
      title: "Core Values Discovery",
      description: "Identify and prioritize your fundamental values through paired comparisons and reflection exercises.",
      time: "5 minutes"
    },
    {
      icon: Compass,
      title: "Purpose Archetype",
      description: "Discover your dominant life purpose driver - are you a Creator, Healer, Guide, or Justice-Seeker?",
      time: "4 minutes"
    },
    {
      icon: Target,
      title: "Meaning & Fulfillment",
      description: "Assess what energizes you at work and define your personal meaning of success.",
      time: "6 minutes"
    },
    {
      icon: Users,
      title: "PACT Framework",
      description: "Evaluate your Purpose, Authenticity, Congruence, and Trajectory alignment.",
      time: "5 minutes"
    }
  ];

  const benefits = [
    "Personalized career path recommendations",
    "Conflict identification between competing values", 
    "Work environment compatibility analysis",
    "Actionable steps for better alignment"
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What You'll Discover</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive assessment combines proven psychological frameworks with practical career guidance 
            to give you deep insights into your professional identity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {assessmentSections.map((section, index) => (
            <AssessmentCard key={index} className="text-center">
              <section.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{section.description}</p>
              <div className="flex items-center justify-center text-xs text-primary">
                <Clock className="w-4 h-4 mr-1" />
                {section.time}
              </div>
            </AssessmentCard>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">Your Assessment Results Include:</h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <AssessmentCard className="text-center p-8">
            <BarChart3 className="w-16 h-16 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">Complete Assessment</h3>
            <p className="text-muted-foreground mb-6">
              Takes approximately 20 minutes to complete. Your responses are private and secure.
            </p>
            <Button 
              variant="primary" 
              size="lg" 
              onClick={onStartAssessment}
              className="w-full"
            >
              Begin Assessment
            </Button>
          </AssessmentCard>
        </div>
      </div>
    </section>
  );
};

export default AssessmentOverview;