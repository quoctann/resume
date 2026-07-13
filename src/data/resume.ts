// ─────────────────────────────────────────────────────────────
// YOUR RESUME DATA
// Edit this file to update your résumé content.
// See src/types/resume.ts for all available fields.
// ─────────────────────────────────────────────────────────────

import type { ResumeData } from "../types/resume";

const resume: ResumeData = {
  contact: {
    name: "Trần Quốc Tấn",
    title: "Backend Developer",
    email: "contact.tantranquoc@gmail.com",
    phone: "+84 364 413 137",
    linkedin: "linkedin.com/in/tantranquoc/",
  },

  // Upload your PDF to a CDN (Cloudflare R2, S3, Blob, etc.) and paste the URL here.
  // Leave as undefined to hide the download button until you have a hosted file.
  pdfUrl: undefined,

  summary: [
    "I am a Backend Developer with almost 4 years of experience building web applications and distributed systems, primarily using Go. I have experience designing and developing REST, gRPC, and GraphQL APIs, microservices, and backend services with PostgreSQL, MySQL, MongoDB, and Kubernetes. Throughout my career, I have worked on projects in healthcare, insurance, e-commerce, and gaming platforms, integrating external and legacy systems, delivering maintainable backend features, and deploying applications through existing CI/CD pipelines. I also collaborate closely with clients, stakeholders, vendors, and cross-functional teams in Agile (Scrum) environments to translate business requirements into reliable technical solutions.",
  ],

  experience: [
    {
      company: "Mercury Studio",
      role: "Backend Developer - B2B Gaming Platform",
      startDate: "Dec 2025",
      endDate: "Jul 2026",
      description:
        "Developed backend capabilities for a B2B platform composed of Go microservices.",
      bullets: [
        "Built REST and gRPC APIs for configuring marketing banners consumed by web applications.",
        "Implemented scheduled invoice report delivery by collecting source data, rendering multi-page PDFs with Playwright-Go, uploading generated files to S3, and injecting report links into emails.",
        "Maintained Go microservices backed by PostgreSQL and MongoDB, investigating cross-service issues and troubleshooting defects.",
        "Applying AI to enhance development efficiency, including code generation, documentation, and testing.",
      ],
      tech: ["Go", "gRPC", "REST", "PostgreSQL", "MongoDB", "S3", "Kubernetes"],
    },
    {
      company: "FPT Software",
      role: "Backend Developer - B2B e-Commerce Platform (Pharmaceutical)",
      startDate: "2023",
      endDate: "2025",
      description:
        "Developed a B2B e-commerce platform that simplified pharmaceutical order processing and distribution on top of an existing SAP ERP system.",
      bullets: [
        "Engineered and maintained backend services for medication ordering, distribution logistics, promotional campaigns, product returns, and invoice generation.",
        "Developed REST and GraphQL APIs within a microservice architecture to support the frontend application and maintain clear service boundaries.",
        "Collaborated with business analysts and the product owner to translate requirements into technical solutions, supported by unit testing, debugging, and code reviews.",
      ],
      tech: [
        "Go",
        "GraphQL",
        "PostgreSQL",
        "Azure",
        "GCP",
        "Camunda",
        "Microservices",
      ],
      teamSize: 20,
      methodology: "Agile (Scrum)",
    },
    {
      company: "FPT Software",
      role: "Backend Developer - Digital Insurance e-Contracting Platform",
      startDate: "2023",
      endDate: "2023",
      description:
        "Developed a digital e-contracting platform covering package selection, applications, and electronic contract signing while integrating existing workflows with third-party services.",
      bullets: [
        "Engineered REST APIs with NestJS, TypeScript, and TypeORM for the e-contracting workflow from questionnaire submission through approval.",
        "Integrated legacy systems with third-party services to maintain data flow and continuity of existing processes.",
        "Implemented unit tests and managed MySQL schema migrations to support system reliability and iterative feature delivery.",
      ],
      tech: [
        "NestJS",
        "TypeScript",
        "TypeORM",
        "MySQL",
        "AWS S3",
        "REST",
        "Microservices",
      ],
      teamSize: 15,
      methodology: "Agile (Scrum)",
    },
    {
      company: "FPT Software",
      role: "Software Developer - MRI System",
      startDate: "2022",
      endDate: "2023",
      description:
        "Contributed to medical software supporting MRI operation, diagnostic workflows, image processing, and patient record management.",
      bullets: [
        "Developed software to support reliable operation of MRI medical devices.",
        "Performed diagnostics, troubleshooting, and maintenance to improve system reliability.",
        "Automated workflows by building tools and scripts with VBA and C#.",
      ],
      tech: ["C#", "VB.NET", "VBA"],
      teamSize: 15,
      methodology: "Waterfall",
    },
  ],

  projects: [
    {
      name: "K3s Homelab",
      description:
        "A personal Kubernetes environment for self-hosting and deploying applications.",
      bullets: [
        "Built and operated a K3s homelab to deploy containerized applications and gain hands-on experience managing self-hosted infrastructure.",
        "Containerized this resume with a multi-stage Docker build and unprivileged Nginx, then automated GHCR image publishing and GitOps manifest updates through GitHub Actions.",
      ],
      tech: [
        "K3s",
        "Kubernetes",
        "Docker",
        "GitHub Actions",
        "GHCR",
        "GitOps",
        "Nginx",
      ],
    },
  ],

  education: [
    {
      institution: "Ho Chi Minh City Open University",
      degree: "Bachelor of Information Technology",
      startDate: "2018",
      endDate: "2022",
    },
  ],

  certifications: [
    {
      name: "Professional Scrum Master I",
      issuer: "Scrum.org",
      date: "Sep 2023",
    },
  ],

  languages: [
    {
      name: "English",
      proficiency:
        "Good working proficiency; able to communicate with clients and team members in daily work",
    },
  ],
};

export default resume;
