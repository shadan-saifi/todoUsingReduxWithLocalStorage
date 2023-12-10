import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../features/todo/todoSlice"


function AddTodo(){
const [text,setText]=useState('')
const dispatch=useDispatch()

const add=(e)=>{
    e.preventDefault()
    if(text!=='') {
    dispatch(addTodo({text,completed:false}))
    setText('')
}}

    return(
        <form onSubmit={add} className="w-[600px] flex justify-between items-center">
            <input 
            type="text" 
            placeholder="Enter Task Here..."
            value={text}
            onChange={(e)=>setText(e.target.value)}
            className=" m-3 rounded grow bg-gray-200 p-2 "
            />
            <button type="submit" 
            className="p-2 w-[90px] text-xl font-bold  bg-black text-white rounded hover:bg-gray-600 active:scale-95 "
            >Add</button>
        </form>
    )
}
export default AddTodo