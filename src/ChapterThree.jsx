import {React, useState} from "react";
import Plot from "react-plotly.js";

function ChapterThree() {

    const [desiredT, setDesiredT] = useState(600);
    const Eg0 = 1.170;
    const alpha = 4.73*(10**-4);
    const beta = 636;

    const xVals = Array.from({length:desiredT}, (_,i) => i )
    const yVals = Array.from({length:desiredT}, (_,i) => Eg0 - ((alpha * (i**2))/(beta+i)))

    const plot1 = {
        x: xVals,
        y: yVals,
        name: "Bandgap Energy vs. Temperature",
        type: 'scatter',
        mode: 'lines',
        line: {
            color: 'rgb(150, 20, 150)',
            width: 2
        }
    }

    const layout = {
        width: 720,
        height: 480,
        title: 'Bandgap Energy in a Semiconductor',
        xaxis: {
            title:{
                text: "Temperature (K)"
            },
            font:{
                family: "Comic Sans",
                size: 18,
                color: "#000000"
            }
        },
        yaxis: {
            title:{
                text: "Bandgap Energy (eV)"
            },
            font:{
                family: "Comic Sans",
                size: 18,
                color: "#000000"
            }
        },
        showlegend: true,
        legend: {
            x:.5,
            xanchor: 'right',
            y:.25,
        }
    }

    const data = [plot1]

    return(
        <div className="ChapterArea">
            <h1 className="text-gray-800 text-2xl text-center w-full font-bold">
                Chapter Three: Quantum Theory of Solids
            </h1>
            <div className="flex flex-row w-full h-3/4">
                <Plot data={data} layout={layout}/>
            </div>
        </div>
    )
}

export default ChapterThree;