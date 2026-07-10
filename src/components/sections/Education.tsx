import type { EducationItem } from '../../types/resume';
import SectionBlock from './SectionBlock';

interface Props {
  education: EducationItem[];
}

export default function Education({ education }: Props) {
  return (
    <SectionBlock title="Education">
      <div className="space-y-3">
        {education.map((item, i) => (
          <div key={i} className="avoid-break">
            <div className="flex justify-between items-baseline">
              <span className="text-xs font-bold text-gray-900">{item.institution}</span>
              {(item.startDate || item.endDate) && (
                <span className="text-xs text-gray-600 shrink-0">
                  {item.startDate ? `${item.startDate} – ` : ''}{item.endDate}
                </span>
              )}
            </div>
            <div className="flex justify-between items-baseline">
              <span className="text-xs italic text-gray-700">
                {item.degree}{item.field ? `, ${item.field}` : ''}
              </span>
              {item.location && (
                <span className="text-xs text-gray-500 shrink-0">{item.location}</span>
              )}
            </div>
            {item.notes && item.notes.length > 0 && (
              <ul className="mt-1 space-y-0.5 list-disc list-outside ml-4">
                {item.notes.map((note, j) => (
                  <li key={j} className="text-xs text-gray-700">{note}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </SectionBlock>
  );
}
