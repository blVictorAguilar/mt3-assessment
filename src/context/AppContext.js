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
  const [filteredTodos, setFilteredTodos] = useState([]);

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

  const filterPendingTodos = (key = "Active") => {
    const filteredData = pendingTodos.filter((todo) => todo.status === key);
    setFilteredTodos(filteredData);
  };

  const updatePendingTodo = (id, status) => {
    const updatedTodos = pendingTodos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, status };
      }
    });
    setPendingTodos(updatedTodos);
  };

  const totalActiveTodos =
    pendingTodos.filter((todo) => todo.status === "Active").length || 0;

  const totalCompletedTodos =
    pendingTodos.filter((todo) => todo.status === "Done").length || 0;

  const totalDeletedTodos =
    pendingTodos.filter((todo) => todo.status === "Deleted").length || 0;

  const contextValue = {
    pendingTodos,
    addPendingTodo,
    removePendingTodo,
    updatePendingTodos,
    filteredTodos,
    filterPendingTodos,
    totalActiveTodos,
    totalCompletedTodos,
    totalDeletedTodos,
    updatePendingTodo,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
