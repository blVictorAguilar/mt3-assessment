import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useTodoContext must be used within a TodoProvider");
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [pendingTodos, setPendingTodos] = useState([]);

  const addPendingTodo = (todo) => {
    setPendingTodos((prevState) => [...prevState, todo]);
  };

  const removePendingTodo = (todoId) => {
    const updatedTodos = pendingTodos.filter((todo) => todo.id !== todoId);
    setPendingTodos(updatedTodos);
  };

  const updatePendingTodos = (todos) => {
    setPendingTodos(todos);
  };
  const contextValue = {
    pendingTodos,
    addPendingTodo,
    removePendingTodo,
    updatePendingTodos,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
