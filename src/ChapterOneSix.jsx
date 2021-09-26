import React from "react";

function ChapterOneSix({imgPath}) {
    return(
        <div className="ChapterArea">
            <h1 className="ChapterTitle">
                1.6 Imperfections and Impurities:
            </h1>
            <div className="flex flex-row justify-around items-center w-full h-full overflow-auto">
                <ul className="ChapterNotes">
                    <li className="list-none text-center pb-6">Overview:</li>
                    <li>There are a few complications from our basic models previously considered, thermal motion create lattice vibrations slightly moving the atoms from their perfect fixed structure</li>
                    <li>Point defects exist and can be missing atoms in a spot (Vacancy) , replaced atoms in a spot (substitutional/ interstitial substitution) , an atom in a point there shouldn’t typically be an atom (Interstitial), or a combination of both (Frenkel Defect)</li>
                    <li>There can also be a more impactful defect of entire lines of atoms being missing (line dislocation)</li>
                    <li>We can manage these impurities ourselves for desirable changes in the semiconductor properties (doping)</li>
                    <li>impurity diffusion where we heat a chamber to around 1000 degrees celsius and allow the atoms to bounce around until eventually some impurities find their way into the semiconductor and solidify as the chamber cools</li>
                    <li>Ion implantation where we lase in a beam of impurity ions which can damage the crystal structure but is more accurate for doping, we follow this up with thermal annealing to repair any damage</li>
                    
                </ul>
                <img className="h-1/2 w-1/4" src={imgPath} alt=""/>
            </div>
        </div>
    )
}

export default ChapterOneSix;