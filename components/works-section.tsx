"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { geist } from "@/lib/fonts"
import Link from "next/link"

interface Work {
  id: number
  title: string
  client: string
  clientType: string
  tools: string[]
  description: string
  image: string
  isVideo: boolean
}

const worksData: Work[] = [
  {
    id: 1,
    title: "Reddit Comment Generator & Analyzer",
    client: "Surya (Creator & Research Enthusiast)",
    clientType: "Client",
    tools: ["Python", "N8n", "Reddit API"],
    description:
      "Automated 80% of manual research workflow and increased Reddit engagement by ~45%. Comments are context-aware, natural, and insightful.",
    image: "/works/reddit-project.svg",
    isVideo: false,
  },
  {
    id: 2,
    title: "Voice AI Calling Agent for ISMA Clinic (Dubai)",
    client: "ISMA Clinic • Healthcare",
    clientType: "Client",
    tools: ["Voiceflow", "Twilio", "Make"],
    description:
      "60% reduction in missed appointment calls; 24/7 patient support with multilingual automated handling.",
    image: "/works/voice-ai-project.svg",
    isVideo: false,
  },
  {
    id: 3,
    title: "Personal Reminder & Task AI for Abdul (Dubai)",
    client: "Abdul (Private Client - Dubai)",
    clientType: "Client",
    tools: ["N8n", "Google Calendar API", "Twilio SMS"],
    description:
      "Nearly 0% missed appointments and fully automated daily scheduling including prayer times.",
    image: "/works/reminder-ai-project.svg",
    isVideo: false,
  },
  {
    id: 4,
    title: "Lead Generation System for Shivam Computers (Tally MSPs)",
    client: "Shivam Computers - Accounting Software MSP",
    clientType: "Client",
    tools: ["Scrapy", "Make", "Google Sheets"],
    description:
      "Automatically generates 300+ verified leads weekly and eliminates manual data entry.",
    image: "/works/lead-generation-project.svg",
    isVideo: false,
  },
  {
    id: 5,
    title: "WhatsApp & Email Campaign Automation for VybeSchool",
    client: "VybeSchool - EdTech Startup",
    clientType: "Client",
    tools: ["WhatsApp Cloud API", "Gmail API", "Make"],
    description:
      "3x increase in open rates and 80% reduction in manual campaign setup time with personalized flows.",
    image: "/works/whatsapp-email-campaign.svg",
    isVideo: false,
  },
  {
    id: 6,
    title: "Customized AI Automation & Agents",
    client: "Custom AI Solutions",
    clientType: "Service",
    tools: ["Smart Chat", "Voice Agents", "Workflow Automation"],
    description:
      "AI systems built around your business from smart chat and voice agents to complete workflow automations that save time and scale impact.",
    image: "/works/custom-ai-automation.svg",
    isVideo: false,
  },
]

export default function WorksSection() {
  const [visibleCount] = useState(3) // Show only 3 projects
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const visibleWorks = worksData.slice(0, visibleCount)
  const hasMore = worksData.length > visibleCount

  return (
    <section id="work" className="relative w-full py-20 sm:py-24 md:py-28 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="mb-12 flex w-full flex-col items-center justify-center text-center">
          <h2
            className={cn(
              "text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl",
            )}
          >
            Projects That Made Impact
          </h2>
          <p className="mt-2 max-w-2xl text-xs sm:text-sm text-zinc-400">
            Real automation solutions delivering measurable results for businesses worldwide.
          </p>
        </div>

        {/* Works Grid - No containers, floating design */}
        <div ref={scrollContainerRef} className="space-y-24 md:space-y-32">
          <AnimatePresence>
            {visibleWorks.map((work, index) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  {/* Image Section - Left Side */}
                  <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.15 + 0.2 }}
                    className="relative"
                  >
                    <div className="relative aspect-video rounded-2xl overflow-hidden">
                      <img
                        src={work.image}
                        alt={work.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Subtle gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    </div>
                  </motion.div>

                  {/* Content Section - Right Side, Floating Text */}
                  <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                        {work.title}
                      </h3>
                      
                      <div className="space-y-2 mb-6">
                        <p className="text-base font-semibold text-[#e78a53]">
                          {work.client}
                        </p>
                        <p className="text-xs text-zinc-500 uppercase tracking-widest font-medium">
                          {work.clientType}
                        </p>
                      </div>
                    </div>

                    <p className="text-base text-zinc-300 leading-relaxed max-w-lg">
                      {work.description}
                    </p>

                    <div className="pt-4">
                      <p className="text-xs uppercase tracking-widest text-zinc-500 mb-4 font-medium">
                        Tools Used
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {work.tools.map((tool) => (
                          <motion.span
                            key={tool}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.15 + 0.5 + work.tools.indexOf(tool) * 0.1 }}
                            className="px-4 py-2 rounded-full text-sm bg-white/5 border border-white/10 text-zinc-300 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                          >
                            {tool}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View All Projects Button */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-20 flex justify-center"
          >
            <Link href="/projects">
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm"
              >
                <span className="font-semibold">View All Projects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  )
}
