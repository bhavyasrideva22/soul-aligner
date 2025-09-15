import { useState, useEffect } from 'react';
import { Question, CoreValue } from '@/types/assessment';
import AssessmentCard from '@/components/AssessmentCard';
import { Button } from '@/components/ui/button';
import { GripVertical, Star } from 'lucide-react';

interface RankingQuestionProps {
  question: Question;
  currentValue?: string[];
  onAnswer: (value: string[]) => void;
}

const RankingQuestion = ({ question, currentValue, onAnswer }: RankingQuestionProps) => {
  const [selectedValues, setSelectedValues] = useState<CoreValue[]>([]);
  const [availableValues, setAvailableValues] = useState<CoreValue[]>(question.options || []);

  useEffect(() => {
    if (currentValue && currentValue.length > 0) {
      const selected = currentValue.map(id => 
        question.options?.find((option: CoreValue) => option.id === id)
      ).filter((value): value is CoreValue => value !== undefined);
      
      setSelectedValues(selected);
      setAvailableValues((question.options || []).filter(
        (option: CoreValue) => !currentValue.includes(option.id)
      ));
    }
  }, [currentValue, question.options]);

  const handleSelectValue = (value: CoreValue) => {
    if (selectedValues.length < 5) {
      const newSelected = [...selectedValues, value];
      const newAvailable = availableValues.filter(v => v.id !== value.id);
      
      setSelectedValues(newSelected);
      setAvailableValues(newAvailable);
      onAnswer(newSelected.map(v => v.id));
    }
  };

  const handleRemoveValue = (value: CoreValue) => {
    const newSelected = selectedValues.filter(v => v.id !== value.id);
    const newAvailable = [...availableValues, value].sort((a, b) => a.name.localeCompare(b.name));
    
    setSelectedValues(newSelected);
    setAvailableValues(newAvailable);
    onAnswer(newSelected.map(v => v.id));
  };

  const moveValue = (index: number, direction: 'up' | 'down') => {
    const newSelected = [...selectedValues];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    
    if (targetIndex >= 0 && targetIndex < newSelected.length) {
      [newSelected[index], newSelected[targetIndex]] = [newSelected[targetIndex], newSelected[index]];
      setSelectedValues(newSelected);
      onAnswer(newSelected.map(v => v.id));
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-2">{question.title}</h3>
        {question.description && (
          <p className="text-muted-foreground">{question.description}</p>
        )}
      </div>

      {selectedValues.length > 0 && (
        <div className="space-y-4">
          <h4 className="text-lg font-medium flex items-center">
            <Star className="w-5 h-5 text-accent mr-2" />
            Your Top {selectedValues.length} Values (in priority order)
          </h4>
          
          <div className="space-y-3">
            {selectedValues.map((value, index) => (
              <AssessmentCard key={value.id} className="flex items-center justify-between p-4">
                <div className="flex items-center space-x-4">
                  <div className="text-lg font-bold text-primary w-8 text-center">
                    {index + 1}
                  </div>
                  <div>
                    <h5 className="font-medium">{value.name}</h5>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="flex flex-col">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => moveValue(index, 'up')}
                      disabled={index === 0}
                      className="h-6 p-1"
                    >
                      ↑
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => moveValue(index, 'down')}
                      disabled={index === selectedValues.length - 1}
                      className="h-6 p-1"
                    >
                      ↓
                    </Button>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleRemoveValue(value)}
                    className="text-destructive hover:text-destructive"
                  >
                    Remove
                  </Button>
                </div>
              </AssessmentCard>
            ))}
          </div>
        </div>
      )}

      {selectedValues.length < 5 && (
        <div className="space-y-4">
          <h4 className="text-lg font-medium">
            Choose {5 - selectedValues.length} more value{5 - selectedValues.length !== 1 ? 's' : ''}:
          </h4>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {availableValues.map((value) => (
              <AssessmentCard
                key={value.id}
                interactive
                onClick={() => handleSelectValue(value)}
                className="p-4 cursor-pointer hover:border-primary"
              >
                <h5 className="font-medium mb-1">{value.name}</h5>
                <p className="text-sm text-muted-foreground">{value.description}</p>
                <div className="mt-2 text-xs text-primary font-medium">{value.category}</div>
              </AssessmentCard>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RankingQuestion;