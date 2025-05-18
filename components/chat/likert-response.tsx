"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface LikertResponseProps {
  question: string
  onSelect: (response: string) => void
  scale: 5 | 7
  disabled?: boolean
}

const likertValues5 = ['Not willing', 'Slightly willing', 'Moderately willing', 'Very willing', 'Extremely willing'];
const likertValues7 = ['Strongly disagree', 'Disagree', 'Somewhat disagree', 'Neutral', 'Somewhat agree', 'Agree', 'Strongly agree'];

export function LikertResponse({ question, onSelect, scale, disabled }: LikertResponseProps) {
  const [selectedValue, setSelectedValue] = useState<string | string>()

  const handleSelect = (value: string) => {
    setSelectedValue(value)
    onSelect(value)
  }

  return (
    <div className="space-y-3">
      <p className="text-sm font-medium">{question}</p>
      <div className="flex flex-wrap justify-between gap-1 sm:flex-nowrap">
        {scale === 5 ? likertValues5.map((value) => (
          <Button
            key={value}
            variant="outline"
            className={cn(
              "flex-1 h-12 w-full sm:w-auto",
              (selectedValue === value) && "bg-primary text-primary-foreground",
            )}
            onClick={() => handleSelect(value)}
            disabled={disabled}
          >
            {value}
          </Button>
        )) : likertValues7.map((value) => (
          <Button
            key={value}
            variant="outline"
            className={cn(
              "flex-1 h-12 w-full sm:w-auto",
              (selectedValue === value) && "bg-primary text-primary-foreground",
            )}
            onClick={() => handleSelect(value)}
            disabled={disabled}
          >
            {value}
          </Button>
        ))}
      </div>
    </div>
  )
}

