export type Skill = {
  name: string;
  /** simple-icons slug, or null when no brand icon exists */
  icon: string | null;
  /** brand hex color (adjusted for legibility on a dark background where needed) */
  color: string;
};

export const skills: Skill[] = [
  { name: 'TypeScript', icon: 'typescript', color: '#3178C6' },
  { name: 'JavaScript', icon: 'javascript', color: '#F7DF1E' },
  { name: 'PHP', icon: 'php', color: '#777BB4' },
  { name: 'Node.js', icon: 'nodedotjs', color: '#5FA04E' },
  { name: 'Fastify', icon: 'fastify', color: '#E5E7EB' },
  { name: 'Laravel', icon: 'laravel', color: '#FF2D20' },
  { name: 'React / React Native', icon: 'react', color: '#61DAFB' },
  { name: 'Angular', icon: 'angular', color: '#DD0031' },
  { name: 'Redux', icon: 'redux', color: '#764ABC' },
  { name: 'Zustand', icon: null, color: '#78716C' },
  { name: 'TanStack Query', icon: 'tanstack', color: '#FF4154' },
  { name: 'PostgreSQL', icon: 'postgresql', color: '#4169E1' },
  { name: 'MySQL', icon: 'mysql', color: '#4479A1' },
  { name: 'Docker', icon: 'docker', color: '#2496ED' },
  { name: 'Nginx', icon: 'nginx', color: '#009639' },
  { name: 'Linux', icon: 'linux', color: '#FCC624' },
  { name: 'AWS', icon: 'amazonaws', color: '#FF9900' },
  { name: 'GitHub', icon: 'github', color: '#2088FF' },
  { name: 'Salesforce Commerce Cloud', icon: 'salesforce', color: '#00A1E0' },
  { name: 'WordPress', icon: 'wordpress', color: '#21759B' },
  { name: 'Firebase', icon: 'firebase', color: '#FFCA28' },
  { name: 'GA4', icon: 'googleanalytics', color: '#E37400' },
  { name: 'GitHub Copilot', icon: 'githubcopilot', color: '#E5E7EB' },
  { name: 'Claude Code', icon: 'claude', color: '#D97757' }
];


