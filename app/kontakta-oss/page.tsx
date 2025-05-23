import type { Metadata } from "next"
import { Mail, MapPin } from "lucide-react"
import ContactForm from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Kontakta oss | Topp 10 Bästa Online Casino i Sverige",
  description: "Har du frågor eller feedback? Kontakta vårt team via formuläret eller e-post.",
}

export default function ContactPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Kontakta oss</h1>
          <p className="text-muted-foreground">Har du frågor eller feedback? Vi vill gärna höra från dig.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Kontaktinformation</h2>
              <p className="text-muted-foreground">Du kan nå oss via formuläret eller direkt via e-post.</p>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Svarstid</h2>
              <p className="text-muted-foreground">
                Vi strävar efter att svara på alla förfrågningar inom 24-48 timmar under vardagar.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Skicka ett meddelande</h2>
              <p className="text-muted-foreground">Fyll i formuläret nedan så återkommer vi så snart som möjligt.</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
