import React from "react";
import NeamanConstants1 from "../Images/NeamanConstants1.png";
import NeamanConstants2 from "../Images/NeamanConstants2.png";

function ChapterZero() {
  return (
    <div className="ChapterArea">
      <h1 className="dark:text-white dark:bg-black text-3xl font-bold">
        Semiconductor Physics Information Hub
      </h1>
      <h2 className="dark:text-white dark:bg-black text-xl w-full text-center">
        Useful Equations and Constants: <br />
        (All images are from Semiconductor Physics and Devices Basic Principles
        Fourth Edition by Donald A. Neaman)
      </h2>
      <img className="w-2/5 h-full " src={NeamanConstants1} alt="useful constants from Neaman"></img>
      <img className="w-2/5 h-full" src={NeamanConstants2} alt="useful constants from Neaman"></img>
    </div>
  );
}

export default ChapterZero;
