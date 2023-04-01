import React from "react";
import styles from '@/styles/Home.module.css'
import styled, {css} from "styled-components";
import Image from "next/image";

export default function Tasklist({ todos, setTodos, setEditTodo, me = "" }) {
    const handleComplete = (todo) => {
      setTodos(
        todos.map((item) => {
          if (item.id === todo.id) {
            return { ...item, completed: !item.completed };
          }
          return item;
        })
      );
    };
  const handleDelete = ({ id }) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    };
  
    const handleEdit = ({ id }) => {
      const findTodo = todos.find((todo) => todo.id === id);
      setEditTodo(findTodo);
    };
  
    return (
      <div>
        {todos.map((todo) => (
          <li className={styles.tasklist} key={todo.id}>
            <Input
              type="text"
              value={todo.title}
              completed={todo.completed}
              onChange={(event) => event.preventDefault()}
            />
  
            <Image
              src="/check circle.png"
              width={40}
              height={20}
              onClick={() => handleComplete(todo)}
              marginTop={me}
              className={styles.taskbutton}
            />
  
            <Image
              src="/edit circle.png"
              width={40}
              height={20}
              onClick={() => handleEdit(todo)}
              className={styles.taskbutton}
            />
  
            <Image
              src="/X circle.png"
              width={40}
              height={20}
              onClick={() => handleDelete(todo)}
              className={styles.taskbutton}
            />
          </li>
        ))}
      </div>
    );
  }
  
  const Input = styled.input `
    border-radius: 10px;
    border: 1px solid #00eaffc5;
    color: blue;
    background-color: white;
    margin-top: -10px;
    height: 25px;
    width: 250px;
  
    ${({ completed }) =>
      completed &&
      css`
        text-decoration: line-through;
        transition: text-decoration 0.5s ease-in-out;
        `
      }
      `
  ;
  