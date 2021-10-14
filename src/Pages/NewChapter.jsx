import {React} from "react";


const NewChapter = () =>{
    const desiredUrl = "http://localhost:5000/api/v1/chapters/newChapter"

    async function handleSubmit(event,desiredURL){

        let myData = {}
    
        event.preventDefault();
        const target = event.target.querySelectorAll("input");
        for(var i=0; i<target.length; i++){
            const key = target[i].name;
            const value = target[i].value;
            myData[key] = value
        }
        const fetchOptions = {
            method: "POST",
            mode:"cors",
            cache: "default",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(myData),
            referrerPolicy: "no-referrer"
        }
        try{
        const response = await fetch(desiredURL, fetchOptions)
        const data = await response.json()
        console.log(data);
        const path = data.path || "/newChapter" 
        window.location.href = `#${path}`;
        }catch(error){
            console.log("oops")
            console.error(`Error: ${error}`);
        }
    }

    return(
        <div className="ChapterArea justify-center">
            <form className="dark:bg-gray-500 rounded-3xl w-3/5 h-1/2" onSubmit={(event) => handleSubmit(event,desiredUrl)}>
                <ul className="flex flex-col items-center space-y-4">
                    <h1>New Chapter: </h1>
                    <li className="flex flex-col w-full h-16 items-center space-y-2">
                        <label>
                            Title: 
                        </label>
                        <input required type="text" name="title" placeholder="Title" className="w-3/5 h-6 rounded-3xl pl-2 dark:bg-blue-800 focus:outline-none"/>
                    </li>
                    <li className="flex flex-col w-full h-16 items-center space-y-2">
                        <label>
                            Number: 
                        </label>
                        <input required type='number' pattern="^-?[0-9]\d*\.?\d*$" name="number" placeholder="Chapter Number" className="w-3/5 h-6 rounded-3xl pl-2 dark:bg-blue-800 focus:outline-none"/>
                    </li>
                    <li className="flex flex-col w-full h-16 items-center space-y-2">
                        <label>
                            Path: 
                        </label>
                        <input required type="text" name="path" placeholder="Path" className="w-3/5 h-6 rounded-3xl pl-2 dark:bg-blue-800 focus:outline-none"/>
                    </li>
                    <button className="w-32 h-8 rounded-3xl text-center dark:bg-blue-800 bg-blue-500" type="submit"> Submit</button>
                </ul>
            </form>
        </div>
    )
}

export default NewChapter;