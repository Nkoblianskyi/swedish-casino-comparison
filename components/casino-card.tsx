import Image from "next/image"
import { Star, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface CasinoCardProps {
  name: string
  logo: string
  bonus: string
  rating: number
  reviews: number
  link: string
  isTopRated?: boolean
}

export default function CasinoCard({ name, logo, bonus, rating, reviews, link, isTopRated = false }: CasinoCardProps) {
  return (
    <div className="relative mt-6 group">
      {isTopRated && (
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-30">
          <div className="bg-yellow-400 text-black px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg animate-pulse">
            <Crown className="h-4 w-4" />
            TOP 1
          </div>
        </div>
      )}
      <Card
        className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${isTopRated ? "border-2 border-yellow-400 shadow-md" : ""} hover:border-primary/50`}
      >
        <CardContent className="p-4">
          {/* Desktop layout - 4 columns */}
          <div className="hidden md:grid md:grid-cols-4 gap-4 items-center">
            {/* First column - Logo */}
            <div className="flex-shrink-0">
              <div className="relative h-24 w-24 overflow-hidden rounded-lg transition-transform duration-300 group-hover:scale-102">
                <Image src={logo || "/placeholder.svg"} alt={name} fill className="object-contain" />
              </div>
            </div>

            {/* Second column - Name and Bonus */}
            <div className="flex flex-col">
              <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-primary">{name}</h3>
              <p className="text-sm text-muted-foreground">{bonus}</p>
            </div>

            {/* Third column - Rating and Reviews */}
            <div className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-1">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400 transition-transform duration-300 group-hover:scale-102"
                    />
                  ))}
                </div>
                <span className="font-medium">{rating.toFixed(1)}</span>
              </div>
              <span className="text-xs text-muted-foreground">({reviews})</span>
            </div>

            {/* Fourth column - Button */}
            <div>
              <Button
                asChild
                className={`w-full transition-all duration-300 transform hover:scale-102 ${isTopRated ? "bg-yellow-500 hover:bg-yellow-600 text-black hover:shadow-[0_0_10px_rgba(234,179,8,0.5)]" : "bg-secondary hover:bg-secondary/90 hover:shadow-[0_0_10px_rgba(38,166,154,0.5)]"}`}
              >
                <a href={link} target="_blank" rel="noopener noreferrer">
                  Hämta Bonus
                </a>
              </Button>
            </div>
          </div>

          {/* Mobile layout - stacked */}
          <div className="md:hidden space-y-4">
            {/* Mobile first row - Logo and Name/Bonus */}
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <div className="relative h-16 w-16 overflow-hidden rounded-lg">
                  <Image src={logo || "/placeholder.svg"} alt={name} fill className="object-contain" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold">{name}</h3>
                <p className="text-sm text-muted-foreground">{bonus}</p>
              </div>
            </div>

            {/* Mobile second row - Rating and Button */}
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-1">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-medium text-sm">{rating.toFixed(1)}</span>
                <span className="text-xs text-muted-foreground">({reviews})</span>
              </div>
              <Button
                asChild
                size="sm"
                className={`transition-all duration-300 ${isTopRated ? "bg-yellow-500 hover:bg-yellow-600 text-black" : "bg-secondary hover:bg-secondary/90"}`}
              >
                <a href={link} target="_blank" rel="noopener noreferrer">
                  Hämta Bonus
                </a>
              </Button>
            </div>
          </div>

          {/* Disclaimer - same for both layouts */}
          <div className="mt-4 pt-4 border-t">
            <p className="text-xs text-muted-foreground text-center">
              18+. Gäller nya spelare vid första insättningen min. 100 kr. (100% bonus upp till max 3000 kr + 150
              gratisspins i Pirots 3). 20x omsättningskrav på insättning för att motta bonusen. Giltigt i 60 dagar.
              Regler & villkor gäller. stodlinjen.se - spelpaus.se. Spela ansvarsfullt.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
