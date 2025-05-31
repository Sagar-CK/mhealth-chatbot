"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useSearchParams } from "next/navigation";

export default function LinaCompletionPage() {
    const searchParams = useSearchParams();
    const studyId = searchParams.get("study_id") as string;
    const uid = searchParams.get("uid") as string;
    const condition = searchParams.get("condition") as string;

    if (!studyId || !uid || !condition) {
        return <div className="flex flex-col items-center justify-center w-full h-full gap-y-4">
            <h1 className="text-2xl font-bold">Missing required parameters</h1>
            <p className="text-muted-foreground">
                Please contact the researcher for support or go to the previous page in your browser!
            </p>
        </div>
    }

    return (
        <div className="flex flex-col items-center justify-center w-full h-full gap-y-4">
            <Card className="p-8 max-w-md text-center">
                <h1 className="text-2xl font-bold">Thank You!</h1>
                <p className="text-muted-foreground">
                    You have successfully completed all scenarios in the task phase of the study. Your responses have been recorded and will be used for research purposes.
                </p>
            </Card>

            <Button
                onClick={() => window.open(
                    `https://tudelft.fra1.qualtrics.com/jfe/form/SV_eOGnYeZNYA1PX4G?uid=${uid}&study_id=${studyId}&condition=${condition}`,
                    '_blank'
                )}
            >
                Continue to Qualtrics
            </Button>
        </div>
    )
}