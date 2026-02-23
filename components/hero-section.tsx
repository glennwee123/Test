import { Heart, MapPin, Calendar, Users } from "lucide-react"
import { PdfExportButton } from "@/components/pdf-export-button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 flex">
        {/* Paris - Eiffel Tower (left side) */}
        <div className="w-1/2 h-full relative overflow-hidden">
          <img
            src="/paris-eiffel-tower-at-sunset-with-warm-golden-ligh.jpg"
            alt="Paris at sunset"
            className="w-full h-full object-cover object-top"
          />
        </div>
        {/* Burgundy - Vineyards (right side) */}
        <div className="w-1/2 h-full relative">
          <img
            src="/burgundy-vineyard-rolling-hills-golden-hour-autumn.jpg"
            alt="Burgundy vineyards"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Heart className="w-5 h-5 text-red-500 fill-red-500" />
          <span className="text-primary-foreground/90 uppercase tracking-[0.3em] text-sm font-medium">
            A Journey Through France
          </span>
          <Heart className="w-5 h-5 text-red-500 fill-red-500" />
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-primary-foreground mb-6 tracking-tight text-balance leading-none">
          Ed and Trina's 30th Anniversary
        </h1>

        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
          Paris & Burgundy
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 text-primary-foreground/80 mt-12">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <span className="text-sm tracking-wide">2–5 April 2026</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            <span className="text-sm tracking-wide">Paris • Beaune</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            <span className="text-sm tracking-wide">12 Lifelong Friends</span>
          </div>
        </div>

        <div className="mt-10">
          <PdfExportButton />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
