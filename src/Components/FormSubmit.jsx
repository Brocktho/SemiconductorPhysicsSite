export default async function handleSubmit(event,desiredURL){

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