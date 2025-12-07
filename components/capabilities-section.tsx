"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Mic, Target, FileText, MessageCircle, Workflow, 
  Megaphone, Users, BarChart3, Image, Volume2, 
  ImagePlus, Film, Video, Rocket, UserSquare2 
} from "lucide-react"
import { cn } from "@/lib/utils"
import { geist } from "@/lib/fonts"

interface Capability {
  id: number
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  category: "automation" | "generation" | "intelligence"
}

const capabilities: Capability[] = [
  {
    id: 1,
    title: "Voice AI Agents",
    description: "Intelligent voice systems that handle customer interactions, appointments, and support 24/7 with natural conversations.",
    icon: Mic,
    category: "intelligence",
  },
  {
    id: 2,
    title: "Lead Generation Systems",
    description: "Automated systems that identify, qualify, and engage potential customers at scale without manual intervention.",
    icon: Target,
    category: "automation",
  },
  {
    id: 3,
    title: "Content Automation",
    description: "AI-powered content creation and distribution that maintains quality while scaling your production capacity.",
    icon: FileText,
    category: "generation",
  },
  {
    id: 4,
    title: "Customer Support Bots",
    description: "Intelligent chatbots that resolve customer issues instantly, reducing response time and improving satisfaction.",
    icon: MessageCircle,
    category: "intelligence",
  },
  {
    id: 5,
    title: "Internal Tools & Workflow Automation",
    description: "Streamline your team's operations with custom workflows that eliminate repetitive tasks and boost productivity.",
    icon: Workflow,
    category: "automation",
  },
  {
    id: 6,
    title: "Marketing Campaign Automation",
    description: "End-to-end automation for email, SMS, and social campaigns with personalization at scale.",
    icon: Megaphone,
    category: "automation",
  },
  {
    id: 7,
    title: "HR & Recruitment Automation",
    description: "Automate hiring workflows, candidate screening, and onboarding to accelerate your talent acquisition.",
    icon: Users,
    category: "automation",
  },
  {
    id: 8,
    title: "Reporting & Analytics Automation",
    description: "Real-time dashboards and automated reports that keep your team informed without manual data compilation.",
    icon: BarChart3,
    category: "intelligence",
  },
  {
    id: 9,
    title: "Generate Thumbnail Reaction Poses",
    description: "AI-generated visual assets for content creators to scale production and maintain consistency.",
    icon: Image,
    category: "generation",
  },
  {
    id: 10,
    title: "Clone Your Voice",
    description: "Voice cloning technology for personalized AI interactions, voiceovers, and branded communications.",
    icon: Volume2,
    category: "generation",
  },
  {
    id: 11,
    title: "Enhance Images to High Resolution",
    description: "AI upscaling and enhancement technology that transforms standard images into professional-quality assets.",
    icon: ImagePlus,
    category: "generation",
  },
  {
    id: 12,
    title: "Create AI-Generated Films",
    description: "Generate complete video content with AI including scripts, visuals, voiceovers, and editing.",
    icon: Film,
    category: "generation",
  },
  {
    id: 13,
    title: "Produce Commercial Ads",
    description: "Automated creation of professional advertisements tailored to your brand and target audience.",
    icon: Video,
    category: "generation",
  },
  {
    id: 14,
    title: "Scale Content with AI Automation",
    description: "Multiply your content output across multiple platforms while maintaining brand voice and quality.",
    icon: Rocket,
    category: "automation",
  },
  {
    id: 15,
    title: "Clone Your Video Avatar",
    description: "Create AI-powered video avatars that can present content, deliver messages, and engage audiences.",
    icon: UserSquare2,
    category: "generation",
  },
]

export default function CapabilitiesSection() {
  const [selectedCapability, setSelectedCapability] = useState<number | null>(null)
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [visibleCount, setVisibleCount] = useState(9) // Show 3x3 grid initially

  const visibleCapabilities = capabilities.slice(0, visibleCount)
  const hasMore = visibleCount < capabilities.length

  const handleLoadMore = () => {
    setVisibleCount(capabilities.length)
  }

  return (
    <section
      id="capabilities"
      className="relative w-full py-20 sm:py-24 md:py-28 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="mb-12 flex w-full flex-col items-center justify-center text-center">
          <h2
            className={cn(
              "text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl",
            )}
          >
            What We Build
          </h2>
          <p className="mt-2 max-w-2xl text-xs sm:text-sm text-zinc-400">
            Applied AI from idea to impact. Real automation solutions that scale your business.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {visibleCapabilities.map((capability, index) => {
              const Icon = capability.icon
              const isExpanded = selectedCapability === capability.id
              const isHovered = hoveredId === capability.id

              return (
                <motion.div
                  key={capability.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  onClick={() => setSelectedCapability(isExpanded ? null : capability.id)}
                  onMouseEnter={() => setHoveredId(capability.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  whileHover={{ 
                    scale: 1.02,
                    y: -4,
                  }}
                  className="relative rounded-2xl p-6 cursor-pointer group overflow-hidden"
                  style={{
                    background: isHovered 
                      ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)'
                      : 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)',
                    backdropFilter: 'blur(20px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                    border: '1px solid rgba(255, 255, 255, 0.18)',
                    boxShadow: isHovered
                      ? '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                      : '0 4px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  }}
                >
                  {/* Liquid glass shine effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, transparent 50%, rgba(255, 255, 255, 0.05) 100%)',
                      borderRadius: 'inherit',
                    }}
                    animate={isHovered ? {
                      backgroundPosition: ['0% 0%', '100% 100%'],
                    } : {}}
                    transition={{
                      duration: 2,
                      repeat: isHovered ? Infinity : 0,
                      repeatType: 'reverse',
                    }}
                  />


                  {/* Content */}
                  <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-4">
                      <motion.div 
                        className="inline-flex items-center justify-center w-12 h-12 rounded-full"
                        style={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          backdropFilter: 'blur(10px)',
                          WebkitBackdropFilter: 'blur(10px)',
                        }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Icon className="w-6 h-6 text-[#e78a53]" />
                      </motion.div>
                  </div>

                  {/* Title */}
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-zinc-50 transition-colors">
                    {capability.title}
                  </h3>

                  {/* Description */}
                    <p className="text-sm text-zinc-300 leading-relaxed group-hover:text-zinc-200 transition-colors">
                    {capability.description}
                  </p>
                  </div>

                  {/* Bottom glow effect on hover */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                    }}
                  />
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        {/* Load More Button */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-12 text-center"
          >
            <button
              onClick={handleLoadMore}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-700 text-zinc-300 hover:border-zinc-600 hover:text-zinc-50 transition-colors"
            >
              <span>View All Capabilities</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </motion.div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <p className="text-white/60 mb-6 text-lg">
            Need something custom? We build tailored AI solutions for your unique challenges.
          </p>
          <motion.a
            href="https://wa.link/dmvkw2"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 border border-white/20 rounded-full hover:bg-white/[0.15] hover:border-primary/50 transition-all duration-300 group"
          >
            <span className="text-white font-semibold">Discuss Your Project</span>
            <svg
              className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
