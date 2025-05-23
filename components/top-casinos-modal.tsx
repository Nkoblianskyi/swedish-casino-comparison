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
        <div className="p-2 sm:p-4 lg:p-6 xl:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-4 lg:gap-6 xl:gap-8">
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
        className={`bg-white rounded-lg overflow-hidden shadow-sm border-2 ${isTopRated ? "border-yellow-400" : "border-gray-100"} transition-all duration-300 hover:shadow-lg p-4`}
      >
        <div className="flex flex-col items-center">
          <div className="w-full mb-4">
            <div className="relative h-32 w-full overflow-hidden rounded-lg">
              <Image src={logo || "/placeholder.svg"} alt={name} fill className="object-contain" />
            </div>
          </div>

          <div className="w-full text-center mb-2">
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-sm text-muted-foreground">{bonus}</p>
          </div>

          <div className="flex items-center justify-center gap-1 mb-4">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-medium text-sm">{rating.toFixed(1)}</span>
            <span className="text-xs text-muted-foreground">({reviews})</span>
          </div>

          <Button
            asChild
            className={`w-full ${isTopRated ? "bg-yellow-500 hover:bg-yellow-600 text-black" : "bg-secondary hover:bg-secondary/90"}`}
          >
            <a href={link} target="_blank" rel="noopener noreferrer">
              Hämta Bonus
            </a>
          </Button>

          <p className="text-[10px] text-muted-foreground text-center mt-2">
            18+. Gäller nya spelare. Min. 100 kr. 20x omsättningskrav. Regler & villkor gäller.
          </p>
        </div>
      </div>
    </div>
  )
}
