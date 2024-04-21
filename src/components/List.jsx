import React, { useRef } from "react";

import { Card } from "./Card";
import { useAppContext } from "../context/AppContext";
import "../styles/List.css";
export const CardList = ({ data = [], handlePopUpFn }) => {
  const dragItem = useRef();
  const dragOverItem = useRef();

  const { pendingTodos, updatePendingTodos, updatePendingTodo } =
    useAppContext();

  const drop = () => {
    const pendingListCopy = [...pendingTodos];
    const dragItemContent = pendingListCopy[dragItem.current];
    pendingListCopy.splice(dragItem.current, 1);
    pendingListCopy.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    updatePendingTodos(pendingListCopy);
  };

  const handleUpdateTodo = (id, key) => {
    updatePendingTodo(id, key);
  };

  return (
    <>
      <div className="card-button" onClick={handlePopUpFn}></div>
      {data.map((item, index) => (
        <Card
          key={item.id}
          item={item}
          position={index}
          dragItem={dragItem}
          dragOverItem={dragOverItem}
          onDragEndFn={drop}
          onUpdateTodoFn={handleUpdateTodo}
        ></Card>
      ))}
    </>
  );
};
