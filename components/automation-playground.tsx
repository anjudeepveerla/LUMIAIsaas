"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Zap, Cpu, Bot, Settings2, ListChecks, Sparkles, Filter, ClipboardCheck, Boxes, Gauge, Send } from "lucide-react"
import { GlobeToMapTransform } from "@/components/globe-to-map-transform"

const ORANGE = "#e78a53"

const COUNTRY_TICKER = ["India", "UAE", "Saudi Arabia", "USA", "UK", "Australia", "Sri Lanka"]

type NodeConfig = {
  id: number
  label: string
  x: number
  y: number
  layer: "input" | "processing" | "ai" | "output"
  Icon: React.ComponentType<{ className?: string }>
}

type Edge = {
  from: number
  to: number
}

// Start + 7 middle nodes + final → aligned start/end, staggered middle
const NODE_CONFIG: NodeConfig[] = [
  // Slightly further left so it visually separates from the next node
  { id: 0, label: "Automate with LumiAI", x: -4, y: 50, layer: "input", Icon: Zap },
  { id: 1, label: "Inputs", x: 13, y: 40, layer: "input", Icon: Boxes },
  { id: 2, label: "Processing Engine", x: 27, y: 60, layer: "processing", Icon: Cpu },
  { id: 3, label: "AI Agent", x: 41, y: 35, layer: "ai", Icon: Bot },
  { id: 4, label: "Workflow Logic", x: 55, y: 65, layer: "processing", Icon: Settings2 },
  { id: 5, label: "Automation Rules", x: 67, y: 38, layer: "processing", Icon: ListChecks },
  { id: 6, label: "Data Cleaner", x: 79, y: 62, layer: "processing", Icon: Filter },
  // Move final CTA slightly further to the right for better spacing
  { id: 7, label: "Click to Automate Your Business", x: 94, y: 50, layer: "output", Icon: Sparkles },
]

const EDGES: Edge[] = [
  { from: 0, to: 1 },
  { from: 1, to: 2 },
  { from: 1, to: 3 },

  { from: 2, to: 3 },
  { from: 2, to: 4 },

  { from: 3, to: 4 },
  { from: 3, to: 5 },

  { from: 4, to: 5 },
  { from: 4, to: 6 },

  { from: 5, to: 6 },
  { from: 6, to: 7 },
]

