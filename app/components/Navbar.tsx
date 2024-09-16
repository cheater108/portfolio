import Link from "next/link";

function Navbar() {
    return (
        <nav className="border-b-2 border-slate-50">
            <div className="max-w-3xl p-1 m-auto flex text-lg justify-between ">
                <Link href={"/"}>Home</Link>
                <button>mode</button>
                <Link href={"/"}>Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;
