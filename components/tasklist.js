import React from "react";
import styles from '@/styles/Home.module.css'
import Image from "next/image";
const Tasklist = ({todos, setTodos, setEditTodo}) => {
    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return { ...item, completed: !item.completed};
                }
                return item;
            })
        )
    }

    const handleDelete = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const handleEdit = ({id}) => {
        const findTodo = todos.find((todo) => todo.id === id)
        setEditTodo(findTodo)
    }

    return (
        <div>
            {todos.map ((todo) => (
                <li className={styles.tasklist} key={todo.id}>
                <input
                type="text"
                value={todo.title}
                className={`list ${todo.completed ? "completed" : ""}`}
                onChange={(event) => event.preventDefault()}
                />
                <button className={styles.complete}  onClick={() => handleComplete(todo)}>
                    <i className={styles.check}></i>
                </button>

                <button className={styles.edit} onClick={() => handleEdit(todo)}>
                <Image src="/edit icon.png"
                width={100}
                height={60}/>
                </button>

                <button className={styles.delete} onClick={() => handleDelete(todo)}>
                <Image src="/delete icon.png"
                width={100}
                height={60}/>
                </button>
                </li>
            ))}
            Tasklist
        </div>
    );
};
export default Tasklist;
