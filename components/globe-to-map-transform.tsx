"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import * as d3 from "d3"
import { feature } from "topojson-client"
import { Button } from "@/components/ui/button"

interface GeoFeature {
  type: string
  geometry: any
  properties: any
  id?: string
}

const HIGHLIGHTED_COUNTRIES: Record<string, { name: string; rank: number }> = {
  "356": { name: "India", rank: 2 },
  "784": { name: "UAE", rank: 3 },
  "36": { name: "Australia", rank: 4 },
  "554": { name: "New Zealand", rank: 7 },
  "840": { name: "USA", rank: 5 },
  "826": { name: "UK", rank: 8 },
  "276": { name: "Germany", rank: 6 },
  "682": { name: "Saudi Arabia", rank: 9 },
  "144": { name: "Sri Lanka", rank: 1 },
  "036": { name: "Australia", rank: 4 },
}

function interpolateProjection(raw0: any, raw1: any) {
  const mutate: any = d3.geoProjectionMutator((t: number) => (x: number, y: number) => {
    const [x0, y0] = raw0(x, y)
    const [x1, y1] = raw1(x, y)
    return [x0 + t * (x1 - x0), y0 + t * (y1 - y0)]
  })
  let t = 0
  return Object.assign((mutate as any)(t), {
    alpha(_: number) {
      return arguments.length ? (mutate as any)((t = +_)) : t
    },
  })
}

