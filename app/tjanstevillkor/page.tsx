import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tjänstevillkor | Topp 10 Bästa Online Casino i Sverige",
  description: "Läs våra tjänstevillkor för användning av vår casinojämförelseplattform.",
}

export default function TermsPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Tjänstevillkor</h1>
          <p className="text-muted-foreground">Senast uppdaterad: 23 maj 2025</p>
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">1. Introduktion</h2>
          <p>
            Välkommen till SvenskaToppCasinos. Dessa tjänstevillkor gäller för din användning av vår webbplats. Genom
            att använda vår webbplats godkänner du dessa villkor i sin helhet. Om du inte godkänner dessa villkor,
            vänligen använd inte vår webbplats.
          </p>
          <h2 className="text-2xl font-bold">2. Definitioner</h2>
          <p>
            "Webbplatsen" avser SvenskaToppCasinos. "Vi", "oss" eller "vår" avser ägarna av webbplatsen. "Du" avser
            användaren eller besökaren av webbplatsen. "Innehåll" avser all text, bilder, ljud, video, grafik, och annan
            information som publiceras på webbplatsen.
          </p>
          <h2 className="text-2xl font-bold">3. Användning av webbplatsen</h2>
          <p>
            Webbplatsen tillhandahåller information och jämförelser av onlinecasinon i Sverige. Vi är en oberoende
            jämförelseplattform och driver inte själva något casino eller erbjuder några speltjänster.
          </p>
          <p>
            All information på webbplatsen är endast för informationsändamål. Vi strävar efter att tillhandahålla
            korrekt och uppdaterad information, men vi kan inte garantera att all information är korrekt eller
            fullständig.
          </p>
          <h2 className="text-2xl font-bold">4. Åldersgräns</h2>
          <p>
            Användning av vår webbplats är begränsad till personer som är 18 år eller äldre. Genom att använda vår
            webbplats bekräftar du att du är 18 år eller äldre.
          </p>
          <h2 className="text-2xl font-bold">5. Ansvarsfriskrivning</h2>
          <p>
            Webbplatsen tillhandahålls "i befintligt skick" utan några garantier, uttryckliga eller underförstådda. Vi
            tar inget ansvar för eventuella förluster eller skador som kan uppstå till följd av användning av vår
            webbplats eller information som tillhandahålls på den.
          </p>
          <p>
            Vi kan få ersättning från vissa av de listade operatörerna, men detta påverkar inte våra betyg eller
            recensioner. Vår främsta lojalitet ligger hos våra användare, och vi strävar alltid efter att ge ärlig och
            opartisk information.
          </p>
          <h2 className="text-2xl font-bold">6. Ändringar av villkoren</h2>
          <p>
            Vi förbehåller oss rätten att ändra dessa villkor när som helst. Ändringar träder i kraft omedelbart efter
            att de har publicerats på webbplatsen. Din fortsatta användning av webbplatsen efter sådana ändringar utgör
            ditt godkännande av de nya villkoren.
          </p>
          <h2 className="text-2xl font-bold">7. Kontakt</h2>
          <p>
            Om du har några frågor om dessa villkor, vänligen kontakta oss via kontaktformuläret på vår webbplats eller
            via e-post på info@svenskatoppcasinos.se.
          </p>
        </div>
      </div>
    </div>
  )
}
