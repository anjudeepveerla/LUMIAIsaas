"use client"
import { motion } from "framer-motion"

export function StickyFooter() {
  return (
    <footer className="relative w-full bg-black border-t border-white/5 overflow-hidden">
      {/* Subtle background pattern */}
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        {/* Main Content */}
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Built by humans, scaled by AI.
            </h2>
            <p className="text-base sm:text-lg text-white/50">
              Est. 2023 — Shipping the future, today.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.a
              href="https://wa.link/dmvkw2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-black font-semibold text-lg hover:shadow-[0_0_30px_rgba(231,138,83,0.4)] transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GET AUTOMATED
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm text-white/40 italic max-w-xl"
          >
            No boring demos. Just real solutions that actually work.
          </motion.p>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-white/5"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40">
            {/* Copyright */}
            <p>© 2023-2025 LUMI AI. All rights reserved.</p>

            {/* Links */}
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="hover:text-white/80 transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="hover:text-white/80 transition-colors"
              >
                Terms
              </a>
              <a
                href="#"
                className="hover:text-white/80 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-primary/30"></div>
    </footer>
  )
}
