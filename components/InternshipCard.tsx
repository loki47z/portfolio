interface InternshipCardProps {
  title: string;
  position: string;
  duration: string;
  responsibilities: string[];
}

export default function InternshipCard({
  title,
  position,
  duration,
  responsibilities,
}: InternshipCardProps) {
  return (
    <article className="h-full bg-light-surface-container-lowest border border-light-outline-variant rounded-lg p-gutter-lg flex flex-col gap-gutter-md">
      <header className="flex items-start justify-between gap-gutter-md">
        <div className="flex flex-col gap-gutter-xs">
          <span className="font-label text-label-sm text-light-primary uppercase">{title}</span>
          <h3 className="font-title text-title-lg text-light-on-surface">{position}</h3>
        </div>
        <span className="font-label text-label-sm text-light-on-surface-variant tabular-nums shrink-0">
          {duration}
        </span>
      </header>

      <ul className="flex flex-col gap-gutter-xs pt-gutter-sm border-t border-light-surface-container">
        {responsibilities.map((responsibility, index) => (
          <li
            key={index}
            className="flex items-start gap-gutter-sm font-body text-body-md text-light-on-surface-variant"
          >
            <span
              className="material-symbols-outlined text-light-primary text-[16px] mt-1 shrink-0"
              aria-hidden="true"
            >
              arrow_right
            </span>
            <span>{responsibility}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
