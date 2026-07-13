import type { ExperienceItem } from "../../types/resume";
import SectionBlock from "./SectionBlock";

interface Props {
  experience: ExperienceItem[];
}

export default function Experience({ experience }: Props) {
  return (
    <SectionBlock title="Work Experiences">
      <div className="space-y-3">
        {experience.map((item, i) => (
          <div key={i} className="avoid-break">
            <div className="flex flex-wrap justify-between items-baseline gap-x-3">
              <span className="text-xs font-bold text-gray-900">
                {item.role}
              </span>
              <span className="text-xs text-gray-600 shrink-0">
                {item.startDate} – {item.endDate}
              </span>
            </div>
            <div className="flex flex-wrap justify-between items-baseline gap-x-3">
              <span className="text-xs italic text-gray-700">
                {item.company}
              </span>
              {item.location && (
                <span className="text-xs text-gray-500 shrink-0">
                  {item.location}
                </span>
              )}
            </div>
            {item.description && (
              <p className="mt-1 text-xs text-gray-700 leading-relaxed">
                {item.description}
              </p>
            )}
            <ul className="mt-1 space-y-0.5 list-disc list-outside ml-4">
              {item.bullets.map((b, j) => (
                <li key={j} className="text-xs text-gray-700 leading-relaxed">
                  {b}
                </li>
              ))}
            </ul>
            {item.tech && item.tech.length > 0 && (
              <p className="mt-1 text-xs text-gray-700 leading-relaxed">
                <span className="font-semibold text-gray-900">
                  Tech stack:{" "}
                </span>
                {item.tech.join(", ")}.
              </p>
            )}
            {(item.teamSize || item.methodology) && (
              <p className="text-xs text-gray-600 leading-relaxed">
                {item.teamSize && `Team size: ${item.teamSize}`}
                {item.teamSize && item.methodology && " | "}
                {item.methodology && `Methodology: ${item.methodology}`}
              </p>
            )}
          </div>
        ))}
      </div>
    </SectionBlock>
  );
}
