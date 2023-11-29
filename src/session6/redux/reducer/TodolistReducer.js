import { ADD_TODOLIST, DELETE_TODOLIST, UPDATE_TODOLIST } from "../type/TodolistType"

const initialState = []

export const todolistReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODOLIST : 
            const updateListTask = [...state ,action.payload]
            state = updateListTask;
            return state;
        case DELETE_TODOLIST : 
            let updateList = [...state]
            updateList.splice(action.payload,1)
            state = updateList;
            return state;
        case UPDATE_TODOLIST : 
            let updateTaskList = [...state]
            updateTaskList.splice(action.payload.taskIndex , 1 ,action.payload.task)
            state = updateTaskList
            return state
        default:
            return state;
    }

}