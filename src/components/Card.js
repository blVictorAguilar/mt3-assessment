import React, { useState } from "react";
import { FaTrash, FaCheck } from "react-icons/fa";
import "../styles/Card.css";
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

  const ButtonsHeader = () => {
    return (
      <>
        {item.status !== "Deleted" && (
          <button
            className="card-button-menu delete"
            onClick={() => onUpdateTodoFn(id, "Deleted")}
          >
            <FaTrash />
          </button>
        )}
        {item.status !== "Done" && (
          <button
            className="card-button-menu check"
            onClick={() => onUpdateTodoFn(id, "Done")}
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
      <h3>Priority: {priority}</h3>
      <p>{text}</p>
      <p>Status: {status}</p>
    </div>
  );
};
