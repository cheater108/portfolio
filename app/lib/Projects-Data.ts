import { StaticImageData } from "next/image";
import booksmarks_io from "@/app/assets/bookmarks-io.png";
import supper_app from "@/app/assets/supper-app.png";
import pocket_notes from "@/app/assets/pocket-notes.png";
// import rock_paper_scissors from "@/app/assets/rock-paper-scissors.png";
import job_finder from "@/app/assets/Jobfinder.png";
import pro_manage from "@/app/assets/pro-manage.png";
import order_uk from "@/app/assets/order-uk.png";

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
        desc: "Web app to save bookmarks online, create different groups, add description etc.",
        url: "https://bookmarks-io.onrender.com/",
        skills_array: ["node", "express", "react", "mongodb"],
    },
    {
        name: "Pro-manage",
        img: pro_manage,
        desc: "MERN web platform to create tasks, todos, assign and share tasks to user.",
        url: "https://pro-manage-client-liart.vercel.app/dashboard",
        skills_array: ["node", "express", "react", "mongodb"],
    },
    {
        name: "Order-uk",
        img: order_uk,
        desc: "Demo food delivery app. Browse restaurants, place order, add address and payment details.",
        url: "https://order-uk-frontend.vercel.app/",
        skills_array: ["node", "express", "react", "mongodb"],
    },
    {
        name: "job-portal",
        img: job_finder,
        desc: "Job listing platform built on MERN stack. Add jobs, search for jobs with integration to linkedin API.",
        url: "https://job-portal-4nd0.onrender.com/",
        skills_array: ["node", "express", "react", "mongodb", "tailwind"],
    },

    {
        name: "supper-app",
        img: supper_app,
        desc: "Infotainment web app that contains various small apps like weather, news, notes, movies etc.",
        url: "https://super-app-seven-gamma.vercel.app/",
        skills_array: ["react"],
    },
    {
        name: "pocket-notes",
        img: pocket_notes,
        desc: "Notes taking web app made using react. Create groups and take notes.",
        url: "https://pocket-notes-gilt.vercel.app/",
        skills_array: ["react"],
    },
];

export default projects;
