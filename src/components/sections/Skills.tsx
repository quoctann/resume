import type { SkillGroup } from '../../types/resume';
import SectionBlock from './SectionBlock';

interface Props {
  skills: SkillGroup[];
}

export default function Skills({ skills }: Props) {
  return (
    <SectionBlock title="Technical Skills">
      <div className="space-y-0.5">
        {skills.map((group) => (
          <div key={group.category} className="text-xs leading-relaxed">
            <span className="font-semibold text-gray-900">{group.category}: </span>
            <span className="text-gray-700">{group.items.join(', ')}</span>
          </div>
        ))}
      </div>
    </SectionBlock>
  );
}
