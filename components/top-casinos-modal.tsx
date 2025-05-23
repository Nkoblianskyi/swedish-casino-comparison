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
    }, 8000) // Show after 3 seconds

    return () => clearTimeout(timer)
  }, [])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[900px] p-0 bg-gradient-to-r from-[#e0f7fa] to-[#e8f5e9] w-[95vw] max-w-full">
        <DialogHeader className="p-1 sm:p-2 border-b">
          <div className="flex items-center justify-center">
            <DialogTitle className="text-base sm:text-lg md:text-xl font-bold">Top Bonusser</DialogTitle>
          </div>
        </DialogHeader>
        <div className="p-1 sm:p-2">
          <div className="grid grid-cols-1 gap-2 sm:gap-4">
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
    <div className="relative mt-4 group">
      {isTopRated && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-yellow-400 text-black px-2 py-0.5 rounded-full font-bold text-xs flex items-center gap-1 shadow-md animate-pulse">
            <Crown className="h-3 w-3" />
            TOP 1
          </div>
        </div>
      )}
      <div
        className={`bg-white rounded-lg overflow-hidden shadow-sm border transition-all duration-300 hover:shadow-lg ${
          isTopRated ? "border-2 border-yellow-400 shadow-md" : ""
        } hover:border-primary/50`}
      >
        <div className="p-1.5 sm:p-2">
          <div className="flex items-center gap-2">
            <div className="flex-shrink-0">
              <div className="relative h-12 w-16 sm:h-16 sm:w-24 overflow-hidden rounded-lg">
                <Image src={logo || "/placeholder.svg"} alt={name} fill className="object-contain" />
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="text-sm sm:text-base font-bold truncate">{name}</h3>
              <p className="text-xs text-muted-foreground truncate">{bonus}</p>
              <div className="flex items-center gap-1 mt-0.5">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-2 w-2 sm:h-3 sm:w-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-medium text-xs">{rating.toFixed(1)}</span>
                <span className="text-[10px] text-muted-foreground">({reviews})</span>
              </div>
            </div>

            <Button
              asChild
              size="sm"
              className={`h-8 text-xs px-2 ${
                isTopRated ? "bg-yellow-500 hover:bg-yellow-600 text-black" : "bg-secondary hover:bg-secondary/90"
              }`}
            >
              <a href={link} target="_blank" rel="noopener noreferrer">
                Hämta Bonus
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
