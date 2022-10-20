import React, { useState, useEffect } from "react";
import MyCard from "../components/MyCard";

const LandingPage = () => {

    const [todo, setTodo] = useState('')
    const [todoList, setTodoList] = useState([])

    const onSave = () => {
        if (todo === '') {
            return
        }

        //using spread operator to deep clone

        const clonetodoList = [...todoList]

        clonetodoList.push(todo)

        setTodoList(clonetodoList)

        setTodo('')

    }

    return (
        <div>

            <input type="text" value={todo} onChange={(evt) => setTodo(evt.target.value)} />
            <button style={{ marginLeft: 10 }} onClick={onSave}>Save</button>

            {
                todoList.map((each, index) => (
                    <MyCard key={index} index={index} description={each} />
                ))
            }

            {/* <MyCard /> */}
            {/* <MyCard /> */}

        </div>




    )
}



export default LandingPage