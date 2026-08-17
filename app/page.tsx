import { Header } from "@/components/site/header"
import { Hero } from "@/components/site/hero"
import { QuickInfo } from "@/components/site/quick-info"
import { About } from "@/components/site/about"
import { Services } from "@/components/site/services"
import { Appointment } from "@/components/site/appointment"
import { WhyUs } from "@/components/site/why-us"
import { Gallery } from "@/components/site/gallery"
import { Location } from "@/components/site/location"
import { Contact } from "@/components/site/contact"
import { Footer } from "@/components/site/footer"
import { WhatsappButton } from "@/components/site/whatsapp-button"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <QuickInfo />
        <About />
        <Services />
        <Appointment />
        <WhyUs />
        <Gallery />
        <Location />
        <Contact />
      </main>
      <Footer />
      <WhatsappButton />
    </>
  )
}
