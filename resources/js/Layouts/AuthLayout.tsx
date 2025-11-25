import { Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";
import Image from '../Components/Image';

const AuthLayout = ({ children }: PropsWithChildren) => {
    return (
        <section>
            <div className="min-h-screen flex flex-col justify-start lg:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
                <div className="flex flex-col p-6 md:p-10 bg-zinc-900 text-white lg:h-full dark:border-r">
                    <div className="flex items-center text-lg font-medium">
                        <Image src="/icon/logo-himatikom.png" alt="Logo HIMATIKOM" width={50} height={50} className="mr-3" />
                        HIMATIKOM POLSUB
                    </div>


                    <div className="mt-16 lg:mt-auto">
                        <blockquote className="space-y-2">
                            <p className="text-lg">
                                &ldquo;Selamat datang di HIMATIKOM, disini kita melalui semuanya bersama karena kita memiliki asas kekeluargaan.&rdquo;
                            </p>
                            <footer className="text-sm italic">HIMATIKOM POLSUB</footer>
                        </blockquote>
                    </div>
                </div>

                <div className="flex-grow flex flex-col justify-center p-8">
                    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                        {children}
                    </div>
                </div>

            </div>
        </section>
    );
}

export default AuthLayout;
