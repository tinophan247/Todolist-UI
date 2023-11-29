import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskList: [],
};

const todoListSlice = createSlice({
  name: "todoList",
  initialState: initialState,
  reducers: {
    addTask(state, action) {
      state.taskList = [
        ...state.taskList,
        { name: action.payload, isChecked: false },
      ];
    },
    removeTask(state, action) {
      let updateList = [...state.taskList];
      updateList.splice(action.payload, 1);
      state.taskList = updateList;
    },
    handleCheck (state,action) {
        let index = state.taskList.findIndex(x => x.name === action.payload.name)
        let updateList = [...state.taskList];
        updateList.splice(index,1, {...action.payload , isChecked : !action.payload.isChecked} );
        state.taskList = updateList;
    },
    handleClearCheck (state,action) {
        let updateList = [...state.taskList];
        let filterList = updateList.filter(x => x.isChecked == false);
        state.taskList = filterList
    }
  },
});

export const { addTask, removeTask ,handleCheck, handleClearCheck} = todoListSlice.actions;
export default todoListSlice.reducer;
