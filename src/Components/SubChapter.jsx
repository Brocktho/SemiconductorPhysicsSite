import React from "react";


function SubChapter({title=undefined, noteData=[], picData=[]}) {
  const SubNotes = noteData > 0 &&
    noteData.map((item, i) => {
      return (
        <li>{item}</li>
        );
    }); 
    const Images = picData.length > 0 &&
    picData.map((item,i) => {
        return(
            <img alt={item}/>
        );
    });

  return (
    <div className="ChapterArea">
      <h1 className="ChapterTitle">{title}</h1>
      <div className="flex flex-row justify-around items-center w-full h-full overflow-auto">
        <ul className="ChapterNotes">
          <li className="list-none text-center pb-6">Overview:</li>
          {SubNotes}
        </ul>
        {Images}
      </div>
    </div>
  );
}

export default SubChapter;
