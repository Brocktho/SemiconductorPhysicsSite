import React from "react";

function ChapterOneFive({imgPath}) {
    return(
        <div className="ChapterArea">
            <h1 className="ChapterTitle">
                1.5 Atomic Bonding:
            </h1>
            <div className="flex flex-row justify-around items-center w-full h-full overflow-auto">
                <ul className="ChapterNotes">
                    <li className="list-none text-center pb-6">Overview:</li>
                    <li>The atomic bonding of atoms is the reason for these structures, each structure a solid locks into is the lowest energy state that the structure wants to approach for thermal equilibrium</li>
                    <li>Ionic bonds and covalent bonds are what begin to create this structures. In the case of the diamond structure it is a result of the group 4 bonding that silicon and germanium often takes. Silicon will covalently bond with other silicons where a central silicon will have 4 attached silicons and each of the outer silicons will want 3 other silicons, this mirrors our diamond structure is responsible for why the diamond structure occurs for silicon crystals</li>
                </ul>
                <img className="h-1/2 w-1/4" src={imgPath} alt=""/>
            </div>
        </div>
    )
}

export default ChapterOneFive;