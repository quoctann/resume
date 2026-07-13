import type { LanguageItem } from "../../types/resume";
import SectionBlock from "./SectionBlock";

interface Props {
  languages: LanguageItem[];
}

export default function Languages({ languages }: Props) {
  return (
    <SectionBlock title="Languages">
      <div className="space-y-0.5">
        {languages.map((language) => (
          <div key={language.name} className="text-xs leading-relaxed">
            <span className="font-semibold text-gray-900">{language.name}</span>
            {language.proficiency && (
              <span className="text-gray-700"> - {language.proficiency}</span>
            )}
          </div>
        ))}
      </div>
    </SectionBlock>
  );
}
