"use client"
// components/TodoList.tsx
import { useState } from 'react';
import TodoItem from './TodoItems';

interface TodoListProps {
  todos: { id: string; title: string; isImportant: boolean }[];
  deleteTodo: (id: string) => void;
  updateTodo: (id: string, title: string, isImportant: boolean) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, deleteTodo, updateTodo }) => {
  const [filter, setFilter] = useState<'all' | 'important'>('all');

  const filteredTodos = filter === 'all' ? todos : todos.filter(todo => todo.isImportant);

  return (
    <div>
      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => setFilter('all')}
          className={`p-2 ${filter === 'all' ? 'bg-gray-300' : 'bg-gray-100'}`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('important')}
          className={`p-2 ${filter === 'important' ? 'bg-gray-300' : 'bg-gray-100'}`}
        >
          Important
        </button>
      </div>
      {filteredTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
      ))}
    </div>
  );
};

export default TodoList;
