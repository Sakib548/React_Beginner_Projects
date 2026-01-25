import {useState} from 'react';
import "../styles.css"

const Todo = () => {

    const [todos,setTodos] = useState([]);
    const [input,setInput] = useState("")

    const handleChange = (e) => setInput(e.target.value)

    const handleClick = () =>{
        setTodos([...todos,{text:input,id:Math.random()*10}])
        setInput("")
    } 

    const removeTodo = (id) =>{
        setTodos(todos.filter((todo)=>todo.id!==id))
    }
  return (
    <div className='container'>
        <input type="text" value={input} name="todo" onChange={handleChange}/>
         <button onClick={handleClick}>Add</button>

         <ul className="todos-list">
            {todos && todos.map(({text,id})=>(
              <li className="todo" key={id}>

                <span>{text}</span>
                <button className='close' onClick={()=>removeTodo(id)}>X</button>
                
                </li>
             ))}
         </ul>
        
    </div>
  )
}

export default Todo