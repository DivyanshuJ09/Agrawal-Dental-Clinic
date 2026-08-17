import { MapPin, Phone } from "lucide-react"
import { LogoMark } from "@/components/site/logo"
import { business, navLinks } from "@/lib/site-data"

export function Footer() {
  return (
    <footer className="bg-clinic-teal-dark text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <LogoMark invert />
              <div className="flex flex-col leading-tight">
                <span className="font-heading text-base font-bold">
                  {business.name}
                </span>
                <span className="font-devanagari text-xs text-primary-foreground/70">
                  {business.nameHindi}
                </span>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
              Professional dental care with a patient-first approach.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-primary-foreground/80">
              Quick Links
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-primary-foreground/80">
              Contact
            </h3>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={business.phoneHref}
                className="flex items-start gap-2 text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
              >
                <Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                {business.phone}
              </a>
              <p className="flex items-start gap-2 text-sm text-primary-foreground/70">
                <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                {business.address.full}
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-primary-foreground/80">
              Hours
            </h3>
            <p className="mt-4 text-sm text-primary-foreground/70">{business.hours}</p>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-6">
          <p className="text-center text-sm text-primary-foreground/60">
            &copy; {business.year} {business.name}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
