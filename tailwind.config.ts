import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                "custom-grey": "#BFBFBF",
                "theme-grey": "#D9D9D9",
                "light-background": "#ededed",
            },
        },
    },
    darkMode: "selector",
    plugins: [],
};
export default config;
