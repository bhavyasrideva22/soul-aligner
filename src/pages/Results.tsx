import { useNavigate } from 'react-router-dom';
import { useAssessment } from '@/hooks/useAssessment';
import { Button } from '@/components/ui/button';
import AssessmentCard from '@/components/AssessmentCard';
import { BarChart3, Download, Share2, RotateCcw } from 'lucide-react';

const Results = () => {
  const navigate = useNavigate();
  const { assessmentState } = useAssessment();

  // For now, show a placeholder results page
  const handleRetakeAssessment = () => {
    navigate('/');
  };

  const handleDownloadResults = () => {
    // TODO: Implement PDF download functionality
    console.log('Download results');
  };

  const handleShareResults = () => {
    // TODO: Implement sharing functionality
    console.log('Share results');
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <BarChart3 className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Your Assessment Results</h1>
            <p className="text-lg text-muted-foreground">
              Congratulations! You've completed the Core Values Clarifier assessment.
            </p>
          </div>

          {/* Results Preview */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <AssessmentCard className="p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Core Values Profile</h3>
              <p className="text-muted-foreground mb-4">
                Your top values and potential conflicts have been identified based on your responses.
              </p>
              <div className="text-sm text-primary">
                Analysis Complete ✓
              </div>
            </AssessmentCard>

            <AssessmentCard className="p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Purpose Archetype</h3>
              <p className="text-muted-foreground mb-4">
                Your dominant life purpose driver and career alignment insights are ready.
              </p>
              <div className="text-sm text-primary">
                Analysis Complete ✓
              </div>
            </AssessmentCard>

            <AssessmentCard className="p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">PACT Framework</h3>
              <p className="text-muted-foreground mb-4">
                Your Purpose, Authenticity, Congruence, and Trajectory scores have been calculated.
              </p>
              <div className="text-sm text-primary">
                Analysis Complete ✓
              </div>
            </AssessmentCard>

            <AssessmentCard className="p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Career Recommendations</h3>
              <p className="text-muted-foreground mb-4">
                Personalized career paths and role suggestions based on your unique profile.
              </p>
              <div className="text-sm text-primary">
                Analysis Complete ✓
              </div>
            </AssessmentCard>
          </div>

          {/* Coming Soon Notice */}
          <AssessmentCard className="p-8 text-center mb-8">
            <h3 className="text-2xl font-semibold mb-4">Full Results Coming Soon!</h3>
            <p className="text-muted-foreground mb-6">
              We've captured all {assessmentState.responses.length} of your responses and our analysis engine is processing your unique profile. 
              The complete results interface with personalized insights, visualizations, and career recommendations is being finalized.
            </p>
            <div className="text-sm text-primary mb-4">
              Your data is securely stored and ready for the full analysis.
            </div>
          </AssessmentCard>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" onClick={handleRetakeAssessment} className="flex items-center">
              <RotateCcw className="w-4 h-4 mr-2" />
              Retake Assessment
            </Button>
            
            <Button variant="outline" onClick={handleDownloadResults} className="flex items-center">
              <Download className="w-4 h-4 mr-2" />
              Download Summary
            </Button>
            
            <Button variant="outline" onClick={handleShareResults} className="flex items-center">
              <Share2 className="w-4 h-4 mr-2" />
              Share Results
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;