import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Integritetspolicy | Topp 10 Bästa Online Casino i Sverige",
  description: "Läs vår integritetspolicy för att förstå hur vi samlar in och använder dina personuppgifter.",
}

export default function PrivacyPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Integritetspolicy</h1>
          <p className="text-muted-foreground">Senast uppdaterad: 23 maj 2025</p>
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">1. Introduktion</h2>
          <p>
            Din integritet är viktig för oss. Denna integritetspolicy förklarar hur vi samlar in, använder och skyddar
            dina personuppgifter när du använder vår webbplats SvenskaToppCasinos.
          </p>
          <h2 className="text-2xl font-bold">2. Insamling av information</h2>
          <p>Vi samlar in följande typer av information:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Personuppgifter:</strong> När du kontaktar oss via vårt kontaktformulär samlar vi in ditt namn,
              e-postadress och eventuell annan information du väljer att dela med oss.
            </li>
            <li>
              <strong>Användningsdata:</strong> Vi samlar automatiskt in information om hur du interagerar med vår
              webbplats, inklusive IP-adress, webbläsartyp, besökta sidor och tidpunkt för besök.
            </li>
            <li>
              <strong>Cookies:</strong> Vi använder cookies för att förbättra din upplevelse på vår webbplats. Se vår
              cookiepolicy för mer information.
            </li>
          </ul>
          <h2 className="text-2xl font-bold">3. Användning av information</h2>
          <p>Vi använder den insamlade informationen för att:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Tillhandahålla och förbättra vår webbplats</li>
            <li>Svara på dina förfrågningar och kommunicera med dig</li>
            <li>Analysera användningsmönster för att förbättra användarupplevelsen</li>
            <li>Skydda vår webbplats och våra användare</li>
          </ul>
          <h2 className="text-2xl font-bold">4. Delning av information</h2>
          <p>Vi delar inte dina personuppgifter med tredje parter, förutom i följande fall:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Med tjänsteleverantörer som hjälper oss att driva vår webbplats</li>
            <li>Om det krävs enligt lag eller för att skydda våra rättigheter</li>
            <li>Med ditt uttryckliga samtycke</li>
          </ul>
          <h2 className="text-2xl font-bold">5. Tredjepartstjänster</h2>
          <p>Vi använder följande tredjepartstjänster på vår webbplats:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Google Analytics för att analysera webbplatstrafik</li>
            <li>Kontaktformulärsleverantörer för att hantera förfrågningar</li>
          </ul>
          <p>
            Dessa tjänster kan samla in information om dig. Vi uppmuntrar dig att läsa deras respektive
            integritetspolicyer.
          </p>
          <h2 className="text-2xl font-bold">6. Dina rättigheter</h2>
          <p>Du har följande rättigheter avseende dina personuppgifter:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Rätt till tillgång till dina personuppgifter</li>
            <li>Rätt till rättelse av felaktiga personuppgifter</li>
            <li>Rätt till radering av dina personuppgifter</li>
            <li>Rätt till begränsning av behandling</li>
            <li>Rätt till dataportabilitet</li>
            <li>Rätt att invända mot behandling</li>
          </ul>
          <p>
            För att utöva dessa rättigheter, vänligen kontakta oss via kontaktformuläret på vår webbplats eller via
            e-post på info@svenskatoppcasinos.se.
          </p>
          <h2 className="text-2xl font-bold">7. Ändringar av integritetspolicyn</h2>
          <p>
            Vi förbehåller oss rätten att ändra denna integritetspolicy när som helst. Ändringar träder i kraft
            omedelbart efter att de har publicerats på webbplatsen. Vi uppmuntrar dig att regelbundet granska denna
            policy för att hålla dig informerad om hur vi skyddar dina personuppgifter.
          </p>
          <h2 className="text-2xl font-bold">8. Kontakt</h2>
          <p>
            Om du har några frågor om denna integritetspolicy, vänligen kontakta oss via kontaktformuläret på vår
            webbplats eller via e-post på info@svenskatoppcasinos.se.
          </p>
        </div>
      </div>
    </div>
  )
}
