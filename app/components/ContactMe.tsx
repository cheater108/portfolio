"use client";

import { useState } from "react";

function ContactMe() {
    const [display, setDisplay] = useState(false);
    return (
        <div
            className={`bg-theme-grey text-black px-4 py-2 rounded-md font-bold hover:bg-black hover:text-white cursor-pointer relative ${
                display ? "expand" : "shrink"
            }`}
            onClick={() => setDisplay(!display)}
        >
            {display ? "chetan108@outlook.com" : "Contact me"}
        </div>
    );
}

export default ContactMe;
