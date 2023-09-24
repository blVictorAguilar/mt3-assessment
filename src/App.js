import React, { useState } from "react";
import "./App.css";
import { CardList } from "./components/List";
import { Form } from "./components/Form";
import { useAppContext } from "./context/AppContext";
function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { pendingTodos } = useAppContext();
  console.log("pendingTodos: ", pendingTodos);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const Dashboard = () => {
    return (
      <div className="dashboard-container">
        <CardList handlePopUpFn={openPopup} data={pendingTodos}></CardList>
      </div>
    );
  };
  return (
    <>
      <header className="header">
        <h3>My Pendings</h3>
      </header>
      <Dashboard />
      <Form isOpen={isPopupOpen} onClose={closePopup}></Form>
    </>
  );
}

export default App;
