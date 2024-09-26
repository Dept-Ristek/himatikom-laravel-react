import { PropsWithChildren } from "react";
import FrontNavbar from "@/Layouts/partials/FrontNavbar";

const FrontLayout = ({ children }: PropsWithChildren) => {
    return (
        <section>
            <FrontNavbar />
            <div className="w-full md:max-w-full">
                {children}
            </div>
        </section>
    );

}
export default FrontLayout;
