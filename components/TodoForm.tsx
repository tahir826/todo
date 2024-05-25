"use client"
// components/TodoForm.tsx
import { useState, FormEvent } from 'react';

interface TodoFormProps {
  addTodo: (title: string, isImportant: boolean) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [isImportant, setIsImportant] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo(title, isImportant);
      setTitle('');
      setIsImportant(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter todo"
        className="p-2 border rounded"
      />
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={isImportant}
          onChange={(e) => setIsImportant(e.target.checked)}
        />
        <span>Mark as Important</span>
      </label>
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
