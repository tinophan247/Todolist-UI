import { configureStore } from "@reduxjs/toolkit";
import TodolistReducer from "./slices/TodolistSlices";

export const store = configureStore({
    reducer : {
        todolist : TodolistReducer
    }
})