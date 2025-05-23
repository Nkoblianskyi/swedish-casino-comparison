"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem("cookieConsent")
    if (!hasConsented) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "false")
    setIsVisible(false)
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-primary to-secondary text-white p-4 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-1">Vi använder cookies</h3>
          <p className="text-sm">
            Vi använder cookies för att förbättra din upplevelse på vår webbplats. Genom att fortsätta använda
            webbplatsen godkänner du användningen av cookies.
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={handleDecline}
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white/20"
          >
            Avvisa
          </Button>
          <Button onClick={handleAccept} className="bg-white text-primary hover:bg-white/90">
            Acceptera
          </Button>
          <Button onClick={handleClose} variant="ghost" size="icon" className="text-white hover:bg-white/20">
            <X className="h-4 w-4" />
            <span className="sr-only">Stäng</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
