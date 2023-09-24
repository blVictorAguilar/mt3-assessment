import React, { useState } from "react";
import { FaTrash, FaCheck } from "react-icons/fa";
export const Card = ({
  item,
  position,
  dragItem,
  dragOverItem,
  onDragEndFn,
  onUpdateTodoFn,
}) => {
  const { priority, text, status, id } = item;
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
      {showOptions && (
        <>
          <button
            className="card-button-menu delete"
            onClick={() => onUpdateTodoFn(id, "Deleted")}
          >
            <FaTrash />
          </button>
          <button
            className="card-button-menu check"
            onClick={() => onUpdateTodoFn(id, "Completed")}
          >
            <FaCheck />
          </button>
        </>
      )}
      <h3>Priority: {priority}</h3>
      <p>{text}</p>
      <p>Status: {status}</p>
    </div>
  );
};
