export type ExperienceEntry = {
  company: string;
  role: string;
  context?: string;
  start: string;
  end: string | 'Present';
  bullets: string[];
};

// Most recent first
export const experience: ExperienceEntry[] = [
  {
    company: 'Thankslab Vietnam',
    role: 'Full-Stack Developer',
    context: 'Japanese company with an office in Vietnam',
    start: 'Jul 2024',
    end: 'Sep 2026',
    bullets: [
      'Led end-to-end design and development of Thankslab Portal, replacing a third-party ERP/SaaS (knowbe.jp) for welfare and disability-support facilities in Japan — working directly with Japanese clients via IT coordinators in a SCRUM process.',
      'Built FitTrack, a multi-tenant HR SaaS solution, from scratch: architecture, permission management, and full-stack implementation with Laravel and React.',
      'Configured Docker environments and managed Linux server deployments (EC2, VPS) via SSH, adopting AI-assisted workflows (GitHub Copilot, Claude Code) to ship faster.'
    ]
  },
  {
    company: 'Freelance Software Developer',
    role: 'Full-Stack Developer',
    start: 'Jan 2024',
    end: 'Jun 2024',
    bullets: [
      'Bamboship Courier (logistics app): implemented push notifications with Firebase and new CRUD features using React Native and Laravel.',
      'Law Office SaaS MVP (Serbia-based client): built the Angular frontend for managing legal cases and meeting scheduling.',
      'ngaydautien.vn & Hypertour: built a WordPress text-to-speech plugin with GA4 tracking, and a React + Fastify mini-game for a live event workshop.'
    ]
  },
  {
    company: 'Globee Software & Ecommerce',
    role: 'Salesforce Developer',
    context: '3-month internship followed by 7 months full-time',
    start: 'Mar 2023',
    end: 'Dec 2023',
    bullets: [
      'Built landing pages for enterprise e-commerce clients (Samsonite and affiliated brands) on Salesforce Commerce Cloud using HTML, CSS, and JavaScript.',
      'Integrated third-party services, including GA4 analytics tracking, across storefront workflows.',
      'Worked within strict international-client processes, gaining hands-on experience with the enterprise Salesforce platform.'
    ]
  }
];

export const education = {
  degree: 'B.Sc., IT for E-commerce',
  school: 'University of Information Technology, VNUHCM',
  period: '2020 – 2024'
};

