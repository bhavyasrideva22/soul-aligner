import { useState, useEffect } from 'react';
import { Question } from '@/types/assessment';
import AssessmentCard from '@/components/AssessmentCard';
import { Button } from '@/components/ui/button';
import { GripVertical, ChevronUp, ChevronDown } from 'lucide-react';

interface VisualSortingProps {
  question: Question;
  currentValue?: string[];
  onAnswer: (value: string[]) => void;
}

const VisualSorting = ({ question, currentValue, onAnswer }: VisualSortingProps) => {
  const [sortedItems, setSortedItems] = useState<any[]>([]);

  useEffect(() => {
    if (currentValue && currentValue.length > 0) {
      // Restore previous order
      const ordered = currentValue.map(id => 
        question.options?.find((option: any) => option.id === id)
      ).filter(Boolean);
      setSortedItems(ordered);
    } else {
      // Initialize with random order
      const shuffled = [...(question.options || [])].sort(() => Math.random() - 0.5);
      setSortedItems(shuffled);
      onAnswer(shuffled.map(item => item.id));
    }
  }, [currentValue, question.options]);

  const moveItem = (index: number, direction: 'up' | 'down') => {
    const newItems = [...sortedItems];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    
    if (targetIndex >= 0 && targetIndex < newItems.length) {
      [newItems[index], newItems[targetIndex]] = [newItems[targetIndex], newItems[index]];
      setSortedItems(newItems);
      onAnswer(newItems.map(item => item.id));
    }
  };

  const getEnergyColor = (index: number, total: number) => {
    const percentage = (total - index) / total;
    if (percentage > 0.8) return 'border-primary bg-primary/10';
    if (percentage > 0.6) return 'border-secondary bg-secondary/10';
    if (percentage > 0.4) return 'border-accent bg-accent/10';
    if (percentage > 0.2) return 'border-orange-500 bg-orange-50';
    return 'border-destructive bg-destructive/10';
  };

  const getEnergyLabel = (index: number, total: number) => {
    const percentage = (total - index) / total;
    if (percentage > 0.8) return 'High Energy';
    if (percentage > 0.6) return 'Medium-High Energy';
    if (percentage > 0.4) return 'Medium Energy';
    if (percentage > 0.2) return 'Low-Medium Energy';
    return 'Low Energy';
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-2">{question.title}</h3>
        {question.description && (
          <p className="text-muted-foreground">{question.description}</p>
        )}
      </div>

      <div className="space-y-3">
        {sortedItems.map((item, index) => (
          <AssessmentCard 
            key={item.id} 
            className={`p-4 ${getEnergyColor(index, sortedItems.length)}`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="text-center min-w-[60px]">
                  <div className="text-lg font-bold text-primary">
                    #{index + 1}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {getEnergyLabel(index, sortedItems.length)}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium">{item.name}</h4>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => moveItem(index, 'up')}
                  disabled={index === 0}
                  className="p-2"
                >
                  <ChevronUp className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => moveItem(index, 'down')}
                  disabled={index === sortedItems.length - 1}
                  className="p-2"
                >
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </AssessmentCard>
        ))}
      </div>

      <div className="bg-muted/50 rounded-lg p-4">
        <div className="text-sm text-muted-foreground text-center">
          <p className="mb-2">
            <strong>Instructions:</strong> Arrange these work elements from most energizing (top) to least energizing (bottom).
          </p>
          <p>Use the arrow buttons to move items up or down in your priority list.</p>
        </div>
      </div>
    </div>
  );
};

export default VisualSorting;