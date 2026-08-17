"use client"

import { type FormEvent, useState } from "react"
import { CheckCircle2, MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { business } from "@/lib/site-data"

const timeSlots = [
  "9:00 AM - 11:00 AM",
  "11:00 AM - 1:00 PM",
  "1:00 PM - 3:00 PM",
  "3:00 PM - 5:00 PM",
  "5:00 PM - 7:00 PM",
]

export function AppointmentForm({ idPrefix = "appt" }: { idPrefix?: string }) {
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [reason, setReason] = useState("")
  const [message, setMessage] = useState("")

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const lines = [
      `Hello ${business.name}, I would like to request an appointment.`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      date ? `Preferred Date: ${date}` : null,
      time ? `Preferred Time: ${time}` : null,
      reason ? `Reason for Visit: ${reason}` : null,
      message ? `Message: ${message}` : null,
    ].filter(Boolean)

    const whatsappUrl = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
      lines.join("\n"),
    )}`

    window.open(whatsappUrl, "_blank", "noopener,noreferrer")
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-8 text-center">
        <span className="inline-flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 className="size-6" aria-hidden="true" />
        </span>
        <h3 className="font-heading text-lg font-semibold text-foreground">
          Request Sent
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          Your appointment request has been opened in WhatsApp. Please send the
          message so our team can confirm your visit, or call us directly.
        </p>
        <Button variant="outline" onClick={() => setSubmitted(false)}>
          Submit another request
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card p-6 sm:p-8"
      aria-label="Appointment request form"
    >
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor={`${idPrefix}-name`}>Name</FieldLabel>
          <Input
            id={`${idPrefix}-name`}
            name="name"
            placeholder="Your full name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
          />
        </Field>

        <Field>
          <FieldLabel htmlFor={`${idPrefix}-phone`}>Phone Number</FieldLabel>
          <Input
            id={`${idPrefix}-phone`}
            name="phone"
            type="tel"
            placeholder="Your phone number"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            autoComplete="tel"
          />
        </Field>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Field>
            <FieldLabel htmlFor={`${idPrefix}-date`}>Preferred Date</FieldLabel>
            <Input
              id={`${idPrefix}-date`}
              name="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Field>

          <Field>
            <FieldLabel htmlFor={`${idPrefix}-time`}>Preferred Time</FieldLabel>
            <NativeSelect
              id={`${idPrefix}-time`}
              name="time"
              className="w-full"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            >
              <NativeSelectOption value="">Select a time slot</NativeSelectOption>
              {timeSlots.map((slot) => (
                <NativeSelectOption key={slot} value={slot}>
                  {slot}
                </NativeSelectOption>
              ))}
            </NativeSelect>
          </Field>
        </div>

        <Field>
          <FieldLabel htmlFor={`${idPrefix}-reason`}>Reason for Visit</FieldLabel>
          <Input
            id={`${idPrefix}-reason`}
            name="reason"
            placeholder="e.g. Dental consultation, teeth cleaning"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
        </Field>

        <Field>
          <FieldLabel htmlFor={`${idPrefix}-message`}>Message</FieldLabel>
          <Textarea
            id={`${idPrefix}-message`}
            name="message"
            placeholder="Anything else you'd like us to know"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Field>

        <Button type="submit" size="lg" className="w-full">
          Request Appointment
        </Button>
      </FieldGroup>

      <div className="mt-6 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row">
        <Button
          variant="outline"
          className="w-full sm:w-auto sm:flex-1 sm:shrink"
          render={<a href={business.phoneHref} />}
          nativeButton={false}
        >
          <Phone data-icon="inline-start" aria-hidden="true" />
          Call Clinic
        </Button>
        <Button
          variant="outline"
          className="w-full sm:w-auto sm:flex-1 sm:shrink"
          render={
            <a
              href={`https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
                business.whatsappMessage,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            />
          }
          nativeButton={false}
        >
          <MessageCircle data-icon="inline-start" aria-hidden="true" />
          WhatsApp
        </Button>
      </div>
    </form>
  )
}
