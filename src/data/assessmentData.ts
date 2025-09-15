import { AssessmentSection, CoreValue, PurposeArchetype } from "@/types/assessment";

export const coreValues: CoreValue[] = [
  { id: 'autonomy', name: 'Autonomy', description: 'Freedom to choose your own way', category: 'Independence' },
  { id: 'structure', name: 'Structure', description: 'Clear rules and stability', category: 'Security' },
  { id: 'impact', name: 'Impact', description: 'Making a meaningful difference', category: 'Purpose' },
  { id: 'creativity', name: 'Creativity', description: 'Expressing original ideas', category: 'Expression' },
  { id: 'growth', name: 'Growth', description: 'Continuous learning and development', category: 'Development' },
  { id: 'service', name: 'Service', description: 'Helping and supporting others', category: 'Purpose' },
  { id: 'status', name: 'Status', description: 'Recognition and prestige', category: 'Achievement' },
  { id: 'recognition', name: 'Recognition', description: 'Acknowledgment for contributions', category: 'Achievement' },
  { id: 'collaboration', name: 'Collaboration', description: 'Working together with others', category: 'Connection' },
  { id: 'independence', name: 'Independence', description: 'Self-reliance and autonomy', category: 'Independence' },
  { id: 'security', name: 'Security', description: 'Financial and job stability', category: 'Security' },
  { id: 'innovation', name: 'Innovation', description: 'Creating new solutions', category: 'Expression' }
];

export const purposeArchetypes: PurposeArchetype[] = [
  {
    id: 'builder',
    name: 'The Builder',
    description: 'You find fulfillment in creating something lasting and tangible',
    traits: ['Systematic', 'Results-oriented', 'Legacy-focused', 'Persistent'],
    icon: 'hammer'
  },
  {
    id: 'healer',
    name: 'The Healer',
    description: 'Helping others improve their lives is your deepest motivation',
    traits: ['Empathetic', 'Service-oriented', 'Nurturing', 'Compassionate'],
    icon: 'heart'
  },
  {
    id: 'seeker',
    name: 'The Seeker',
    description: 'You seek new experiences and learning above all else',
    traits: ['Curious', 'Adventurous', 'Growth-minded', 'Exploratory'],
    icon: 'compass'
  },
  {
    id: 'guide',
    name: 'The Guide',
    description: 'Sharing wisdom and guiding others energizes you',
    traits: ['Wise', 'Teaching-focused', 'Mentoring', 'Patient'],
    icon: 'lightbulb'
  },
  {
    id: 'creator',
    name: 'The Creator',
    description: 'Expressing yourself creatively is essential for your wellbeing',
    traits: ['Imaginative', 'Artistic', 'Original', 'Expressive'],
    icon: 'palette'
  },
  {
    id: 'justice-seeker',
    name: 'The Justice-Seeker',
    description: 'Fighting for fairness and justice drives your decisions',
    traits: ['Principled', 'Fair', 'Advocacy-minded', 'Courageous'],
    icon: 'scales'
  }
];

