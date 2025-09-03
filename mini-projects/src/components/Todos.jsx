import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";
// isme value leni h so selector use krenge ->  for removing
const Todos = () => {
  // Get todos from Redux store using useSelector
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // State to track which todo is currently being edited
  const [editingId, setEditingId] = useState(null);

  // State to store updated text input
  const [editText, setEditText] = useState("");

  // Start editing: set editingId and prefill input field with existing text
  const startEditing = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  // Cancel editing
  const cancelEditing = () => {
    setEditingId(null);
    setEditText("");
  };

  // Handle update form submission
  const handleUpdate = (e) => {
    e.preventDefault();

    // Only update if text is not empty
    if (editText.trim()) {
      dispatch(updateTodo({ id: editingId, newText: editText.trim() }));
      setEditingId(null); // Exit editing mode
      setEditText(""); // Clear input
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      {/* Heading */}
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Todo List
      </h2>

      {/* Todo List */}
      <ul className="space-y-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between px-4 py-2 bg-gray-100 rounded hover:bg-gray-200 transition"
          >
            {/* If this todo is being edited, show input field */}
            {editingId === todo.id ? (
              <form
                onSubmit={handleUpdate}
                className="flex-grow flex items-center gap-2"
              >
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="w-full px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  autoFocus
                />
                <button
                  type="submit"
                  className="text-green-600 font-semibold hover:text-green-800"
                  title="Save"
                >
                  ✓
                </button>
                <button
                  type="button"
                  onClick={cancelEditing}
                  className="text-gray-500 hover:text-gray-700"
                  title="Cancel"
                >
                  ✕
                </button>
              </form>
            ) : (
              // If not editing, just show text with edit & delete buttons
              <>
                <span className="text-gray-700">{todo.text}</span>
                <div className="flex gap-2">
                  {/* Edit button */}
                  <button
                    onClick={() => startEditing(todo)}
                    className="text-blue-500 hover:text-blue-700 font-bold"
                    title="Edit"
                  >
                    ✎
                  </button>

                  {/* Delete button */}
                  <button
                    onClick={() => dispatch(removeTodo(todo.id))}
                    className="text-red-500 hover:text-red-700 font-bold"
                    aria-label="Delete todo"
                    title="Delete"
                  >
                    ✕
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>

      {/* Message if no todos exist */}
      {todos.length === 0 && (
        <p className="text-center text-gray-500 mt-4">No todos yet. Add one!</p>
      )}
    </div>
  );
};

export default Todos;
