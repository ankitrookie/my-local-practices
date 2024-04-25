import React, { useEffect, useState } from "react";
import axios from "axios";

export const useFetchTodos = (n) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
    const value = setInterval(async () => {       
        const res = await axios.get('http://localhost:3000/todos');
        setTodos([res.data.data]);
        setLoading(false);
      }, n * 1000);

      return () => clearInterval(fetchData)
    };
    fetchData();
  }, [n]);

  return { loading, todos };
}
