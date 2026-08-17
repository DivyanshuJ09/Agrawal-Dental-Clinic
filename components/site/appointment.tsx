import { Reveal } from "@/components/site/reveal"
import { AppointmentForm } from "@/components/site/appointment-form"

export function Appointment() {
  return (
    <section id="appointment" className="bg-primary py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="flex flex-col justify-center">
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-clinic-cyan">
              Book a Visit
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="text-balance font-heading text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Ready to Take Care of Your Smile?
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-4 max-w-md text-pretty leading-relaxed text-primary-foreground/80">
              Schedule a visit with Agarwal Dental Clinic. Share a few details
              below and our team will get back to you to confirm your
              appointment.
            </p>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <AppointmentForm />
        </Reveal>
      </div>
    </section>
  )
}
