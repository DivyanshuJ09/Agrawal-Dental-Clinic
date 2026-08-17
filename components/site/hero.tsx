import Image from "next/image"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/site/reveal"
import { business } from "@/lib/site-data"

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-clinic-mist to-background"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <div className="order-2 lg:order-1">
          <Reveal>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-accent">
              {business.category} &middot; Bilaspur, Chhattisgarh
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="text-balance font-heading text-4xl font-bold leading-tight tracking-tight text-primary sm:text-5xl lg:text-6xl">
              Your Smile Deserves Expert Care
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Professional dental care in a comfortable and welcoming environment.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" render={<a href="#appointment" />} nativeButton={false}>
                Book an Appointment
              </Button>
              <Button
                size="lg"
                variant="outline"
                render={<a href={business.phoneHref} />}
                nativeButton={false}
              >
                <Phone data-icon="inline-start" aria-hidden="true" />
                Call {business.phone}
              </Button>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <p className="mt-6 text-sm font-medium text-muted-foreground">
              Comfortable Care &bull; Modern Clinic &bull; Patient-Focused
            </p>
          </Reveal>
        </div>

        <Reveal delay={120} className="order-1 lg:order-2">
          <div className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-3xl shadow-xl ring-1 ring-border">
            <Image
              src="/images/hero-dental-clinic.png"
              alt="Dentist providing comfortable, professional patient care at a modern dental clinic"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 560px, 100vw"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
