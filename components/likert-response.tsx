"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface LikertResponseProps {
  scale: number
  question: string
  onSelect: (response: string) => void
}

const likertValues = ['Not willing', 'Slightly willing', 'Moderately willing', 'Very willing', 'Extremely willing'];

export function LikertResponse({ scale, question, onSelect }: LikertResponseProps) {
  const [selectedValue, setSelectedValue] = useState<string | string>()

  const handleSelect = (value: string) => {
    setSelectedValue(value)
    onSelect(value)
  }

  return (
    <div className="space-y-3">
      <p className="text-sm font-medium">{question}</p>
      <div className="flex flex-wrap justify-between gap-1 sm:flex-nowrap">
        {likertValues.map((value) => (
          <Button
            key={value}
            variant="outline"
            className={cn(
              "flex-1 h-12 w-full sm:w-auto",
              (selectedValue === value) && "bg-primary text-primary-foreground",
            )}
            onClick={() => handleSelect(value)}
          >
            {value}
          </Button>
        ))}
      </div>
    </div>
  )
}

