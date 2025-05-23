import { formatDate } from "@/lib/utils"
import CasinoCard from "@/components/casino-card"
import FeatureSection from "@/components/feature-section"
import CookieConsent from "@/components/cookie-consent"
import TopCasinosModal from "@/components/top-casinos-modal"
import ResponsibleGambling from "@/components/responsible-gambling"

export default function Home() {
  const currentDate = formatDate(new Date())

  const casinos = [
    {
      name: "Betinia",
      logo: "/betinia.png",
      bonus: "100% upp till 2500 kr",
      rating: 4.9,
      reviews: 1245,
      link: "https://betinia.se/sv/",
    },
    {
      name: "Campobet",
      logo: "/campo.webp",
      bonus: "100% upp till 2500 kr",
      rating: 4.8,
      reviews: 987,
      link: "https://campobet.se/sv/",
    },
    {
      name: "Yoyocasino",
      logo: "/yoyo.png",
      bonus: "100% upp till 2500 kr",
      rating: 4.7,
      reviews: 856,
      link: "https://yoyocasino.se/sv/",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <CookieConsent />
      <TopCasinosModal casinos={casinos} />

      <section className="bg-gradient-to-b from-[#e0f7fa] to-white py-8 md:py-12 max-h-[250px] flex items-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-3 text-center">
            <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
              TOPP ONLINE CASINO I SVERIGE
            </h1>
            <p className="text-sm text-muted-foreground">{currentDate}</p>
            <p className="max-w-[600px] text-base text-muted-foreground">
              Vårt uppdrag är att ge den bästa jämförelsen av de ledande onlinecasinona i Sverige.
            </p>
          </div>
        </div>
      </section>

      <FeatureSection />

      <section id="top-casinos" className="py-6 md:py-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2 text-center">
              <h2 className="text-xl font-bold tracking-tighter sm:text-2xl">Våra bästa val</h2>
              <p className="text-sm text-muted-foreground">
                Vi har noggrant granskat och jämfört de bästa onlinecasinona i Sverige
              </p>
            </div>
            <div className="grid gap-4">
              {casinos.map((casino, index) => (
                <CasinoCard key={casino.name} {...casino} isTopRated={index === 0} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#e0f7fa] to-[#e8f5e9] py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2 text-center">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                Allt du behöver veta om de 10 bästa kasinosajterna i Sverige
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Välkomstbonusar</h3>
                <p>
                  De flesta svenska onlinecasinon lockar nya spelare med attraktiva välkomstpaket, ofta i form av
                  bonuspengar och gratissnurr. Dessa erbjudanden ger dig möjlighet att utforska casinot med extra
                  spelpengar.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Spelutbud</h3>
                <p>
                  Ett bra onlinecasino erbjuder ett brett utbud av spel, inklusive slots, bordsspel, live casino och
                  jackpotspel. Vi bedömer casinon baserat på deras spelutbud och kvaliteten på spelleverantörerna.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Betalningsmetoder</h3>
                <p>
                  Snabba och säkra betalningsmetoder är viktiga för en smidig spelupplevelse. Vi granskar vilka
                  betalningsalternativ som erbjuds, inklusive Trustly, Swish och banköverföringar.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Kundtjänst</h3>
                <p>
                  Tillgänglig och hjälpsam kundtjänst är avgörande för ett bra onlinecasino. Vi testar kundtjänsten för
                  att säkerställa att de är tillgängliga, kunniga och hjälpsamma.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ResponsibleGambling />
    </div>
  )
}
