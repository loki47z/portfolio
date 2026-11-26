'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { name: "About", href: "/about" },
  { name: "Academics", href: "/academics" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Hobbies", href: "/hobbies" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 bg-light-surface border-b border-light-outline-variant">
      <div className="max-w-[1200px] mx-auto px-gutter-lg md:px-page-margin h-16 flex items-center justify-between gap-gutter-md">
        <Link href="/" className="inline-flex items-center gap-gutter-sm">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded bg-light-primary text-light-on-primary font-headline text-title-md">
            T
          </span>
          <span className="font-headline text-title-lg text-light-on-surface">
            Thom&apos;s Portfolio
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav aria-label="Primary" className="hidden md:flex items-center gap-gutter-lg">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-body text-label-lg transition-colors duration-state-change ${
                  isActive
                    ? "text-light-primary"
                    : "text-light-on-surface-variant hover:text-light-primary"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-gutter-sm">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center justify-center gap-gutter-sm px-gutter-md py-2 rounded bg-light-primary text-light-on-primary hover:bg-light-primary-container focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-primary transition-colors duration-state-change ease-state-change"
          >
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
              mail
            </span>
            <span className="font-body text-label-lg">Get in Touch</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded border border-light-outline-variant bg-light-surface-container-lowest text-light-on-surface hover:border-light-primary transition-colors duration-state-change"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
              {isOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-light-surface-container-low border-t border-light-outline-variant">
          <div className="max-w-[1200px] mx-auto px-gutter-lg py-gutter-md flex flex-col gap-gutter-xs">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-gutter-md py-2 rounded font-body text-label-lg transition-colors duration-state-change ${
                    isActive
                      ? "bg-light-surface-container text-light-primary"
                      : "text-light-on-surface-variant hover:bg-light-surface-container hover:text-light-primary"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-gutter-sm inline-flex items-center justify-center gap-gutter-sm px-gutter-md py-2.5 rounded bg-light-primary text-light-on-primary hover:bg-light-primary-container transition-colors duration-state-change"
            >
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                mail
              </span>
              <span className="font-body text-label-lg">Get in Touch</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
