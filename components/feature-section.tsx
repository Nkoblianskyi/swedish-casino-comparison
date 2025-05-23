import { Clock, Award, Zap } from "lucide-react"

export default function FeatureSection() {
  return (
    <div className="bg-gradient-to-r from-[#e0f7fa] to-[#e8f5e9] py-3 max-h-[100px] overflow-x-auto">
      <div className="container px-2 sm:px-4 md:px-6">
        <div className="flex justify-between gap-2 sm:gap-3 md:grid md:gap-3 md:grid-cols-4 items-center w-full overflow-x-auto no-scrollbar">
          <div className="flex flex-col items-center gap-0.5 sm:gap-1 text-center min-w-[70px] sm:min-w-[80px]">
            <div className="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-primary/20">
              <div className="relative w-3 h-2.5 sm:w-4 sm:h-3 bg-blue-600 rounded-sm overflow-hidden animate-pulse hover:animate-bounce">
                <div className="absolute top-0 left-0.5 sm:left-1 w-0.5 h-full bg-yellow-400"></div>
                <div className="absolute top-0.5 sm:top-1 left-0 w-full h-0.5 bg-yellow-400"></div>
              </div>
            </div>
            <h3 className="text-[10px] sm:text-xs font-bold">SE Licensierad</h3>
            <p className="text-[8px] sm:text-xs text-muted-foreground leading-tight hidden md:block">
              Alla listade casinon har svensk spellicens
            </p>
          </div>
          <div className="flex flex-col items-center gap-0.5 sm:gap-1 text-center min-w-[70px] sm:min-w-[80px]">
            <div className="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-primary/20">
              <Award className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
            </div>
            <h3 className="text-[10px] sm:text-xs font-bold">Säkert & pålitlig</h3>
            <p className="text-[8px] sm:text-xs text-muted-foreground leading-tight hidden md:block">
              Verifierade och pålitliga operatörer
            </p>
          </div>
          <div className="flex flex-col items-center gap-0.5 sm:gap-1 text-center min-w-[70px] sm:min-w-[80px]">
            <div className="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-primary/20">
              <Zap className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
            </div>
            <h3 className="text-[10px] sm:text-xs font-bold">Snabba uttag</h3>
            <p className="text-[8px] sm:text-xs text-muted-foreground leading-tight hidden md:block">
              Casinon med snabba och enkla utbetalningar
            </p>
          </div>
          <div className="flex flex-col items-center gap-0.5 sm:gap-1 text-center min-w-[70px] sm:min-w-[80px]">
            <div className="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-primary/20">
              <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
            </div>
            <h3 className="text-[10px] sm:text-xs font-bold">Dagligen uppdaterad</h3>
            <p className="text-[8px] sm:text-xs text-muted-foreground leading-tight hidden md:block">
              Aktuell information och bonusar
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
