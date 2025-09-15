import { useState } from 'react';
import { Question } from '@/types/assessment';
import AssessmentCard from '@/components/AssessmentCard';
import { 
  Sunrise, 
  TreePine, 
  Compass, 
  Flame, 
  Palette, 
  Scale 
} from 'lucide-react';

interface SymbolicChoiceProps {
  question: Question;
  currentValue?: string;
  onAnswer: (value: string) => void;
}

const SymbolicChoice = ({ question, currentValue, onAnswer }: SymbolicChoiceProps) => {
  const [selectedSymbol, setSelectedSymbol] = useState(currentValue);

  const symbolIcons: Record<string, any> = {
    sunrise: Sunrise,
    tree: TreePine,
    compass: Compass,
    torch: Flame,
    paintbrush: Palette,
    scales: Scale,
  };

  const handleSelect = (symbolId: string) => {
    setSelectedSymbol(symbolId);
    onAnswer(symbolId);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-2">{question.title}</h3>
        {question.description && (
          <p className="text-muted-foreground">{question.description}</p>
        )}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {question.options?.map((option: any) => {
          const IconComponent = symbolIcons[option.id] || Compass;
          
          return (
            <AssessmentCard
              key={option.id}
              interactive
              selected={selectedSymbol === option.id}
              onClick={() => handleSelect(option.id)}
              className="p-6 text-center cursor-pointer hover:scale-105 transition-all duration-200"
            >
              <div className="space-y-4">
                <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center ${
                  selectedSymbol === option.id 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">{option.name}</h4>
                  <p className="text-sm text-muted-foreground">{option.description}</p>
                </div>

                {selectedSymbol === option.id && (
                  <div className="text-primary text-sm font-medium">
                    ✓ Selected
                  </div>
                )}
              </div>
            </AssessmentCard>
          );
        })}
      </div>

      <div className="text-center text-sm text-muted-foreground">
        Choose the symbol that most strongly resonates with your sense of purpose
      </div>
    </div>
  );
};

export default SymbolicChoice;