export function AutomationPlayground() {
  const [activeNode, setActiveNode] = useState<number | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const [hasCompleted, setHasCompleted] = useState(false)

  useEffect(() => {
    if (!isAnimating) return

    const order = NODE_CONFIG.map((n) => n.id)
    const step = 5000 / Math.max(order.length - 1, 1)
    let index = 0
    setActiveNode(order[0])

    const interval = setInterval(() => {
      index += 1
      if (index < order.length) {
        setActiveNode(order[index])
      } else {
        clearInterval(interval)
        setIsAnimating(false)
      }
    }, step)

    return () => clearInterval(interval)
  }, [isAnimating])

  const handleStart = () => {
    if (isAnimating) return
    setHasCompleted(false)
    setIsAnimating(true)
    setTimeout(() => {
      setHasCompleted(true)
    }, 5000)
  }

  const maxActive = activeNode ?? -1

  return (
    <section
      aria-label="LUMI AI automation playground"
      className="relative z-10 w-full py-20 sm:py-24 md:py-28 overflow-hidden"
    >
      {/* Title floating above canvas */}
      <div className="mb-8 flex w-full flex-col items-center justify-center text-center">
        <h2
          className={cn(
            "text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl",
          )}
        >
          Live Automation Flow
        </h2>
        <p className="mt-2 max-w-xl text-xs sm:text-sm text-muted-foreground">
          A floating canvas showing how LUMI AI pushes work from raw inputs to intelligent delivery.
        </p>
      </div>

      {/* Infinite-style canvas */}
      <div className="relative mx-auto h-[480px] w-full max-w-7xl overflow-x-auto md:overflow-visible">
        <div className="relative h-full min-w-[960px] md:min-w-full">
          {/* Connections (edges) */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {EDGES.map((edge, index) => {
              const from = NODE_CONFIG[edge.from]
              const to = NODE_CONFIG[edge.to]
              const isActive = isAnimating && maxActive >= to.id

              // Fully connected orthogonal paths (allowing overlap with borders)
              let d: string
              const startX = from.x
              const endX = to.x

              if (to.id === NODE_CONFIG[NODE_CONFIG.length - 1].id) {
                // Two-segment path into the final button (V-H)
                d = `M ${startX} ${from.y} V ${to.y} H ${endX}`
              } else {
                const midX = startX + (endX - startX) * 0.5
                d = `M ${startX} ${from.y} H ${midX} V ${to.y} H ${endX}`
              }

              return (
                <g key={`${edge.from}-${edge.to}-${index}`}>
                  {/* base L-shaped line */}
                  <path
                    d={d}
                    fill="none"
                    stroke="rgba(148,163,184,0.45)"
                    strokeWidth={0.12}
                    strokeLinecap="round"
                  />
                  {/* animated energy line */}
                  <motion.path
                    d={d}
                    fill="none"
                    stroke={ORANGE}
                    strokeWidth={0.3}
                    strokeLinecap="round"
                    strokeDasharray="3 9"
                    initial={false}
                    animate={
                      isActive
                        ? { strokeDashoffset: [36, 0] }
                        : { strokeDashoffset: 36 }
                    }
                    transition={{
                      duration: 0.9,
                      ease: "easeInOut",
                      repeat: isActive ? Infinity : 0,
                      repeatType: "loop",
                      delay: index * 0.06,
                    }}
                    opacity={isAnimating ? 0.9 : 0.5}
                  />
                </g>
              )
            })}
          </svg>

          {/* Floating nodes (all share the same rectangular style) */}
          {NODE_CONFIG.map((node) => {
            const isStart = node.id === 0
            const isFinal = node.id === NODE_CONFIG.length - 1
            const isActive = maxActive >= node.id
            const isCurrent = activeNode === node.id

            const Icon = node.Icon

            const baseGlow =
              "shadow-[0_0_6px_rgba(15,23,42,0.8)] ring-1 ring-white/10 bg-black"

            const isOrangeCTA = isStart || (isFinal && hasCompleted)
            const nodeBgClass = isOrangeCTA
              ? "bg-primary text-slate-950"
              : baseGlow

            const positionStyle = {
              left: `${node.x}%`,
              top: `${node.y}%`,
              transform: "translateY(-50%)",
            } as const

            // Position for the arrow indicator (only for start node)
            const arrowIndicatorStyle = {
              left: `${node.x}%`,
              top: `${node.y + 12}%`,
              transform: "translateX(-50%)",
            } as const

            // Determine animation variant for this node
            let animateProps: any
            let transitionProps: any

            if (isStart && !isAnimating && !hasCompleted) {
              // Pre-flow: strong orange heartbeat on start button
              animateProps = {
                scale: [1, 1.06, 1],
                boxShadow: [
                  "0 0 0 rgba(249,115,22,0.0)",
                  "0 0 28px rgba(249,115,22,0.95)",
                  "0 0 12px rgba(249,115,22,0.7)",
                ],
              }
              transitionProps = {
                duration: 1.1,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              }
            } else if (isFinal && hasCompleted && !isAnimating) {
              // Post-flow: very strong orange heartbeat on final button to attract clicks
              animateProps = {
                scale: [1, 1.3, 1],
                boxShadow: [
                  "0 0 0 rgba(249,115,22,0.0)",
                  "0 0 42px rgba(249,115,22,1)",
                  "0 0 24px rgba(249,115,22,0.95)",
                ],
              }
              transitionProps = {
                duration: 0.9,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              }
            } else if (isCurrent && isAnimating) {
              // During flow: electric blue pulse on the current node
              animateProps = {
                scale: [1, 1.07, 1],
                boxShadow: [
                  "0 0 0 rgba(56,189,248,0.0)",
                  "0 0 36px rgba(56,189,248,0.98)",
                  "0 0 18px rgba(56,189,248,0.7)",
                ],
              }
              transitionProps = {
                duration: 0.6,
                ease: "easeInOut",
              }
            } else if (isActive) {
              // Nodes already hit by the surge: keep a stable electric blue glow
              animateProps = {
                scale: 1,
                boxShadow: "0 0 20px rgba(56,189,248,0.7)",
              }
              transitionProps = {
                duration: 0.4,
                ease: "easeOut",
              }
            } else {
              // Idle nodes
              animateProps = {
                scale: 1,
                boxShadow: "0 0 6px rgba(15,23,42,0.8)",
              }
              transitionProps = {
                duration: 0.3,
                ease: "easeOut",
              }
            }

            return (
              <motion.button
                key={node.id}
                type="button"
                onClick={
                  isStart
                    ? handleStart
                    : isFinal && hasCompleted
                      ? () => window.open("https://wa.link/dmvkw2", "_blank", "noopener,noreferrer")
                      : undefined
                }
                style={positionStyle}
                className={cn(
                  "absolute flex min-w-[150px] max-w-[260px] items-center gap-2 border border-white/15 px-3 py-1.5 text-left text-[11px] sm:px-4 sm:py-2 sm:text-xs font-serif",
                  "backdrop-blur-xl transition-all duration-300 rounded-[6px]",
                  nodeBgClass,
                  isStart && "cursor-pointer hover:-translate-y-[1px]",
                  isFinal && !hasCompleted && "cursor-default opacity-60",
                  isFinal && hasCompleted && "cursor-pointer hover:-translate-y-[1px]",
                )}
                whileHover={{ scale: 1.02 }}
                animate={animateProps}
                transition={transitionProps}
              >
                {/* Node content */}
                {isStart || isFinal ? (
                  // Start & final buttons: text only, bolder and slightly larger
                  <div className="flex flex-col">
                    {isFinal ? (
                      <>
                        <span className="font-semibold leading-tight text-zinc-50 font-serif sm:text-[13px] whitespace-nowrap">
                          Click to Automate
                        </span>
                        <span className="font-semibold leading-tight text-zinc-50 font-serif sm:text-[13px] whitespace-nowrap">
                          Your Business
                        </span>
                      </>
                    ) : (
                      <span className="font-semibold leading-tight text-zinc-50 font-serif sm:text-[14px] whitespace-nowrap">
                        {node.label}
                      </span>
                    )}
                  </div>
                ) : (
                  <>
                    <div className="relative flex h-6 w-6 items-center justify-center rounded-full bg-black ring-1 ring-white/10">
                      <Icon className="h-3.5 w-3.5 text-zinc-100" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium leading-tight text-zinc-50 font-serif">
                        {node.label}
                      </span>
                    </div>
                  </>
                )}
              </motion.button>
            )
          })}

          {/* Animated Arrow indicator - positioned below "Automate with LumiAI" button */}
          {!isAnimating && !hasCompleted && (
            <motion.div
              style={{
                position: "absolute",
                left: `calc(${NODE_CONFIG[0].x}% + 75px)`,
                top: `${NODE_CONFIG[0].y + 12}%`,
                transform: "translateX(-50%)",
              }}
              className="flex flex-col items-center gap-1 pointer-events-none"
            >
              <motion.div
                animate={{
                  y: [-6, 0, -6],
                }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="flex flex-col items-center"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#e78a53]"
                >
                  <path
                    d="M12 19V5M12 5L5 12M12 5L19 12"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
              <span className="text-[10px] sm:text-xs text-zinc-400 font-medium whitespace-nowrap">
                Click to start automation
              </span>
            </motion.div>
          )}
        </div>
      </div>

      {/* Country ticker below nodes */}
      <div className="mt-6 flex w-full justify-center">
        <div className="relative w-full max-w-4xl overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-black" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-black" />

          <div className="flex gap-8 animate-[marquee_12s_linear_infinite] whitespace-nowrap text-xs sm:text-sm text-muted-foreground">
            {[...COUNTRY_TICKER, ...COUNTRY_TICKER, ...COUNTRY_TICKER].map((country, idx) => (
              <span
                key={`${country}-${idx}`}
                className="inline-flex items-center gap-1.5 text-zinc-300"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[rgba(231,138,83,0.9)] shadow-[0_0_12px_rgba(231,138,83,0.9)]" />
                {country}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Globe to Map Transform */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-16 w-full max-w-6xl mx-auto px-4"
      >
        {/* Header */}
        <div className="flex flex-col gap-2 mb-6 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Global Reach Visualization
          </h3>
          <p className="text-sm text-zinc-400">
            Interactive globe showing our worldwide automation services. Drag to rotate, click buttons to transform between views.
          </p>
        </div>

        {/* Globe Component - Floating without container */}
        <div className="flex w-full min-h-[400px] sm:min-h-[500px] justify-center items-center">
          <GlobeToMapTransform />
        </div>

        {/* Footer Info */}
        <div className="mt-6">
          <p className="text-xs text-zinc-500 text-center">
            <span className="text-primary font-semibold">Highlighted regions:</span> Countries where we've delivered automation solutions
          </p>
        </div>
      </motion.div>

      {/* marquee keyframes */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </section>
  )
}


