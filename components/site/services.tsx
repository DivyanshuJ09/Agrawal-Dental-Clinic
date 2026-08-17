import {
  Activity,
  Baby,
  Crown,
  Hammer,
  Smile,
  Sparkles,
  Stethoscope,
  Sun,
  type LucideIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/site/reveal"
import { business, services } from "@/lib/site-data"

const iconMap: Record<string, LucideIcon> = {
  Stethoscope,
  Smile,
  Sparkles,
  Hammer,
  Activity,
  Crown,
  Sun,
  Baby,
}

export function Services() {
  const enquiryBase = `https://wa.me/${business.whatsappNumber}?text=`

  return (
    <section id="treatments" className="bg-clinic-mist/40 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">
              Dental Services
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="text-balance font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Dental Care, Tailored to You
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              The categories below are editable placeholders. Please enquire to
              confirm availability, suitability, and details for your specific
              dental needs.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] ?? Stethoscope
            const message = encodeURIComponent(
              `Hello Agarwal Dental Clinic, I would like to enquire about ${service.name}.`,
            )
            return (
              <Reveal key={service.name} delay={(index % 4) * 80}>
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-md">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div className="flex-1">
                    <h3 className="font-heading text-base font-semibold text-foreground">
                      {service.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    render={<a href={`${enquiryBase}${message}`} target="_blank" rel="noopener noreferrer" />}
                    nativeButton={false}
                    className="w-fit"
                  >
                    Enquire
                  </Button>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
