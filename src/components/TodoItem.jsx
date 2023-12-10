import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleCompleted, updateTodo } from "../features/todo/todoSlice";


function TodoItem({todo}){
    const dispatch=useDispatch()
    const [todomssg,setTodomssg]=useState(todo.text)

    const [editable,setEditable]=useState(false)
  

    return(
        <div className=" w-[600px] rounded flex flex-column justify-center items-center bg-teal-300 m-2 p-1 ">
            <input type="checkbox" checked={todo.completed} 
            onChange={()=>{
                dispatch(toggleCompleted({id:todo.id}))
            }}
            disabled={editable} 
            className="m-3 p-2"
            />
            <input type="text" 
            value={todomssg} 
            onChange={(e)=>setTodomssg(e.target.value)}
            readOnly={!editable}
            className={` px-2 py-1 mr-2 rounded bg-teal-200 ${todo.completed?'line-through':''} ${editable?'border-black':'border-transparent'}`}
            />
            <button 
            onClick={()=>{
                if(todo.completed) return;
                if(editable){
                    dispatch(updateTodo({id:todo.id,text:todomssg}))
                    setEditable(false)
                }else{
                    setEditable((prev)=>!prev)
                }
            }}
            className=" hover:bg-teal-200 active:scale-95 rounded p-2"
            >{editable ? "📁" : "✏️"}
            </button>
            <button onClick={()=>dispatch(deleteTodo(todo.id))} className=" mr-3 hover:bg-teal-200 active:scale-95 rounded p-2">❌</button>
        </div>
      
    )
}

export default TodoItem