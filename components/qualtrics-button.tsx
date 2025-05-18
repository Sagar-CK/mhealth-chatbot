import { Button } from "./ui/button";

export interface QualtricsButtonProps {
  uid: string;
  studyId: string;
}

export function QualtricsButton({ uid, studyId }: QualtricsButtonProps) {
  return (
    <Button onClick={() => window.open(`https://tudelft.fra1.qualtrics.com/jfe/form/SV_eOGnYeZNYA1PX4G?uid=${uid}&study_id=${studyId}`, '_blank')}>
      Continue to Qualtrics
    </Button>
  )
}
