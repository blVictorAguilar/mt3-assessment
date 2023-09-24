import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";

export const Form = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({});
  const { addPendingTodo } = useAppContext();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log("name: ", name);
    console.log("value: ", value);

    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPendingTodo({ ...formData, id: uuidv4() });
    setFormData({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup">
        <form className="form-container" onSubmit={handleSubmit}>
          <h2>Add Pending</h2>
          <label className="form-label" htmlFor="priority">
            Priority:
          </label>
          <input
            className="form-input"
            type="text"
            id="priority"
            name="priority"
            onChange={handleOnChange}
            maxLength={15}
          />

          <label className="form-label" htmlFor="text">
            Description:
          </label>
          <input
            className="form-input"
            type="text"
            id="text"
            name="text"
            onChange={handleOnChange}
            maxLength={100}
          />
          <label className="form-label" htmlFor="status">
            Status:
          </label>
          <select onChange={handleOnChange} name="status">
            <option value="">---Select---</option>
            <option value="Active">Active</option>
            <option value="Done">Done</option>
            <option value="Deleted">Deleted</option>
          </select>
          <div className="button-footer">
            <button className="form-submit" type="submit">
              Submit
            </button>
            <button className="form-cancel" type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
