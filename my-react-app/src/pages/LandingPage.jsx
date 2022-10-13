import React, {useState} from "react";

const LandingPage = () => {

    const [firstName, setFirstName] = useState ("-")

    return (
    <div>
    <h1>
    Nama saya ialah: {firstName}
    </h1>

    <input type={"text"} onChange={(evt) => setFirstName(evt.target.value)} />
    </div>


    )
}



export default LandingPage