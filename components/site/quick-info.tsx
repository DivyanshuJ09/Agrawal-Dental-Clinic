import { CalendarCheck, MapPin, Sparkles, Users } from "lucide-react"
import { Reveal } from "@/components/site/reveal"
import { quickInfo } from "@/lib/site-data"

const iconMap = {
  "Experienced Care": Sparkles,
  "Modern Dental Environment": CalendarCheck,
  "Patient-Focused Approach": Users,
  "Convenient Location": MapPin,
} as const

export function QuickInfo() {
  return (
    <section className="border-b border-border bg-background" aria-label="Clinic highlights">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {quickInfo.map((item, index) => {
            const Icon = iconMap[item.title as keyof typeof iconMap] ?? Sparkles
            return (
              <Reveal key={item.title} delay={index * 80}>
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-md">
                  <span className="inline-flex size-10 items-center justify-center rounded-xl bg-clinic-mist text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-heading text-base font-semibold text-foreground">
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
