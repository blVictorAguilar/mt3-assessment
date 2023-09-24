# To-Do List Application

This React-based application allows users to manage their pending to-do tasks. Users can create, filter, delete, and mark tasks as done. Here's how the application works:

## Features

- **Create New Pending To-Do:**

  - Click on the empty square tile to create a new pending to-do.
  - When hovering over this tile, the "Create" option will become visible.

- **Task Creation Form:**

  - After clicking the empty square tile, a form will pop up.
  - Fill in the following details for your pending to-do:
    - Priority: Set the priority level of the task.
    - Text: Enter the task description or title.
    - Status: Set the status to "Active" for newly created tasks.

- **Filtering Tasks:**

  - The application displays tasks with "Active" status by default.
  - Use the hamburger menu to filter tasks by the following statuses:
    - Active: Shows tasks that are pending.
    - Done: Shows tasks that are completed.
    - Deleted: Shows tasks that have been deleted.

- **Delete or Mark as Done:**
  - Each pending to-do tile has two buttons:
    - Trash Button (🗑️): Click to delete the task.
    - Check Button (✅): Click to mark the task as done.

## Usage

1. Clone the repository to your local machine.

2. Navigate to the project directory in your terminal.

3. Run the following command to install project dependencies:

   npm install

4. After the dependencies are installed, run:

   npm start
