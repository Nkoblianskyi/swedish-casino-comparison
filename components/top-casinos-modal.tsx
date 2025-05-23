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
      <DialogContent className="sm:max-w-[900px] p-0 bg-black/90 border border-secondary/30 w-[95vw] max-w-full">
        <DialogHeader className="p-2 md:p-4 border-b border-secondary/20">
          <div className="flex items-center justify-center">
            <DialogTitle className="text-lg md:text-2xl font-bold text-secondary">Top Bonusser</DialogTitle>
          </div>
        </DialogHeader>
        <div className="p-2 md:p-4 lg:p-6 xl:p-8">
          {/* Desktop layout */}
          <div className="hidden md:grid md:grid-cols-3 gap-4 lg:gap-6 xl:gap-8">
            {casinos.slice(0, 3).map((casino, index) => (
              <DesktopCasinoCard key={casino.name} {...casino} isTopRated={index === 0} />
            ))}
          </div>

          {/* Mobile layout */}
          <div className="md:hidden space-y-2">
            {casinos.slice(0, 3).map((casino, index) => (
              <MobileCasinoCard key={casino.name} {...casino} isTopRated={index === 0} />
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

function DesktopCasinoCard({
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
          <div className="bg-premium text-white px-3 py-1 rounded-full font-bold text-sm flex items-center gap-1 shadow-md animate-pulse">
            <Crown className="h-4 w-4" />
            TOP 1
          </div>
        </div>
      )}
      <div
        className={`bg-black/60 backdrop-blur-sm rounded-lg overflow-hidden shadow-sm border-2 ${isTopRated ? "border-premium" : "border-gray-800"} transition-all duration-300 hover:shadow-lg p-4`}
      >
        <div className="flex flex-col items-center">
          <div className="w-full mb-4">
            <div className="relative h-32 w-full overflow-hidden rounded-lg bg-white p-2">
              <Image src={logo || "/placeholder.svg"} alt={name} fill className="object-contain" />
            </div>
          </div>

          <div className="w-full text-center mb-2">
            <h3 className="text-xl font-bold text-white">{name}</h3>
            <p className="text-sm text-secondary bg-secondary/10 border border-secondary/30 rounded-md py-1 px-2 inline-block">
              {bonus}
            </p>
          </div>

          <div className="flex items-center justify-center gap-1 mb-4">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
              ))}
            </div>
            <span className="font-medium text-sm text-white">{rating.toFixed(1)}</span>
            <span className="text-xs text-white/60">({reviews})</span>
          </div>

          <Button
            asChild
            className={`w-full ${isTopRated ? "bg-premium hover:bg-premium/90 text-white" : "bg-secondary hover:bg-secondary/90 text-black"}`}
          >
            <a href={link} target="_blank" rel="noopener noreferrer">
              Hämta Bonus
            </a>
          </Button>

          <p className="text-[10px] text-white/60 text-center mt-2">
            18+. Gäller nya spelare. Min. 100 kr. 20x omsättningskrav. Regler & villkor gäller.
          </p>
        </div>
      </div>
    </div>
  )
}

function MobileCasinoCard({
  name,
  logo,
  bonus,
  rating,
  reviews,
  link,
  isTopRated = false,
}: Casino & { isTopRated?: boolean }) {
  return (
    <div className="relative group">
      {isTopRated && (
        <div className="absolute -top-2 left-2 z-50">
          <div className="bg-premium text-white px-2 py-0.5 rounded-full font-bold text-xs flex items-center gap-1 shadow-md">
            <Crown className="h-3 w-3" />
            TOP 1
          </div>
        </div>
      )}
      <div
        className={`bg-black/60 backdrop-blur-sm rounded-lg overflow-hidden shadow-sm border ${isTopRated ? "border-premium" : "border-gray-800"} p-2`}
      >
        <div className="flex items-center gap-2">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="relative h-12 w-16 overflow-hidden rounded bg-white p-1">
              <Image src={logo || "/placeholder.svg"} alt={name} fill className="object-contain" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-bold truncate text-white">{name}</h3>
            <p className="text-xs text-secondary truncate">{bonus}</p>
            <div className="flex items-center gap-1 mt-0.5">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-2.5 w-2.5 fill-secondary text-secondary" />
                ))}
              </div>
              <span className="font-medium text-xs text-white">{rating.toFixed(1)}</span>
              <span className="text-[10px] text-white/60">({reviews})</span>
            </div>
          </div>

          {/* Button */}
          <div className="flex-shrink-0">
            <Button
              asChild
              size="sm"
              className={`h-8 px-3 text-xs ${isTopRated ? "bg-premium hover:bg-premium/90 text-white" : "bg-secondary hover:bg-secondary/90 text-black"}`}
            >
              <a href={link} target="_blank" rel="noopener noreferrer">
                Bonus
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
