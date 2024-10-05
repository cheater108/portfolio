"use client";

import { useState } from "react";
import Navbar from "./Navbar";

function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [dark, setDark] = useState("light");

    function toggleMode() {
        if (dark === "light") {
            setDark("dark");
        } else {
            setDark("light");
        }
    }
    return (
        <div
            className={`antialiased ${dark} bg-light-background text-black dark:bg-black dark:text-white `}
        >
            <Navbar mode={dark} toggle={toggleMode} />
            {children}
        </div>
    );
}

export default ThemeProvider;
