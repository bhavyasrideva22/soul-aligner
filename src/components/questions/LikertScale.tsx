import { useState, useEffect } from 'react';
import { Question } from '@/types/assessment';
import AssessmentCard from '@/components/AssessmentCard';
import { Button } from '@/components/ui/button';

interface LikertScaleProps {
  question: Question;
  currentValue?: Record<string, number>;
  onAnswer: (value: Record<string, number>) => void;
}

const LikertScale = ({ question, currentValue, onAnswer }: LikertScaleProps) => {
  const [responses, setResponses] = useState<Record<string, number>>(currentValue || {});

  const scaleLabels = question.max === 7 
    ? ['Always Drained', 'Mostly Drained', 'Sometimes Drained', 'Neutral', 'Sometimes Energized', 'Mostly Energized', 'Always Energized']
    : ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'];

  const handleResponse = (optionId: string, value: number) => {
    const newResponses = { ...responses, [optionId]: value };
    setResponses(newResponses);
    onAnswer(newResponses);
  };

  const getScaleColor = (value: number, max: number) => {
    const percentage = value / max;
    if (percentage <= 0.2) return 'text-destructive';
    if (percentage <= 0.4) return 'text-orange-500';
    if (percentage <= 0.6) return 'text-yellow-500';
    if (percentage <= 0.8) return 'text-secondary';
    return 'text-primary';
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-2">{question.title}</h3>
        {question.description && (
          <p className="text-muted-foreground">{question.description}</p>
        )}
      </div>

      <div className="space-y-6">
        {question.options?.map((option: any) => (
          <AssessmentCard key={option.id} className="p-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-1">
                  {option.statement || option.name}
                </h4>
                {option.dimension && (
                  <div className="text-sm text-primary font-medium">
                    {option.dimension} Alignment
                  </div>
                )}
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    {scaleLabels[0]}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {scaleLabels[scaleLabels.length - 1]}
                  </span>
                </div>

                <div className="flex justify-between items-center space-x-2">
                  {Array.from({ length: question.max || 5 }, (_, i) => i + 1).map((value) => (
                    <button
                      key={value}
                      onClick={() => handleResponse(option.id, value)}
                      className={`w-12 h-12 rounded-full border-2 transition-all duration-200 flex items-center justify-center font-medium ${
                        responses[option.id] === value
                          ? 'border-primary bg-primary text-primary-foreground shadow-medium'
                          : 'border-border hover:border-primary hover:bg-primary/10'
                      }`}
                    >
                      {value}
                    </button>
                  ))}
                </div>

                {responses[option.id] && (
                  <div className="text-center">
                    <span className={`text-sm font-medium ${getScaleColor(responses[option.id], question.max || 5)}`}>
                      {scaleLabels[responses[option.id] - 1]}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </AssessmentCard>
        ))}
      </div>
    </div>
  );
};

export default LikertScale;