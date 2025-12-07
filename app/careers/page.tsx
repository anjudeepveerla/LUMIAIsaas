"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, MapPin, Clock, Briefcase } from "lucide-react"
import Link from "next/link"
import { geist } from "@/lib/fonts"
import { cn } from "@/lib/utils"

interface Job {
  id: number
  title: string
  department: string
  location: string
  type: string
  description: string
  requirements: string[]
  responsibilities: string[]
}

const jobs: Job[] = [
  {
    id: 1,
    title: "AI Automation Expert",
    department: "Engineering",
    location: "Remote / Dubai",
    type: "Full-time",
    description: "We're looking for an experienced AI Automation Expert to design and implement intelligent automation solutions for our clients. You'll work with cutting-edge AI tools and no-code platforms to build scalable automation systems.",
    requirements: [
      "3+ years of experience in AI automation and workflow design",
      "Proficiency in no-code/low-code platforms (Make, N8n, Zapier)",
      "Strong understanding of AI agents, LLMs, and automation patterns",
      "Experience with API integrations and webhook management",
      "Excellent problem-solving and client communication skills"
    ],
    responsibilities: [
      "Design and implement AI automation workflows for clients",
      "Integrate AI agents with existing business systems",
      "Optimize automation performance and reliability",
      "Collaborate with clients to understand their automation needs",
      "Document automation processes and provide training"
    ]
  },
  {
    id: 2,
    title: "Content Editor & AI Specialist",
    department: "Content",
    location: "Remote",
    type: "Full-time",
    description: "Join our content team as a Content Editor & AI Specialist. You'll leverage AI tools to create, edit, and optimize content while maintaining quality and brand voice. Perfect for someone who loves both creativity and technology.",
    requirements: [
      "2+ years of content editing or writing experience",
      "Familiarity with AI content generation tools (GPT, Claude, etc.)",
      "Strong editorial skills and attention to detail",
      "Understanding of SEO and content optimization",
      "Ability to work with AI-generated content and refine it"
    ],
    responsibilities: [
      "Edit and refine AI-generated content for various platforms",
      "Develop content strategies using AI tools",
      "Ensure brand voice consistency across all content",
      "Optimize content for SEO and engagement",
      "Collaborate with automation team on content workflows"
    ]
  },
  {
    id: 3,
    title: "Voice AI Engineer",
    department: "Engineering",
    location: "Remote / Hybrid",
    type: "Full-time",
    description: "We're seeking a Voice AI Engineer to build and deploy voice-based AI agents and systems. You'll work with voice platforms, telephony APIs, and conversational AI to create seamless voice experiences for our clients.",
    requirements: [
      "2+ years of experience with voice AI platforms (Voiceflow, Twilio, etc.)",
      "Understanding of conversational AI and NLP",
      "Experience with telephony APIs and voice integrations",
      "Knowledge of speech recognition and text-to-speech technologies",
      "Strong programming skills (Python, JavaScript preferred)"
    ],
    responsibilities: [
      "Design and develop voice AI agents for client applications",
      "Integrate voice systems with existing business workflows",
      "Test and optimize voice AI performance and accuracy",
      "Troubleshoot voice integration issues",
      "Stay updated with latest voice AI technologies and trends"
    ]
  },
  {
    id: 4,
    title: "No-Code Automation Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "As a No-Code Automation Developer, you'll build powerful automation solutions without writing traditional code. You'll use visual workflow builders to create integrations, automations, and AI-powered systems that solve real business problems.",
    requirements: [
      "1+ years of experience with no-code platforms (Make, Bubble, Zapier)",
      "Strong logical thinking and problem-solving abilities",
      "Understanding of API concepts and data flows",
      "Experience building automation workflows",
      "Ability to learn new platforms quickly"
    ],
    responsibilities: [
      "Build automation workflows using no-code platforms",
      "Create integrations between different software systems",
      "Design user-friendly automation solutions",
      "Test and debug automation workflows",
      "Document automation processes and provide support"
    ]
  },
  {
    id: 5,
    title: "AI Solutions Strategist",
    department: "Strategy",
    location: "Remote / Dubai",
    type: "Full-time",
    description: "Join our strategy team as an AI Solutions Strategist. You'll work directly with clients to understand their business challenges and design comprehensive AI automation strategies. This role combines business acumen with technical knowledge.",
    requirements: [
      "3+ years of experience in business strategy or consulting",
      "Strong understanding of AI and automation technologies",
      "Excellent client-facing and communication skills",
      "Ability to translate business needs into technical solutions",
      "Experience with process mapping and workflow design"
    ],
    responsibilities: [
      "Conduct client discovery sessions to identify automation opportunities",
      "Design comprehensive AI automation strategies",
      "Create detailed project roadmaps and timelines",
      "Present solutions to clients and stakeholders",
      "Collaborate with engineering team on implementation"
    ]
  }
]

