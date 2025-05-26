"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Volume2 } from "lucide-react"
import { AudioMessage } from "@/components/ui/audio-message"

interface PrivacyPolicyPopupProps {
  isOpen: boolean
  onConfirm: () => void
  audioUrl: string
}

export function PrivacyPolicyPopup({ isOpen, onConfirm, audioUrl }: PrivacyPolicyPopupProps) {
  const [hasListenedCompletely, setHasListenedCompletely] = useState(false)

  // Reset state when popup opens
  useEffect(() => {
    if (isOpen) {
      setHasListenedCompletely(false)
    }
  }, [isOpen])

  return (
     <Dialog open={isOpen} onOpenChange={() => {}} modal>
      <DialogContent
        className="sm:max-w-md [&>button]:hidden"
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Volume2 className="h-5 w-5" />
            Privacy Policy
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Before proceeding with this scenario, please listen to the complete privacy policy.
          </p>

          <div className="p-4 border rounded-lg bg-muted/20">
            <AudioMessage audioUrl={audioUrl} onAudioComplete={() => setHasListenedCompletely(true)} />
          </div>

          <Button onClick={onConfirm} className="w-full" disabled={!hasListenedCompletely}>
            I have heard this audio and agree to proceed
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
