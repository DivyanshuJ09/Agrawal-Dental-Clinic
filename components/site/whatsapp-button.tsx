import { MessageCircle } from "lucide-react"
import { business } from "@/lib/site-data"

export function WhatsappButton() {
  const href = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
    business.whatsappMessage,
  )}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 sm:bottom-6 sm:right-6"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="size-5" aria-hidden="true" />
      <span className="hidden sm:inline">Chat With Us</span>
    </a>
  )
}
