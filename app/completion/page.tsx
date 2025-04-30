"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function CompletionPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-y-4">
      <Card className="p-8 max-w-md text-center">
        <h1 className="text-2xl font-bold">Thank You!</h1>
        <p className="text-muted-foreground">
          You have successfully completed all scenarios in the task phase of the study. Your responses have been recorded and will be used for research purposes.
        </p>
      </Card>

      <Button onClick={() => window.open('https://www.google.com', '_blank')}>Continue to Qualtrics</Button>

    </div>
  )
} 