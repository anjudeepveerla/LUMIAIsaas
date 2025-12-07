"use client"
import { useState, useEffect } from "react"
import Hero from "@/components/home/hero"
import Features from "@/components/features"
import WorksSection from "@/components/works-section"
import CapabilitiesSection from "@/components/capabilities-section"
import { AutomationPlayground } from "@/components/automation-playground"
import { TestimonialsSection } from "@/components/testimonials"
import { NewReleasePromo } from "@/components/new-release-promo"
import { FAQSection } from "@/components/faq-section"
import { StickyFooter } from "@/components/sticky-footer"
import TeamSection from "@/components/team-section"
import PartnersSection from "@/components/partners-section"
import ConnectCTASection from "@/components/connect-cta-section"
import StudioSection from "@/components/studio-section"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "system")
    root.classList.add("dark")
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMobileNavClick = (elementId: string) => {
    setIsMobileMenuOpen(false)
    setTimeout(() => {
      const element = document.getElementById(elementId)
      if (element) {
        const headerOffset = 120 // Account for sticky header height + margin
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    }, 100)
  }

  return (
    <div className="min-h-screen w-full relative bg-black">
      {/* Solid Black Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "#000000",
        }}
      />

      {/* Desktop Header */}
      <header
        className={`sticky top-4 z-[9999] mx-auto hidden w-full flex-row items-center justify-between self-start rounded-full bg-background/80 md:flex backdrop-blur-sm border border-border/50 shadow-lg transition-all duration-300 ${
          isScrolled ? "max-w-3xl px-2" : "max-w-5xl px-4"
        } py-2`}
        style={{
          willChange: "transform",
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
          perspective: "1000px",
        }}
      >
        <a
          className={`z-50 flex items-center justify-center gap-2 transition-all duration-300 ${
            isScrolled ? "ml-4" : ""
          } text-lg font-semibold tracking-tight text-foreground drop-shadow-[0_0_18px_rgba(244,244,245,0.4)]`}
          href="/"
        >
          <span className="drop-shadow-[0_0_20px_rgba(244,244,245,0.8)]">
            LUMI<span className="font-light">AI</span>
          </span>
        </a>

        <div className="absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-muted-foreground transition duration-200 hover:text-foreground md:flex md:space-x-2">
          <a
            className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
              const element = document.getElementById("work")
              if (element) {
                const headerOffset = 120 // Account for sticky header height + margin
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                const offsetPosition = elementPosition - headerOffset

                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                })
              }
            }}
          >
            <span className="relative z-20">Work</span>
          </a>
          <a
            className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
              const element = document.getElementById("studio")
              if (element) {
                const headerOffset = 120 // Account for sticky header height + margin
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                const offsetPosition = elementPosition - headerOffset

                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                })
              }
            }}
          >
            <span className="relative z-20">Studio</span>
          </a>
          <a
            className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
              const element = document.getElementById("capabilities")
              if (element) {
                const headerOffset = 120 // Account for sticky header height + margin
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                const offsetPosition = elementPosition - headerOffset

                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                })
              }
            }}
          >
            <span className="relative z-20">Capabilities</span>
          </a>
          <a
            className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
              const element = document.getElementById("partners")
              if (element) {
                const headerOffset = 120 // Account for sticky header height + margin
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                const offsetPosition = elementPosition - headerOffset

                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                })
              }
            }}
          >
            <span className="relative z-20">Partners</span>
          </a>
        </div>

        <div className="flex items-center gap-4 relative z-50">
          <button
            className="font-medium transition-colors hover:text-foreground text-muted-foreground text-sm cursor-pointer relative z-50"
            onClick={(e) => {
              e.preventDefault()
              const element = document.getElementById("connect")
              if (element) {
                const headerOffset = 120
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                const offsetPosition = elementPosition - headerOffset

                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                })
              }
            }}
          >
            Connect
          </button>

          <a
            href="/gen-ai-editing"
            className="rounded-md font-bold relative z-50 cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center bg-primary text-primary-foreground shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] px-4 py-2 text-sm"
          >
            Gen AI Editing
          </a>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="sticky top-4 z-[9999] mx-4 flex w-auto flex-row items-center justify-between rounded-full bg-background/80 backdrop-blur-sm border border-border/50 shadow-lg md:hidden px-4 py-3">
        <a
          className="flex items-center justify-center gap-2 text-base font-semibold tracking-tight text-foreground drop-shadow-[0_0_18px_rgba(244,244,245,0.4)]"
          href="/"
        >
          <span className="drop-shadow-[0_0_20px_rgba(244,244,245,0.8)]">
            LUMI<span className="font-light">AI</span>
          </span>
        </a>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-background/50 border border-border/50 transition-colors hover:bg-background/80"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col items-center justify-center w-5 h-5 space-y-1">
            <span
              className={`block w-4 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
            ></span>
            <span
              className={`block w-4 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`block w-4 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            ></span>
          </div>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm md:hidden">
          <div className="absolute top-20 left-4 right-4 bg-background/95 backdrop-blur-md border border-border/50 rounded-2xl shadow-2xl p-6">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => handleMobileNavClick("work")}
                className="text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50"
              >
                Work
              </button>
              <button
                onClick={() => handleMobileNavClick("studio")}
                className="text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50"
              >
                Studio
              </button>
              <button
                onClick={() => handleMobileNavClick("capabilities")}
                className="text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50"
              >
                Capabilities
              </button>
              <button
                onClick={() => handleMobileNavClick("partners")}
                className="text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50"
              >
                Partners
              </button>
              <div className="border-t border-border/50 pt-4 mt-4 flex flex-col space-y-3">
                <button
                  onClick={() => handleMobileNavClick("connect")}
                  className="text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50 cursor-pointer"
                >
                  Connect
                </button>
                <a
                  href="/gen-ai-editing"
                  className="px-4 py-3 text-lg font-bold text-center bg-primary text-primary-foreground rounded-lg shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                >
                  Gen AI Editing
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <Hero />

      {/* Automation Playground Section */}
      <AutomationPlayground />

      {/* Capabilities Section */}
      <CapabilitiesSection />

      {/* Works Section */}
      <WorksSection />

      {/* Studio Section */}
      <StudioSection />

      {/* Team Section */}
      <TeamSection />

      {/* Partners Section */}
      <PartnersSection />

      {/* Testimonials Section */}
      <div id="testimonials">
        <TestimonialsSection />
      </div>

      <NewReleasePromo />

      {/* FAQ Section */}
      <div id="faq">
        <FAQSection />
      </div>

      {/* Connect CTA Section */}
      <ConnectCTASection />

      {/* Sticky Footer */}
      <StickyFooter />
    </div>
  )
}
