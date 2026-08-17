import { Clock, MapPin, Navigation, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/site/reveal"
import { business } from "@/lib/site-data"

export function Location() {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.mapsQuery}`
  const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    business.mapsEmbedQuery,
  )}&output=embed`

  return (
    <section className="bg-clinic-mist/40 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">
              Find Us
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="text-balance font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Visit Agarwal Dental Clinic
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col gap-6 rounded-2xl border border-border bg-card p-6 sm:p-8">
              <div className="flex gap-4">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-heading text-sm font-semibold text-foreground">
                    Address
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {business.address.line1}
                    <br />
                    {business.address.line2}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Plus Code: {business.plusCode}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Phone className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-heading text-sm font-semibold text-foreground">
                    Phone
                  </h3>
                  <a
                    href={business.phoneHref}
                    className="mt-1 block text-sm text-muted-foreground hover:text-primary"
                  >
                    {business.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Clock className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-heading text-sm font-semibold text-foreground">
                    Hours
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{business.hours}</p>
                </div>
              </div>

              <Button
                className="mt-auto w-fit"
                render={<a href={directionsUrl} target="_blank" rel="noopener noreferrer" />}
                nativeButton={false}
              >
                <Navigation data-icon="inline-start" aria-hidden="true" />
                Get Directions
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-3">
            <div className="h-full min-h-[320px] w-full overflow-hidden rounded-2xl border border-border shadow-sm">
              <iframe
                title={`Map showing the location of ${business.name}`}
                src={embedUrl}
                className="h-full min-h-[320px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
