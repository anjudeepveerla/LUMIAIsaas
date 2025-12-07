"use client"

import { motion } from "framer-motion"
import { Linkedin, Instagram } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface TeamMember {
  id: number
  name: string
  role: string
  story: string
  image?: string
  linkedin?: string
  instagram?: string
  rowSpan?: number
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "VEERLA ANJUDEEP",
    role: "AI Engineer",
    story: "4+ years of experience in building AI chatbots, voice agents, and websites. AI Superstack Mentor.",
    linkedin: "https://linkedin.com/in/username",
  },
  {
    id: 2,
    name: "BOMMAKANTI MANEESH",
    role: "AI Engineer",
    story: "AI Creator, No-code/Low-code Developer, R&D AI Specialist, and AI Superstack Mentor.",
    linkedin: "https://linkedin.com/in/username",
    instagram: "https://instagram.com/username",
  },
  {
    id: 3,
    name: "VIKAS CHARY ALWALA",
    role: "Gen AI Specialist",
    story: "Experienced technology professional with expertise in software development and innovation",
    linkedin: "https://linkedin.com/in/username",
  },
  {
    id: 4,
    name: "UDAY",
    role: "Senior Software Engineer / AI Engineer",
    story: "11+ years of experience in AI, cloud, and enterprise systems. Expert in AI agents, LLMOps, multimodal applications, and GPU-optimized AI workflows.",
    linkedin: "https://linkedin.com/in/username",
  },
  {
    id: 5,
    name: "SANTOSH KOTA",
    role: "Team Member",
    story: "Contributing to building innovative AI automation solutions.",
    linkedin: "https://linkedin.com/in/username",
  },
]

export default function TeamSection() {
  return (
    <section id="team" className="relative w-full py-24 md:py-32 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="mb-12 flex w-full flex-col items-center justify-center text-center">
          <h2
            className={cn(
              "bg-gradient-to-b from-zinc-50 via-zinc-200 to-zinc-400 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl md:text-5xl",
            )}
          >
            Who We Are
          </h2>
          <p className="mt-2 max-w-2xl text-xs sm:text-sm text-zinc-400">
            A small team solving real automation problems for businesses that need results.
          </p>
        </div>

        {/* Team Grid - No containers, floating design with liquid glass fallback */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Liquid Glass Container - Apple style */}
              <div
                className="relative h-full rounded-2xl p-6 overflow-hidden transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)',
                  backdropFilter: 'blur(20px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                  border: '1px solid rgba(255, 255, 255, 0.18)',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                }}
              >
                {/* Liquid glass shine effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, transparent 50%, rgba(255, 255, 255, 0.05) 100%)',
                    borderRadius: 'inherit',
                  }}
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col">
                  {/* Geometric placeholder or Image */}
                  {!member.image ? (
                    <div className="relative aspect-square w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden flex items-center justify-center"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)',
                      }}
                    >
                      <div className="relative w-16 h-16">
                        <div className="absolute inset-0 border-2 border-[#e78a53]/30 rotate-45 rounded-lg"></div>
                        <div className="absolute inset-3 border-2 border-white/20 rotate-45 rounded-lg"></div>
                      </div>
                    </div>
                  ) : (
                    <div className="relative aspect-square w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden"
                      style={{
                        border: '2px solid rgba(255, 255, 255, 0.2)',
                      }}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  {/* Member Info */}
                  <div className="space-y-3 text-center flex-1 flex flex-col">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1 leading-tight">
                        {member.name}
                      </h3>
                      <p className="text-sm text-[#e78a53] leading-tight">{member.role}</p>
                    </div>

                    {/* Story text */}
                    <p className="text-sm text-zinc-300 leading-relaxed flex-1">
                      {member.story}
                    </p>

                    {/* Social Links */}
                    {(member.linkedin || member.instagram) && (
                      <div className="flex items-center justify-center gap-4 pt-4">
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-400 hover:text-white transition-colors"
                            aria-label="LinkedIn"
                          >
                            <Linkedin className="w-5 h-5" strokeWidth={1.5} />
                          </a>
                        )}
                        {member.instagram && (
                          <a
                            href={member.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-400 hover:text-white transition-colors"
                            aria-label="Instagram"
                          >
                            <Instagram className="w-5 h-5" strokeWidth={1.5} />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom glow effect on hover */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Team CTA - Cleaner, more professional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 pt-16 border-t border-zinc-800/50"
        >
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-zinc-50 mb-4">
              Building something meaningful?
            </h3>
            <p className="text-zinc-400 mb-8">
              We're always looking for talented engineers, designers, and strategists who want to solve real automation challenges.
            </p>
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-700 text-zinc-300 hover:border-zinc-600 hover:text-zinc-50 transition-colors"
            >
              <span className="font-medium">View Open Roles</span>
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
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
