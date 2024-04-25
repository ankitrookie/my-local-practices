import { getAllTodos } from "@/app/lib/api";
import { Todo } from "./todo";


export const TodoTasks = async () => {
  const todos = await getAllTodos();

  return (
    <div className="grid grid-cols-4 gap-2">
      <Todo todos={todos} />
    </div>
  )
}
