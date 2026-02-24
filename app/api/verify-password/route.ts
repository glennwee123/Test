import { NextResponse } from "next/server"
import { cookies } from "next/headers"

const SITE_PASSWORD = "Burgundy"

export async function POST(request: Request) {
  const { password } = await request.json()

  if (password === SITE_PASSWORD) {
    const cookieStore = await cookies()
    cookieStore.set("site-unlocked", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    })

    return NextResponse.json({ success: true })
  }

  return NextResponse.json({ success: false, error: "Incorrect password" }, { status: 401 })
}
