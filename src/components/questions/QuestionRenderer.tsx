import { Question } from '@/types/assessment';
import PairedComparison from './PairedComparison';
import RankingQuestion from './RankingQuestion';
import LikertScale from './LikertScale';
import SliderQuestion from './SliderQuestion';
import SymbolicChoice from './SymbolicChoice';
import VisualSorting from './VisualSorting';
import AssessmentCard from '../AssessmentCard';

interface QuestionRendererProps {
  question: Question;
  currentValue?: any;
  onAnswer: (value: any) => void;
}

const QuestionRenderer = ({ question, currentValue, onAnswer }: QuestionRendererProps) => {
  switch (question.type) {
    case 'paired-comparison':
      return (
        <PairedComparison
          question={question}
          currentValue={currentValue}
          onAnswer={onAnswer}
        />
      );

    case 'ranking':
      return (
        <RankingQuestion
          question={question}
          currentValue={currentValue}
          onAnswer={onAnswer}
        />
      );

    case 'likert':
      return (
        <LikertScale
          question={question}
          currentValue={currentValue}
          onAnswer={onAnswer}
        />
      );

    case 'slider':
      return (
        <SliderQuestion
          question={question}
          currentValue={currentValue}
          onAnswer={onAnswer}
        />
      );

    case 'symbolic':
      return (
        <SymbolicChoice
          question={question}
          currentValue={currentValue}
          onAnswer={onAnswer}
        />
      );

    case 'visual-sorting':
      return (
        <VisualSorting
          question={question}
          currentValue={currentValue}
          onAnswer={onAnswer}
        />
      );

    case 'dilemma':
      return (
        <PairedComparison
          question={question}
          currentValue={currentValue}
          onAnswer={onAnswer}
        />
      );

    default:
      return (
        <AssessmentCard className="p-8 text-center">
          <div className="text-muted-foreground">
            Question type "{question.type}" not implemented yet.
          </div>
        </AssessmentCard>
      );
  }
};

export default QuestionRenderer;