export default function CareersPage() {
  const [mounted, setMounted] = useState(false)
  const [selectedJob, setSelectedJob] = useState<number | null>(null)

  useEffect(() => {
    setMounted(true)
    const root = window.document.documentElement
    root.classList.remove("light", "system")
    root.classList.add("dark")
  }, [])

  if (!mounted) {
    return null
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

      {/* Header */}
      <header className="sticky top-4 z-[9999] mx-auto max-w-5xl px-4 py-2 flex flex-row items-center justify-between self-start rounded-full bg-background/80 backdrop-blur-sm border border-border/50 shadow-lg transition-all duration-300 mt-4">
        <Link
          href="/"
          className="z-50 flex items-center justify-center gap-2 text-lg font-semibold tracking-tight text-foreground drop-shadow-[0_0_18px_rgba(244,244,245,0.4)]"
        >
          <span className="drop-shadow-[0_0_20px_rgba(244,244,245,0.8)]">
            LUMI<span className="font-light">AI</span>
          </span>
        </Link>
        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </header>

      {/* Main Content */}
      <section className="relative w-full py-20 sm:py-24 md:py-28 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 flex w-full flex-col items-center justify-center text-center"
          >
            <h2
              className={cn(
                "text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl mb-4",
                geist.className,
              )}
            >
              Join Our Team
            </h2>
            <p className="max-w-2xl text-base sm:text-lg text-zinc-400">
              Building something meaningful? We're always looking for talented engineers, designers, and strategists who want to solve real automation challenges.
            </p>
          </motion.div>

          {/* Jobs List */}
          <div className="space-y-6 max-w-4xl mx-auto">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Liquid Glass Container */}
                <div
                  className="relative rounded-2xl p-8 overflow-hidden transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                  style={{
                    background: selectedJob === job.id
                      ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)'
                      : 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)',
                    backdropFilter: 'blur(20px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                    border: '1px solid rgba(255, 255, 255, 0.18)',
                    boxShadow: selectedJob === job.id
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
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#e78a53] transition-colors">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-400">
                          <div className="flex items-center gap-2">
                            <Briefcase className="w-4 h-4" />
                            <span>{job.department}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{job.type}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-zinc-300 leading-relaxed mb-4">
                      {job.description}
                    </p>

                    {/* Expanded Details */}
                    {selectedJob === job.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-6 space-y-6 pt-6 border-t border-white/10"
                      >
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Responsibilities</h4>
                          <ul className="space-y-2">
                            {job.responsibilities.map((responsibility, idx) => (
                              <li key={idx} className="text-zinc-300 flex items-start gap-2">
                                <span className="text-[#e78a53] mt-1.5">•</span>
                                <span>{responsibility}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                          <ul className="space-y-2">
                            {job.requirements.map((requirement, idx) => (
                              <li key={idx} className="text-zinc-300 flex items-start gap-2">
                                <span className="text-[#e78a53] mt-1.5">•</span>
                                <span>{requirement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-4">
                          <a
                            href="https://wa.link/dmvkw2"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#e78a53] text-white font-semibold hover:bg-[#e78a53]/90 transition-all duration-300"
                          >
                            Apply Now
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
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Bottom glow effect */}
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

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-20 text-center"
          >
            <p className="text-white/60 mb-6 text-lg">
              Don't see a role that fits? We're always open to hearing from exceptional talent.
            </p>
            <a
              href="https://wa.link/dmvkw2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all duration-300"
            >
              <span className="font-medium">Get in Touch</span>
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
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

