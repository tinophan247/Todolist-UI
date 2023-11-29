import { configureStore } from "@reduxjs/toolkit";
import bauCuaReducer from "./slices/bauCuaSlices";

export const store = configureStore({
    reducer : {
        bauCua : bauCuaReducer
    }
})