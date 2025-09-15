export interface AssessmentResponse {
  sectionId: string;
  questionId: string;
  value: any;
  timestamp: Date;
}

export interface AssessmentSection {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  estimatedTime: number;
}

export interface Question {
  id: string;
  type: 'paired-comparison' | 'ranking' | 'likert' | 'slider' | 'visual-sorting' | 'symbolic' | 'dilemma';
  title: string;
  description?: string;
  options?: any[];
  min?: number;
  max?: number;
  required?: boolean;
}

export interface CoreValue {
  id: string;
  name: string;
  description: string;
  category: string;
}

export interface PurposeArchetype {
  id: string;
  name: string;
  description: string;
  traits: string[];
  icon: string;
}

export interface AssessmentState {
  currentSection: number;
  responses: AssessmentResponse[];
  isComplete: boolean;
  results?: AssessmentResults;
}

export interface AssessmentResults {
  coreValues: {
    top5: CoreValue[];
    profile: string;
    conflicts: string[];
  };
  purposeArchetype: {
    primary: PurposeArchetype;
    secondary?: PurposeArchetype;
    alignmentScore: number;
  };
  fulfillmentFactors: {
    energizers: string[];
    drainers: string[];
    meaningDefinition: string;
  };
  pactScores: {
    purpose: number;
    authenticity: number;
    congruence: number;
    trajectory: number;
    overall: number;
  };
}