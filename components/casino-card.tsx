import Image from "next/image"
import { Star, Crown, ArrowRight } from "lucide-react"
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
        <div className="absolute -top-6 left-8 z-30">
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
          <div className="flex items-center gap-4 mb-2">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="relative h-20 w-40 overflow-hidden rounded-lg">
                <Image src={logo || "/placeholder.svg"} alt={name} fill className="object-contain" />
              </div>
            </div>

            {/* Name and Bonus */}
            <div className="flex-1 text-center">
              <h3 className="text-xl font-bold">{name}</h3>
              <p className="text-lg text-yellow-300 text-muted-foreground">{bonus}</p>
            </div>

            {/* Rating */}
            <div className="flex flex-col items-center gap-1">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold">{rating.toFixed(1)}</span>
                <span className="text-xs text-muted-foreground">Reviews ({reviews})</span>
              </div>
            </div>

            {/* Button */}
            <div className="flex flex-col items-center gap-1">
              <Button asChild className="px-6 py-2 h-auto text-lg bg-yellow-500 hover:bg-yellow-600 text-black">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  Hämta Bonus
                </a>
              </Button>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline flex items-center"
              >
                Besök {name} <ArrowRight className="h-3 w-3 ml-1" />
              </a>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-2">
            <p className="text-xs text-muted-foreground">
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
