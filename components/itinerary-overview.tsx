import { Wine, Utensils, Train, Hotel, Shirt, Camera, Car, ShoppingBag, Sun } from "lucide-react"
import Link from "next/link"

const schedule = [
  {
    date: "2 April",
    day: "Day 1",
    location: "Paris",
    events: [
      { time: "Check-in", description: "Hotel de Crillon (Rosewood Hotel)", icon: Hotel },
      { time: "10:15 AM", description: "Depart for Versailles", icon: Car },
      { time: "11:00 AM–12:30 PM", description: "Private tour of Versailles including Marie Antoinette's private apartment", icon: Camera },
      { time: "4:30 PM", description: "Photo shoot and drinks at Bar Les Ambassadeurs", icon: Camera },
      { time: "6:30 PM", description: "Car transfers from Hotel de Crillon to dinner", icon: Car },
      {
        time: "7:00 PM",
        description: "Dinner at Le Clarence, Avenue Franklin D. Roosevelt",
        icon: Utensils,
        dressCodeSlug: "le-clarence",
      },
      { time: "10:30 PM", description: "Car transfers from Le Clarence to Hotel de Crillon", icon: Car },
    ],
  },
  {
    date: "3 April",
    day: "Day 2",
    location: "Paris → Beaune",
    events: [
      { time: "10:45–11:15 AM", description: "Car transfers from Hotel de Crillon to Paris Gare de Lyon", icon: Car },
      {
        time: "11:56 AM – 1:30 PM",
        description: "LYRIA 9269 (1st Class) from Paris Gare de Lyon to Dijon",
        icon: Train,
      },
      { time: "1:45–2:15 PM", description: "Car transfers from Dijon to Beaune", icon: Car },
      { time: "Check-in", description: "L'Hôtel de Beaune", icon: Hotel }, // Updated to "L'Hôtel de Beaune"
      { time: "3:40 PM", description: "Car transfers from L'Hôtel de Beaune to Domaine Prieuré Roch", icon: Car },
      { time: "4:00 PM", description: "Wine tasting at Domaine Prieuré Roch", icon: Wine },
      {
        time: "7:00 PM",
        description: "Dinner hosted by Domaine Prieuré Roch (Casual)",
        icon: Utensils,
      },
    ],
  },
  {
    date: "4 April",
    day: "Day 3",
    location: "Beaune",
    events: [
      { time: "Morning", description: "Optional visit to Beaune Saturday market", icon: ShoppingBag },
      {
        time: "10:00–11:30 AM",
        description: "Wine tasting at Maison Joseph Drouhin (5 minute walk from hotel)",
        icon: Wine,
      },
      { time: "Afternoon", description: "Free and easy", icon: Sun },
      {
        time: "",
        description:
          "Options include sightseeing in Beaune including Hospices de Beaune, spa treatments at Spa Marie de Bourgogne (Beaune), Sisley Spa (Levernois) or Spa des Tannins (Chambolle-Musigny), etc.",
        icon: null,
        noTopMargin: true,
      },
      { time: "6:45 PM", description: "Car transfers from L'Hôtel de Beaune to dinner", icon: Car },
      {
        time: "7:00 PM",
        description: "Dinner at Table De Levernois",
        icon: Utensils,
        dressCodeSlug: "table-de-levernois",
      },
    ],
  },
  {
    date: "5 April",
    day: "Day 4",
    location: "Beaune",
    events: [
      {
        time: "Morning",
        description: "Optional visit to Chagny Sunday market (20 minute car transfer)",
        icon: ShoppingBag,
      },
      { time: "11:30 AM", description: "Car transfer from L'Hôtel de Beaune to lunch", icon: Car },
      { time: "12:00 PM", description: "Lunch at La Ferme de la Ruchotte", icon: Utensils },
      { time: "Check-out", description: "Departure from L'Hôtel de Beaune", icon: Hotel },
      {
        time: "Afternoon",
        description: "For those returning to Paris, both drivers are available for car transfers",
        icon: Car,
      },
    ],
  },
]

export function ItineraryOverview() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-muted-foreground uppercase tracking-[0.3em] text-xs mb-4 block">The Journey</span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">Our Itinerary</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-light">
            Four days of celebration, discovery, and unforgettable moments with cherished friends
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {schedule.map((day, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border p-8 hover:border-primary/30 transition-all duration-300"
            >
              <div className="mb-6">
                <span className="text-muted-foreground text-sm uppercase tracking-wider">{day.date}</span>
                <div className="flex items-baseline gap-3 mt-1">
                  <h3 className="text-2xl font-medium">{day.day}</h3>
                  <span className="text-primary text-lg">— {day.location}</span>
                </div>
              </div>

              <div className="space-y-4">
                {day.events.map((event, eventIndex) => (
                  <div key={eventIndex} className={`flex items-start gap-4 ${event.noTopMargin ? "-mt-2" : ""}`}>
                    {event.icon && (
                      <div className="w-10 h-10 bg-secondary flex items-center justify-center flex-shrink-0">
                        <event.icon className="w-5 h-5 text-primary" />
                      </div>
                    )}
                    <div className={!event.icon ? "ml-14" : ""}>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider block">{event.time}</span>
                      <p className="text-foreground font-light">{event.description}</p>
                      {event.dressCodeSlug && (
                        <Link
                          href={`/dress-code/${event.dressCodeSlug}`}
                          className="inline-flex items-center gap-1.5 mt-2 text-xs text-primary hover:text-primary/80 transition-colors uppercase tracking-wider"
                        >
                          <Shirt className="w-3.5 h-3.5" />
                          View Dress Code
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: Wine, label: "Wine Tastings" },
            { icon: Utensils, label: "Fine Dining" },
            { icon: Hotel, label: "Luxury Stays" },
            { icon: Train, label: "Scenic Travel" },
            { icon: Camera, label: "Photo Shoots" },
            { icon: Car, label: "Car Transfers" },
            { icon: ShoppingBag, label: "Market Visits" },
          ].map((item, index) => (
            <div key={index} className="py-6">
              <item.icon className="w-6 h-6 mx-auto mb-3 text-primary" />
              <span className="text-sm text-muted-foreground tracking-wide">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
