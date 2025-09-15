import { useState } from 'react';
import { AssessmentSection as AssessmentSectionType } from '@/types/assessment';
import { useAssessment } from '@/hooks/useAssessment';
import AssessmentLayout from './AssessmentLayout';
import QuestionRenderer from './questions/QuestionRenderer';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';

interface AssessmentSectionProps {
  section: AssessmentSectionType;
  sectionIndex: number;
  totalSections: number;
  onNext: () => void;
  onPrevious: () => void;
}

const AssessmentSection = ({
  section,
  sectionIndex,
  totalSections,
  onNext,
  onPrevious,
}: AssessmentSectionProps) => {
  const { addResponse, getQuestionResponse } = useAssessment();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const currentQuestion = section.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === section.questions.length - 1;
  const isFirstQuestion = currentQuestionIndex === 0;
  const isLastSection = sectionIndex === totalSections - 1;

  const handleAnswer = (value: any) => {
    addResponse({
      sectionId: section.id,
      questionId: currentQuestion.id,
      value,
    });
  };

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      onNext();
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (isFirstQuestion) {
      onPrevious();
    } else {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const currentResponse = getQuestionResponse(currentQuestion.id);
  const hasAnswer = currentResponse && currentResponse.value !== undefined;

  const progress = ((sectionIndex * 100) + ((currentQuestionIndex + 1) / section.questions.length * 100)) / totalSections;

  return (
    <AssessmentLayout
      currentStep={sectionIndex + 1}
      totalSteps={totalSections}
      stepTitle={section.title}
      progress={progress}
    >
      <div className="space-y-8">
        {/* Section Info */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center text-sm text-muted-foreground">
            <Clock className="w-4 h-4 mr-1" />
            Estimated time: {section.estimatedTime} minutes
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {section.description}
          </p>
        </div>

        {/* Question Progress */}
        <div className="flex items-center justify-center space-x-2">
          {section.questions.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index < currentQuestionIndex
                  ? 'bg-secondary'
                  : index === currentQuestionIndex
                  ? 'bg-primary'
                  : 'bg-muted'
              }`}
            />
          ))}
        </div>

        {/* Current Question */}
        <div className="min-h-[400px]">
          <QuestionRenderer
            question={currentQuestion}
            currentValue={currentResponse?.value}
            onAnswer={handleAnswer}
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8">
          <Button
            variant="outline"
            onClick={handlePreviousQuestion}
            disabled={isFirstQuestion && sectionIndex === 0}
            className="flex items-center"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            {isFirstQuestion ? 'Previous Section' : 'Previous Question'}
          </Button>

          <div className="text-sm text-muted-foreground">
            Question {currentQuestionIndex + 1} of {section.questions.length}
          </div>

          <Button
            variant="primary"
            onClick={handleNextQuestion}
            disabled={currentQuestion.required && !hasAnswer}
            className="flex items-center"
          >
            {isLastQuestion
              ? isLastSection
                ? 'Complete Assessment'
                : 'Next Section'
              : 'Next Question'
            }
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </AssessmentLayout>
  );
};

export default AssessmentSection;