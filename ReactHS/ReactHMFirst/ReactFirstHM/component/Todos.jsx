import React from 'react';


export const Todos = ({ todos, setId }) => {
  return  (
     <div>
      <button onClick={function() {
        setId(1);
      }}>1</button>
      <button onClick={function() {
        setId(2);
      }}>2</button>
     <button onClick={function() {
        setId(3);
      }}>3</button>
        {todos.map((todo) => (
           <div key={todo.id}>
             <h1>{todo.title}</h1>
              <h2>{todo.description}</h2>
           </div>
        ))}
     </div>

  )
}
