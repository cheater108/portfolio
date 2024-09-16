import Image from "next/image";
import Link from "next/link";
import { pixelify_Sans } from "./fonts/fonts";
import github from "@/app/assets/Github.png";
import projects from "./lib/Projects-Data";
import ProjectCard from "./components/ProjectCard";

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
                    className={`${pixelify_Sans.className} border-b-2 border-black dark:border-slate-50 text-xl`}
                >
                    projects
                </div>
                <div className="projects-container p-2 grid grid-cols-1 md:grid-cols-2 gap-3">
                    {projects.map((project) => (
                        <ProjectCard {...project} key={project.name} />
                    ))}
                </div>
            </div>
        </main>
    );
}
