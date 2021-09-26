import React from "react";
import GalliumArsenide from "./images/GalliumArsenideDark.png"

function ChapterOneOne({imgPath}) {
    return(
        <div className="ChapterArea">
            <h1 className="ChapterTitle">
                1.1 Semiconductor materials:
            </h1>
            <div className="flex flex-row justify-around items-center w-full h-full overflow-auto">
                <ul className="ChapterNotes">
                    <li className="list-none text-center pb-6">Overview:</li>
                    <li>Both chemical composition and crystal structure contribute to the electrical properties of semiconductors</li>
                    <li>Semiconductors are exactly what they sound like, not quite a conductor not quite an insulator</li>
                    <li>Primarily Group 4 for single semiconductor compounds, Group 3 and 5 can be combined into binary semiconductor material</li>
                    <li>Silicon is by far the most common material as it’s widely available</li>
                    <li>Gallium Arsenide is one of the most common binary materials because of its optical properties and high speed applications</li>
                </ul>
                <img className="h-1/2 w-1/4" src={GalliumArsenide} alt="Gallium Arsenide's crystal Structure (Zincblende)"/>
            </div>
        </div>
    )
}

export default ChapterOneOne;