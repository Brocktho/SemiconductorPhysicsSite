import React from "react";

function ChapterOneThree({imgPath}) {
    return(
        <div className="ChapterArea">
            <h1 className="ChapterTitle">
                1.3 Space Lattices:
            </h1>
            <div className="flex flex-row justify-around items-center w-full h-full overflow-auto">
                <ul className="ChapterNotes">
                    <li className="list-none text-center pb-6">Overview:</li>
                    <li>The periodic repetition of atoms within a crystal is known as a lattice</li>
                    <li>Because of this we can describe the whole crystal using a unit cell or a primitive cell where a primitive cell is the smallest unit cell for the given crystal and a unit cell is a cell that can be used to reproduce the entire crystal</li>
                    <li>We have a few basic crystal structures that we can use to determine density they are, simple cubic, body-centered cubic, and face-centered cubics</li>
                    <li>We are fabricating our electronics on the surface of these crystals and as such we want to be able to quantify the surface of the crystal. For this we use miller indices to describe desired planes</li>
                    <li>For cubic structures we can rotate a miller index by 90 degrees and still get the same description</li>
                    <li>We can determine distance between equivalent planes and surface concentration of atoms which can be helpful when fabricating devices so we can know what materials will fit on the surface</li>
                    <li>We can describe directions similarly to miller indices for cubic structures; these directions that share the same numbers as miller indices are perpendicular</li>
                </ul>
                <img className="h-1/2 w-1/4" src={imgPath} alt=""/>
            </div>
        </div>
    )
}

export default ChapterOneThree;