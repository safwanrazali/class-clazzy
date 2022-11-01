    const onSave = (state) => {

        const {todo, todoList} = state

        if (todo === '') {
            return
        }

        // using spread operator to deep clone
        const cloneTodoList = [...todoList]

        cloneTodoList.push(todo)

        return {
            ...state,
            todo: '',
            todoList: cloneTodoList,
        }
    }

export const landingPageState = {
    todo: '',
    todoList: [],
    doneTodoList: []
}

export const landingPageReducer = (state, action) => {
    switch (action.type) {
        case 'TODO': {
            return {
                ...state,
                todo: action.payload.todo
            }
        }
        case 'SAVE': {
            return onSave(state)
        }
        default:
            return true;
    }
}