export const assessmentSections: AssessmentSection[] = [
  {
    id: 'core-values',
    title: 'Core Values Discovery',
    description: 'Identify and prioritize your fundamental values through paired comparisons and reflection exercises.',
    estimatedTime: 5,
    questions: [
      {
        id: 'values-ranking',
        type: 'ranking',
        title: 'Rank Your Top 5 Values',
        description: 'From the list below, select and rank your top 5 values that guide your work decisions.',
        options: coreValues,
        required: true
      },
      {
        id: 'autonomy-vs-structure',
        type: 'paired-comparison',
        title: 'Which value matters more to you right now?',
        options: [
          { id: 'autonomy', name: 'Autonomy', description: 'Freedom to choose your way' },
          { id: 'structure', name: 'Structure', description: 'Clear rules and stability' }
        ],
        required: true
      },
      {
        id: 'impact-vs-income',
        type: 'slider',
        title: 'Priority Balance',
        description: 'How important is making a social impact compared to earning a high income?',
        min: 0,
        max: 100,
        options: [
          { label: 'High Income', value: 0 },
          { label: 'Social Impact', value: 100 }
        ],
        required: true
      },
      {
        id: 'security-creativity-dilemma',
        type: 'dilemma',
        title: 'Career Choice Dilemma',
        description: 'Imagine you have to pick one:',
        options: [
          { id: 'security', name: 'High Security Role', description: 'Offers high security but limits creative expression' },
          { id: 'creativity', name: 'Creative Innovation Role', description: 'Encourages innovation but comes with financial risk' }
        ],
        required: true
      }
    ]
  },
  {
    id: 'purpose-archetype',
    title: 'Purpose Archetype Identification',
    description: 'Discover your dominant life purpose driver through psychographic statements and symbolic choices.',
    estimatedTime: 4,
    questions: [
      {
        id: 'archetype-statements',
        type: 'likert',
        title: 'Purpose Statement Agreement',
        description: 'Rate how much you agree with each statement (1 = Strongly Disagree, 5 = Strongly Agree)',
        options: [
          { id: 'builder', statement: 'I feel most fulfilled when I build something lasting and tangible.' },
          { id: 'healer', statement: 'Helping others heal or improve their lives is my deepest motivation.' },
          { id: 'seeker', statement: 'I seek new experiences and learning above all else.' },
          { id: 'guide', statement: 'Sharing wisdom and guiding others energizes me.' },
          { id: 'creator', statement: 'Expressing myself creatively is essential for my wellbeing.' },
          { id: 'justice-seeker', statement: 'Fighting for fairness and justice drives my decisions.' }
        ],
        min: 1,
        max: 5,
        required: true
      },
      {
        id: 'symbolic-alignment',
        type: 'symbolic',
        title: 'Symbolic Resonance',
        description: 'Choose the image that resonates most with your current life purpose:',
        options: [
          { id: 'sunrise', name: 'Rising Sun', description: 'New beginnings and potential', archetype: 'seeker' },
          { id: 'tree', name: 'Growing Tree', description: 'Growth and nurturing', archetype: 'healer' },
          { id: 'compass', name: 'Compass', description: 'Exploration and direction', archetype: 'guide' },
          { id: 'torch', name: 'Torch', description: 'Guidance and illumination', archetype: 'guide' },
          { id: 'paintbrush', name: 'Paintbrush', description: 'Creation and expression', archetype: 'creator' },
          { id: 'scales', name: 'Scales', description: 'Justice and balance', archetype: 'justice-seeker' }
        ],
        required: true
      }
    ]
  },
  {
    id: 'fulfillment-factors',
    title: 'Meaning & Fulfillment Factors',
    description: 'Assess what energizes or drains you at work, your ideal impact scale, and personal meaning definition.',
    estimatedTime: 6,
    questions: [
      {
        id: 'work-elements-sorting',
        type: 'visual-sorting',
        title: 'Energy-Giving Work Elements',
        description: 'Sort these work elements by how much energy they give you (most energizing at top):',
        options: [
          { id: 'team-collaboration', name: 'Team Collaboration' },
          { id: 'independent-problem-solving', name: 'Independent Problem-Solving' },
          { id: 'public-recognition', name: 'Public Recognition' },
          { id: 'quiet-focus-time', name: 'Quiet Focus Time' },
          { id: 'learning-new-skills', name: 'Learning New Skills' },
          { id: 'leading-change', name: 'Leading Change' }
        ],
        required: true
      },
      {
        id: 'work-activity-ratings',
        type: 'likert',
        title: 'Work Activity Energy Levels',
        description: 'Rate how often you feel energized vs drained by these activities (1 = Always Drained, 7 = Always Energized):',
        options: [
          { id: 'repetitive-tasks', statement: 'Repetitive tasks and routine work' },
          { id: 'social-interaction', statement: 'Social interaction and meetings' },
          { id: 'tight-deadlines', statement: 'Working under tight deadlines' },
          { id: 'creative-brainstorming', statement: 'Creative brainstorming sessions' },
          { id: 'detailed-analysis', statement: 'Detailed analysis and research' },
          { id: 'presenting-ideas', statement: 'Presenting ideas to others' }
        ],
        min: 1,
        max: 7,
        required: true
      }
    ]
  },
  {
    id: 'pact-framework',
    title: 'PACT Framework Assessment',
    description: 'Evaluate your Purpose, Authenticity, Congruence, and Trajectory alignment.',
    estimatedTime: 5,
    questions: [
      {
        id: 'pact-dimensions',
        type: 'likert',
        title: 'PACT Alignment Evaluation',
        description: 'Rate each statement based on your current work situation (1 = Strongly Disagree, 5 = Strongly Agree):',
        options: [
          { id: 'purpose', statement: 'My current/future job aligns with what truly motivates me.', dimension: 'Purpose' },
          { id: 'authenticity', statement: 'At work, I feel free to be my true self.', dimension: 'Authenticity' },
          { id: 'congruence', statement: 'My daily actions reflect my core values.', dimension: 'Congruence' },
          { id: 'trajectory', statement: 'My current career path supports my long-term life goals.', dimension: 'Trajectory' }
        ],
        min: 1,
        max: 5,
        required: true
      }
    ]
  }
];