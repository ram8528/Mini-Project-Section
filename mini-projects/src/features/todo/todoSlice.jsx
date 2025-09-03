import { createSlice, nanoid } from "@reduxjs/toolkit";
// We call features as slice in redux  needed 3 things name, inital state, and other functionality
// inside reducers any no of key value pair can be stored
const initialState = {
  todos: [{ id: 1, text: "Hello World" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // state -> containes updated state value in store
    // action -> action.payload
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      // we have access of state so simply push into it
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    updateTodo: (state, action) => {
      const { id, newText } = action.payload;
      const todoToUpdate = state.todos.find((todo) => todo.id === id);
      if (todoToUpdate) {
        todoToUpdate.text = newText;
      }
    },
  },
});

export const { addTodo, removeTodo ,updateTodo} = todoSlice.actions;

export default todoSlice.reducer;
