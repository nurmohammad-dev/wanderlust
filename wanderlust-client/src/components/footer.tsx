import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { ComponentProps } from "react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "#destinations" },
  { label: "My Bookings", href: "#bookings" },
  { label: "My Profile", href: "#profile" },
];

const supportLinks = [
  { label: "Help Center", href: "#help" },
  { label: "Terms of Service", href: "#terms" },
  { label: "Privacy Policy", href: "#privacy" },
];

function XIcon(props: ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932Z" />
    </svg>
  );
}

function LinkedinIcon(props: ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.064 2.064 0 1 1 0-4.128 2.064 2.064 0 0 1 0 4.128zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  );
}

function InstagramIcon(props: ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const socials = [
  { label: "X (Twitter)", href: "#", icon: XIcon },
  { label: "LinkedIn", href: "#", icon: LinkedinIcon },
  { label: "Instagram", href: "#", icon: InstagramIcon },
];

const columnClasses = "text-[13px] uppercase tracking-wide text-white";

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-8 sm:px-8">
        <Image
          src="/images/Wanderlast-1.png"
          alt="Wanderlast"
          width={542}
          height={80}
          className="h-14 w-auto sm:h-[72px]"
        />
        <p className="mt-3 text-sm text-white/80">
          Your gateway to extraordinary travel experiences around the world.
        </p>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
          <div>
            <h3 className={columnClasses}>Newsletter</h3>
            <p className="mt-2 text-xs text-white/60">
              Subscribe for exclusive travel deals and inspiration.
            </p>
            <div className="mt-4 flex max-w-[250px] items-center gap-2">
              <input
                type="email"
                placeholder="Enter email"
                aria-label="Email for newsletter"
                className="h-10 w-full rounded-md bg-white/10 px-3 text-sm outline-none placeholder:text-white/50 focus-visible:ring-2 focus-visible:ring-white/40"
              />
              <button
                type="button"
                aria-label="Subscribe"
                className="grid size-10 shrink-0 place-items-center rounded-md bg-white/10 transition hover:bg-white/20"
              >
                <ArrowUpRight className="size-4" />
              </button>
            </div>
          </div>

          <nav>
            <h3 className={columnClasses}>Quick Links</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav>
            <h3 className={columnClasses}>Support</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className={columnClasses}>Contact Us</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li>
                <a href="tel:+17869011622" className="transition-colors hover:text-white">
                  786 901 1622
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@wandarland.com"
                  className="transition-colors hover:text-white"
                >
                  info@wandarland.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex items-center justify-between gap-4 border-t border-white/15 pt-6 text-xs text-white/60">
          <p>© 2026 Wanderlust. All rights reserved.</p>
          <div className="flex items-center gap-4 text-white">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="transition-opacity hover:opacity-70"
              >
                <social.icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
