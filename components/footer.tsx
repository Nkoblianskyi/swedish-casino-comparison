import { Shield, Clock, Award, Dice6 } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black/80 border-t border-white/10 relative z-20">
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Dice6 className="h-5 w-5 text-secondary" />
              <h3 className="text-lg font-bold text-white">SvenskaToppCasinos</h3>
            </div>
            <p className="text-sm text-white/70">
              Vårt uppdrag är att ge den bästa jämförelsen av de ledande onlinecasinona i Sverige.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/70">
              <Shield className="h-4 w-4" />
              <span>SE Licensierad</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/70">
              <Award className="h-4 w-4" />
              <span>Säkert & pålitlig</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/70">
              <Clock className="h-4 w-4" />
              <span>Dagligen uppdaterad</span>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Sidor</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-white/80 hover:text-white hover:underline">
                Hem
              </Link>
              <Link href="/om-oss" className="text-sm text-white/80 hover:text-white hover:underline">
                Om oss
              </Link>
              <Link href="/tjanstevillkor" className="text-sm text-white/80 hover:text-white hover:underline">
                Tjänstevillkor
              </Link>
              <Link href="/integritetspolicy" className="text-sm text-white/80 hover:text-white hover:underline">
                Integritetspolicy
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Ansvarsfullt spelande</h3>
            <p className="text-sm text-white/70">
              Vi rekommenderar ansvarsfullt spelande och stödjer Stödlinjen och Spelinspektionen.
            </p>
            <div className="flex flex-col gap-2">
              <Link
                href="https://www.spelinspektionen.se/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/80 hover:text-white hover:underline flex items-center gap-1"
              >
                <span>Spelinspektionen</span>
              </Link>
              <Link
                href="https://stodlinjen.se/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/80 hover:text-white hover:underline flex items-center gap-1"
              >
                <span>Stödlinjen</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Ansvarsfriskrivning</h3>
            <p className="text-sm text-white/70">
              Denna webbplats tillhandahåller oberoende recensioner och kan få ersättning från de listade operatörerna.
              Detta påverkar inte våra betyg eller recensioner.
            </p>
            <p className="text-sm text-white/70">© {currentYear} SvenskaToppCasinos. Alla rättigheter förbehållna.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
