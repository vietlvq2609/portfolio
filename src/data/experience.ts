export type ExperienceEntry = {
  company: string;
  role: string;
  start: string;
  end: string | 'Present';
  highlight: string;
};

// Most recent first
export const experience: ExperienceEntry[] = [
  {
    company: 'Thankslab Vietnam',
    role: 'Full-Stack Developer',
    start: 'Jul 2024',
    end: 'Sep 2026',
    highlight:
      'Japanese gov SaaS + HR platforms — refactoring, performance, and AI-assisted workflows.'
  },
  {
    company: 'Globee Software & Ecommerce',
    role: 'Salesforce Developer',
    start: 'Mar 2023',
    end: 'Dec 2023',
    highlight: 'Enterprise e-commerce for Samsonite on Salesforce Commerce Cloud.'
  }
];

export const education = {
  degree: 'B.Sc., IT for E-commerce',
  school: 'University of Information Technology, VNUHCM',
  period: '2020 – 2024'
};
