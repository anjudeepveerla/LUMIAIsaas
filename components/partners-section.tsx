"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { geist } from "@/lib/fonts"

interface Partner {
  id: number
  name: string
  logo: string
  description?: string
}

const partners: Partner[] = [
  {
    id: 1,
    name: "Snapcaptions",
    logo: "/partners/snapcaptions.png",
    description: "AI-powered caption generation",
  },
  {
    id: 2,
    name: "Partner 2",
    logo: "/partners/partner2.png",
    description: "Technology partner",
  },
  {
    id: 3,
    name: "Vybe School",
    logo: "/partners/vybeschool.png",
    description: "EdTech innovation",
  },
  {
    id: 4,
    name: "AI Lumi",
    logo: "/partners/ailumi.png",
    description: "AI solutions",
  },
  {
    id: 5,
    name: "Secret AI",
    logo: "/partners/secretai.png",
    description: "AI technology",
  },
  {
    id: 6,
    name: "Creator Connect",
    logo: "/partners/creatorconnect.png",
    description: "Creator platform",
  },
]

export default function PartnersSection() {
  return (
    <section
      id="partners"
      className="relative w-full py-12 sm:py-16 md:py-20 overflow-hidden"
    >
      {/* Sophisticated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Radial gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(231, 138, 83, 0.03), transparent 70%)",
          }}
        />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating orbs */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-white/60 font-semibold">
              Partners
            </span>
          </motion.div>

          {/* Main Heading */}
          <h2
            className={cn(
              "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight",
              geist.className,
            )}
          >
            <span className="block bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
              Trusted by teams
            </span>
            <span className="block bg-gradient-to-r from-white/90 via-white/70 to-white/50 bg-clip-text text-transparent">
              who ship.
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/50 max-w-2xl mx-auto"
          >
            Partnering with innovative companies to deliver cutting-edge AI solutions
          </motion.p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/[0.08] backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_40px_rgba(231,138,83,0.1)] hover:scale-105">
                {/* Inner glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/10 group-hover:to-primary/5 transition-all duration-500"></div>

                {/* Subtle pattern */}
                <div
                  className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity"
                  style={{
                    backgroundImage: `
                      linear-gradient(45deg, white 1px, transparent 1px),
                      linear-gradient(-45deg, white 1px, transparent 1px)
                    `,
                    backgroundSize: "20px 20px",
                  }}
                />

                {/* Logo Container */}
                <div className="relative z-10 h-full flex items-center justify-center p-6">
                  <motion.div
                    className="w-full h-full flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-500"
                    />
                  </motion.div>
                </div>

                {/* Shine effect on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.03) 50%, transparent 70%)",
                    backgroundSize: "200% 200%",
                  }}
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/0 group-hover:border-primary/30 rounded-tl-2xl transition-all duration-500"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/0 group-hover:border-primary/30 rounded-br-2xl transition-all duration-500"></div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-primary/5 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              {/* Tooltip on hover */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-black/90 backdrop-blur-md rounded-lg border border-white/10 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              >
                <p className="text-xs text-white/90 font-medium">{partner.name}</p>
                {partner.description && (
                  <p className="text-xs text-white/50">{partner.description}</p>
                )}
                {/* Arrow */}
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black/90 border-l border-t border-white/10 rotate-45"></div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 sm:mt-20 text-center"
        >
          <p className="text-white/50 mb-6 text-sm sm:text-base">
            Join our growing network of innovative partners
          </p>
          <motion.a
            href="/partnerships"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-white/5 to-white/[0.02] border border-white/10 hover:border-primary/40 hover:bg-white/10 text-white/80 hover:text-white transition-all duration-300 backdrop-blur-sm group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="font-medium">Become a Partner</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:translate-x-1"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
