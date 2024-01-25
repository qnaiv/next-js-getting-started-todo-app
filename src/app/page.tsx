'use client';

import { useState } from "react";

type Task = {
  id: string;
  text: string;
  isCompleted: boolean;
}


export default function Home() {
  const [text, setText] = useState<string>("");
  const [todos, setTodos] = useState<Task[]>([]);

  const changeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const addTodos = () => {
    const newTodos = [...todos];
    const newTask = { id: crypto.randomUUID(), text, isCompleted: false };
    newTodos.push(newTask);
    setTodos(newTodos);
    setText("");
  };

  const completeTodo = (id: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = true;
      }
      return todo;
    });
    setTodos(newTodos);
  }

  const getAddButton = () => {
    const disabled = text.length <= 0;
    return <button onClick={addTodos} disabled={disabled} className={disabled ? 'button-disabled' : ''}>追加</button>
  }

  const upTodo = (id: String) => {

  }
  const downTodo = (id: String) => {

  }

  const getTodos = () => {
    return todos.filter(todo => !todo.isCompleted).map((todo, index) =>
      <li key={todo.id} className="todo-card">
        <p>{todo.text}</p>
        <div>
          <button className="blue-button ml-2" onClick={() => upTodo(todo.id)}>↑</button>
          <button className="blue-button ml-2" onClick={() => downTodo(todo.id)}>↓</button>
          <button className="blue-button ml-2" onClick={() => completeTodo(todo.id)}>完了</button>
        </div>
      </li>
    )
  }

  const getCompletedTodos = () => {
    return todos.filter(todo => todo.isCompleted).map((todo, index) =>
      <li key={todo.id} className="todo-card">
        <p>{todo.text}</p>
      </li>
    )
  }

  return (
    <>
      <main>
        <div className="container">
          <div className="input-area sticky top-0">
            <input type="text" value={text} onChange={changeText} className="custom-border"></input>
            {getAddButton()}
          </div>
          <div className="todo-list mb-4">
            <p className="title">
              todos
            </p>
            <ul>
              {
                getTodos()
              }
            </ul>
          </div>
          <div className="todo-list completed">
            <p className="title">
              completed todos
            </p>
            <ul>
              {
                getCompletedTodos()
              }
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}
