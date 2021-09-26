import React from "react";

function ChapterOneSix({imgPath}) {
    return(
        <div className="ChapterArea">
            <h1 className="ChapterTitle">
                1.7 Growth of Semiconductors:
            </h1>
            <div className="flex flex-row justify-around items-center w-full h-full overflow-auto">
                <ul className="ChapterNotes">
                    <li className="list-none text-center pb-6">Overview:</li>
                    <li>Semiconductors must be very pure in typical growth, as little as 1 impurity atom in 10^10 atoms</li>
                    <li>Czochralski method is a common method where a seed is lowered into a liquid state of similar material then slowly pulled and twisted out to harden around the seed</li>
                    <li>The material is then heated multiple times to melt impurities toward the bottom, eventually the bottom is cut off and the semiconductor is sliced in the (1 1 0) plane. The material is then flattened which can damage it leaving a final step of chemical etching to remove the surface</li>
                    <li>Epitaxial growth has two forms, homoepitaxy and heteroepitaxy, same material vs different materials</li>
                    <li>Chemical vapor-phase deposition is a strong way of epitaxial growth and is created by heating a substrate and adding gaseous silicon (with other chemicals). The silicon reacts to the substrate and condenses onto it while the remaining chemicals are ventilated out in gaseous form</li>
                    <li>Similar to Czochralski but heated to a point where a substrate is not quite in the melting point. There is a solution with semiconductor material that has a lower melting point and as such is in liquid phase. Temp is lowered so that the substrate solidifies semiconductor material onto it</li>
                    <li>Molecular beam epitaxy is substrate in a vacuum semiconductor and doping atoms are then evaporated onto the substrate (temp in range of 400 - 800 C). This allows very precise control of doping and concentration and is very useful in optical devices because of greater control</li>
                    
                </ul>
                <img className="h-1/2 w-1/4" src={imgPath} alt=""/>
            </div>
        </div>
    )
}

export default ChapterOneSix;