export function GlobeToMapTransform() {
  const svgRef = useRef<SVGSVGElement>(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const [progress, setProgress] = useState([0])
  const [worldData, setWorldData] = useState<GeoFeature[]>([])
  const [rotation, setRotation] = useState([0, 0])
  const [translation, setTranslation] = useState([0, 0])
  const [isDragging, setIsDragging] = useState(false)
  const [lastMouse, setLastMouse] = useState([0, 0])
  const autoRotateRef = useRef<number | null>(null)

  const width = 800
  const height = 500

  // Load world data
  useEffect(() => {
    const loadWorldData = async () => {
      try {
        // Using Natural Earth data from a CDN
        const response = await fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")
        const world: any = await response.json()
        const countriesFeature: any = feature(world, world.objects.countries)
        const countries = countriesFeature.features as GeoFeature[]
        setWorldData(countries)
        console.log("[LUMI AI] Successfully loaded world data with", countries.length, "countries")
      } catch (error) {
        console.log("[LUMI AI] Error loading world data:", error)
        // Fallback: create a simple world outline
        const fallbackData: GeoFeature[] = [
          {
            type: "Feature",
            geometry: {
              type: "Polygon",
              coordinates: [
                [
                  [-180, -90],
                  [180, -90],
                  [180, 90],
                  [-180, 90],
                  [-180, -90],
                ],
              ],
            },
            properties: {},
          },
        ]
        setWorldData(fallbackData)
      }
    }

    loadWorldData()
  }, [])

  // Auto-rotation effect for globe
  useEffect(() => {
    const t = progress[0] / 100
    
    // Only auto-rotate when in globe mode (t < 0.5) and not dragging or animating
    if (t < 0.5 && !isDragging && !isAnimating) {
      const startRotation = () => {
        autoRotateRef.current = window.setInterval(() => {
          setRotation((prev) => [(prev[0] + 0.3) % 360, prev[1]])
        }, 50)
      }
      
      startRotation()
      
      return () => {
        if (autoRotateRef.current) {
          clearInterval(autoRotateRef.current)
          autoRotateRef.current = null
        }
      }
    } else {
      if (autoRotateRef.current) {
        clearInterval(autoRotateRef.current)
        autoRotateRef.current = null
      }
    }
  }, [progress, isDragging, isAnimating])

  const handleMouseDown = (event: React.MouseEvent) => {
    setIsDragging(true)
    const rect = svgRef.current?.getBoundingClientRect()
    if (rect) {
      setLastMouse([event.clientX - rect.left, event.clientY - rect.top])
    }
  }

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!isDragging) return

    const rect = svgRef.current?.getBoundingClientRect()
    if (!rect) return

    const currentMouse = [event.clientX - rect.left, event.clientY - rect.top]
    const dx = currentMouse[0] - lastMouse[0]
    const dy = currentMouse[1] - lastMouse[1]

    const t = progress[0] / 100

    if (t < 0.5) {
      // Globe mode - rotate
      const sensitivity = 0.5
      // NOTE: flip horizontal sign so dragging right rotates globe to the right
      setRotation((prev) => [prev[0] + dx * sensitivity, Math.max(-90, Math.min(90, prev[1] - dy * sensitivity))])
    } else {
      // Map mode - rotate the projection (not simple pan)
      // This updates the projection.rotate(...) used when in equirectangular mode.
      const sensitivityMap = 0.25 // lower sensitivity for longitude/latitude rotation
      setRotation((prev) => [prev[0] + dx * sensitivityMap, Math.max(-90, Math.min(90, prev[1] - dy * sensitivityMap))])
    }

    setLastMouse(currentMouse)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // Initialize and update visualization
  useEffect(() => {
    if (!svgRef.current || worldData.length === 0) return

    const svg = d3.select(svgRef.current)
    svg.selectAll("*").remove()

    const t = progress[0] / 100
    const alpha = Math.pow(t, 0.5) // Ease-out for smoother animation

    const scale = d3.scaleLinear().domain([0, 1]).range([200, 120])
    const baseRotate = d3.scaleLinear().domain([0, 1]).range([0, 0])

    const projection = interpolateProjection(d3.geoOrthographicRaw, d3.geoEquirectangularRaw)
      .scale(scale(alpha))
      .translate([width / 2 + translation[0], height / 2 + translation[1]])
      .rotate([baseRotate(alpha) + rotation[0], rotation[1]])
      .precision(0.1)

    // Set the interpolation parameter
    projection.alpha(alpha)

    // Create path generator
    const path = d3.geoPath(projection)

    // Add graticule (grid lines) - removed for cleaner look
    // Graticule lines removed as per user preference

    const highlightedCountries = worldData.filter((d) => d.id && HIGHLIGHTED_COUNTRIES[d.id])
    const regularCountries = worldData.filter((d) => !d.id || !HIGHLIGHTED_COUNTRIES[d.id])

    // Add regular countries first (background layer)
    svg
      .selectAll(".country")
      .data(regularCountries)
      .enter()
      .append("path")
      .attr("class", "country")
      .attr("d", (d) => {
        try {
          const pathString = path(d as any)
          if (!pathString) return ""
          if (typeof pathString === "string" && (pathString.includes("NaN") || pathString.includes("Infinity"))) {
            return ""
          }
          return pathString
        } catch (error) {
          console.log("[LUMI AI] Error generating path for country:", error)
          return ""
        }
      })
      .attr("fill", "#1a1a1a")
      .attr("stroke", "#3a3a3a")
      .attr("stroke-width", 0.5)
      .attr("opacity", 1.0)
      .style("visibility", function () {
        const pathData = d3.select(this).attr("d")
        return pathData && pathData.length > 0 && !pathData.includes("NaN") ? "visible" : "hidden"
      })

    // Highlighted countries with brand color #e78a53
    svg
      .selectAll(".highlighted-country")
      .data(highlightedCountries)
      .enter()
      .append("path")
      .attr("class", "highlighted-country")
      .attr("d", (d) => {
        try {
          const pathString = path(d as any)
          if (!pathString) return ""
          if (typeof pathString === "string" && (pathString.includes("NaN") || pathString.includes("Infinity"))) {
            return ""
          }
          return pathString
        } catch (error) {
          console.log("[LUMI AI] Error generating path for highlighted country:", error)
          return ""
        }
      })
      .attr("fill", "#e78a53")
      .attr("stroke", "#f59e6f")
      .attr("stroke-width", 1.5)
      .attr("opacity", 0.9)
      .style("visibility", function () {
        const pathData = d3.select(this).attr("d")
        return pathData && pathData.length > 0 && !pathData.includes("NaN") ? "visible" : "hidden"
      })
      .style("filter", "drop-shadow(0 0 12px rgba(231, 138, 83, 0.5))")

    // Sphere outline removed completely to eliminate center meridian line
    // The globe outline is not needed for the visualization

    console.log("[LUMI AI] Visualization updated with progress:", progress[0])
  }, [worldData, progress, rotation, translation])

  const handleAnimate = () => {
    if (isAnimating) return

    setIsAnimating(true)
    const startProgress = progress[0]
    const endProgress = startProgress === 0 ? 100 : 0
    const duration = 2000

    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const t = Math.min(elapsed / duration, 1)

      // Smooth easing function
      const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
      const currentProgress = startProgress + (endProgress - startProgress) * eased

      setProgress([currentProgress])

      if (t < 1) {
        requestAnimationFrame(animate)
      } else {
        setIsAnimating(false)
      }
    }

    animate()
  }

  const handleReset = () => {
    setRotation([0, 0])
    setTranslation([0, 0])
  }

  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <svg
        ref={svgRef}
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-full bg-transparent cursor-grab active:cursor-grabbing"
        preserveAspectRatio="xMidYMid meet"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      />
      <div className="absolute bottom-4 right-4 flex gap-2 z-10">
        <Button 
          onClick={handleAnimate} 
          disabled={isAnimating} 
          className="cursor-pointer min-w-[120px] rounded bg-gradient-to-b from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold shadow-lg"
        >
          {isAnimating ? "Animating..." : progress[0] === 0 ? "Unroll Globe" : "Roll to Globe"}
        </Button>
        <Button
          onClick={handleReset}
          variant="outline"
          className="cursor-pointer min-w-[80px] text-white border-zinc-700 hover:bg-zinc-800 bg-zinc-900 rounded"
        >
          Reset
        </Button>
      </div>
    </div>
  )
}
