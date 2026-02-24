"use client"

import { useState, useRef, useEffect, type FormEvent } from "react"
import { Lock, Unlock, Eye, EyeOff } from "lucide-react"

export function PasswordGate({
  children,
  isUnlocked: initialUnlocked,
}: {
  children: React.ReactNode
  isUnlocked: boolean
}) {
  const [unlocked, setUnlocked] = useState(initialUnlocked)
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!unlocked && inputRef.current) {
      inputRef.current.focus()
    }
  }, [unlocked])

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const res = await fetch("/api/verify-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      })

      const data = await res.json()

      if (data.success) {
        setShowSuccess(true)
        setTimeout(() => {
          setUnlocked(true)
        }, 800)
      } else {
        setError("Incorrect password. Please try again.")
        setPassword("")
        inputRef.current?.focus()
      }
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  if (unlocked) {
    return <>{children}</>
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-4 w-full max-w-md">
        <div className="flex flex-col items-center gap-6 rounded-xl border border-border bg-card p-8 shadow-lg">
          {/* Lock icon */}
          <div
            className={`flex h-16 w-16 items-center justify-center rounded-full transition-all duration-500 ${
              showSuccess
                ? "bg-accent/10 text-accent"
                : "bg-primary/10 text-primary"
            }`}
          >
            {showSuccess ? (
              <Unlock className="h-8 w-8 animate-in zoom-in duration-300" />
            ) : (
              <Lock className="h-8 w-8" />
            )}
          </div>

          {/* Title */}
          <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight text-foreground">
              {showSuccess ? "Welcome!" : "Private Content"}
            </h1>
            <p className="text-sm text-muted-foreground">
              {showSuccess
                ? "Unlocking your experience..."
                : "Enter the password to access this site."}
            </p>
          </div>

          {/* Form */}
          {!showSuccess && (
            <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
              <div className="relative">
                <input
                  ref={inputRef}
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    setError("")
                  }}
                  placeholder="Enter password"
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 pr-12 text-base text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
                  aria-label="Site password"
                  aria-invalid={!!error}
                  aria-describedby={error ? "password-error" : undefined}
                  disabled={loading}
                  autoComplete="off"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>

              {error && (
                <p
                  id="password-error"
                  className="text-center text-sm text-destructive animate-in fade-in slide-in-from-top-1 duration-200"
                  role="alert"
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading || !password}
                className="w-full rounded-lg bg-primary px-4 py-3 text-base font-medium text-primary-foreground transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? "Verifying..." : "Unlock"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
