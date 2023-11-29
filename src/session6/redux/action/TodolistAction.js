import { ADD_TODOLIST, DELETE_TODOLIST, UPDATE_TODOLIST } from "../type/TodolistType"

export const handleAddList = (payload) => {
    return {
        type : ADD_TODOLIST,
        payload : payload
    }
}

export const handleDelete = (payload) => {
    return {
        type : DELETE_TODOLIST,
        payload : payload
    }
}

export const handleUpdate = (payload) => {
    return {
        type : UPDATE_TODOLIST,
        payload : payload
    }
}