import { useState } from 'react';
import { Question } from '@/types/assessment';
import AssessmentCard from '@/components/AssessmentCard';
import { Button } from '@/components/ui/button';

interface PairedComparisonProps {
  question: Question;
  currentValue?: any;
  onAnswer: (value: any) => void;
}

const PairedComparison = ({ question, currentValue, onAnswer }: PairedComparisonProps) => {
  const [selectedOption, setSelectedOption] = useState(currentValue);

  const handleSelect = (optionId: string) => {
    setSelectedOption(optionId);
    onAnswer(optionId);
  };

  return (
    <div className="space-y-4">
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold mb-2">{question.title}</h3>
        {question.description && (
          <p className="text-muted-foreground">{question.description}</p>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {question.options?.map((option: any) => (
          <AssessmentCard
            key={option.id}
            interactive
            selected={selectedOption === option.id}
            onClick={() => handleSelect(option.id)}
            className="p-6 text-center cursor-pointer"
          >
            <h4 className="text-lg font-semibold mb-2">{option.name}</h4>
            <p className="text-muted-foreground">{option.description}</p>
          </AssessmentCard>
        ))}
      </div>

      <div className="text-center text-sm text-muted-foreground mt-6">
        Click on the option that resonates more with you right now
      </div>
    </div>
  );
};

export default PairedComparison;