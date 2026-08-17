import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/site/reveal"

export function About() {
  return (
    <section id="about" className="bg-background py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-lg ring-1 ring-border lg:max-w-md">
            <Image
              src="/images/about-clinic.png"
              alt="Clean, modern interior of Agarwal Dental Clinic"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 400px, 100vw"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">
              About Us
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="text-balance font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Your Smile, Our Priority
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-5 space-y-4 text-pretty leading-relaxed text-muted-foreground">
              <p>
                Agarwal Dental Clinic, located in Govind Nagar, Jarahbhata, Bilaspur,
                aims to provide patients with a comfortable and professional
                dental-care experience from the moment they walk in.
              </p>
              <p>
                Our clinic is designed with patient comfort in mind, from a calm
                waiting area to a clean, modern treatment room. We take the time to
                listen to your concerns and guide you through your dental care
                options.
              </p>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-8">
              <Button size="lg" render={<a href="#appointment" />} nativeButton={false}>
                Book Appointment
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
