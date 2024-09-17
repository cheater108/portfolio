"use client";

import Image from "next/image";
import { pixelify_Sans } from "../fonts/fonts";
import Techused from "./Techused";
import { project } from "../lib/Projects-Data";

function ProjectCard({ name, img, desc, url, skills_array }: project) {
    function openProject() {
        window.open(url, "_blank");
    }
    return (
        <div className="bg-theme-grey text-black p-3 rounded-md ">
            <h1
                className={`${pixelify_Sans.className} text-2xl border-b-2 border-black cursor-pointer hover:underline`}
                onClick={openProject}
            >
                {name}
            </h1>
            <div className="rounded-sm mt-2">
                <Image
                    className="rounded-sm"
                    src={img}
                    alt={`${name} screenshot`}
                />
            </div>
            <p className="font-semibold text-sm mt-2">{desc}</p>
            <Techused skills_array={skills_array} />
        </div>
    );
}

export default ProjectCard;
