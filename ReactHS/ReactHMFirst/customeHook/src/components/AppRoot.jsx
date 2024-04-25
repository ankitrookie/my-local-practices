import React, { useEffect } from "react";
import { useFetchTodos } from "./useFetchTodos";

export const AppRoot = () => {
  const { todos, loading } = useFetchTodos(5);

  if(loading){
   return <div>Loading...</div>
  }

  return (
     <div>
      {todos.map((todo) => {
        return (
        <div key={todo.id}>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <h2>{todo.isCompleted ? "done" : "not done"}</h2>
        </div>
        )
      })}
     </div>
  )
}
