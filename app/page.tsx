import { HeroSection } from "@/components/hero-section"
import { ItineraryOverview } from "@/components/itinerary-overview"
import { DestinationGrid } from "@/components/destination-grid"
import { WeatherSection } from "@/components/weather-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ItineraryOverview />
      <DestinationGrid />
      <WeatherSection />
      <Footer />
    </main>
  )
}
