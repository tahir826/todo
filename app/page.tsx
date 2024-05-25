"use client"
import { useState } from 'react';
import TodoForm from './../components/TodoForm'
import TodoList from './../components/TodoList';

interface Todo {
  id: string;
  title: string;
  isImportant: boolean;
}

const Home: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (title: string, isImportant: boolean) => {
    const newTodo = {
      id: Date.now().toString(),
      title,
      isImportant,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const updateTodo = (id: string, title: string, isImportant: boolean) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, title, isImportant } : todo)));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 flex justify-center">Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
    </div>
  );
};

export default Home;
