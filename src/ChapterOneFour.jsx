import React from "react";

function ChapterOneFour({imgPath}) {
    return(
        <div className="ChapterArea">
            <h1 className="ChapterTitle">
                1.4 The Diamond Structure:
            </h1>
            <div className="flex flex-row justify-around items-center w-full h-full overflow-auto">
                <ul className="ChapterNotes">
                    <li className="list-none text-center pb-6">Overview:</li>
                    <li>Diamond lattice is more complex than cubics we have considered; however it is the structure silicon and germanium takes as well as what group 3 and 5 binary compounds take</li>
                    <li>Diamond lattice is comprised of tetrahedral structures where each atom has 4 closest atoms within the lattice, to make a diamond lattice take an FCC and impose another FCC within it offset by a/4 in each of the 3 dimensions</li>
                    <li>While the diamond lattice is similar in shape as the zincblende structure the main difference is that in zincblende we have an element having 4 neighboring elements that are the other substance. In GaAs, each Gallium would have 4 Arsenide neighbors and vice versa</li>
                </ul>
                <img className="h-1/2 w-1/4" src={imgPath} alt=""/>
            </div>
        </div>
    )
}

export default ChapterOneFour;