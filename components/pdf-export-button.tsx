"use client"

import { useState } from "react"
import { Download, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PdfExportButton() {
  const [isGenerating, setIsGenerating] = useState(false)

  const loadImageAsBase64 = (src: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.crossOrigin = "anonymous"
      img.onload = () => {
        const canvas = document.createElement("canvas")
        canvas.width = img.width
        canvas.height = img.height
        const ctx = canvas.getContext("2d")
        ctx?.drawImage(img, 0, 0)
        resolve(canvas.toDataURL("image/jpeg", 0.8))
      }
      img.onerror = reject
      img.src = src
    })
  }

  const generatePdf = async () => {
    setIsGenerating(true)

    const { default: jsPDF } = await import("jspdf")

    const pdf = new jsPDF("p", "mm", "a4")
    const pageWidth = pdf.internal.pageSize.getWidth()
    const pageHeight = pdf.internal.pageSize.getHeight()
    const margin = 15
    let yPosition = margin

    // Helper function to add text with word wrap
    const addWrappedText = (
      text: string,
      x: number,
      y: number,
      maxWidth: number,
      fontSize: number,
      fontStyle: "normal" | "bold" | "italic" = "normal",
    ) => {
      pdf.setFontSize(fontSize)
      pdf.setFont("helvetica", fontStyle)
      const lines = pdf.splitTextToSize(text, maxWidth)
      pdf.text(lines, x, y)
      return lines.length * (fontSize * 0.4)
    }

    try {
      const [eiffelImage, burgundyImage] = await Promise.all([
        loadImageAsBase64("/paris-eiffel-tower-at-sunset-with-warm-golden-ligh.jpg"),
        loadImageAsBase64("/burgundy-vineyard-rolling-hills-golden-hour-autumn.jpg"),
      ])

      // Add side-by-side hero images at the top
      const imageWidth = (pageWidth - margin * 2 - 5) / 2
      const imageHeight = 50

      pdf.addImage(eiffelImage, "JPEG", margin, margin, imageWidth, imageHeight)
      pdf.addImage(burgundyImage, "JPEG", margin + imageWidth + 5, margin, imageWidth, imageHeight)

      yPosition = margin + imageHeight + 10
    } catch (error) {
      console.log("Could not load images, continuing without them")
      yPosition = margin
    }

    // Title Section (below images)
    pdf.setFillColor(113, 47, 38) // Primary burgundy color
    pdf.rect(0, yPosition, pageWidth, 35, "F")

    pdf.setTextColor(255, 255, 255)
    pdf.setFontSize(24)
    pdf.setFont("helvetica", "bold")
    pdf.text("Ed and Trina's", pageWidth / 2, yPosition + 12, { align: "center" })
    pdf.text("30th Anniversary", pageWidth / 2, yPosition + 24, { align: "center" })

    yPosition += 45

    pdf.setTextColor(60, 60, 60)
    pdf.setFontSize(14)
    pdf.setFont("helvetica", "normal")
    pdf.text("Paris & Burgundy, France", pageWidth / 2, yPosition, { align: "center" })
    yPosition += 8
    pdf.text("April 2-5, 2026", pageWidth / 2, yPosition, { align: "center" })
    yPosition += 8
    pdf.text("12 Lifelong Friends", pageWidth / 2, yPosition, { align: "center" })
    yPosition += 20

    // Itinerary Section
    pdf.setFillColor(113, 47, 38)
    pdf.rect(margin, yPosition, pageWidth - margin * 2, 8, "F")
    pdf.setTextColor(255, 255, 255)
    pdf.setFontSize(12)
    pdf.setFont("helvetica", "bold")
    pdf.text("ITINERARY", pageWidth / 2, yPosition + 5.5, { align: "center" })
    yPosition += 15
    pdf.setTextColor(60, 60, 60)

    const schedule = [
      {
        date: "2 April - Day 1",
        location: "Paris",
        events: [
          "Check-in: Hotel de Crillon (Rosewood Hotel)",
          "Evening: Dinner at Le Clarence (Dress Code: White Tie / Jewel Colors)",
        ],
      },
      {
        date: "3 April - Day 2",
        location: "Paris → Beaune",
        events: [
          "Morning: Train from Paris to Dijon",
          "Afternoon: Car transfer from Dijon to Beaune",
          "Check-in: Hotel de Beaune",
          "4:00 PM: Wine tasting at Domaine Prieuré Roch",
          "7:00 PM: Dinner at Domaine Prieuré Roch (Casual)",
        ],
      },
      {
        date: "4 April - Day 3",
        location: "Beaune",
        events: [
          "10:00-11:30 AM: Wine tasting at Maison Joseph Drouhin",
          "7:00 PM: Dinner at Table De Levernois (Dress Code: Spring Floral / Jacket Without Tie)",
        ],
      },
      {
        date: "5 April - Day 4",
        location: "Beaune",
        events: ["Check-out: Departure from Hotel de Beaune"],
      },
    ]

    for (const day of schedule) {
      if (yPosition > pageHeight - 40) {
        pdf.addPage()
        yPosition = margin
      }

      pdf.setFontSize(11)
      pdf.setFont("helvetica", "bold")
      pdf.setTextColor(113, 47, 38)
      pdf.text(`${day.date} — ${day.location}`, margin, yPosition)
      yPosition += 6

      pdf.setFont("helvetica", "normal")
      pdf.setTextColor(80, 80, 80)
      pdf.setFontSize(10)

      for (const event of day.events) {
        const height = addWrappedText(`• ${event}`, margin + 3, yPosition, pageWidth - margin * 2 - 3, 10)
        yPosition += height + 2
      }
      yPosition += 5
    }

    // Dress Codes Section
    yPosition += 5
    if (yPosition > pageHeight - 60) {
      pdf.addPage()
      yPosition = margin
    }

    pdf.setFillColor(113, 47, 38)
    pdf.rect(margin, yPosition, pageWidth - margin * 2, 8, "F")
    pdf.setTextColor(255, 255, 255)
    pdf.setFontSize(12)
    pdf.setFont("helvetica", "bold")
    pdf.text("DRESS CODES", pageWidth / 2, yPosition + 5.5, { align: "center" })
    yPosition += 15
    pdf.setTextColor(60, 60, 60)

    // Le Clarence
    pdf.setFontSize(11)
    pdf.setFont("helvetica", "bold")
    pdf.setTextColor(113, 47, 38)
    pdf.text("Le Clarence Dinner (2 April)", margin, yPosition)
    yPosition += 6

    pdf.setFont("helvetica", "normal")
    pdf.setTextColor(80, 80, 80)
    pdf.setFontSize(10)
    pdf.text(
      "Ladies: Jewel Colors — Floor-length gowns in emerald, ruby, sapphire, amethyst, topaz, aquamarine, amber, or onyx",
      margin + 3,
      yPosition,
      { maxWidth: pageWidth - margin * 2 - 3 },
    )
    yPosition += 10
    pdf.text(
      "Gentlemen: White Tie — Black tailcoat, white marcella waistcoat, wing collar shirt, white bow tie, patent leather oxfords",
      margin + 3,
      yPosition,
      { maxWidth: pageWidth - margin * 2 - 3 },
    )
    yPosition += 15

    // Prieuré Roch
    pdf.setFontSize(11)
    pdf.setFont("helvetica", "bold")
    pdf.setTextColor(113, 47, 38)
    pdf.text("Domaine Prieuré Roch Dinner (3 April)", margin, yPosition)
    yPosition += 6

    pdf.setFont("helvetica", "normal")
    pdf.setTextColor(80, 80, 80)
    pdf.setFontSize(10)
    pdf.text("Casual attire — Relax and enjoy the vineyard setting in comfortable attire", margin + 3, yPosition, {
      maxWidth: pageWidth - margin * 2 - 3,
    })
    yPosition += 15

    // Table De Levernois
    pdf.setFontSize(11)
    pdf.setFont("helvetica", "bold")
    pdf.setTextColor(113, 47, 38)
    pdf.text("Table De Levernois Dinner (4 April)", margin, yPosition)
    yPosition += 6

    pdf.setFont("helvetica", "normal")
    pdf.setTextColor(80, 80, 80)
    pdf.setFontSize(10)
    pdf.text(
      "Ladies: Spring Floral — Elegant dresses with floral prints, any length appropriate",
      margin + 3,
      yPosition,
      {
        maxWidth: pageWidth - margin * 2 - 3,
      },
    )
    yPosition += 10
    pdf.text(
      "Gentlemen: Jacket Without Tie — Sport coat or blazer with dress trousers, open collar",
      margin + 3,
      yPosition,
      { maxWidth: pageWidth - margin * 2 - 3 },
    )
    yPosition += 15

    // Accommodations Section
    if (yPosition > pageHeight - 50) {
      pdf.addPage()
      yPosition = margin
    }

    pdf.setFillColor(113, 47, 38)
    pdf.rect(margin, yPosition, pageWidth - margin * 2, 8, "F")
    pdf.setTextColor(255, 255, 255)
    pdf.setFontSize(12)
    pdf.setFont("helvetica", "bold")
    pdf.text("ACCOMMODATIONS", pageWidth / 2, yPosition + 5.5, { align: "center" })
    yPosition += 15
    pdf.setTextColor(60, 60, 60)

    const accommodations = [
      {
        name: "Hotel de Crillon",
        location: "Paris",
        dates: "2-3 April",
        website: "rosewoodhotels.com/en/hotel-de-crillon",
      },
      { name: "L'Hôtel de Beaune", location: "Beaune", dates: "3-5 April", website: "lhoteldebeaune.com" },
    ]

    for (const hotel of accommodations) {
      pdf.setFontSize(11)
      pdf.setFont("helvetica", "bold")
      pdf.setTextColor(113, 47, 38)
      pdf.text(hotel.name, margin, yPosition)
      yPosition += 5

      pdf.setFont("helvetica", "normal")
      pdf.setTextColor(80, 80, 80)
      pdf.setFontSize(10)
      pdf.text(`${hotel.location} • ${hotel.dates}`, margin + 3, yPosition)
      yPosition += 5
      pdf.text(`Website: ${hotel.website}`, margin + 3, yPosition)
      yPosition += 10
    }

    // Weather Section
    if (yPosition > pageHeight - 50) {
      pdf.addPage()
      yPosition = margin
    }

    yPosition += 5
    pdf.setFillColor(113, 47, 38)
    pdf.rect(margin, yPosition, pageWidth - margin * 2, 8, "F")
    pdf.setTextColor(255, 255, 255)
    pdf.setFontSize(12)
    pdf.setFont("helvetica", "bold")
    pdf.text("WEATHER & PACKING", pageWidth / 2, yPosition + 5.5, { align: "center" })
    yPosition += 15
    pdf.setTextColor(60, 60, 60)

    pdf.setFontSize(10)
    pdf.setFont("helvetica", "normal")
    pdf.setTextColor(80, 80, 80)

    const weatherText =
      "Early April in Paris and Burgundy brings mild spring weather with temperatures between 8-15°C (46-59°F). Pack layers including a light jacket or cardigan, a compact umbrella, and comfortable walking shoes. Evenings can be cool, so bring a wrap or light coat for dinners."
    const weatherLines = pdf.splitTextToSize(weatherText, pageWidth - margin * 2)
    pdf.text(weatherLines, margin, yPosition)
    yPosition += weatherLines.length * 4 + 10

    // Footer
    pdf.setFontSize(9)
    pdf.setTextColor(150, 150, 150)
    pdf.text("Celebrating 30 Years — Ed & Trina", pageWidth / 2, pageHeight - 10, { align: "center" })

    // Save the PDF
    pdf.save("Ed-Trina-30th-Anniversary-Trip.pdf")
    setIsGenerating(false)
  }

  return (
    <Button onClick={generatePdf} disabled={isGenerating} variant="outline" className="gap-2 bg-transparent text-white border-white hover:bg-white/10 hover:text-white">
      {isGenerating ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          Generating PDF...
        </>
      ) : (
        <>
          <Download className="w-4 h-4" />
          Download PDF
        </>
      )}
    </Button>
  )
}
