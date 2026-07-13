import type { ProjectItem } from "../../types/resume";
import SectionBlock from "./SectionBlock";

interface Props {
  projects: ProjectItem[];
}

export default function Projects({ projects }: Props) {
  return (
    <SectionBlock title="Side Projects">
      <div className="space-y-3">
        {projects.map((item, i) => (
          <div key={i} className="avoid-break">
            <div className="flex justify-between items-baseline flex-wrap gap-1">
              <div className="flex items-baseline gap-1.5">
                <span className="text-xs font-bold text-gray-900">
                  {item.name}
                </span>
                {item.tech && (
                  <span className="text-xs text-gray-500">
                    — {item.tech.join(", ")}
                  </span>
                )}
              </div>
              {item.url && (
                <a
                  href={`https://${item.url}`}
                  className="text-xs text-gray-500 hover:text-gray-900 transition-colors"
                >
                  {item.url}
                </a>
              )}
            </div>
            <p className="text-xs italic text-gray-700 mt-0.5">
              {item.description}
            </p>
            {item.bullets && item.bullets.length > 0 && (
              <ul className="mt-1 space-y-0.5 list-disc list-outside ml-4">
                {item.bullets.map((b, j) => (
                  <li key={j} className="text-xs text-gray-700 leading-relaxed">
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </SectionBlock>
  );
}
