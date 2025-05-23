import { Shield, Clock, Award, Dice6 } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-[#e0f7fa] to-[#e8f5e9] border-t">
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Dice6 className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-bold">SvenskaToppCasinos</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Vårt uppdrag är att ge den bästa jämförelsen av de ledande onlinecasinona i Sverige.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4" />
              <span>SE Licensierad</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Award className="h-4 w-4" />
              <span>Säkert & pålitlig</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>Dagligen uppdaterad</span>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Sidor</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-sm hover:underline">
                Hem
              </Link>
              <Link href="/om-oss" className="text-sm hover:underline">
                Om oss
              </Link>
              <Link href="/kontakta-oss" className="text-sm hover:underline">
                Kontakta oss
              </Link>
              <Link href="/tjanstevillkor" className="text-sm hover:underline">
                Tjänstevillkor
              </Link>
              <Link href="/integritetspolicy" className="text-sm hover:underline">
                Integritetspolicy
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Ansvarsfullt spelande</h3>
            <p className="text-sm text-muted-foreground">
              Vi rekommenderar ansvarsfullt spelande och stödjer Stödlinjen och Spelinspektionen.
            </p>
            <div className="flex flex-col gap-2">
              <Link
                href="https://www.spelinspektionen.se/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:underline flex items-center gap-1"
              >
                <span>Spelinspektionen</span>
              </Link>
              <Link
                href="https://stodlinjen.se/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:underline flex items-center gap-1"
              >
                <span>Stödlinjen</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Ansvarsfriskrivning</h3>
            <p className="text-sm text-muted-foreground">
              Denna webbplats tillhandahåller oberoende recensioner och kan få ersättning från de listade operatörerna.
              Detta påverkar inte våra betyg eller recensioner.
            </p>
            <p className="text-sm text-muted-foreground">
              © {currentYear} SvenskaToppCasinos. Alla rättigheter förbehållna.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
