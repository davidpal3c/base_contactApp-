# Contact_App


# Contact Management Application

A simple contact management application built with React (frontend) and Flask (backend). This application allows users to create, update, and delete contacts through a modal.

## Features (CRUD)

- **Create Contact**: Add a new contact with first name, last name, and email.
- **Update Contact**: Edit existing contact details.
- **Delete Contact**: Remove a contact from the list.
- **View Contacts**: Display a list of all contacts.

## Dependencies

### Backend

- Python 3.x
- Flask
- SQLAlchemy

### Frontend

- Node.js
- npm (or yarn)
- React
- Vite

## Setup and Installation



### Backend (Flask)

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/contact-management-app.git
   cd contact-management-app/backend



2. **Create and activate virtual environment:**

    ```bash

    python3 -m venv venv
    source venv/bin/activate


3. **Install dependencies:**

   ```bash
    pip install -r requirements.txt


4. **Set up the database:**

   ```bash
    flask db init
    flask db migrate
    flask db upgrade

5. **Run the Flask server:**

   ```bash
    flask run




### Frontend (React with Vite)

1.  **Navigate to the frontend directory:**

    ```bash
    cd ../frontend


2. **Install dependencies:**

   ```bash
    npm install


3. **Run the development server:**

   ```bash
    npm run dev



How to Run

1.  **Start the Flask backend server:**
    ```bash
    flask run

2. **Start the React development server:**
   ```bash
    npm run dev

3. **Open your browser and navigate to:**
   ```bash
    http://localhost:3000


Project Structure

    backend/: Contains the Flask backend code.
    frontend/: Contains the React frontend code.
    migrations/: Contains database migration files.


Contributing

    Contributions are welcome! Please fork this repository and submit a pull request for any features, bug fixes, or enhancements.


License

    This project is licensed under the MIT License - see the LICENSE file for details.


This README provides a clear overview of the project, including its features, dependencies, setup instructions, and how to run both the frontend and backend components.
