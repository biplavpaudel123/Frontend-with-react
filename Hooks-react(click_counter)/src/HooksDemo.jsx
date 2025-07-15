import { useState } from "react";

function HooksDemo(){
    const [name,setName]= useState("Guest");
    const [age,setAge]= useState(0);
    const [isEmployed,setIsEmployed]= useState(false);
    
    function increaseAge(){
        setAge(age+1);
    }
    function toggleEmployedStatus(){
        setIsEmployed(!isEmployed);
    }

    return (
        <>
        <h2>Name:{name}</h2>
        <button onClick={()=>setName('Biplav')}>Set Name</button>
        <h2>Age:{age}</h2>
        <button onClick={increaseAge}>Increase Age</button>
        <h2>Employed:{isEmployed? "Yes":"No"}</h2>
        <button onClick={toggleEmployedStatus}>Toggle Status</button>
        </>
    )

}

export default HooksDemo;