import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: JSON.parse(localStorage.getItem('todos')) || []
}
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload.text,
                completed: false
            }
            state.todos.push(todo)
            localStorage.setItem('todos',JSON.stringify(state.todos))
        },
        deleteTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
            localStorage.setItem('todos',JSON.stringify(state.todos))
        },

        updateTodo:(state,action)=>{
         state.todos= state.todos.map((todo)=>todo.id===action.payload.id?{...todo,text:action.payload.text}:todo)
         localStorage.setItem('todos',JSON.stringify(state.todos))

        },
        toggleCompleted:(state,action)=>{
         state.todos=state.todos.map((todo)=>todo.id===action.payload.id?{...todo,completed:!todo.completed}:todo)
         localStorage.setItem('todos',JSON.stringify(state.todos))

        }
    }
})
export const {addTodo,deleteTodo,updateTodo,toggleCompleted}=todoSlice.actions
export default todoSlice.reducer