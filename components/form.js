import React, {useEffect} from "react";
import styles from '@/styles/Home.module.css'
import { v4 as uuidv4} from "uuid";
const Form = ({input, setInput, todos, setTodos, editTodo, setEditTodo}) =>{

    const updateTodo = (title, id, completed) => {
        const newTodo = todos.map((todo) =>
            todo.id === id ? {title, id, completed} : todo
        );
        setTodos(newTodo);
        setEditTodo("");
    };

    useEffect(() => {
        if(editTodo){
            setInput(editTodo.title);
        } else {
            setInput("");
        }
    
    },[setInput, editTodo])


    const onInputChange = (event) => {
        setInput(event.target.value);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        if(!editTodo){
            setTodos([...todos, {id: uuidv4(), title: input, completed: false}]);
            setInput("");
        } else{
            updateTodo(input, editTodo.id, editTodo.completed)
        }

    };
    return(
        <div className={styles.form}>
            <form onSubmit={onFormSubmit}>
                <input type="text" 
                placeholder="Enter a new task..." 
                value={input}
                required
                onChange={onInputChange}
                className={styles.task}></input>
                
                <button className={styles.bluebutton} type="submit">
                    {editTodo ? "Confirm" : "Add"}
                </button>
               
            </form>
        </div>
    );
};

export default Form;