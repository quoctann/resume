// ─────────────────────────────────────────────────────────────
// Resume type definitions
// Add new section types here and extend ResumeData below.
// ─────────────────────────────────────────────────────────────

export interface ContactInfo {
  name: string;
  title: string;
  email: string;
  phone?: string;
  location?: string;
  linkedin?: string;
  github?: string;
  website?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  location?: string;
  startDate: string; // e.g. "Jan 2022"
  endDate: string; // e.g. "Present"
  description?: string;
  bullets: string[];
  tech?: string[];
  teamSize?: number;
  methodology?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  field?: string;
  location?: string;
  startDate?: string;
  endDate: string;
  notes?: string[]; // GPA, honors, relevant coursework, etc.
}

export interface ProjectItem {
  name: string;
  url?: string;
  description: string;
  bullets?: string[];
  tech?: string[];
}

export interface CertificationItem {
  name: string;
  issuer: string;
  date?: string;
  url?: string;
}

export interface LanguageItem {
  name: string;
  proficiency?: string;
}

// ─────────────────────────────────────────────────────────────
// Top-level resume data shape.
// All sections except `contact` are optional — if omitted,
// the corresponding section simply won't render.
// ─────────────────────────────────────────────────────────────
export interface ResumeData {
  contact: ContactInfo;
  /**
   * Public URL of the hosted PDF (e.g. Cloudflare R2, S3, Blob storage).
   * When set, the "Download PDF" button in the header links directly to it.
   * Leave undefined to hide the download button.
   */
  pdfUrl?: string;
  summary?: string;
  skills?: SkillGroup[];
  experience?: ExperienceItem[];
  education?: EducationItem[];
  projects?: ProjectItem[];
  certifications?: CertificationItem[];
  languages?: LanguageItem[];
}
