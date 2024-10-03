import { PropsWithChildren } from "react";
import FrontNavbar from "@/Layouts/partials/FrontNavbar";
import FrontFooter from "@/Layouts/partials/FrontFooter";
import { Toaster } from "@/Components/ui/toaster";

const FrontLayout = ({ children }: PropsWithChildren) => {
    return (
        <section>
            <FrontNavbar />
            <div className="w-full md:max-w-full">
                {children}
            </div>
            <Toaster />
            <FrontFooter />
        </section>
    );

}
export default FrontLayout;
