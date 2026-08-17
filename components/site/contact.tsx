import { Clock, MapPin, MessageCircle, Navigation, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/site/reveal"
import { AppointmentForm } from "@/components/site/appointment-form"
import { business } from "@/lib/site-data"

export function Contact() {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.mapsQuery}`
  const whatsappUrl = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
    business.whatsappMessage,
  )}`

  return (
    <section id="contact" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">
              Contact
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="text-balance font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Get in Touch
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="flex h-full flex-col gap-8">
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  {business.name}
                </h3>
                <p className="font-devanagari text-sm text-muted-foreground">
                  {business.nameHindi}
                </p>
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {business.address.full}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <a
                    href={business.phoneHref}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {business.phone}
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <p className="text-sm text-muted-foreground">{business.hours}</p>
                </div>
              </div>

              <div className="mt-auto grid grid-cols-2 gap-3">
                <Button render={<a href={business.phoneHref} />} nativeButton={false}>
                  <Phone data-icon="inline-start" aria-hidden="true" />
                  Call Now
                </Button>
                <Button variant="outline" render={<a href="#appointment" />} nativeButton={false}>
                  Book Appointment
                </Button>
                <Button
                  variant="outline"
                  render={<a href={directionsUrl} target="_blank" rel="noopener noreferrer" />}
                  nativeButton={false}
                >
                  <Navigation data-icon="inline-start" aria-hidden="true" />
                  Get Directions
                </Button>
                <Button
                  variant="outline"
                  render={<a href={whatsappUrl} target="_blank" rel="noopener noreferrer" />}
                  nativeButton={false}
                >
                  <MessageCircle data-icon="inline-start" aria-hidden="true" />
                  WhatsApp Us
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <AppointmentForm idPrefix="contact" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
