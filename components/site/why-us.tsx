import { CalendarCheck, Heart, MapPin, Users, type LucideIcon } from "lucide-react"
import { Reveal } from "@/components/site/reveal"
import { whyUs } from "@/lib/site-data"

const iconMap: Record<string, LucideIcon> = {
  Heart,
  Users,
  MapPin,
  CalendarCheck,
}

export function WhyUs() {
  return (
    <section id="why-us" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="text-balance font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Why Patients Choose Agarwal Dental Clinic
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((item, index) => {
            const Icon = iconMap[item.icon] ?? Heart
            return (
              <Reveal key={item.title} delay={index * 80}>
                <div className="flex h-full flex-col items-start gap-4 rounded-2xl bg-clinic-mist/60 p-6">
                  <span className="inline-flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
