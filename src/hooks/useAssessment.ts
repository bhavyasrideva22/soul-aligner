import { useState, useCallback } from 'react';
import { AssessmentState, AssessmentResponse } from '@/types/assessment';
import { assessmentSections } from '@/data/assessmentData';

export const useAssessment = () => {
  const [assessmentState, setAssessmentState] = useState<AssessmentState>({
    currentSection: 0,
    responses: [],
    isComplete: false
  });

  const addResponse = useCallback((response: Omit<AssessmentResponse, 'timestamp'>) => {
    setAssessmentState(prev => ({
      ...prev,
      responses: [
        ...prev.responses.filter(r => r.questionId !== response.questionId),
        { ...response, timestamp: new Date() }
      ]
    }));
  }, []);

  const nextSection = useCallback(() => {
    setAssessmentState(prev => {
      const nextSectionIndex = prev.currentSection + 1;
      const isComplete = nextSectionIndex >= assessmentSections.length;
      
      return {
        ...prev,
        currentSection: nextSectionIndex,
        isComplete
      };
    });
  }, []);

  const previousSection = useCallback(() => {
    setAssessmentState(prev => ({
      ...prev,
      currentSection: Math.max(0, prev.currentSection - 1)
    }));
  }, []);

  const goToSection = useCallback((sectionIndex: number) => {
    setAssessmentState(prev => ({
      ...prev,
      currentSection: Math.max(0, Math.min(sectionIndex, assessmentSections.length - 1))
    }));
  }, []);

  const getCurrentSection = useCallback(() => {
    return assessmentSections[assessmentState.currentSection];
  }, [assessmentState.currentSection]);

  const getProgress = useCallback(() => {
    return ((assessmentState.currentSection + 1) / assessmentSections.length) * 100;
  }, [assessmentState.currentSection]);

  const getSectionResponses = useCallback((sectionId: string) => {
    return assessmentState.responses.filter(r => r.sectionId === sectionId);
  }, [assessmentState.responses]);

  const getQuestionResponse = useCallback((questionId: string) => {
    return assessmentState.responses.find(r => r.questionId === questionId);
  }, [assessmentState.responses]);

  return {
    assessmentState,
    addResponse,
    nextSection,
    previousSection,
    goToSection,
    getCurrentSection,
    getProgress,
    getSectionResponses,
    getQuestionResponse
  };
};