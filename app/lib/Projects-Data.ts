import { StaticImageData } from "next/image";
import booksmarks_io from "@/app/assets/bookmarks-io.png";
import supper_app from "@/app/assets/supper-app.png";
import pocket_notes from "@/app/assets/pocket-notes.png";
import rock_paper_scissors from "@/app/assets/rock-paper-scissors.png";
import job_finder from "@/app/assets/Jobfinder.png";

export type skills = "node" | "express" | "react" | "mongodb" | "tailwind";

export type project = {
    name: string;
    img: StaticImageData;
    desc: string;
    url: string;
    skills_array: skills[];
};

const projects: project[] = [
    {
        name: "bookmarks-io",
        img: booksmarks_io,
        desc: "Web app to save bookmarks online, arrange in different groups.",
        url: "https://bookmarks-io.onrender.com/",
        skills_array: ["node", "express", "react", "mongodb"],
    },
    {
        name: "job-portal",
        img: job_finder,
        desc: "List jobs and search jobs based on skills and position.",
        url: "https://job-portal-4nd0.onrender.com/",
        skills_array: ["node", "express", "react", "mongodb", "tailwind"],
    },

    {
        name: "supper-app",
        img: supper_app,
        desc: "Fontend app design that contains a lot of small apps like weather, timer, news etc.",
        url: "https://super-app-seven-gamma.vercel.app/",
        skills_array: ["react"],
    },
    {
        name: "pocket-notes",
        img: pocket_notes,
        desc: "Notes taking web app using react. Notes are stored in local storage.",
        url: "https://pocket-notes-gilt.vercel.app/",
        skills_array: ["react"],
    },
    {
        name: "rock-paper-scissors",
        img: rock_paper_scissors,
        desc: "Play rock paper scissors game with computer. Made with vanilla javascript.",
        url: "https://rock-paper-scissors-mu-taupe.vercel.app/",
        skills_array: [],
    },
];

export default projects;
