import { sagarStudy, yushanStudy, manuStudy, linaStudy} from "@/lib/constants";
import { api } from "@/trpc/server";

interface RevokedConsentProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function RevokedConsent({ searchParams }: RevokedConsentProps) {
  const uid = (await searchParams).uid as string;
  const study_id = (await searchParams).study_id as string;

  // get the study from the pathname
  const realStudy = study_id.includes(sagarStudy) ? "sagar" : study_id.includes(yushanStudy) ? "yushan" : study_id.includes(manuStudy) ? "manu" : study_id.includes(linaStudy) ? "lina" : "unknown";

  if (!uid) {
    return <div className="w-full h-full flex items-center justify-center flex-col gap-y-4">
      <h1 className="text-2xl font-bold">No UID provided!</h1>
      <p className="text-sm text-muted-foreground">
        We could not revoke your consent because no UID was provided. Please contact the researcher for support.
      </p>
    </div>
  }

  await api.users.revokeConsent({ user_id: uid, study: realStudy });

  return(
    <div className="w-full h-full flex items-center justify-center">
      We have revoked your consent. All data collected so far has been deleted.
    </div>
  )
}