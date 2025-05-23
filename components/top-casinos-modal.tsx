"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Image from "next/image"
import { Star, Crown } from "lucide-react"

interface Casino {
  name: string
  logo: string
  bonus: string
  rating: number
  reviews: number
  link: string
}

export default function TopCasinosModal({ casinos }: { casinos: Casino[] }) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Show modal after a short delay
    const timer = setTimeout(() => {
      // Check if user has already seen the modal
      const hasSeenModal = sessionStorage.getItem("hasSeenModal")
      if (!hasSeenModal) {
        setIsOpen(true)
        sessionStorage.setItem("hasSeenModal", "true")
      }
    }, 3000) // Show after 3 seconds

    return () => clearTimeout(timer)
  }, [])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[900px] p-0 bg-gradient-to-r from-[#e0f7fa] to-[#e8f5e9] w-[95vw] max-w-full">
        <DialogHeader className="p-2 sm:p-4 border-b">
          <div className="flex items-center justify-center">
            <DialogTitle className="text-lg sm:text-2xl font-bold">Top Bonusser</DialogTitle>
          </div>
        </DialogHeader>
        <div className="p-2 sm:p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-4">
            {casinos.slice(0, 3).map((casino, index) => (
              <CasinoModalCard key={casino.name} {...casino} isTopRated={index === 0} />
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

function CasinoModalCard({
  name,
  logo,
  bonus,
  rating,
  reviews,
  link,
  isTopRated = false,
}: Casino & { isTopRated?: boolean }) {
  return (
    <div className="relative mt-6 group">
      {isTopRated && (
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-yellow-400 text-black px-3 py-1 rounded-full font-bold text-sm flex items-center gap-1 shadow-md animate-pulse">
            <Crown className="h-4 w-4" />
            TOP 1
          </div>
        </div>
      )}
      <div
        className={`bg-white rounded-lg overflow-hidden shadow-sm border transition-all duration-300 hover:shadow-lg ${isTopRated ? "border-2 border-yellow-400 shadow-md" : ""} hover:border-primary/50`}
      >
        <div className="p-2">
          <div className="grid grid-cols-3 gap-2 items-center">
            <div className="flex justify-center">
              <div className="relative h-8 w-12 sm:h-12 sm:w-18 overflow-hidden rounded-lg transition-transform duration-300 group-hover:scale-102">
                <Image src={logo || "/placeholder.svg"} alt={name} fill className="object-cover" />
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg sm:text-xl font-bold transition-colors duration-300 group-hover:text-primary">
                {name}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">{bonus}</p>
            </div>
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-1">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-3 w-3 fill-yellow-400 text-yellow-400 transition-transform duration-300 group-hover:scale-102"
                    />
                  ))}
                </div>
                <span className="font-medium text-sm">{rating.toFixed(1)}</span>
              </div>
              <span className="text-xs text-muted-foreground">({reviews})</span>
            </div>
          </div>
        </div>
        <div
          className={`p-2 ${isTopRated ? "bg-gradient-to-r from-yellow-50 to-yellow-100" : "bg-gradient-to-r from-[#e0f7fa] to-[#e8f5e9]"}`}
        >
          <Button
            asChild
            className={`w-full text-[10px] sm:text-xs py-1 h-auto transition-all duration-300 transform hover:scale-102 ${isTopRated ? "bg-yellow-500 hover:bg-yellow-600 text-black hover:shadow-[0_0_10px_rgba(234,179,8,0.5)]" : "bg-secondary hover:bg-secondary/90 hover:shadow-[0_0_10px_rgba(38,166,154,0.5)]"}`}
          >
            <a href={link} target="_blank" rel="noopener noreferrer">
              Hämta Bonus
            </a>
          </Button>
          <p className="text-[8px] sm:text-[10px] text-muted-foreground text-center mt-1 line-clamp-2">
            18+. Gäller nya spelare. Min. 100 kr. 20x omsättningskrav. Regler & villkor gäller. stodlinjen.se -
            spelpaus.se
          </p>
        </div>
      </div>
    </div>
  )
}
