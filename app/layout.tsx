import type { Metadata } from "next";

import "./globals.css";
import { inria_Sans } from "@/app/fonts/fonts";
import ThemeProvider from "./components/ThemeProvider";

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
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    );
}
