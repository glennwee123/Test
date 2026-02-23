import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

const dressCodeData: Record<
  string,
  {
    title: string
    venue: string
    date: string
    menDressCode?: string
    menDescription?: string
    womenDressCode?: string
    womenDescription?: string
    menLookBook?: { src: string; caption: string }[]
    womenLookBookImage?: string
    hasDetails?: boolean
  }
> = {
  "le-clarence": {
    title: "Le Clarence Dinner",
    venue: "Le Clarence, Paris",
    date: "April 2, 2026 - Evening",
    hasDetails: true,
    menDressCode: "White Tie",
    menDescription:
      "The most formal dress code. Gentlemen should wear a black tailcoat with silk lapels, matching trousers with a single silk stripe, a white marcella waistcoat, white marcella shirt with wing collar, white bow tie, and black patent leather oxford shoes. White gloves are optional but add an elegant touch.",
    womenDressCode: "Jewel Colors",
    womenDescription:
      "Ladies are invited to wear floor-length evening gowns in rich jewel tones — think emerald green, ruby red, sapphire blue, amethyst purple, topaz yellow, aquamarine, amber orange, or onyx black. These luxurious colors complement the grandeur of Le Clarence and create a stunning visual palette for our celebration.",
    menLookBook: [
      { src: "/white-tie-formal-tailcoat-full-length.jpg", caption: "Classic White Tie Ensemble" },
      { src: "/white-tie-details-waistcoat-bowtie.jpg", caption: "Marcella Waistcoat & Bow Tie" },
      { src: "/white-tie-tailcoat-back-view.jpg", caption: "Tailcoat Silhouette" },
      { src: "/patent-leather-oxford-shoes-formal.jpg", caption: "Patent Leather Oxfords" },
    ],
    womenLookBookImage: "/ladies-jewel-colors-lookbook.png",
  },
  "prieure-roch-dinner": {
    title: "Domaine Prieuré Roch Dinner",
    venue: "Domaine Prieuré Roch, Burgundy",
    date: "April 3, 2026 - 7:00 PM",
    hasDetails: true,
    womenDressCode: "Casual",
    womenDescription:
      "Relax and enjoy the vineyard setting in comfortable casual attire. Smart casual or everyday wear is perfectly appropriate for this intimate dinner at the domaine.",
    menDressCode: "Casual",
    menDescription:
      "Casual attire is welcome for this relaxed vineyard dinner. No need to dress up — come comfortable and ready to enjoy exceptional wines in a laid-back atmosphere.",
  },
  "table-de-levernois": {
    title: "Table De Levernois Dinner",
    venue: "Table De Levernois, Burgundy",
    date: "April 4, 2026 - 7:00 PM",
    hasDetails: true,
    womenDressCode: "Spring Floral",
    womenDescription:
      "Embrace the vineyard setting with beautiful floral prints. Ladies are invited to wear elegant dresses or ensembles featuring floral patterns — from romantic rose prints to bold botanical designs. Floor-length, midi, or cocktail length are all appropriate. Think garden party elegance in the heart of Burgundy wine country.",
    menDressCode: "Jacket Without Tie",
    menDescription:
      "A relaxed yet refined dress code. Gentlemen should wear a well-tailored sport coat or blazer with dress trousers. No tie required — an open collar or a pocket square adds a stylish touch. This smart casual approach complements the rustic elegance of the vineyard estate.",
    womenLookBookImage: "/ladies-floral-lookbook.jpg",
    menLookBook: [
      { src: "/blazer-no-tie-navy.jpg", caption: "Navy Blazer, Open Collar" },
      { src: "/blazer-no-tie-tan.jpg", caption: "Tan Sport Coat" },
      { src: "/blazer-no-tie-grey.jpg", caption: "Grey Blazer, Pocket Square" },
      { src: "/smart-casual-loafers.jpg", caption: "Leather Loafers" },
    ],
  },
}

export default async function DressCodePage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const data = dressCodeData[slug]

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Dress code not found</p>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-background py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Itinerary
        </Link>

        <div className="text-center mb-16">
          <span className="text-muted-foreground uppercase tracking-[0.3em] text-xs mb-4 block">Dress Code</span>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">{data.title}</h1>
          <p className="text-muted-foreground text-lg">{data.venue}</p>
          <p className="text-primary text-sm mt-2">{data.date}</p>
        </div>

        {data.hasDetails ? (
          <div className="space-y-20">
            {/* Women's Dress Code Section */}
            <section>
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-light mb-3">Ladies</h2>
                <p className="text-primary text-xl font-medium mb-4">{data.womenDressCode}</p>
                <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">{data.womenDescription}</p>
              </div>

              {data.womenLookBookImage && (
                <div className="relative w-full overflow-hidden">
                  <Image
                    src={data.womenLookBookImage || "/placeholder.svg"}
                    alt="Jewel Colors Look Book - Emerald Green, Ruby Red, Sapphire Blue, Amethyst Purple, Topaz Yellow, Aquamarine, Amber Orange, Onyx Black"
                    width={1200}
                    height={600}
                    className="w-full h-auto object-contain"
                  />
                </div>
              )}
            </section>

            {/* Men's Dress Code Section */}
            <section>
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-light mb-3">Gentlemen</h2>
                <p className="text-primary text-xl font-medium mb-4">{data.menDressCode}</p>
                <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">{data.menDescription}</p>
              </div>

              {data.menLookBook && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {data.menLookBook.map((item, index) => (
                    <div key={index} className="group">
                      <div className="aspect-[3/4] relative overflow-hidden bg-muted mb-3">
                        <Image
                          src={item.src || "/placeholder.svg"}
                          alt={item.caption}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <p className="text-sm text-muted-foreground text-center">{item.caption}</p>
                    </div>
                  ))}
                </div>
              )}
            </section>
          </div>
        ) : (
          <div className="bg-card border border-border p-8 md:p-12 text-center">
            <p className="text-muted-foreground text-lg font-light mb-8">
              Dress code details and look book coming soon...
            </p>
            <p className="text-sm text-muted-foreground">
              Check back later for outfit suggestions and event theme details.
            </p>
          </div>
        )}
      </div>
    </main>
  )
}
