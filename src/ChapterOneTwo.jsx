import React from "react";

function ChapterOneTwo({imgPath}) {
    return(
        <div className="ChapterArea">
            <h1 className="ChapterTitle">
                1.2 Types of Solids:
            </h1>
            <div className="flex flex-row justify-around items-center w-full h-full overflow-auto">
                <ul className="ChapterNotes">
                    <li className="list-none text-center pb-6">Overview:</li>
                    <li>There are three general crystal types, Amorphous, polycrystalline, and single crystals</li>
                    <li>Amorphous is not very orderly, polycrystalline is much more organized but not entirely so, and single crystals are one entirely orderly structure</li>
                    <li>The more orderly the better their electrical properties</li>
                </ul>
                <img className="h-1/2 w-1/4" src={imgPath} alt=""/>
            </div>
        </div>
    )
}

export default ChapterOneTwo;