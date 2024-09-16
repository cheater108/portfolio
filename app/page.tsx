import Image from "next/image";
import Link from "next/link";
import { pixelify_Sans } from "./fonts/fonts";
import github from "@/app/assets/Github.png";
import bookmarks_io from "@/app/assets/bookmarks-io.png";
import super_app from "@/app/assets/supper-app.png";
import pocket_notes from "@/app/assets/pocket-notes.png";
import rock_paper_scissors from "@/app/assets/rock-paper-scissors.png";

export default function Home() {
    return (
        <main className="max-w-3xl p-1 m-auto">
            <div className="hero flex mt-8">
                <div className="left flex flex-col justify-center items-center md:items-start">
                    <h1
                        className={`${pixelify_Sans.className} text-7xl text-center md:text-left`}
                    >
                        Chetan Anand
                    </h1>
                    <p className="w-3/4 mt-2">
                        Hi, I’m Chetan Anand. Welcome to my portfolio! Here,
                        you’ll find a showcase of my projects, interests, and
                        the tech stacks I’m currently exploring.
                    </p>
                    <div className="links flex items-center gap-3 mt-4">
                        <button className="bg-theme-grey text-black px-4 py-2 rounded-md font-bold">
                            Contact me
                        </button>
                        <div className="github bg-theme-grey aspect-square p-2 rounded-full">
                            <Link
                                href={"https://github.com/cheater108"}
                                target="_blank"
                            >
                                <Image
                                    src={github}
                                    alt="Github image"
                                    width={"25"}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="right hidden md:block">
                    <div className="w-[200px] h-[200px] rounded-full flex justify-center items-center bg-custom-grey">
                        <p
                            className={`${pixelify_Sans.className} text-8xl text-black`}
                        >
                            CA
                        </p>
                    </div>
                </div>
            </div>
            <div className="projects mt-3">
                <div
                    className={`${pixelify_Sans.className} border-b-2 border-slate-50 text-xl`}
                >
                    projects
                </div>
                <div className="projects-container p-2 grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="bg-theme-grey text-black p-3 rounded-md ">
                        <h1
                            className={`${pixelify_Sans.className} text-2xl border-b-2 border-black`}
                        >
                            bookmarks-io
                        </h1>
                        <div className="rounded-sm mt-2">
                            <Image
                                className="rounded-sm"
                                src={bookmarks_io}
                                alt="bookmarks-io screenshot"
                            />
                        </div>
                        <p className="font-bold text-sm mt-2">
                            Web app to save bookmarks online, arrange in
                            different groups.
                        </p>
                    </div>
                    <div className="bg-theme-grey text-black p-3 rounded-md ">
                        <h1
                            className={`${pixelify_Sans.className} text-2xl border-b-2 border-black`}
                        >
                            supper-app
                        </h1>
                        <div className="rounded-sm mt-2">
                            <Image
                                className="rounded-sm"
                                src={super_app}
                                alt="bookmarks-io screenshot"
                            />
                        </div>
                        <p className="font-bold text-sm mt-2">
                            Fontend app design that contains a lot of small apps
                            like weather, timer, news etc.
                        </p>
                    </div>
                    <div className="bg-theme-grey text-black p-3 rounded-md ">
                        <h1
                            className={`${pixelify_Sans.className} text-2xl border-b-2 border-black`}
                        >
                            pocket-notes
                        </h1>
                        <div className="rounded-sm mt-2">
                            <Image
                                className="rounded-sm"
                                src={pocket_notes}
                                alt="bookmarks-io screenshot"
                            />
                        </div>
                        <p className="font-bold text-sm mt-2">
                            Notes taking web app using react.
                        </p>
                    </div>
                    <div className="bg-theme-grey text-black p-3 rounded-md ">
                        <h1
                            className={`${pixelify_Sans.className} text-2xl border-b-2 border-black`}
                        >
                            rock-paper-scissors
                        </h1>
                        <div className="rounded-sm mt-2">
                            <Image
                                className="rounded-sm"
                                src={rock_paper_scissors}
                                alt="bookmarks-io screenshot"
                            />
                        </div>
                        <p className="font-bold text-sm mt-2">
                            Play rock paper scissors game with computer. Made
                            with vanilla javascript.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
