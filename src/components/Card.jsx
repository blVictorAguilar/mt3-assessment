import React, { useState } from "react";
import { FaTrash, FaCheck } from "react-icons/fa";
import "../styles/Card.css";
import { Todo } from "./classes/Todo";
export const Card = ({
  item,
  position,
  dragItem,
  dragOverItem,
  onDragEndFn,
  onUpdateTodoFn,
}) => {
  const todo = new Todo(item);
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  function handleDragEnter() {
    dragOverItem.current = position;
    setIsDraggingOver(true);
  }

  function handleDragEnd() {
    onDragEndFn();
    setIsDraggingOver(false);
  }

  const ButtonsHeader = () => {
    return (
      <>
        {todo.isDeleted && (
          <button
            className="card-button-menu delete"
            onClick={() => onUpdateTodoFn(todo.id, "Deleted")}
          >
            <FaTrash />
          </button>
        )}
        {todo.isCompleted && (
          <button
            className="card-button-menu check"
            onClick={() => onUpdateTodoFn(todo.id, "Done")}
          >
            <FaCheck />
          </button>
        )}
      </>
    );
  };

  return (
    <div
      onMouseEnter={() => setShowOptions(true)}
      onMouseLeave={() => setShowOptions(false)}
      className={`card ${isDraggingOver ? "drag-over" : ""}`}
      draggable
      onDragStart={() => (dragItem.current = position)}
      onDragEnter={() => handleDragEnter()}
      onDragEnd={() => handleDragEnd()}
      onDragLeave={() => {
        setIsDraggingOver(false);
      }}
    >
      {showOptions && <ButtonsHeader />}
      <h3>Priority: {todo.priority}</h3>
      <p>{todo.text}</p>
      <p>Status: {todo.status}</p>
    </div>
  );
};
