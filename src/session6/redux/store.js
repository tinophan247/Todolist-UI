import { createStore } from "redux";
import { todolistReducer } from "./reducer/TodolistReducer";

export const store = createStore(todolistReducer)