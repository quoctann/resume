// ─────────────────────────────────────────────────────────────
// YOUR RESUME DATA
// Edit this file to update your résumé content.
// See src/types/resume.ts for all available fields.
// ─────────────────────────────────────────────────────────────

import type { ResumeData } from '../types/resume';

const resume: ResumeData = {
  contact: {
    name: 'Your Full Name',
    title: 'Software Engineer',
    email: 'your.email@example.com',
    phone: '+1 (555) 000-0000',
    location: 'City, State',
    linkedin: 'linkedin.com/in/yourprofile',
    github: 'github.com/yourusername',
    // website: 'yourwebsite.com',
  },

  // Upload your PDF to a CDN (Cloudflare R2, S3, Blob, etc.) and paste the URL here.
  // Leave as undefined to hide the download button until you have a hosted file.
  pdfUrl: undefined,

  summary:
    'Results-driven Software Engineer with X years of experience building scalable, ' +
    'cloud-native applications. Passionate about clean architecture, developer experience, ' +
    'and shipping reliable software. Seeking a role where I can contribute to impactful products.',

  skills: [
    {
      category: 'Languages',
      items: ['TypeScript', 'Go', 'Python', 'SQL'],
    },
    {
      category: 'Frameworks & Libraries',
      items: ['React', 'Node.js', 'FastAPI', 'gRPC'],
    },
    {
      category: 'Infrastructure & Tools',
      items: ['Kubernetes', 'Docker', 'GitHub Actions', 'PostgreSQL', 'Redis'],
    },
  ],

  experience: [
    {
      company: 'Acme Corp',
      role: 'Senior Software Engineer',
      location: 'San Francisco, CA',
      startDate: 'Jan 2022',
      endDate: 'Present',
      bullets: [
        'Led migration of monolithic service to microservices, reducing p99 latency by 40%.',
        'Designed and implemented CI/CD pipeline using GitHub Actions and ArgoCD, cutting deploy time from 45 min to 8 min.',
        'Mentored 3 junior engineers through bi-weekly code reviews and pair programming sessions.',
      ],
    },
    {
      company: 'Startup Inc.',
      role: 'Software Engineer',
      location: 'Remote',
      startDate: 'Jun 2019',
      endDate: 'Dec 2021',
      bullets: [
        'Built real-time data pipeline ingesting 50k events/sec using Kafka and Go consumers.',
        'Developed React dashboard that improved operational visibility for support team.',
        'Reduced infrastructure costs by 30% by rightsizing EC2 instances and introducing autoscaling.',
      ],
    },
  ],

  education: [
    {
      institution: 'State University',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      location: 'City, State',
      startDate: 'Sep 2015',
      endDate: 'May 2019',
      notes: ['GPA: 3.8 / 4.0', 'Dean\'s List — All Semesters'],
    },
  ],

  projects: [
    {
      name: 'OpenTelemetry Exporter',
      url: 'github.com/yourusername/otel-exporter',
      description: 'A lightweight OpenTelemetry exporter for custom metrics backends.',
      tech: ['Go', 'OpenTelemetry', 'Prometheus'],
      bullets: [
        'Published as open-source; 200+ GitHub stars.',
        'Supports pluggable backends via interface-based design.',
      ],
    },
  ],

  certifications: [
    {
      name: 'Certified Kubernetes Administrator (CKA)',
      issuer: 'CNCF',
      date: 'Mar 2023',
    },
    {
      name: 'AWS Solutions Architect – Associate',
      issuer: 'Amazon Web Services',
      date: 'Nov 2021',
    },
  ],
};

export default resume;
