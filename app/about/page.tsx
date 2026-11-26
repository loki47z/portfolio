import Link from "next/link";

const quickFacts = [
  { label: "LOCATION", value: "Lilongwe, Malawi" },
  { label: "EDUCATION", value: "BSc IT (Studying) · MUBAS" },
  { label: "AGE", value: "20 (24th Nov 2006)" },
  { label: "HOBBIES", value: "Anime, Sitcoms, Games, Board Games" },
];

export default function AboutPage() {
  return (
    <section
      id="about"
      className="max-w-[1200px] mx-auto px-gutter-lg md:px-page-margin py-section flex flex-col gap-gutter-xl"
    >
      <div className="flex flex-col gap-gutter-xs">
        <span className="font-label text-label-md text-light-primary">PROFILE</span>
        <h1 className="font-headline text-headline-lg-mobile md:text-headline-lg text-light-on-surface">
          About Me
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-start">
        <div className="lg:col-span-7 bg-light-surface-container-lowest border border-light-outline-variant rounded-lg p-gutter-lg flex flex-col gap-gutter-md">
          <p className="font-body text-body-lg text-light-on-surface-variant text-pretty">
            I am an 18-year-old dedicated student currently pursuing a Bachelor of Science in
            Information Technology at the Malawi University of Business and Applied Science. My
            academic foundation is built on a strong curriculum, covering areas from foundational
            programming (C++) and networking to modern web development technologies (HTML, CSS,
            JavaScript, Node.js) and database technologies.
          </p>
          <p className="font-body text-body-lg text-light-on-surface-variant text-pretty">
            My passion lies in practical application, as demonstrated by my web development
            projects available on my{" "}
            <Link
              href="/projects"
              className="text-light-primary font-semibold hover:underline"
            >
              Projects &amp; GitHub
            </Link>{" "}
            page. I am a fast learner, adaptable, and possess strong problem-solving and teamwork
            skills, always ready to take on project work and challenges.
          </p>

          <div className="pt-gutter-md border-t border-light-surface-container flex flex-wrap items-center gap-gutter-md">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-gutter-sm px-gutter-lg py-2.5 rounded bg-light-primary text-light-on-primary hover:bg-light-primary-container transition-colors duration-state-change ease-state-change"
            >
              <span className="font-body text-label-lg">Explore Projects</span>
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                arrow_forward
              </span>
            </Link>
            <Link
              href="/academics"
              className="inline-flex items-center justify-center gap-gutter-sm px-gutter-lg py-2.5 rounded bg-light-surface-container-lowest text-light-on-surface border border-light-outline-variant hover:border-light-primary hover:bg-light-surface-container-low transition-colors duration-state-change ease-state-change"
            >
              <span className="font-body text-label-lg">Academic Journey</span>
            </Link>
          </div>
        </div>

        <aside className="lg:col-span-5 bg-light-surface-container-lowest border border-light-outline-variant rounded-lg p-gutter-lg flex flex-col gap-gutter-md">
          <div className="flex items-center justify-between gap-gutter-sm">
            <h2 className="font-title text-title-lg text-light-on-surface">Quick Facts</h2>
            <span
              className="material-symbols-outlined text-light-primary text-[22px]"
              aria-hidden="true"
            >
              person
            </span>
          </div>

          <dl className="flex flex-col gap-gutter-sm">
            {quickFacts.map((fact) => (
              <div
                key={fact.label}
                className="bg-light-surface-container-low rounded p-gutter-md flex flex-col gap-gutter-xs"
              >
                <dt className="font-label text-label-sm text-light-primary">{fact.label}</dt>
                <dd className="font-body text-body-md text-light-on-surface">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}
