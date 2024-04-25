import Link from "next/link"

interface todoProps {
  createdAt: string,
  name: string,
  avatar: string,
  id: string
}

export const Todo = ({ todos }: { todos: todoProps[] }) => {
  return (
    <>
      {todos.map((todo) => (
        <Link href={`tasks/${todo.id}`}>
          <div key={todo.id} className="max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {todo.name}
          </div>
        </Link>
      ))}
    </>
  )
}
