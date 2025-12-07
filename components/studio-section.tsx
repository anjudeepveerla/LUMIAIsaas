"use client"

import { motion } from "framer-motion"
import { PhoneCall, Lightbulb, Rocket } from "lucide-react"
import { cn } from "@/lib/utils"
import { geist } from "@/lib/fonts"

interface WorkflowStep {
  id: number
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

const workflowSteps: WorkflowStep[] = [
  {
    id: 1,
    title: "Discovery Call",
    description: "We start with a conversation to understand your challenges, goals, and opportunities for automation.",
    icon: PhoneCall,
  },
  {
    id: 2,
    title: "Strategy & Design",
    description: "Our team crafts a tailored roadmap, mapping out workflows and selecting the right AI tools for your needs.",
    icon: Lightbulb,
  },
  {
    id: 3,
    title: "Build & Deliver",
    description: "We develop, test, and deploy your automation system — delivering working solutions that transform operations.",
    icon: Rocket,
  },
]

export default function StudioSection() {
  return (
    <section id="studio" className="relative w-full py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(to right, oklch(0.95 0 0) 1px, transparent 1px),
              linear-gradient(to bottom, oklch(0.95 0 0) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black border border-white/10 backdrop-blur-sm mb-6">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-sm font-medium text-white/80">Studio</span>
          </div>

          <h2
            className={cn(
              "text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6",
              geist.className,
            )}
          >
            About LUMI AI
          </h2>
        </motion.div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-20 sm:mb-28"
        >
          <div className="relative rounded-3xl bg-black border border-white/10 backdrop-blur-sm p-8 sm:p-12 overflow-hidden">
            {/* Inner pattern */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `
                  linear-gradient(to right, oklch(0.95 0 0) 1px, transparent 1px),
                  linear-gradient(to bottom, oklch(0.95 0 0) 1px, transparent 1px)
                `,
                backgroundSize: "30px 30px",
              }}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-transparent"></div>

            {/* Content */}
            <div className="relative z-10 text-center">
              <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-6">
                LUMI AI is a creative tech studio blending innovation with intelligence. Founded by{" "}
                <span className="text-primary font-semibold">Maneesh</span> and{" "}
                <span className="text-primary font-semibold">Anjudeep</span>, we're not just developers — we're{" "}
                <span className="text-white font-semibold">AI architects</span> helping businesses, creators, and teams save time, scale faster, and stay ahead of the curve.
              </p>

              {/* Decorative line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mx-auto max-w-xs h-px bg-primary/50"
              />
            </div>

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/20 rounded-tl-3xl"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary/20 rounded-br-3xl"></div>
          </div>
        </motion.div>

        {/* Workflow Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            How We Work — From Idea to Automation
          </h3>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            A small, focused team that turns conversations into working automation systems.
          </p>
        </motion.div>

        {/* Workflow Steps - Enhanced floating design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16 max-w-6xl mx-auto">
          {workflowSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
                className="group relative flex flex-col items-center text-center"
              >
                {/* Icon - Enhanced with glow effect */}
                <motion.div
                  className="relative mb-8"
                  whileHover={{ scale: 1.1, y: -4 }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                >
                  {/* Glow effect behind icon */}
                  <div className="absolute inset-0 bg-[#e78a53]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Icon container */}
                  <div className="relative w-24 h-24 rounded-2xl bg-white/5 border border-[#e78a53]/30 flex items-center justify-center backdrop-blur-sm group-hover:border-[#e78a53]/50 transition-all duration-300">
                    <Icon className="w-12 h-12 text-[#e78a53] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </motion.div>

                {/* Title */}
                <h4 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-[#e78a53] transition-colors duration-300">
                  {step.title}
                </h4>

                {/* Description */}
                <p className="text-white/60 leading-relaxed text-base max-w-sm group-hover:text-white/70 transition-colors duration-300">
                  {step.description}
                </p>

                {/* Enhanced Connection Arrow (except for last item) */}
                {index < workflowSteps.length - 1 && (
                  <div className="hidden md:block absolute top-12 -right-8 z-10">
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.7 + index * 0.15 }}
                      className="relative"
                    >
                      {/* Arrow with glow */}
                      <div className="absolute inset-0 bg-[#e78a53]/20 blur-md"></div>
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="relative text-[#e78a53]"
                      >
                        <path
                          d="M5 12h14M12 5l7 7-7 7"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
