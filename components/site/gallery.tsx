"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Expand } from "lucide-react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/site/reveal"
import { galleryImages } from "@/lib/site-data"

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const showPrev = () =>
    setActiveIndex((current) =>
      current === null ? null : (current - 1 + galleryImages.length) % galleryImages.length,
    )
  const showNext = () =>
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % galleryImages.length,
    )

  const spanClasses = [
    "sm:row-span-2",
    "",
    "",
    "sm:row-span-2",
    "",
    "",
    "",
  ]

  return (
    <section id="gallery" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">
              Clinic Gallery
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="text-balance font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              A Look Inside Our Clinic
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:[grid-template-rows:repeat(3,minmax(140px,1fr))] lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <Reveal key={image.src} delay={(index % 4) * 60} className={spanClasses[index]}>
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className="group relative h-full min-h-[140px] w-full overflow-hidden rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                aria-label={`View larger image: ${image.label}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 25vw, 50vw"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-clinic-teal-dark/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="absolute bottom-3 left-3 flex items-center gap-1.5 text-sm font-medium text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100">
                  <Expand className="size-4" aria-hidden="true" />
                  {image.label}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog
        open={activeIndex !== null}
        onOpenChange={(open) => !open && setActiveIndex(null)}
      >
        <DialogContent
          showCloseButton
          className="max-w-3xl border-none bg-clinic-teal-dark p-4 shadow-xl ring-0 sm:max-w-3xl [&_[data-slot=dialog-close]]:text-primary-foreground [&_[data-slot=dialog-close]]:hover:bg-white/10"
        >
          <DialogTitle className="sr-only">
            {activeIndex !== null ? galleryImages[activeIndex].label : "Gallery image"}
          </DialogTitle>
          {activeIndex !== null && (
            <div className="relative">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-black">
                <Image
                  src={galleryImages[activeIndex].src}
                  alt={galleryImages[activeIndex].alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
              <p className="mt-3 text-center text-sm font-medium text-primary-foreground">
                {galleryImages[activeIndex].label}
              </p>
              <Button
                type="button"
                variant="secondary"
                size="icon"
                onClick={showPrev}
                className="absolute left-2 top-1/2 -translate-y-1/2"
                aria-label="Previous image"
              >
                <ChevronLeft aria-hidden="true" />
              </Button>
              <Button
                type="button"
                variant="secondary"
                size="icon"
                onClick={showNext}
                className="absolute right-2 top-1/2 -translate-y-1/2"
                aria-label="Next image"
              >
                <ChevronRight aria-hidden="true" />
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
