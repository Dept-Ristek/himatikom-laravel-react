import { PropsWithChildren } from "react";
import { User } from "@/types";
import { usePage } from "@inertiajs/react";
import TempMainNavbar from "@/Layouts/partials/TempMainNavbar";
import TempMainSidebar from "@/Layouts/partials/TempMainSidebar";
import { Toaster } from "@/Components/ui/toaster";

const TempMainLayout = ({ children }: PropsWithChildren) => {
    const user: User = usePage().props.auth.user;
    return (
        <section>
            <TempMainNavbar user={user} />
            <div className="flex">
                <div className="min-h-screen bg-zinc-900 hidden md:block w-[20rem]">
                    <TempMainSidebar />
                </div>
                <div className="w-full md:max-w-full">
                    {children}
                    <Toaster />
                </div>
            </div>
        </section>
    );
}
export default TempMainLayout;
