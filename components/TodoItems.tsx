"use client"
// components/TodoItem.tsx
import { useState } from 'react';

interface TodoItemProps {
  todo: { id: string; title: string; isImportant: boolean };
  deleteTodo: (id: string) => void;
  updateTodo: (id: string, title: string, isImportant: boolean) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, deleteTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);
  const [newIsImportant, setNewIsImportant] = useState(todo.isImportant);

  const handleUpdate = () => {
    updateTodo(todo.id, newTitle, newIsImportant);
    setIsEditing(false);
  };

  return (
    <div className="flex justify-between items-center p-2 border rounded mb-2">
      {isEditing ? (
        <div className="flex flex-col">
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="p-1 border rounded mb-2"
          />
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={newIsImportant}
              onChange={(e) => setNewIsImportant(e.target.checked)}
            />
            <span>Mark as Important</span>
          </label>
          <button onClick={handleUpdate} className="mt-2 p-1 bg-blue-500 text-white rounded">
            Save
          </button>
        </div>
      ) : (
        <>
          <div>
            <h3 className={`text-lg ${todo.isImportant ? 'font-bold text-red-500' : ''}`}>
              {todo.title}
            </h3>
          </div>
          <div className="flex space-x-2">
            <button onClick={() => setIsEditing(true)} className="text-blue-500">
              Edit
            </button>
            <button onClick={() => deleteTodo(todo.id)} className="text-red-500">
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;
