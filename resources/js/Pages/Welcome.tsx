import { Head, Link, usePage } from "@inertiajs/react";
import FrontLayout from "@/Layouts/FrontLayout";

const Welcome = ({ title }: { title: string }) => {
    const user = usePage().props.auth.user
    return (
        <FrontLayout>
            <Head title={title} />
            <div className="h-screen flex flex-col justify-center items-center">
                <p>Ini Halaman Landing</p>
            </div>
        </FrontLayout>
    );
}
export default Welcome;
