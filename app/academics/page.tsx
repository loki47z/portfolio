import academicsData from "@/data/academics.json";

export default function AcademicsPage() {
  return (
    <section
      id="education"
      className="max-w-[1200px] mx-auto px-gutter-lg md:px-page-margin py-section flex flex-col gap-gutter-xl"
    >
      <div className="flex flex-col gap-gutter-xs">
        <span className="font-label text-label-md text-light-primary">
          {academicsData.eyebrow}
        </span>
        <h1 className="font-headline text-headline-lg-mobile md:text-headline-lg text-light-on-surface">
          {academicsData.title}
        </h1>
        <p className="font-body text-body-lg text-light-on-surface-variant max-w-2xl">
          {academicsData.description}
        </p>
      </div>

      <div className="flex flex-col gap-gutter-lg">
        {academicsData.education.map((entry) => (
          <article
            key={entry.id}
            className="bg-light-surface-container-lowest border border-light-outline-variant rounded-lg p-gutter-lg flex flex-col gap-gutter-lg"
          >
            <header className="flex flex-col sm:flex-row sm:items-start justify-between gap-gutter-md">
              <div className="flex flex-col gap-gutter-xs">
                <div className="inline-flex items-center gap-gutter-sm">
                  <span
                    className="material-symbols-outlined text-light-primary text-[20px]"
                    aria-hidden="true"
                  >
                    school
                  </span>
                  <span className="font-label text-label-sm text-light-primary uppercase">
                    {entry.status}
                  </span>
                </div>
                <h2 className="font-title text-title-lg text-light-on-surface">
                  {entry.degree}
                </h2>
                <p className="font-body text-body-md text-light-on-surface-variant">
                  {entry.institution}
                </p>
              </div>

              <span className="font-label text-label-sm text-light-primary bg-light-surface-container-low px-3 py-1.5 rounded-full border border-light-outline-variant tabular-nums shrink-0 self-start">
                {entry.period}
              </span>
            </header>

            {entry.moduleGroups.length > 0 && (
              <div className="pt-gutter-md border-t border-light-surface-container flex flex-col gap-gutter-md">
                {entry.modulesHeading && (
                  <h3 className="font-title text-title-md text-light-on-surface">
                    {entry.modulesHeading}
                  </h3>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter-md">
                  {entry.moduleGroups.map((group) => (
                    <div
                      key={group.code}
                      className="bg-light-surface-container-low border border-light-surface-container rounded p-gutter-md flex flex-col gap-gutter-sm"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-gutter-sm">
                        <div className="flex flex-col gap-gutter-xs">
                          <span className="font-label text-label-sm text-light-primary">
                            {group.code}
                          </span>
                          <span className="font-title text-title-md text-light-on-surface">
                            {group.title}
                          </span>
                        </div>
                        {group.status && (
                          <span className="font-label text-label-sm text-light-on-surface-variant bg-light-surface-container-lowest px-2.5 py-1 rounded-full border border-light-outline-variant">
                            {group.status}
                          </span>
                        )}
                      </div>

                      <ul className="flex flex-col gap-gutter-xs pt-gutter-xs border-t border-light-outline-variant/60">
                        {group.modules.map((mod) => (
                          <li
                            key={mod}
                            className="flex items-start gap-gutter-sm font-body text-body-md text-light-on-surface-variant"
                          >
                            <span
                              className="material-symbols-outlined text-light-primary text-[16px] mt-1 shrink-0"
                              aria-hidden="true"
                            >
                              check_circle
                            </span>
                            <span>{mod}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
