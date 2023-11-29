import { configureStore } from "@reduxjs/toolkit";
import bauCuaReducer from "./slices/bauCuaSlices";
import xucxacReducer from "../../session8/redux/slices/xucxacSlices";
import TodolistReducer from "../../session7/redux/slices/TodolistSlices";

export const store = configureStore({
    reducer : {
        bauCua : bauCuaReducer,
        xucxac : xucxacReducer,
        todolist : TodolistReducer
    }
})