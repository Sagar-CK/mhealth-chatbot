import {api} from "@/trpc/server";
import {YushanChat} from "@/components/yushan/yushan-chat";

interface PageProps {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function Yushan({searchParams}: PageProps) {
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

    const user = await api.users.createUser({user_id: uid, study: "yushan"});

    if (!user) {
        return (
            <div className="flex flex-col gap-4 h-full w-full items-center justify-center">
                <h1 className="text-2xl font-bold">User not found!</h1>
                <p className="text-sm text-muted-foreground">
                    Contact the researcher for support or go to the previous page in your browser!
                </p>
            </div>
        );
    }

    return <YushanChat user={user}/>;
}
