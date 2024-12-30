import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Navbar({ toggle, mode }: { toggle: () => void; mode: string }) {
    const [display, setDisplay] = useState(false);
    return (
        <nav className="border-b-2 border-black dark:border-slate-50">
            <div className="max-w-3xl p-1 m-auto flex text-lg justify-between ">
                <Link href={"/"}>Home</Link>
                <button onClick={toggle}>
                    {mode === "dark" ? (
                        <FontAwesomeIcon icon={faSun} />
                    ) : (
                        <FontAwesomeIcon icon={faMoon} />
                    )}
                </button>
                <Link href={"/"} onClick={() => setDisplay(!display)}>
                    {display ? "chetan108@outlook.com" : "Contact"}
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
