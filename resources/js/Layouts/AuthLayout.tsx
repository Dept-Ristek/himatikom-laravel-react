import { Link, usePage } from "@inertiajs/react";
import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/Components/ui/button";
import Image from '../Components/Image';

const AuthLayout = ({ children }: PropsWithChildren) => {
    return (
        <section>
            <div className="h-screen flex flex-col-reverse items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
                <div className="h-full flex flex-col p-10 bg-zinc-900 text-white dark:border-r">
                    <div className="relative z-20 flex items-center text-lg font-medium">
                        <Image src="/icon/logo-himatikom.png" alt="Logo HIMATIKOM" width={50} height={50} className="mr-3" />
                        HIMATIKOM POLSUB
                    </div>
                    <div className="relative z-20 mt-auto">
                        <blockquote className="space-y-2">
                            <p className="text-lg">
                                &ldquo;Selamat datang di HIMATIKOM, disini kita melalui semuanya
                                bersama karena kita memiliki asas kekeluargaan.&rdquo;
                            </p>
                            <footer className="text-sm italic">HIMATIKOM POLSUB</footer>
                        </blockquote>
                    </div>
                </div>
                <div className="lg:p-8">
                    <div className="mx-auto flex lg:w-[350px] flex-col justify-center space-y-6">
                        {children}
                    </div>
                </div>
            </div>
        </section >
    );
}
export default AuthLayout;
