import { useState, useEffect } from 'react';
import { Question } from '@/types/assessment';
import AssessmentCard from '@/components/AssessmentCard';
import { Slider } from '@/components/ui/slider';

interface SliderQuestionProps {
  question: Question;
  currentValue?: number;
  onAnswer: (value: number) => void;
}

const SliderQuestion = ({ question, currentValue, onAnswer }: SliderQuestionProps) => {
  const [value, setValue] = useState<number[]>([currentValue || 50]);

  const handleValueChange = (newValue: number[]) => {
    setValue(newValue);
    onAnswer(newValue[0]);
  };

  const leftOption = question.options?.[0];
  const rightOption = question.options?.[1];

  const getValueLabel = (val: number) => {
    if (val < 25) return `Strongly ${leftOption?.label}`;
    if (val < 45) return `Moderately ${leftOption?.label}`;
    if (val < 55) return 'Balanced';
    if (val < 75) return `Moderately ${rightOption?.label}`;
    return `Strongly ${rightOption?.label}`;
  };

  const getValueColor = (val: number) => {
    if (val < 25 || val > 75) return 'text-primary font-semibold';
    if (val < 40 || val > 60) return 'text-secondary font-medium';
    return 'text-muted-foreground';
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-2">{question.title}</h3>
        {question.description && (
          <p className="text-muted-foreground">{question.description}</p>
        )}
      </div>

      <AssessmentCard className="p-8">
        <div className="space-y-8">
          <div className="flex justify-between items-center text-sm">
            <div className="text-center">
              <div className="font-medium">{leftOption?.label}</div>
              <div className="text-muted-foreground text-xs mt-1">0</div>
            </div>
            <div className="text-center">
              <div className="font-medium">{rightOption?.label}</div>
              <div className="text-muted-foreground text-xs mt-1">100</div>
            </div>
          </div>

          <div className="px-4">
            <Slider
              value={value}
              onValueChange={handleValueChange}
              max={100}
              min={0}
              step={1}
              className="w-full"
            />
          </div>

          <div className="text-center space-y-2">
            <div className="text-2xl font-bold text-primary">
              {value[0]}
            </div>
            <div className={`text-lg ${getValueColor(value[0])}`}>
              {getValueLabel(value[0])}
            </div>
          </div>

          <div className="bg-muted/50 rounded-lg p-4">
            <div className="text-sm text-muted-foreground text-center">
              Move the slider to indicate your preference. A value of 50 means both are equally important to you.
            </div>
          </div>
        </div>
      </AssessmentCard>
    </div>
  );
};

export default SliderQuestion;