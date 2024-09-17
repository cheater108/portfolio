import nodejs from "@/app/assets/nodejs-1-logo-svgrepo-com.svg";
import expressjs from "@/app/assets/express-svgrepo-com.svg";
import reactjs from "@/app/assets/react-svgrepo-com.svg";
import mongodb from "@/app/assets/mongodb-svgrepo-com.svg";
import Image, { StaticImageData } from "next/image";
import { skills } from "../lib/Projects-Data";

const image = {
    node: nodejs,
    express: expressjs,
    react: reactjs,
    mongodb,
};

function getImage(skill: skills): StaticImageData {
    return image[skill];
}

function Techused({ skills_array }: { skills_array: skills[] }) {
    return (
        <div className="tech flex gap-2 mt-2">
            {skills_array.map((skill) => (
                <Image
                    key={skill}
                    src={getImage(skill)}
                    alt={`${skill} logo`}
                    width={30}
                />
            ))}
        </div>
    );
}

export default Techused;
