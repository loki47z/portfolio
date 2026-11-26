export default function Footer() {
  return (
    <footer className="bg-light-inverse-surface text-light-inverse-on-surface">
      <div className="max-w-[1200px] mx-auto px-gutter-lg md:px-page-margin py-section flex flex-col gap-gutter-xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter-lg items-center">
          <div className="md:col-span-5 flex flex-col gap-gutter-sm">
            <span className="font-label text-label-md text-light-inverse-primary">
              CONTACT &amp; REFERRALS
            </span>
            <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg text-light-inverse-on-surface">
              Let&apos;s Connect
            </h2>
            <p className="font-body text-body-md text-light-outline-variant max-w-md">
              Open to software engineering internships, collaborative web projects, and IT
              opportunities in Lilongwe or remote.
            </p>
          </div>

          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-gutter-md">
            <a
              href="mailto:thomasmanonga7@gmail.com"
              className="bg-light-on-surface border border-light-outline rounded-lg p-gutter-md flex items-center gap-gutter-md hover:border-light-inverse-primary transition-colors duration-state-change"
            >
              <span
                className="material-symbols-outlined text-light-inverse-primary text-[20px] shrink-0"
                aria-hidden="true"
              >
                mail
              </span>
              <div className="flex flex-col min-w-0">
                <span className="font-label text-label-sm text-light-outline-variant">EMAIL</span>
                <span className="font-body text-body-md text-light-inverse-on-surface truncate">
                  thomasmanonga7@gmail.com
                </span>
              </div>
            </a>

            <a
              href="tel:+265986545056"
              className="bg-light-on-surface border border-light-outline rounded-lg p-gutter-md flex items-center gap-gutter-md hover:border-light-inverse-primary transition-colors duration-state-change"
            >
              <span
                className="material-symbols-outlined text-light-inverse-primary text-[20px] shrink-0"
                aria-hidden="true"
              >
                call
              </span>
              <div className="flex flex-col min-w-0">
                <span className="font-label text-label-sm text-light-outline-variant">PHONE</span>
                <span className="font-body text-body-md text-light-inverse-on-surface tabular-nums">
                  +265 986 545 056
                </span>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/thomas-manong-a-60a577301"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-light-on-surface border border-light-outline rounded-lg p-gutter-md flex items-center gap-gutter-md hover:border-light-inverse-primary transition-colors duration-state-change"
            >
              <span
                className="material-symbols-outlined text-light-inverse-primary text-[20px] shrink-0"
                aria-hidden="true"
              >
                badge
              </span>
              <div className="flex flex-col min-w-0">
                <span className="font-label text-label-sm text-light-outline-variant">
                  LINKEDIN
                </span>
                <span className="font-body text-body-md text-light-inverse-on-surface truncate">
                  Thomas J. Manong&apos;a
                </span>
              </div>
            </a>

            <a
              href="https://www.instagram.com/thom_the_shadow_clone/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-light-on-surface border border-light-outline rounded-lg p-gutter-md flex items-center gap-gutter-md hover:border-light-inverse-primary transition-colors duration-state-change"
            >
              <span
                className="material-symbols-outlined text-light-inverse-primary text-[20px] shrink-0"
                aria-hidden="true"
              >
                photo_camera
              </span>
              <div className="flex flex-col min-w-0">
                <span className="font-label text-label-sm text-light-outline-variant">
                  INSTAGRAM
                </span>
                <span className="font-body text-body-md text-light-inverse-on-surface truncate">
                  @thom_the_shadow_clone
                </span>
              </div>
            </a>
          </div>
        </div>

        <div className="pt-gutter-lg border-t border-light-outline flex flex-col sm:flex-row items-center justify-between gap-gutter-md">
          <span className="font-body text-body-md text-light-outline-variant">
            &copy; 2026 Thomas J. Manong&apos;a Portfolio. All rights reserved.
          </span>
          <span className="font-label text-label-sm text-light-outline-variant">
            Lilongwe, Malawi
          </span>
        </div>
      </div>
    </footer>
  );
}
