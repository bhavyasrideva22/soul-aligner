import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-values.jpg";

interface HeroSectionProps {
  onStartAssessment: () => void;
}

const HeroSection = ({ onStartAssessment }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-black/10" />
      <div className="relative container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Discover Your Core Values &amp; Purpose
            </h1>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Unlock clarity about what truly drives you at work. When your values and purpose align with your career, 
              you thrive — energized, engaged, and authentic. Take our comprehensive assessment to discover your path 
              to meaningful work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg" 
                onClick={onStartAssessment}
                className="text-lg px-8 py-6"
              >
                Start Your Assessment
              </Button>
              <Button 
                variant="heroSecondary" 
                size="lg"
                className="text-lg px-8 py-6"
              >
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="lg:order-first order-last">
            <img 
              src={heroImage} 
              alt="Abstract representation of values and purpose discovery" 
              className="w-full h-[400px] object-cover rounded-2xl shadow-strong"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;