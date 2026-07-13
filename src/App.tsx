import resume from "./data/resume";
import StickyHeader from "./components/StickyHeader";
import ContactHeader from "./components/sections/ContactHeader";
import SectionBlock from "./components/sections/SectionBlock";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import Certifications from "./components/sections/Certifications";
import Languages from "./components/sections/Languages";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <StickyHeader contact={resume.contact} pdfUrl={resume.pdfUrl} />

      {/* Resume page — this is what gets printed */}
      <main className="py-8 px-4 print:p-0 print:py-0">
        <div className="resume-page bg-white shadow-md max-w-[816px] mx-auto p-[0.75in] print:shadow-none print:max-w-full print:m-0">
          {/* Contact / name header */}
          <ContactHeader contact={resume.contact} />

          {/* Summary */}
          {resume.summary && (
            <SectionBlock title="About">
              <p className="text-xs text-gray-700 leading-relaxed">
                {resume.summary}
              </p>
            </SectionBlock>
          )}

          {/* Experience */}
          {resume.experience && resume.experience.length > 0 && (
            <Experience experience={resume.experience} />
          )}

          {/* Education */}
          {resume.education && resume.education.length > 0 && (
            <Education education={resume.education} />
          )}

          {/* Certifications */}
          {resume.certifications && resume.certifications.length > 0 && (
            <Certifications certifications={resume.certifications} />
          )}

          {/* Languages */}
          {resume.languages && resume.languages.length > 0 && (
            <Languages languages={resume.languages} />
          )}
        </div>
      </main>
    </div>
  );
}
