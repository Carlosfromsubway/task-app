import React from "react";
import styles from '@/styles/Home.module.css'
import { v4 as uuidv4} from "uuid";
export default function Form({input, setInput, todos, setTodos}) {
    const onInputChange = (event) => {
        setInput(event.target.value);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        setTodos([...todos, {id: uuidv4(), title: input, completed: false}]);
        setInput("");
    };
    return(
        <div>
            <form onSubmit={onFormSubmit}>
                <input type="text" 
                placeholder="Enter a new task..." 
                value={input}
                required
                onChange={onInputChange}
                className={styles.task}></input>
                <button className={styles.bluebutton} type="submit"></button>
            </form>
        </div>
    )
}