import { business } from "@/lib/site-data"
import { cn } from "@/lib/utils"

export function LogoMark({
  className,
  invert = false,
}: {
  className?: string
  invert?: boolean
}) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={cn("h-9 w-9 shrink-0", className)}
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="20" className={invert ? "fill-primary-foreground" : "fill-primary"} />
      <path
        d="M20 11c-2.1 0-3.4 1.1-4.4 1.1-1.1 0-2.3-.8-3.6-.5-1.5.3-3 1.7-3 4.4 0 3.1 1.2 6.1 2.1 8.4.7 1.9 1.3 3.5 2.4 3.5 1.2 0 1.5-1.9 1.9-3.9.3-1.6.6-3.1 1.6-3.1.9 0 1.2 1.5 1.6 3.1.4 2 .8 3.9 1.9 3.9 1.1 0 1.7-1.6 2.4-3.5.9-2.3 2.1-5.3 2.1-8.4 0-2.7-1.5-4.1-3-4.4-1.3-.3-2.5.5-3.6.5-.4 0-.9-.1-1.4-.3"
        className={invert ? "fill-clinic-teal-dark" : "fill-primary-foreground"}
      />
    </svg>
  )
}

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <LogoMark />
      <div className="flex flex-col leading-tight">
        <span
          className={cn(
            "font-heading font-bold tracking-tight text-primary transition-all",
            compact ? "text-base" : "text-lg",
          )}
        >
          {business.name}
        </span>
        <span className="font-devanagari text-xs text-muted-foreground">
          {business.nameHindi}
        </span>
      </div>
    </div>
  )
}
