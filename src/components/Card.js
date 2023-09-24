import React, { useState } from "react";

export const Card = ({
  item,
  position,
  dragItem,
  dragOverItem,
  onDragEndFn,
}) => {
  const { priority, text, status } = item;
  const [isDraggingOver, setIsDraggingOver] = useState(false);

  function handleDragEnter() {
    dragOverItem.current = position;
    console.log("entered");
    setIsDraggingOver(true);
  }

  function handleDragEnd() {
    onDragEndFn();
    setIsDraggingOver(false);
  }

  return (
    <div
      className={`card ${isDraggingOver ? "drag-over" : ""}`}
      draggable
      onDragStart={() => (dragItem.current = position)}
      onDragEnter={() => handleDragEnter()}
      onDragEnd={() => handleDragEnd()}
      onDragLeave={() => {
        setIsDraggingOver(false);
      }}
    >
      <h3>Priority: {priority}</h3>
      <p>{text}</p>
      <p>Status: {status}</p>
    </div>
  );
};
