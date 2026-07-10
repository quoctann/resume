import type { ContactInfo } from '../../types/resume';

interface Props {
  contact: ContactInfo;
}

export default function ContactHeader({ contact }: Props) {
  const links = [
    contact.email && { label: contact.email, href: `mailto:${contact.email}` },
    contact.phone && { label: contact.phone, href: `tel:${contact.phone}` },
    contact.location && { label: contact.location, href: null },
    contact.linkedin && { label: contact.linkedin, href: `https://${contact.linkedin}` },
    contact.github && { label: contact.github, href: `https://${contact.github}` },
    contact.website && { label: contact.website, href: `https://${contact.website}` },
  ].filter(Boolean) as { label: string; href: string | null }[];

  return (
    <div className="text-center mb-5">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 uppercase mb-0.5">
        {contact.name}
      </h1>
      {contact.title && (
        <p className="text-sm font-medium text-gray-600 mb-2">{contact.title}</p>
      )}
      <div className="flex flex-wrap justify-center gap-x-3 gap-y-0.5 text-xs text-gray-600">
        {links.map((link, i) => (
          <span key={i} className="flex items-center gap-x-3">
            {i > 0 && <span className="text-gray-300 select-none">|</span>}
            {link.href ? (
              <a href={link.href} className="hover:text-gray-900 transition-colors">
                {link.label}
              </a>
            ) : (
              <span>{link.label}</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
