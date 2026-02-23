import { CloudRain, Sun, Thermometer, Wind, Shirt, Sunrise, Sunset } from "lucide-react"

export function WeatherSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-muted-foreground uppercase tracking-[0.3em] text-xs mb-4 block">Be Prepared</span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">Weather & Packing Guide</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-light">
            Early April in France can be wonderfully springlike—but unpredictable. Here's what to expect.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Paris Weather */}
          <div className="bg-secondary p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
                <Sun className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-light">Paris</h3>
                <p className="text-muted-foreground text-sm">April 2-3, 2026</p>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              <div className="flex items-center gap-3">
                <Thermometer className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Temperature</p>
                  <p className="font-medium">8°C - 16°C (46°F - 61°F)</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <CloudRain className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Precipitation</p>
                  <p className="font-medium">~50mm / 8 rainy days</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Wind className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Conditions</p>
                  <p className="font-medium">Variable, breezy</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Sun className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Daylight</p>
                  <p className="font-medium">~13 hours</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Sunrise className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Sunrise</p>
                  <p className="font-medium">7:25 AM</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Sunset className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Sunset</p>
                  <p className="font-medium">8:22 PM</p>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground font-light text-sm leading-relaxed">
              Early April in Paris is the cusp of spring—cherry blossoms may be in bloom, but mornings and evenings can
              still be quite cool. Expect a mix of sunny spells and occasional showers. The city is beautifully green,
              and outdoor café terraces start to fill up.
            </p>
          </div>

          {/* Burgundy Weather */}
          <div className="bg-secondary p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
                <CloudRain className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-light">Burgundy (Beaune)</h3>
                <p className="text-muted-foreground text-sm">April 3-5, 2026</p>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              <div className="flex items-center gap-3">
                <Thermometer className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Temperature</p>
                  <p className="font-medium">6°C - 15°C (43°F - 59°F)</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <CloudRain className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Precipitation</p>
                  <p className="font-medium">~55mm / 9 rainy days</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Wind className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Conditions</p>
                  <p className="font-medium">Cool, changeable</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Sun className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Daylight</p>
                  <p className="font-medium">~13 hours</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Sunrise className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Sunrise</p>
                  <p className="font-medium">7:20 AM</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Sunset className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Sunset</p>
                  <p className="font-medium">8:20 PM</p>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground font-light text-sm leading-relaxed">
              Burgundy in early April is cooler than Paris, especially in the mornings when vineyard mists can linger.
              The vines are just beginning to bud, and the countryside has a fresh, awakening quality. Wine cellars
              maintain a constant cool temperature around 12°C (54°F), so bring a layer for tastings.
            </p>
          </div>
        </div>

        {/* Packing Recommendations */}
        <div className="bg-primary/5 border border-primary/10 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
              <Shirt className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-light">Recommended Packing</h3>
              <p className="text-muted-foreground text-sm">Dress in layers for versatility</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-medium mb-3 text-primary">Essential Outerwear</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Light waterproof jacket or trench coat</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Packable rain jacket or compact umbrella</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Light cardigan or sweater for cool cellars</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Light scarf for chilly evenings</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-3 text-primary">Clothing</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Smart casual attire for dinners (no shorts)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Long pants and closed-toe shoes for vineyard walks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Layerable tops (t-shirts, blouses, light knits)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Elegant evening outfit for Le Clarence dinner</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-3 text-primary">Footwear & Accessories</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Comfortable walking shoes (cobblestones!)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Dressier shoes for evening dining</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Sunglasses (spring sun can be bright)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Small daypack for vineyard excursions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
