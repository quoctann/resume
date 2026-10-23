import type { ContactInfo } from "../types/resume";

interface Props {
  contact: ContactInfo;
  pdfUrl?: string;
  githubUrl?: string;
}

export default function StickyHeader({ contact, pdfUrl, githubUrl }: Props) {
  return (
    <header className="no-print sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
        {/* Identity */}
        <div className="min-w-0">
          <p className="text-sm font-semibold text-gray-900 truncate">
            {contact.name}
          </p>
          <p className="text-xs text-gray-500 truncate">{contact.title}</p>
        </div>

        {/* CTA buttons */}
        <div className="flex items-center gap-2 shrink-0">
          {contact.email && (
            <a
              href={`mailto:${contact.email}`}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-700 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
            >
              Contact Me
            </a>
          )}

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View my GitHub repository (opens in a new tab)"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-700 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                className="w-3.5 h-3.5 fill-current"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38l-.01-1.49c-2.23.48-2.7-.95-2.7-.95-.36-.92-.89-1.16-.89-1.16-.73-.5.06-.49.06-.49.8.06 1.22.82 1.22.82.71 1.21 1.87.86 2.33.66.07-.52.28-.86.51-1.06-1.78-.2-3.64-.89-3.64-3.96 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.65 7.65 0 0 1 4 0c1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.08-1.87 3.76-3.65 3.96.29.25.54.73.54 1.48l-.01 2.19c0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
              </svg>
              GitHub
            </a>
          )}

          {/* Print — opens browser print dialog */}
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-700 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
              />
            </svg>
            Print
          </button>

          {/* Download PDF — only shown when pdfUrl is configured */}
          {pdfUrl && (
            <a
              href={pdfUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-gray-900 rounded hover:bg-gray-700 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                />
              </svg>
              Download PDF
            </a>
          )}
        </div>
      </div>
    </header>
  );
}
