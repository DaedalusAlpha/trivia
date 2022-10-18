export interface Question {
  [x: string]: any;
  category: string;
  id: string;
  correctAnswer: string;
  incorrectAnswers: string[];
  question: string;
  tags: string[];
  type: Type;
  difficulty: Difficulty;
  regions: any[];
}

export enum Difficulty {
  Easy = 'easy',
  Hard = 'hard',
  Medium = 'medium',
}

export enum Type {
  MultipleChoice = 'Multiple Choice',
}
