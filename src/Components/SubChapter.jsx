import React from "react";


function SubChapter({data}) {
  const SubNotes = data.noteData.length > 0 &&
    data.noteData.map((item, i) => {
      return (
        <li>{item}</li>
        );
    }); 
    const Images = data.picData.length > 0 &&
    data.picData.map((item,i) => {
        return(
            <img alt={item}/>
        );
    });

  return (
    <div className="ChapterArea">
      <h1 className="ChapterTitle">{data.name}</h1>
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
