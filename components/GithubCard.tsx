import Link from "next/link";

interface GithubCardProps {
  title: string;
  subtitle?: string;
  icon?: string;
  link: string;
  description: string;
  tags?: string[];
}

export default function Card({
  title,
  subtitle = "GitHub Repository",
  icon = "folder_code",
  link,
  description,
  tags = [],
}: GithubCardProps) {
  return (
    <article className="h-full bg-light-surface-container-lowest border border-light-outline-variant rounded-lg p-gutter-lg flex flex-col justify-between gap-gutter-lg hover:border-light-primary transition-colors duration-state-change ease-state-change">
      <div className="flex flex-col gap-gutter-md">
        <header className="flex items-start justify-between gap-gutter-md">
          <div className="flex flex-col gap-gutter-xs">
            <h2 className="font-title text-title-lg text-light-on-surface">{title}</h2>
            <p className="font-label text-label-sm text-light-on-surface-variant">{subtitle}</p>
          </div>
          <span
            className="material-symbols-outlined text-light-primary text-[22px]"
            aria-hidden="true"
          >
            {icon}
          </span>
        </header>

        <p className="font-body text-body-md text-light-on-surface-variant text-pretty">
          {description}
        </p>
      </div>

      <footer className="pt-gutter-md border-t border-light-surface-container flex items-center justify-between gap-gutter-md">
        <div className="flex flex-wrap items-center gap-gutter-xs">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full bg-light-surface-container text-light-on-surface font-label text-label-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-gutter-xs font-body text-label-lg text-light-primary hover:underline shrink-0"
        >
          <span>View Project</span>
          <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
            arrow_forward
          </span>
        </Link>
      </footer>
    </article>
  );
}
