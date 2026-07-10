interface Props {
  title: string;
  children: React.ReactNode;
}

export default function SectionBlock({ title, children }: Props) {
  return (
    <section className="mb-4 avoid-break">
      {/* Section heading with Harvard-style rule */}
      <div className="flex items-center gap-2 mb-1.5">
        <h2 className="text-xs font-bold uppercase tracking-widest text-gray-900 whitespace-nowrap">
          {title}
        </h2>
        <div className="flex-1 border-b border-gray-900" />
      </div>
      {children}
    </section>
  );
}
