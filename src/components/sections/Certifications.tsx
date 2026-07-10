import type { CertificationItem } from '../../types/resume';
import SectionBlock from './SectionBlock';

interface Props {
  certifications: CertificationItem[];
}

export default function Certifications({ certifications }: Props) {
  return (
    <SectionBlock title="Certifications">
      <div className="space-y-0.5">
        {certifications.map((cert, i) => (
          <div key={i} className="flex justify-between items-baseline text-xs">
            <div className="flex items-baseline gap-1.5">
              <span className="font-semibold text-gray-900">{cert.name}</span>
              <span className="text-gray-500">— {cert.issuer}</span>
            </div>
            {cert.date && <span className="text-gray-500 shrink-0">{cert.date}</span>}
          </div>
        ))}
      </div>
    </SectionBlock>
  );
}
