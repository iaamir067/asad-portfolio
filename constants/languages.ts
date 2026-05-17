export type Language = {
  id: string;
  name: string;
  proficiency: 'Native' | 'Fluent' | 'Conversational' | 'Beginner';
  level: number;
};

export const LANGUAGES: readonly Language[] = [
  { id: 'english', name: 'English', proficiency: 'Conversational', level: 70 },
  { id: 'urdu', name: 'Urdu', proficiency: 'Native', level: 100 },
  { id: 'pashto', name: 'Pashto', proficiency: 'Native', level: 100 },
] as const;
