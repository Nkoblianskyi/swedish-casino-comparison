import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Dice6 } from "lucide-react"

export default function Header() {
  return (
    <header className="border-b bg-black/80 backdrop-blur-sm relative z-20">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Dice6 className="h-6 w-6 text-secondary" />
          <span className="text-xl font-bold text-white">SvenskaToppCasinos</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium text-white hover:underline">
            Hem
          </Link>
          <Link href="/om-oss" className="text-sm font-medium text-white hover:underline">
            Om oss
          </Link>
        </nav>
        <Button asChild className="hidden md:inline-flex bg-secondary text-black hover:bg-secondary/90">
          <Link href="/#top-casinos">Jämför Casinon</Link>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="md:hidden bg-black/20 border-white/30 text-white hover:bg-black/30"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
          <span className="sr-only">Meny</span>
        </Button>
      </div>
    </header>
  )
}
