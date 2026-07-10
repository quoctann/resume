import type { ExperienceItem } from '../../types/resume';
import SectionBlock from './SectionBlock';

interface Props {
  experience: ExperienceItem[];
}

export default function Experience({ experience }: Props) {
  return (
    <SectionBlock title="Experience">
      <div className="space-y-3">
        {experience.map((item, i) => (
          <div key={i} className="avoid-break">
            {/* Row 1: Company + dates */}
            <div className="flex justify-between items-baseline">
              <span className="text-xs font-bold text-gray-900">{item.company}</span>
              <span className="text-xs text-gray-600 shrink-0">
                {item.startDate} – {item.endDate}
              </span>
            </div>
            {/* Row 2: Role + location */}
            <div className="flex justify-between items-baseline">
              <span className="text-xs italic text-gray-700">{item.role}</span>
              {item.location && (
                <span className="text-xs text-gray-500 shrink-0">{item.location}</span>
              )}
            </div>
            {/* Bullets */}
            <ul className="mt-1 space-y-0.5 list-disc list-outside ml-4">
              {item.bullets.map((b, j) => (
                <li key={j} className="text-xs text-gray-700 leading-relaxed">
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionBlock>
  );
}
