"use client"

import { useEffect, useState } from "react"
import { Menu, Phone } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Logo } from "@/components/site/logo"
import { business, navLinks } from "@/lib/site-data"
import { cn } from "@/lib/utils"

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled
          ? "border-border bg-background/95 py-2 shadow-sm backdrop-blur-md"
          : "border-transparent bg-background/80 py-4 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#home" className="shrink-0" aria-label={`${business.name} home`}>
          <Logo compact={scrolled} />
        </a>

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            variant="outline"
            render={<a href={business.phoneHref} aria-label={`Call ${business.name} now`} />}
            nativeButton={false}
          >
            <Phone data-icon="inline-start" aria-hidden="true" />
            Call Now
          </Button>
          <Button render={<a href="#appointment" />} nativeButton={false}>
            Book Appointment
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Button
            variant="outline"
            size="icon"
            render={<a href={business.phoneHref} aria-label={`Call ${business.name} now`} />}
            nativeButton={false}
          >
            <Phone aria-hidden="true" />
          </Button>
          <Sheet>
            <SheetTrigger render={<Button variant="ghost" size="icon" aria-label="Open menu" />}>
              <Menu aria-hidden="true" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle>
                  <Logo compact />
                </SheetTitle>
              </SheetHeader>
              <nav
                className="flex flex-col gap-1 px-4"
                aria-label="Mobile navigation"
              >
                {navLinks.map((link) => (
                  <SheetClose
                    key={link.href}
                    nativeButton={false}
                    render={
                      <a
                        href={link.href}
                        className="rounded-md px-3 py-3 text-base font-medium text-foreground/85 transition-colors hover:bg-muted hover:text-primary"
                      />
                    }
                  >
                    {link.label}
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-4 flex flex-col gap-3 px-4">
                <SheetClose
                  nativeButton={false}
                  render={
                    <a
                      href={business.phoneHref}
                      className={cn(buttonVariants({ variant: "outline" }), "w-full")}
                    />
                  }
                >
                  <Phone data-icon="inline-start" aria-hidden="true" />
                  Call Now
                </SheetClose>
                <SheetClose
                  nativeButton={false}
                  render={
                    <a href="#appointment" className={cn(buttonVariants(), "w-full")} />
                  }
                >
                  Book Appointment
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
