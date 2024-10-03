import { usePage } from "@inertiajs/react";
import { PropsWithChildren } from "react";
import { User } from "@/types";
import { Toaster } from "@/Components/ui/toaster";
import MainNavbar from "@/Layouts/partials/MainNavbar";
import MainSidebar from "@/Layouts/partials/MainSidebar";
const MainLayout = ({ children }: PropsWithChildren) => {
    const user: User = usePage().props.auth.user;
    return (
        <section>
            <MainNavbar user={user} />
            <div className="flex">
                <div className="min-h-screen bg-zinc-900 hidden md:block w-[20rem]">
                    <MainSidebar />
                </div>
                <div className="w-full md:max-w-full">
                    {children}
                    <Toaster />
                </div>
            </div>
        </section>
    );
}
export default MainLayout;
