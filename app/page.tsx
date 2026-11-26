import Image from "next/image";
import Link from "next/link";
import academicsData from "@/data/academics.json";

const featuredProjects = [
  {
    title: "Anime Tracker",
    subtitle: "Full-Stack Web Application",
    icon: "movie",
    description:
      "Helps you organize watched and unwatched anime series with episode progress tracking and personal watchlist filtering.",
    tags: ["React", "Node.js", "MongoDB"],
    href: "https://github.com/loki47z/Anime-Tracker",
  },
  {
    title: "Memory Game",
    subtitle: "Interactive Browser Game",
    icon: "sports_motorsports",
    description:
      "A Formula 1-themed JavaScript memory challenge built to test pattern recall, move efficiency, and reaction speed.",
    tags: ["JavaScript", "HTML5", "CSS3"],
    href: "https://github.com/loki47z/Memory-Game",
  },
];

const toolkitSkills = [
  "JavaScript",
  "React",
  "Node.js",
  "MongoDB",
  "C++",
  "MySQL",
  "Cybersecurity",
  "Networking",
];

export default function Home() {
  const primaryDegree = academicsData.education.find((item) => item.isPrimary);
  const secondaryEducation = academicsData.education.filter((item) => !item.isPrimary);

  return (
    <>
      {/* Hero Section */}
      <section className="max-w-[1200px] mx-auto px-gutter-lg md:px-page-margin py-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl items-center">
          <div className="lg:col-span-7 flex flex-col items-start gap-gutter-lg">
            <span className="inline-flex items-center gap-gutter-sm px-3.5 py-1.5 rounded-full bg-light-surface-container-low text-light-primary border border-light-outline-variant">
              <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                school
              </span>
              <span className="font-label text-label-sm">BSc IT Student · Lilongwe, Malawi</span>
            </span>

            <div className="flex flex-col gap-gutter-sm">
              <h1 className="font-display text-display-lg-mobile md:text-display-lg text-light-on-surface text-balance">
                Thomas J. Manong&apos;a
              </h1>
              <p className="font-headline text-headline-md text-light-primary">
                Information Technology Student &amp; Software Engineer
              </p>
            </div>

            <p className="font-body text-body-lg text-light-on-surface-variant text-pretty max-w-prose">
              I build dynamic web applications and explore software engineering and cybersecurity.
              Working primarily with JavaScript, React, Node.js, and MongoDB, I focus on combining
              reliable backend architecture with clean, intentional interfaces.
            </p>

            <div className="flex flex-wrap items-center gap-gutter-md">
              <a
                href="/projects"
                className="inline-flex items-center justify-center gap-gutter-sm px-gutter-lg py-3 rounded bg-light-primary text-light-on-primary hover:bg-light-primary-container focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-primary transition-colors duration-state-change ease-state-change"
              >
                <span className="font-body text-label-lg">Explore Projects</span>
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  arrow_right_alt
                </span>
              </a>

              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-gutter-sm px-gutter-lg py-3 rounded bg-light-surface-container-lowest text-light-on-surface border border-light-outline-variant hover:border-light-primary hover:bg-light-surface-container-low focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-primary transition-colors duration-state-change ease-state-change"
              >
                <span className="font-body text-label-lg">About Me</span>
              </Link>

              <a
                href="https://github.com/loki47z"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-gutter-xs px-gutter-sm py-3 font-body text-label-lg text-light-primary hover:underline"
              >
                <span>GitHub</span>
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  open_in_new
                </span>
              </a>
            </div>

            {/* Key Facts Strip */}
            <div className="w-full pt-gutter-lg border-t border-light-outline-variant grid grid-cols-1 sm:grid-cols-3 gap-gutter-md">
              <div className="flex flex-col gap-gutter-xs">
                <span className="font-label text-label-sm text-light-on-surface-variant">
                  UNIVERSITY
                </span>
                <span className="font-body text-title-md text-light-on-surface">
                  MUBAS · BSc IT
                </span>
              </div>
              <div className="flex flex-col gap-gutter-xs">
                <span className="font-label text-label-sm text-light-on-surface-variant">
                  CORE STACK
                </span>
                <span className="font-body text-title-md text-light-on-surface">
                  Nextjs · TypeScript · PostgreSQL
                </span>
              </div>
              <div className="flex flex-col gap-gutter-xs">
                <span className="font-label text-label-sm text-light-on-surface-variant">
                  EXPERIENCE
                </span>
                <span className="font-body text-title-md text-light-on-surface">
                  Kunda Suppliers Intern
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-light-surface-container-lowest border border-light-outline-variant rounded-xl p-gutter-md flex flex-col gap-gutter-md">
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg bg-light-surface-container">
                <Image
                  src="/IMG-20251006-WA0172.jpg"
                  alt="Portrait of Thomas J. Manong'a"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>
              <div className="flex items-center justify-between gap-gutter-sm px-gutter-xs">
                <div className="flex items-center gap-gutter-sm">
                  <span
                    className="material-symbols-outlined text-light-primary text-[18px]"
                    aria-hidden="true"
                  >
                    location_on
                  </span>
                  <span className="font-body text-body-md text-light-on-surface">
                    Lilongwe, Malawi
                  </span>
                </div>
                <span className="font-label text-label-sm text-light-on-surface-variant tabular-nums">
                  AGE {new Date().getFullYear() - 2006}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  );
}
