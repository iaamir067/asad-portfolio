export type Education = {
  id: string;
  degree: string;
  field: string;
  institution: string;
  institutionShort: string;
  location: string;
  startYear: string;
  endYear: string;
  duration: string;
  current: boolean;
  highlights: readonly string[];
};

export const EDUCATION: readonly Education[] = [
  {
    id: 'kust',
    degree: 'BS Software Engineering',
    field: 'Software Engineering',
    institution: 'Kohat University of Science and Technology',
    institutionShort: 'KUST',
    location: 'Kohat, Pakistan',
    startYear: '2021',
    endYear: '2025',
    duration: '2021 – 2025',
    current: false,
    highlights: [
      'Bachelor of Science in Software Engineering',
      'Foundation in algorithms, data structures, and software design',
      'Transitioned from C++ coursework to Flutter and Dart for production work',
    ],
  },
] as const;
