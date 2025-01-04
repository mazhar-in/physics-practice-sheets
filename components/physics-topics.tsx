"use client"

import { Download } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const topics = [
  {
    title: "Mechanics",
    description: "Forces, motion, and energy practice problems",
    filename: "mechanics-practice.pdf",
  },
  {
    title: "Thermodynamics",
    description: "Heat, temperature, and thermal processes",
    filename: "thermodynamics-practice.pdf",
  },
  {
    title: "Waves & Optics",
    description: "Wave phenomena and optical systems",
    filename: "waves-optics-practice.pdf",
  },
  {
    title: "Electricity & Magnetism",
    description: "Electric fields, circuits, and magnetic forces",
    filename: "em-practice.pdf",
  },
  {
    title: "Modern Physics",
    description: "Quantum mechanics and relativity basics",
    filename: "modern-physics-practice.pdf",
  },
  {
    title: "Fluid Mechanics",
    description: "Fluid statics and dynamics problems",
    filename: "fluid-mechanics-practice.pdf",
  },
  {
    title: "Nuclear Physics",
    description: "Nuclear reactions, radioactivity, and particle physics",
    filename: "nuclear-physics-practice.pdf",
  },
  {
    title: "Astrophysics",
    description: "Celestial mechanics and astronomical phenomena",
    filename: "astrophysics-practice.pdf",
  },
  {
    title: "Oscillations",
    description: "Simple harmonic motion and pendulum problems",
    filename: "oscillations-practice.pdf",
  },
  {
    title: "Rotational Dynamics",
    description: "Angular momentum and rotational motion",
    filename: "rotational-dynamics-practice.pdf",
  },
]

export function PhysicsTopics() {
  const handleDownload = async (filename: string) => {
    try {
      const response = await fetch(`/api/download?file=${filename}`)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = filename
      document.body.appendChild(link)
      link.click()
      link.remove()
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Download failed:', error)
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {topics.map((topic) => (
        <Card key={topic.title}>
          <CardHeader>
            <CardTitle>{topic.title}</CardTitle>
            <CardDescription>{topic.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={() => handleDownload(topic.filename)}
              className="w-full"
            >
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

