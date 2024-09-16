"use client";

// import type { Metadata } from "next";

import "./globals.css";
import { inria_Sans } from "@/app/fonts/fonts";
import Navbar from "./components/Navbar";
import { useState } from "react";

// export const metadata: Metadata = {
//     title: "Chetan Anand",
//     description: "Portfolio for showcasing projects and interests.",
// };

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [dark, setDark] = useState("light");
    function toggleMode() {
        if (dark === "dark") {
            setDark("light");
        } else {
            setDark("dark");
        }
    }
    return (
        <html lang="en">
            <body
                className={`${inria_Sans.className} antialiased ${dark} bg-light-background text-black dark:bg-black dark:text-white `}
            >
                <Navbar mode={dark} toggle={toggleMode} />
                {children}
            </body>
        </html>
    );
}
