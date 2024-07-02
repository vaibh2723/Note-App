# My Fullstack Project

## Project Structure

- `frontend/` - React frontend powered by Vite
- `backend/` - Node.js + Express + MongoDB backend

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. **Clone the repository:**

    First, go to your terminal or command prompt and navigate to the directory where you want to place your project, then run the following commands to clone the repository:
    ```
    git clonehttps://github.com/vaibh2723/Note-App.git
    cd Note-App
    ```

### Frontend Setup (React with Vite)

1. **Navigate to the `frontend` directory:**

    In your terminal or command prompt, navigate to the frontend directory:
    ```
    cd note-app-frontend
    ```

2. **Create a new Vite project:**

    Run the following command to create a new Vite project:
    ```
    npm create vite@latest .
    ```

    When prompted, select `React` and `JavaScript`.

3. **Install frontend dependencies:**

    Run the following command to install the necessary dependencies:
    ```
    npm install
    npm install axios
    ```

4. **Start the frontend development server:**

    Run the following command to start the development server:
    ```
    npm run dev
    ```

    The frontend will be available at `http://localhost:5173`.

### Backend Setup (Node.js with Express and MongoDB)

1. **Navigate to the `backend` directory:**

    In your new terminal or command prompt, navigate to the backend directory:
    ```
    cd note-app-backend
    ```

2. **Initialize a new Node.js project (if not already done):**

    Run the following command to initialize a new Node.js project:
    ```
    npm init -y
    ```

3. **Install backend dependencies:**

    Run the following command to install the necessary dependencies:
    ```
    npm install express mongoose cors body-parser
    ```

4. **Start the backend server:**

    Run the following command to start the backend server:
    ```
    npm start
    ```

    The backend will be available at `http://localhost:5000`.

### Running the Application

1. **Start the backend server:**

    In your terminal or command prompt, navigate to the backend directory and run:
    ```
    cd backend
    npm start
    ```

2. **Start the frontend development server:**

    In a new terminal or command prompt, navigate to the frontend directory and run:
    ```
    cd frontend
    npm run dev
    ```

### Project Structure

