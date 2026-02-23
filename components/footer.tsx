import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-16 px-6 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Heart className="w-5 h-5 fill-current" />
        </div>
        <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-tight">30 Years of Love & Friendship</h2>
        <p className="text-primary-foreground/80 font-light mb-8 max-w-xl mx-auto">
          Here's to the memories we've made and the adventures yet to come. Cheers to celebrating together in the heart
          of France!
        </p>
        <div className="text-sm text-primary-foreground/60 tracking-wide">April 2–5, 2026 • Paris & Burgundy</div>
      </div>
    </footer>
  )
}
