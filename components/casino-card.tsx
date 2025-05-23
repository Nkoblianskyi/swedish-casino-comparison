"use client"

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
        <div className="absolute -top-6 left-8 md:left-8 z-30">
          <div className="bg-secondary text-black px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg animate-pulse">
            <Crown className="h-4 w-4" />
            TOP 1
          </div>
        </div>
      )}
      <Card
        className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${isTopRated ? "border-2 border-secondary shadow-md" : ""} hover:border-primary/50 relative`}
      >
        {/* Make the entire card clickable */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-10"
          aria-label={`Visit ${name}`}
        >
          <span className="sr-only">Visit {name}</span>
        </a>

        <CardContent className="p-4 relative">
          {/* Desktop layout */}
          <div className="hidden md:flex md:items-center md:gap-4 mb-2">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="relative h-20 w-40 overflow-hidden rounded-lg">
                <Image src={logo || "/placeholder.svg"} alt={name} fill className="object-contain" />
              </div>
            </div>

            {/* Name and Bonus */}
            <div className="flex-1 text-center">
              <h3 className="text-xl font-bold">{name}</h3>
              <p className="text-lg font-semibold text-primary bg-primary/5 border border-primary/20 rounded-md py-1 px-2 inline-block">
                {bonus}
              </p>
            </div>

            {/* Rating */}
            <div className="flex flex-col items-center gap-1">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold">{rating.toFixed(1)}</span>
                <span className="text-xs text-muted-foreground">Reviews ({reviews})</span>
              </div>
            </div>

            {/* Button */}
            <div className="flex flex-col items-center gap-1">
              <Button
                className="px-6 py-2 h-auto text-lg bg-secondary hover:bg-secondary/90 text-black relative z-20"
                onClick={(e) => e.stopPropagation()}
              >
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-20"
                  onClick={(e) => e.stopPropagation()}
                >
                  Hämta Bonus
                </a>
              </Button>
              <span className="text-sm text-primary flex items-center">
                Besök {name} <ArrowRight className="h-3 w-3 ml-1" />
              </span>
            </div>
          </div>

          {/* Mobile layout */}
          <div className="md:hidden">
            <div className="flex items-start gap-3 mb-3">
              {/* Logo */}
              <div className="flex-shrink-0">
                <div className="relative h-16 w-20 overflow-hidden rounded-lg">
                  <Image src={logo || "/placeholder.svg"} alt={name} fill className="object-contain" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-bold">{name}</h3>
                <p className="text-sm font-semibold text-primary bg-primary/5 border border-primary/20 rounded-md py-1 px-2 inline-block mb-2">
                  {bonus}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <span className="text-lg font-bold">{rating.toFixed(1)}</span>
                  <span className="text-xs text-muted-foreground">Reviews ({reviews})</span>
                </div>
              </div>
            </div>

            {/* Mobile Button */}
            <Button
              className="w-full bg-secondary hover:bg-secondary/90 text-black mb-2 relative z-20"
              onClick={(e) => e.stopPropagation()}
            >
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-20"
                onClick={(e) => e.stopPropagation()}
              >
                Hämta Bonus
              </a>
            </Button>

            <div className="text-center">
              <span className="text-sm text-primary flex items-center justify-center">
                Besök {name} <ArrowRight className="h-3 w-3 ml-1" />
              </span>
            </div>
          </div>

          {/* Disclaimer - same for both layouts */}
          <div className="mt-2 pt-2 border-t">
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
