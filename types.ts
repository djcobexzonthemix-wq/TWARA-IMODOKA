export enum LawCategoryId {
  BEHAVIOR = 'gutwara',
  SPEED = 'umuvuduko',
  POSITIONING = 'umwanya',
  OVERTAKING = 'kunyura',
  PRIORITY = 'ibirengezwa',
  PENALTIES = 'ibihano',
}

// FIX: Add CategoryId enum for traffic signs.
export enum CategoryId {
  PROHIBITORY = 'prohibitory',
  MANDATORY = 'mandatory',
  WARNING = 'warning',
  INFORMATIONAL = 'informational',
  PRIORITY = 'priority',
  DIRECTIONAL = 'directional',
}

export interface LawCategory {
    id: LawCategoryId;
    name: string;
    icon: string;
}

// FIX: Add Category interface for traffic sign categories.
export interface Category {
  id: CategoryId;
  name: string;
  icon: string;
}

// FIX: Add Sign interface for traffic signs.
export interface Sign {
  id: string;
  description: string;
  image: string;
  category: CategoryId;
}

export interface Law {
    id: string;
    categoryId: LawCategoryId;
    title: string;
    content: string;
}

export interface Question {
  item: Law;
  questionText: string;
  options: string[];
  correctAnswer: string;
}

export interface UserAnswer {
  question: Question;
  selectedAnswer: string;
  isCorrect: boolean;
}

export interface QuizResult {
  score: number;
  total: number;
  answers: UserAnswer[];
  date: string;
}

export type Page = 
  | 'home' 
  | 'lawCategories'
  | 'lawCategoryDetail'
  | 'quiz' 
  | 'results';

// FIX: Add QuizType for selecting quiz type.
export type QuizType = 'signs' | 'laws';
