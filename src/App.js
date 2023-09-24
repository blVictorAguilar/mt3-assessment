import React, { useEffect, useState } from "react";
import "./App.css";
import { CardList } from "./components/List";
import { Form } from "./components/Form";
import { useAppContext } from "./context/AppContext";
import Hamburger from "hamburger-react";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const {
    pendingTodos,
    filteredTodos,
    filterPendingTodos,
    totalActiveTodos,
    totalCompletedTodos,
  } = useAppContext();
  const [isOpen, setOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  useEffect(() => {
    filterPendingTodos();
  }, [pendingTodos]);

  const handleFilterOptions = (key) => {
    filterPendingTodos(key);
    setOpen(false);
  };
  const Dashboard = () => {
    return (
      <div className="dashboard-container">
        <CardList handlePopUpFn={openPopup} data={filteredTodos}></CardList>
      </div>
    );
  };
  return (
    <>
      <header className="header">
        <h3>My Pendings</h3>
      </header>
      <div className="menu-container">
        <Hamburger toggled={isOpen} toggle={setOpen} />
        {isOpen && (
          <div className="floating-menu">
            <h3>Sort by: </h3>
            <ul className="options-menu">
              <li
                className="options-menu-item"
                onClick={() => handleFilterOptions("Active")}
              >
                Active
              </li>
              <li
                className="options-menu-item"
                onClick={() => handleFilterOptions("Done")}
              >
                Done
              </li>
              <li
                className="options-menu-item"
                onClick={() => handleFilterOptions("Deleted")}
              >
                Deleted
              </li>
            </ul>
          </div>
        )}
      </div>
      <Dashboard />
      <Form isOpen={isPopupOpen} onClose={closePopup}></Form>
      <footer className="footer">
        <div className="footer-element">Active: {totalActiveTodos}</div>
        <div className="footer-element">Completed: {totalCompletedTodos}</div>
      </footer>
    </>
  );
}

export default App;
