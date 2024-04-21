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
    const updatedTodos = pendingTodos.map((todo) => ({
      ...todo,
      status: todo.id === id ? status : todo.status,
    }));
    setPendingTodos(updatedTodos);
  };

  const filterTodoByStatus = (status) => {
    if (!pendingTodos) {
      return 0;
    }
    return pendingTodos.filter((todo) => todo.status === status).length;
  };

  const totalActiveTodos = filterTodoByStatus("Active");
  const totalCompletedTodos = filterTodoByStatus("Done");
  const totalDeletedTodos = filterTodoByStatus("Deleted");

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
