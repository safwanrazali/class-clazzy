import React, {useState, useEffect} from "react";

const LandingPage = () => {

    const [firstName, setFirstName] = useState ("-")
    const [age, setAge] = useState (31)
    const [job, setJob] = useState ("-")
    useEffect(() => {
        console.log ("i run")
    },[firstName])

    return (
    <div>
    <h1>
    Nama saya ialah: {firstName}
    </h1>

    <input type={"text"} onChange={(evt) => setFirstName(evt.target.value)} />

    <h1>
    Umur saya: {age}
    </h1>

    <input type={"text"} onChange={(evt) => setAge(evt.target.value)} />

    <h1>
    Saya bekerja sebagai: {job}
    </h1>

    <input type={"text"} onChange={(evt) => setJob(evt.target.value)} />
    </div>


    )
}



export default LandingPage