import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Om oss | Topp 10 Bästa Online Casino i Sverige",
  description:
    "Lär dig mer om vårt team och vår mission att tillhandahålla oberoende recensioner av onlinecasinon i Sverige.",
}

export default function AboutPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Om oss</h1>
          <p className="text-muted-foreground">Lär dig mer om vårt team och vår mission</p>
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Vilka vi är</h2>
          <p>
            Vi är ett team av erfarna casinoentusiaster och branschexperter som har arbetat inom onlinespelbranschen i
            många år. Vår gemensamma passion för casinospel och vår önskan att hjälpa spelare att hitta de bästa och
            säkraste onlinecasinona ledde till skapandet av denna jämförelseplattform.
          </p>
          <h2 className="text-2xl font-bold">Vår mission</h2>
          <p>
            Vår mission är att tillhandahålla den mest omfattande, aktuella och oberoende jämförelsen av onlinecasinon i
            Sverige. Vi strävar efter att ge spelare den information de behöver för att fatta välgrundade beslut om var
            de ska spela.
          </p>
          <h2 className="text-2xl font-bold">Vår granskningsprocess</h2>
          <p>
            Varje casino som listas på vår webbplats genomgår en noggrann granskningsprocess. Vi testar casinot själva,
            analyserar användarrecensioner och samlar in data om bonusar, spelutbud, betalningsmetoder, kundtjänst och
            mer. Våra betyg baseras på en kombination av dessa faktorer.
          </p>
          <h2 className="text-2xl font-bold">Oberoende recensioner</h2>
          <p>
            Vi är stolta över att tillhandahålla helt oberoende recensioner. Även om vi kan få ersättning från vissa av
            de listade operatörerna, påverkar detta inte våra betyg eller recensioner. Vår främsta lojalitet ligger hos
            våra användare, och vi strävar alltid efter att ge ärlig och opartisk information.
          </p>
          <h2 className="text-2xl font-bold">Ansvarsfullt spelande</h2>
          <p>
            Vi främjar ansvarsfullt spelande och stödjer organisationer som Stödlinjen och Spelinspektionen. Vi
            uppmuntrar alla spelare att spela ansvarsfullt och att söka hjälp om de upplever problem med sitt spelande.
          </p>
        </div>
      </div>
    </div>
  )
}
