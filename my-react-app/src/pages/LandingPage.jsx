import React, { useReducer, useState } from "react";
import MyCard from "../components/MyCard";
import MyCard2 from "../components/MyCard2";
import landingPageStyle from '../styles/LandingPage.module.css';

import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { landingPageReducer, landingPageState } from "../reducer/LandingPageReducer";

const LandingPage = () => {

    const [state, dispatch] = useReducer(landingPageReducer, landingPageState);

    const [todo, setTodo] = useState('')
    const [todoList, setTodoList] = useState([])
    const [doneTodoList, setDoneTodoList] = useState([])
    
    const onSave = (evt) => {
        evt.preventDefault()
        dispatch({type: 'SAVE'})
    }

    // const onSave = () => {

    //     if (todo === '') {
    //         return
    //     }

    //     // using spread operator to deep clone
    //     const cloneTodoList = [...todoList]

    //     cloneTodoList.push(todo)

    //     setTodoList(cloneTodoList)

    //     setTodo('')
    // }

    const deleteTodo = (index) => {
        console.log('get index: ', index)
        const cloneTodoList = [...todoList]

        cloneTodoList.splice(index, 1)

        setTodoList(cloneTodoList)
    }

    const doneTodo = (index) => {
        console.log('index:', index)

        const doneTodo = todoList[index]

        // add into doneTodoList
        const cloneDoneTodoList = [...doneTodoList]
        cloneDoneTodoList.push(doneTodo)
        setDoneTodoList(cloneDoneTodoList)

        // delete from original list
        deleteTodo(index)
    }

    const deleteDoneTodo = (index) => {
        console.log('get index: ', index)
        const cloneTodoList = [...doneTodoList]

        cloneTodoList.splice(index, 1)

        setDoneTodoList(cloneTodoList)
    }

    const editTodo = (index) => {
        // get the clicked value and set to todo variable
        setTodo(todoList[index])
        // delete from todo list
        deleteTodo(index)
    }
    return (
        <div id={landingPageStyle.container}>

            <div style={{ marginTop: 30, marginBottom: 30, width: 500 }}>

                <form onSubmit={onSave}>

                <TextField
                    id={`${landingPageStyle.todo} "outlined-basic" `}
                    label="Todo"
                    variant="outlined"
                    type="text"
                    value={state.todo}
                    size="normal"
                    onChange={(evt) => dispatch({ type: 'TODO', payload: {todo:evt.target.value} })}
                    style={{ width: '81%' }}
                    required
                />

                <Button id={landingPageStyle.saveBtn} variant="contained" size="large" sx={{ marginLeft: 1, height: 53 }} type="submit">Save</Button>

                </form>
            </div>

            {
                state.todoList.map((each, index) => (
                    <MyCard key={index} index={index} description={each} deleteFunc={deleteTodo} doneFunc={doneTodo} editFunc={editTodo} />
                ))
            }

            {
                doneTodoList.length > 0 &&
                <>
                    <h3>Done List</h3>
                    {
                        doneTodoList.map((each, index) => (
                            <MyCard2 key={index} index={index} doneContent={each} deleteFunc={deleteDoneTodo} />
                        ))
                    }
                </>
            }
        </div>
    )
}



export default LandingPage