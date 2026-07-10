import resume from './data/resume';
import StickyHeader from './components/StickyHeader';
import ContactHeader from './components/sections/ContactHeader';
import SectionBlock from './components/sections/SectionBlock';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Projects from './components/sections/Projects';
import Certifications from './components/sections/Certifications';

export default function App() {

  return (
    <div className="min-h-screen bg-gray-100">
      <StickyHeader contact={resume.contact} pdfUrl={resume.pdfUrl} />

      {/* Resume page — this is what gets printed */}
      <main className="py-8 px-4 print:p-0 print:py-0">
        <div
          ref={undefined}
          className="resume-page bg-white shadow-md max-w-[816px] mx-auto p-[0.75in] print:shadow-none print:max-w-full print:m-0"
        >
          {/* Contact / name header */}
          <ContactHeader contact={resume.contact} />

          {/* Summary */}
          {resume.summary && (
            <SectionBlock title="Professional Summary">
              <p className="text-xs text-gray-700 leading-relaxed">{resume.summary}</p>
            </SectionBlock>
          )}

          {/* Skills */}
          {resume.skills && resume.skills.length > 0 && (
            <Skills skills={resume.skills} />
          )}

          {/* Experience */}
          {resume.experience && resume.experience.length > 0 && (
            <Experience experience={resume.experience} />
          )}

          {/* Education */}
          {resume.education && resume.education.length > 0 && (
            <Education education={resume.education} />
          )}

          {/* Projects */}
          {resume.projects && resume.projects.length > 0 && (
            <Projects projects={resume.projects} />
          )}

          {/* Certifications */}
          {resume.certifications && resume.certifications.length > 0 && (
            <Certifications certifications={resume.certifications} />
          )}
        </div>
      </main>
    </div>
  );
}
