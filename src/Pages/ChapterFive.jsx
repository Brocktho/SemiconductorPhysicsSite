import {React, useState} from 'react';
import SelectMenu from "../Components/SelectMenu";

const ChapterFive = () => {
    const [selectedProblem, setSelectedProblem] = useState("")
    const [selectedType, setSelectedType] = useState("")

    const problems = [{id:"impurityConcentration", name:"Impurity Concentration Question"}];
    const types = [{id:"n", name:"n-type"}, {id:"p", name:"p-type"}];

    const updateProblem = (value) =>{
        setSelectedProblem(value);
    }
    const updateType = (value) =>{
        setSelectedType(value);
    }

    return(
        <div className="ChapterArea">
            <h1>Homework Problems: 5.2, 5.8, 5.16, 5.26, 5.30, 5.36, 5.42, 5.48</h1>
            <SelectMenu items={problems} desired={selectedProblem} update={updateProblem} title="Problem Type"/>
            {selectedProblem === "impurityConcentration" && 
            <div className="flex flex-col w-full items-center">
                <SelectMenu items={types} desired={selectedType} title="Semiconductor Type" update={updateType}/>
                {selectedType === "n" &&
                <form className="flex flex-col w-1/2">
                    <label>Enter Given Impurity in cm<sup>2</sup>/V-s</label>
                    <input className="rounded-3xl bg-blue-500 dark:bg-blue-800 text-black dark:text-white pl-4 border-white focus:shadow focus:bg-gray-500 focus:outline-none" type="number" pattern="[0-9]" placeholder="Number"/>
                </form>
                }
            </div>} 
            
        </div>
    )
}

export default ChapterFive