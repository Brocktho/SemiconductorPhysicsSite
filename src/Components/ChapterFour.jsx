import { React, useState } from "react";
import Plot from "react-plotly.js";
import SelectMenu from "./SelectMenu";

function ChapterFour() {
  const [desiredT, setDesiredT] = useState(400);
  const [material, setMaterial] = useState("");
  const [data, setData] = useState([]);
  const [nc, setNc] = useState(2.8 * 10 ** 19);
  const [nv, setNv] = useState(1.04 * 10 ** 19);
  const [eg, setEg] = useState(1.12);
  const [revision, setRevision] = useState(0);

  const k = 8.62*10**-5;
  const selectTitle = "Choose material";
  const ncS = 2.8*10**19;
  const nvS = 1.04*10**19;
  const egS = 1.12;
  const ncGe = 1.04*10**19;
  const nvGe = 6*10**18;
  const egGe = 0.66;
  const ncGA = 4.7*10**17;
  const nvGA = 7*10**18;
  const egGA = 1.42;
  const options = [
    { id: "silicon", name: "Silicon" },
    { id: "germanium", name: "Germanium" },
    { id: "galliumArsenide", name: "Gallium Arsenide" },
  ];

  const xVals = Array.from({ length: desiredT }, (_, i) => i+200);
  const yVals = Array.from({ length: desiredT }, (_, i) =>
    Math.sqrt(nc * nv * Math.exp(-eg / (k * (i+200))))
  );

  const plot1 = {
    x: xVals,
    y: yVals,
    name: "Intrinsic Carrier Conc",
    type: "scatter",
    mode: "lines",
    line: {
      color: "rgb(150, 20, 150)",
      width: 2,
    },
  };

  const layout = {
    title: "Intrinsic Carrier Concentration(ni) vs. Temp (K)",
    xaxis: {
      title: {
        text: "Temperature (K)",
      },
      font: {
        family: "Comic Sans",
        size: 18,
        color: "#000000",
      },
    },
    yaxis: {
      type: "log",
      title: {
        text: "Intrinsic Carrier Conc (ni)",
      },
      font: {
        family: "Comic Sans",
        size: 18,
        color: "#000000",
      },
    },
    showlegend: true,
    legend: {
      x: 1,
      xanchor: "right",
      y: 0.25,
    },
  };

  function changeGraph(value) {
    if (value === "silicon") {
        setNc(ncS);
        setNv(nvS);
        setEg(egS);
    }
    else if(value === "germanium"){
        setNc(ncGe);
        setNv(nvGe);
        setEg(egGe);
    }
    else if(value === "galliumArsenide"){
        setNc(ncGA);
        setNv(nvGA);
        setEg(egGA);
    }
    setMaterial(value);
    setData([plot1]);
    setRevision(revision+1);

  }

  return (
    <div className="ChapterArea">
      <h1 className="text-gray-800 text-2xl text-center w-full font-bold">
        Chapter Four: The Semiconductor in Equilibrium
      </h1>
      <div className="flex flex-row w-full h-4/5 space-x-8 items-center justify-center">
        <div className="w-64 h-24 rounded-3xl bg-blue-800 items-center">
            <SelectMenu
                items = {options}
                desired = {material}
                update = {changeGraph}
                selectTitle = {selectTitle}
            />
        </div>
        <Plot className="w-1/2 h-1/2" data={data} layout={layout} revision={revision}/>
      </div>
    </div>
  );
}

export default ChapterFour;
