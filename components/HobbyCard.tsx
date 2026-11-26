import Image from "next/image";

interface HobbyCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
}

export default function HobbyCard({
  title,
  category,
  description,
  image,
}: HobbyCardProps) {
  return (
    <article className="h-full bg-light-surface-container-lowest border border-light-outline-variant rounded-lg p-gutter-lg flex flex-col gap-gutter-md hover:border-light-primary transition-colors duration-state-change ease-state-change">
      <div className="w-full h-40 rounded bg-light-surface-container-low border border-light-surface-container flex items-center justify-center p-gutter-md">
        <Image
          src={image}
          alt={`${title} icon`}
          width={140}
          height={140}
          className="max-h-28 w-auto object-contain"
        />
      </div>

      <header className="flex flex-col gap-gutter-xs">
        <span className="font-label text-label-sm text-light-primary">{category}</span>
        <h2 className="font-title text-title-lg text-light-on-surface">{title}</h2>
      </header>

      <p className="font-body text-body-md text-light-on-surface-variant text-pretty">
        {description}
      </p>
    </article>
  );
}
