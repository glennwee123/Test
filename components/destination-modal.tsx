"use client"

import { useEffect, useState } from "react"
import { X, MapPin, Calendar, Lightbulb, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import type { Destination } from "./destination-grid"

interface DestinationModalProps {
  destination: Destination | null
  onClose: () => void
}

export function DestinationModal({ destination, onClose }: DestinationModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    if (destination) {
      document.body.style.overflow = "hidden"
      setCurrentImageIndex(0)
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [destination])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [onClose])

  if (!destination) return null

  const allImages = [destination.image, ...destination.gallery]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-foreground/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-card w-full max-w-5xl max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-background/90 backdrop-blur flex items-center justify-center hover:bg-background transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid md:grid-cols-2">
          {/* Image Gallery */}
          <div className="relative aspect-square md:aspect-auto md:h-full bg-muted">
            <img
              src={allImages[currentImageIndex] || "/placeholder.svg"}
              alt={destination.name}
              className="w-full h-full object-cover"
            />

            {/* Gallery navigation */}
            {allImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/90 backdrop-blur flex items-center justify-center hover:bg-background transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/90 backdrop-blur flex items-center justify-center hover:bg-background transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Image indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                  {allImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex ? "bg-primary-foreground w-6" : "bg-primary-foreground/50"
                      }`}
                      aria-label={`View image ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}

            {/* Category badge */}
            <div className="absolute top-4 left-4">
              <span
                className={`px-4 py-2 text-xs uppercase tracking-wider ${
                  destination.category === "paris"
                    ? "bg-primary text-primary-foreground"
                    : "bg-accent text-accent-foreground"
                }`}
              >
                {destination.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-10">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{destination.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{destination.location}</span>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">{destination.name}</h2>

            <a
              href={destination.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6 text-sm"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Visit Website</span>
            </a>

            <p className="text-muted-foreground font-light leading-relaxed mb-8">{destination.fullDescription}</p>

            {/* Highlights */}
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-secondary flex items-center justify-center">✨</span>
                Highlights
              </h3>
              <ul className="space-y-2">
                {destination.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="font-light">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tips */}
            <div className="bg-secondary p-6">
              <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-primary" />
                Insider Tips
              </h3>
              <ul className="space-y-2">
                {destination.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground text-sm">
                    <span className="text-primary font-medium">{index + 1}.</span>
                    <span className="font-light">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
