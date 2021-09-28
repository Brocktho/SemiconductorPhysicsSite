import React, { useState } from "react";
import Plot from "react-plotly.js";
import SelectMenu from "./SelectMenu";

function ChapterOneP() {
  /* Initialize states */
  const [struct, setStruct] = useState("");
  const [title, setTitle] = useState("Simple Cubic Structure");
  const [numType, setNumType] = useState(undefined);
  const [prob, setProb] = useState("");
  const [data, setData] = useState([]);

  /* Initialize data */
  const structureTitle = "Select a Crystal Structure:";
  const structures = [
    { id: "Simple", name: "Simple Cubic" },
    { id: "FCC", name: "FCC" },
    { id: "BCC", name: "BCC" },
    { id: "Diamond", name: "Diamond" },
  ];

  const problemTitle = "Select a problem type:";
  const problems = [
    { id: "numDen", name: "Number Density" },
    { id: "massDen", name: "Mass Density" },
    { id: "atomRad", name: "Atomic Radius" },
    { id: "atomDis", name: "Atomic Distance" },
  ];

  const traceSimplePoints = {
    type: "scatter3d",
    x: [0, 0, 0, 0, 1, 1, 1, 1],
    y: [0, 0, 1, 1, 0, 0, 1, 1],
    z: [0, 1, 0, 1, 0, 1, 0, 1],
    mode: "markers",
    name: "joints",
    marker: {
      size: 4,
      line: {
        color: "rgba(200, 20, 20, 0.5)",
        width: 0.5,
      },
      opactiy: 0.8,
    },
  };
  const traceSimpleLines = {
    type: "scatter3d",
    x: [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0],
    y: [0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1],
    z: [0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0],
    mode: "lines",
    name: "sides",
    line: {
      size: 4,
      color: "rgba(0, 0, 0, 0.5)",
    },
  };

  const traceFCCPoints = {
    type: "scatter3d",
    x: [0, 0.5, 0.5, 0.5, 0.5, 0, 1, 0, 0, 0, 1, 1, 1, 1],
    y: [0, 0.5, 0.5, 0, 1, 0.5, 0.5, 0, 1, 1, 1, 0, 0, 1],
    z: [0, 0, 1, 0.5, 0.5, 0.5, 0.5, 1, 1, 0, 0, 1, 0, 1],
    mode: "markers",
    name: "joints",
    marker: {
      size: 4,
      line: {
        color: "rgba(200, 20, 20, 0.5",
        width: 0.5,
      },
      opacity: 0.8,
    },
  };
  const traceFCCLines = {
    type: "scatter3d",
    x: [
      0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1,
      1, 1, 0, 0, 1, 0, 0, 1, 0, 0,
    ],
    y: [
      0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1,
      1, 0, 0, 1, 1, 0, 0, 0, 1, 0,
    ],
    z: [
      0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1,
      0, 1, 0, 1, 0, 0, 1, 0, 0, 1,
    ],
    mode: "lines",
    name: "sides",
    line: {
      size: 4,
      color: "rgba(0, 0, 0, 0.5)",
    },
  };

  const traceBCCPoints = {
    type: "scatter3d",
    x: [0, 0, 0, 0, 1, 1, 1, 1, 0.5],
    y: [0, 0, 1, 1, 0, 0, 1, 1, 0.5],
    z: [0, 1, 0, 1, 0, 1, 0, 1, 0.5],
    mode: "markers",
    name: "joints",
    marker: {
      size: 4,
      line: {
        color: "rgba(200, 20, 20, 0.5)",
        width: 0.5,
      },
      opactiy: 0.8,
    },
  };
  const traceBCCLines = {
    type: "scatter3d",
    x: [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1],
    y: [0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1],
    z: [0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0],
    mode: "lines",
    name: "sides",
    line: {
      size: 2,
      color: "rgba(0, 0, 0, 0.5)",
    },
  };

  var layout = {
    title: title,
    margin: {
      l: 0,
      r: 0,
      b: 0,
      t: 40,
    },
    autosize: true,
  };

  function changeGraph(value) {
    if (value === "Simple") {
      setData([traceSimplePoints, traceSimpleLines]);
      setTitle("Simple Cubic");
      setStruct(value);
    } else if (value === "FCC") {
      setData([traceFCCPoints, traceFCCLines]);
      setTitle("Face Centered Cubic");
      setStruct(value);
    } else if (value === "BCC") {
      setData([traceBCCPoints, traceBCCLines]);
      setTitle("Body Centered Cubic");
      setStruct(value);
    } else {
      setStruct(value);
      setData([]);
    }
  }
  function changeProblem(value) {
    setProb(value);
    if (value === "numDen") {
      setNumType("lattice constant: ");
    }
  }

  return (
    <div className="ChapterArea">
      <label className="flex text-2xl font-bold text-gray-800 dark:text-gray-200">
        {" "}
        Chapter 1 Practice Problems{" "}
      </label>
      <label className="flex text-md font-bold text-gray-800 dark:text-gray-200 text-center w-3/4">
        {" "}
        Overview: <br />{" "}
      </label>

      <div className="flex flex-row w-full space-x-10 items-center justify-center h-full">
        <div className="flex flex-col w-1/4 items-center rounded-3xl bg-gray-300 dark:bg-gray-600 h-4/5 space-y-2">
          <SelectMenu
            items={structures}
            desired={struct}
            update={changeGraph}
            selectTitle={structureTitle}
          />
          <SelectMenu
            items={problems}
            desired={prob}
            update={changeProblem}
            selectTitle={problemTitle}
          />
          {prob !== "" && (
            <div className="flex flex-row space-x-2 justify-around items-center">
              <label className="flex w-1/5 text-xs text-center">
                {numType}
              </label>
              <input
                type="text"
                className="flex w-3/5 h-6 focus:outline-none pl-2"
              ></input>
            </div>
          )}
        </div>
        <Plot
          className="flex w-3/5 h-3/5 rounded-3xl"
          data={data}
          layout={layout}
          useResizeHandler
        />
      </div>
    </div>
  );
}

export default ChapterOneP;
