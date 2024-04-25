import React from 'react';


export const ShowTodos = ({ todos }) => {
  return(
     <div>
       {todos.map((item) => {
        <>
          <div>{item.title}</div>
          <div>{item.description}</div>
          <div>{item.completed ? 'Completed' : 'Not completed'}</div>
        </>
       })}
    </div>
  )
}
