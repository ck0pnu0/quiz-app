export type Theme = 'light' | 'dark';

export interface Quizzes {
    title: string;
    icon: string;
    questions?: Questions[];
}

export interface Questions {
    answer: string;
    options: string[];
    question: string;
}