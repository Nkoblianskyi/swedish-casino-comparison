import Image from "next/image"
import Link from "next/link"

export default function ResponsibleGambling() {
  return (
    <section className="bg-white py-8 border-t">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-xl font-bold text-center">Ansvarsfullt spelande</h2>

          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-600 text-white">
              <span className="text-xl font-bold">18+</span>
            </div>
          </div>

          <p className="text-center max-w-2xl text-muted-foreground">
            Vi främjar ansvarsfullt spelande och samarbetar med organisationer som hjälper personer med spelproblem.
            Spela alltid ansvarsfullt och sätt gränser för ditt spelande.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col items-center gap-4">
              <div className="relative h-16 w-48">
                <Image src="/stodli.png" alt="Stödlinjen" fill className="object-contain" />
              </div>
              <p className="text-sm text-center text-muted-foreground">
                Stödlinjen erbjuder kostnadsfri hjälp för dig som har problem med spel om pengar eller är anhörig.
              </p>
              <Link
                href="https://stodlinjen.se/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                Besök Stödlinjen
              </Link>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="relative h-16 w-48">
                <Image src="/spel.png" alt="Spelinspektionen" fill className="object-contain" />
              </div>
              <p className="text-sm text-center text-muted-foreground">
                Spelinspektionen är den svenska myndigheten som ansvarar för att säkerställa att spelmarknaden är laglig
                och säker.
              </p>
              <Link
                href="https://www.spelinspektionen.se/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                Besök Spelinspektionen
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
