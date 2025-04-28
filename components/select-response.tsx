"use client"

import { Button } from "@/components/ui/button"

interface SelectResponseProps {
  options: string[]
  onSelect: (option: string) => void
}

export function SelectResponse({ options, onSelect }: SelectResponseProps) {
  return (
    <div className="grid grid-cols-1 gap-2">
      {options.map((option, index) => (
        <Button
          key={index}
          variant="outline"
          className="justify-start h-auto py-3 px-4 text-left"
          onClick={() => onSelect(option)}
        >
          {option}
        </Button>
      ))}
    </div>
  )
}
