import { createStore } from "redux";
import {
  configureStore,
  createAction,
  createReducer,
  createSlice,
} from "@reduxjs/toolkit";

/**
const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

const reducer = (state = [], action) => {
  switch (action.type) {
    case addToDo.type:
      return [{ text: action.payload, id: Date.now(), ...state }];
    case deleteToDo.type:
      return state.filter((toDo) => toDo.id !== action.payload);
    default:
      return state;
  }
};
 
const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.push({
      text: action.payload,
      id: Date.now(),
      ...state,
    });
  },
  [deleteToDo]: (state, action) => {
    state.filter((toDo) => toDo.id !== action.payload);
  },
});
*/
const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({
        text: action.payload,
        id: Date.now(),
        ...state,
      });
    },
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});
const store = configureStore({ reducer: toDos.reducer });

export const { add, remove } = toDos.actions;

export default store;
