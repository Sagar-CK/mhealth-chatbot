import { SagarChat } from "@/components/chat/sagar-chat";
import { api } from "@/trpc/server";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function Sagar({ searchParams }: PageProps) {
  const trueSearchParams = await searchParams;
  const uid = trueSearchParams.uid as string;

  if (!uid) {
    return (
      <div className="flex flex-col gap-4 h-full w-full items-center justify-center">
        <h1 className="text-2xl font-bold">No UID provided!</h1>
        <p className="text-sm text-muted-foreground">
          Contact the researcher for support or go to the previous page in your browser!
        </p>
      </div>
    );
  }

  const user = await api.users.getUserById({ userId: uid });

  if (!user || !user.condition) {
    return <div>User not found</div>;
  }
  
  return <SagarChat uid={uid} condition={user.condition} />;
}
