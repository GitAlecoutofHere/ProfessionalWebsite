import React, { useEffect } from "react";


// Importing TagCloud package
import TagCloud from "TagCloud";

const TextSphere = () => {
    // Animation settings for Text Cloud
    useEffect(() => {
        return () => {
            const container = ".tagcloud";
            const texts = [
                "HTML",
                "CSS",
                "SASS",
                "JavaScript",
                "React",
                "Vue",
                "Nuxt",
                "NodeJS",
                "Babel",
                "Jquery",
                "ES6",
                "GIT",
                "GITHUB",
            ];

            const options = {
                radius: 300,
                maxSpeed: "normal",
                initSpeed: "normal",
                keep: true,
            };

            TagCloud(container, texts, options);
        };
    }, []);

    return (
        <>

            <div className="text-shpere">
                <h1 id="heading-sphere">
                    Skills
                </h1>
                <span className="tagcloud"></span>
            </div>
        </>
    );
};

export default TextSphere;