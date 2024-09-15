import type { Metadata } from "next";

import "./globals.css";
import Link from "next/link";
import { inria_Sans } from "@/app/fonts/fonts";

export const metadata: Metadata = {
    title: "Chetan Anand",
    description: "Portfolio for showcasing projects and interests.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inria_Sans.className} antialiased `}>
                <nav className="border-b-2 border-slate-50">
                    <div className="max-w-3xl p-1 m-auto flex text-lg justify-between ">
                        <Link href={"/"}>Home</Link>
                        <Link href={"/"}>Contact</Link>
                    </div>
                </nav>
                {children}
            </body>
        </html>
    );
}
