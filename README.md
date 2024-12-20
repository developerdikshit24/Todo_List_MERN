# Todo List Application

A simple Todo List application built with React for the frontend and Node.js with Express for the backend. This application allows users to create, read, update, and delete todos.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)

## Features

- Add new todos
- Edit existing todos
- Delete todos
- Mark todos as completed
- Responsive design

## Technologies Used

- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Node.js, Express, MongoDB
- **Others**: Axios, dotenv, Mongoose

## Installation

To get a local copy up and running, follow these steps:

1. Clone the repository:
   ```bash 
   git clone
   ```

3. Navigate to the frontend directory:
   ```bash
   cd todo-list/frontend
   ```

4. Install the frontend dependencies:
   ```bash
   npm install
   ```

5. Navigate to the backend directory:
   ```bash
   cd ../backend
   ```

6. Install the backend dependencies:
   ```bash
   npm install
   ```

7. Create a \`.env\` file in the backend directory and add your MongoDB URI:
   ```
   MONGODB_URI=your_mongodb_uri
   PORT=8000
   ```

## Usage

1. Start the backend server:
   ```bash
   npm run server
    ```

2. In a new terminal, navigate to the frontend directory and start the frontend:
   ```bash
   cd todo-list/frontend
   npm run dev
   ```

3. Open your browser and go to `http://localhost:5173` to view the application.
4. And backend server run on `http://localhost:8000` to execute backend structure.

## API Endpoints

### Todos

- **GET** `/api/v1/todo/getTodos` - Fetch all todos
- **POST** `/api/v1/todo/addTodo` - Add a new todo
- **POST** `/api/v1/todo/deleteTodo` - Delete a todo
- **POST** `/api/v1/todo/completedTask` - Mark a todo as completed
- **POST** `/api/v1/todo/getTodoById` - Get a todo by ID

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

# Made With ❤️ BY Dikshit...
