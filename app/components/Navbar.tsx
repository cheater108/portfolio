import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function Navbar({ toggle, mode }: { toggle: () => void; mode: string }) {
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
                <Link href={"/"}>Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;
