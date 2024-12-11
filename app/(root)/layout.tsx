import type {Metadata} from "next";
import {Header} from "@/shared/components/shared";
import {ReactNode} from "react";

export const metadata: Metadata = {
    title: "Juicy Pizza | Главная"
};

export default function HomeLayout({children, modal}: Readonly<{
    children: ReactNode;
    modal: ReactNode;
}>) {
    return (
        <main className='min-h-screen'>
            <Header/>
            {children}
            {modal}
        </main>
    );
}
