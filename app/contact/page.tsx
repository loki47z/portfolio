const contactChannels = [
  {
    label: "EMAIL",
    value: "thomasmanonga7@gmail.com",
    href: "mailto:thomasmanonga7@gmail.com",
    icon: "mail",
    external: false,
  },
  {
    label: "PHONE",
    value: "+265 986 545 056",
    href: "tel:+265986545056",
    icon: "call",
    external: false,
  },
  {
    label: "GITHUB",
    value: "github.com/loki47z",
    href: "https://github.com/loki47z",
    icon: "code",
    external: true,
  },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/thomas-manong-a-60a577301",
    href: "https://www.linkedin.com/in/thomas-manong-a-60a577301",
    icon: "badge",
    external: true,
  },
  {
    label: "INSTAGRAM",
    value: "@thom_the_shadow_clone",
    href: "https://www.instagram.com/thom_the_shadow_clone/",
    icon: "photo_camera",
    external: true,
  },
  {
    label: "LOCATION",
    value: "Lilongwe, Malawi",
    href: null,
    icon: "location_on",
    external: false,
  },
];

export default function ContactPage() {
  return (
    <section
      id="contact"
      className="max-w-[1200px] mx-auto px-gutter-lg md:px-page-margin py-section flex flex-col gap-gutter-xl"
    >
      <div className="flex flex-col gap-gutter-xs">
        <span className="font-label text-label-md text-light-primary">CONTACT &amp; REFERRALS</span>
        <h1 className="font-headline text-headline-lg-mobile md:text-headline-lg text-light-on-surface">
          Let&apos;s Connect
        </h1>
        <p className="font-body text-body-lg text-light-on-surface-variant max-w-2xl">
          Open to software engineering internships, collaborative web projects, and IT
          opportunities in Lilongwe or remote.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter-lg">
        {contactChannels.map((channel) => {
          const inner = (
            <>
              <span
                className="w-11 h-11 rounded bg-light-surface-container-low border border-light-outline-variant flex items-center justify-center shrink-0"
                aria-hidden="true"
              >
                <span className="material-symbols-outlined text-light-primary text-[22px]">
                  {channel.icon}
                </span>
              </span>
              <div className="flex flex-col gap-gutter-xs min-w-0">
                <span className="font-label text-label-sm text-light-on-surface-variant">
                  {channel.label}
                </span>
                <span className="font-title text-title-md text-light-on-surface truncate">
                  {channel.value}
                </span>
              </div>
            </>
          );

          if (!channel.href) {
            return (
              <div
                key={channel.label}
                className="bg-light-surface-container-lowest border border-light-outline-variant rounded-lg p-gutter-lg flex items-center gap-gutter-md"
              >
                {inner}
              </div>
            );
          }

          return (
            <a
              key={channel.label}
              href={channel.href}
              target={channel.external ? "_blank" : undefined}
              rel={channel.external ? "noopener noreferrer" : undefined}
              className="bg-light-surface-container-lowest border border-light-outline-variant rounded-lg p-gutter-lg flex items-center gap-gutter-md hover:border-light-primary transition-colors duration-state-change ease-state-change"
            >
              {inner}
            </a>
          );
        })}
      </div>
    </section>
  );
}
