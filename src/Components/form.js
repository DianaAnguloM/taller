import React,{useState} from "react";
import Todo from "./todo";

const Form = () =>{
    const [todo,setTodo] = useState({})
    const [todos,setTodos]=useState([])

    const handleChange = e => setTodo({...todo,[e.target.name]: e.target.value})
    const handleCantidadChange = e => setTodo({...todo,[e.target.name]: e.target.value})
    const handleClick = e => {
        if (!todo.todo || todo.todo.trim() ==='' || !todo.cantidad){
            alert('el campo no puedes estae vacio')
            return
        }
        setTodos([...todos,todo])
    }
    const deleteTodo = indice =>{
        const newTodos = [...todos]
        newTodos.splice(indice,1)
        setTodos(newTodos)
    }
    return(
        <>
            <form onSubmit={e => e.preventDefault()}>
                <label>Agregar tarea</label><br/>
                <select name="producto" onChange={handleChange}>
                    <option> 1</option>
                    <option> 1</option>
                    <option> 1</option>
                    <option> 1</option>
                    <option> 1</option>
                </select>
                <br/>
                <label>Cantidad </label>
                <input type="number" name="cantidad" onChange={handleCantidadChange}/>
                <button onClick={handleClick}>agregar</button>
            </form>
            <br/>
            {
                todos.map((value, index) => (
                    <Todo todo={value} key={index} index={index} deleteTodo={deleteTodo}/>
                ))
            }
        </>
    )
}
export default Form