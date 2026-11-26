import Skills from "@/components/Skills";

const technicalSkills = [
  "HTML & CSS",
  "JavaScript",
  "React",
  "Node.js",
  "MongoDB",
  "C++ Programming",
  "MySQL (Database Management)",
  "Networking (Switching/Routing)",
  "Arduino Uno",
  "Data Structures & Algorithms",
];

const softSkills = [
  "Teamwork",
  "Technical communication",
  "Problem-solving",
  "Time management",
  "Adaptability",
  "Attention to detail",
  "Analytical thinking",
  "Troubleshooting mindset",
  "Documentation clarity",
];

export default function SkillsPage() {
  return (
    <section
      id="skills"
      className="max-w-[1200px] mx-auto px-gutter-lg md:px-page-margin py-section flex flex-col gap-gutter-xl"
    >
      <div className="flex flex-col gap-gutter-xs">
        <span className="font-label text-label-md text-light-primary">CAPABILITIES</span>
        <h1 className="font-headline text-headline-lg-mobile md:text-headline-lg text-light-on-surface">
          Technical &amp; Soft Skills
        </h1>
        <p className="font-body text-body-lg text-light-on-surface-variant max-w-2xl">
          Tools, languages, and collaborative habits developed across coursework, personal builds,
          and IT internships.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter-lg items-stretch">
        <article className="bg-light-surface-container-lowest border border-light-outline-variant rounded-lg p-gutter-lg flex flex-col gap-gutter-md">
          <header className="flex items-center justify-between gap-gutter-sm">
            <div className="flex flex-col gap-gutter-xs">
              <span className="font-label text-label-sm text-light-primary">ENGINEERING</span>
              <h2 className="font-title text-title-lg text-light-on-surface">
                Technical Proficiency
              </h2>
            </div>
            <span
              className="material-symbols-outlined text-light-primary text-[22px]"
              aria-hidden="true"
            >
              code
            </span>
          </header>

          <div className="flex flex-wrap gap-gutter-sm">
            {technicalSkills.map((skill) => (
              <Skills key={skill} sname={skill} variant="primary" />
            ))}
          </div>
        </article>

        <article className="bg-light-surface-container-lowest border border-light-outline-variant rounded-lg p-gutter-lg flex flex-col gap-gutter-md">
          <header className="flex items-center justify-between gap-gutter-sm">
            <div className="flex flex-col gap-gutter-xs">
              <span className="font-label text-label-sm text-light-primary">COLLABORATION</span>
              <h2 className="font-title text-title-lg text-light-on-surface">
                Core Competencies (Soft Skills)
              </h2>
            </div>
            <span
              className="material-symbols-outlined text-light-primary text-[22px]"
              aria-hidden="true"
            >
              groups
            </span>
          </header>

          <div className="flex flex-wrap gap-gutter-sm">
            {softSkills.map((skill) => (
              <Skills key={skill} sname={skill} variant="neutral" />
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
