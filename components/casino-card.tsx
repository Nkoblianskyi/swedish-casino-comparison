import Image from "next/image"
import { Star, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

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
        <CardContent className="p-0">
          <div className="p-4">
            <div className="flex flex-row items-center gap-3 text-center">
              <div className="relative h-16 w-32 overflow-hidden rounded-lg transition-transform duration-300 group-hover:scale-102">
                <Image src={logo || "/placeholder.svg"} alt={name} width={400} height={200} className="object-cover" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold transition-colors duration-300 group-hover:text-primary">{name}</h3>
                <p className="text-sm text-muted-foreground">{bonus}</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-3 w-3 fill-yellow-400 text-yellow-400 transition-transform duration-300 group-hover:scale-102"
                      />
                    ))}
                  </div>
                  <span className="font-medium">{rating.toFixed(1)}</span>
                  <span className="text-xs text-muted-foreground">({reviews})</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter
          className={`flex flex-col gap-3 p-4 ${isTopRated ? "bg-gradient-to-r from-yellow-50 to-yellow-100" : "bg-gradient-to-r from-[#e0f7fa] to-[#e8f5e9]"}`}
        >
          <Button
            asChild
            className={`w-full transition-all duration-300 transform hover:scale-102 ${isTopRated ? "bg-yellow-500 hover:bg-yellow-600 text-black hover:shadow-[0_0_10px_rgba(234,179,8,0.5)]" : "bg-secondary hover:bg-secondary/90 hover:shadow-[0_0_10px_rgba(38,166,154,0.5)]"}`}
          >
            <a href={link} target="_blank" rel="noopener noreferrer">
              Hämta Bonus
            </a>
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            18+. Gäller nya spelare vid första insättningen min. 100 kr. (100% bonus upp till max 3000 kr + 150
            gratisspins i Pirots 3). 20x omsättningskrav på insättning för att motta bonusen. Giltigt i 60 dagar. Regler
            & villkor gäller. stodlinjen.se - spelpaus.se. Spela ansvarsfullt.
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
