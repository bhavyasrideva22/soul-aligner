import { useAssessment } from '@/hooks/useAssessment';
import { assessmentSections } from '@/data/assessmentData';
import AssessmentSection from '@/components/AssessmentSection';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Assessment = () => {
  const navigate = useNavigate();
  const {
    assessmentState,
    nextSection,
    previousSection,
    getCurrentSection,
  } = useAssessment();

  const currentSection = getCurrentSection();

  useEffect(() => {
    if (assessmentState.isComplete) {
      navigate('/results');
    }
  }, [assessmentState.isComplete, navigate]);

  if (!currentSection) {
    return (
      <div className="min-h-screen bg-gradient-subtle flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Assessment Error</h1>
          <p className="text-muted-foreground mb-6">
            Unable to load the current assessment section.
          </p>
          <button 
            onClick={() => navigate('/')}
            className="text-primary hover:underline"
          >
            ← Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <AssessmentSection
      section={currentSection}
      sectionIndex={assessmentState.currentSection}
      totalSections={assessmentSections.length}
      onNext={nextSection}
      onPrevious={previousSection}
    />
  );
};

export default Assessment;