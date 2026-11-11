# ChatGPT Clone – AI-Powered Programming Assistant

An AI-powered conversational application inspired by ChatGPT, designed to assist users with programming, software engineering, computer science, and information technology-related questions.

The application uses **React.js** for the frontend, **Node.js and Express.js** for the backend, **MySQL** for data storage, and **Google Gemini AI** to generate intelligent responses.

---

## Project Overview

The ChatGPT Clone provides users with an interactive chat interface where they can submit questions and receive AI-generated responses.

Unlike a general-purpose chatbot, this application focuses on technical topics, including programming languages, web development, software engineering, databases, and computer science.

The system maintains conversation history by storing user questions and AI responses in a MySQL database, allowing users to retrieve their recent conversations.

## Key Features

### 1. AI-Powered Conversations

- Users can ask technical and programming-related questions.
- Google Gemini AI generates intelligent responses.
- The AI is configured to focus on programming, software engineering, computer science, and IT topics.
- Maintains conversational context using recent conversation history.

### 2. Chat Interface

- Interactive and user-friendly chat interface.
- Separate message presentation for users and AI responses.
- Chat input for submitting questions.
- Loading state while waiting for AI responses.
- Optimistic message rendering for a smoother experience.

### 3. Conversation Management

- Stores user messages and AI responses in MySQL.
- Retrieves recent conversation history.
- Maintains conversation context for subsequent questions.

### 4. Backend API

- RESTful API architecture.
- Organized controllers, services, routes, and middleware.
- Centralized error handling.
- Environment-based configuration.

### 5. Database Integration

- MySQL database integration using `mysql2`.
- Persistent storage of conversations.
- Stores message content and token usage information.

---

## Technology Stack

### Frontend

- React.js – Building the user interface.
- JavaScript – Application logic.
- Axios – HTTP requests to the backend.
- CSS – Styling and responsive layouts.

### Backend

- Node.js – JavaScript runtime.
- Express.js – Backend framework.
- Google GenAI SDK – Integration with Gemini AI.
- MySQL2 – Database connection and queries.
- CORS – Cross-origin resource sharing.
- dotenv – Environment variable management.

### Database

- MySQL – Storing user and assistant conversations.

### AI Integration

- Google Gemini API
- Gemini 2.0 Flash-Lite (default configured model)

---

## Project Architecture

The application follows a client-server architecture.

```text
              USER
                |
                v
        REACT FRONTEND
                |
                | Axios HTTP Requests
                v
        EXPRESS BACKEND
                |
        +-------+--------+
        |                |
        v                v
   CONTROLLERS         SERVICES
        |                |
        |          +-----+------+
        |          |            |
        |          v            v
        |       GEMINI AI     MYSQL DB
        |          |            |
        +----------+------------+
                   |
                   v
            API RESPONSE
                   |
                   v
             REACT FRONTEND
                   |
                   v
            DISPLAY RESPONSE
```

## Project Structure

The project is organized into frontend and backend directories.

```text
chatgpt-clone/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Sidebar/
│   │   │   ├── ChatHeader/
│   │   │   ├── ChatInput/
│   │   │   ├── ChatMessage/
│   │   │   └── MessageList/
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── backend/
│   ├── db/
│   │   └── db.config.js
│   │
│   ├── src/
│   │   ├── api/
│   │   │   └── main.routes.js
│   │   │
│   │   ├── controllers/
│   │   │
│   │   ├── services/
│   │   │
│   │   ├── middleware/
│   │   │   └── error_handler.js
│   │   │
│   │   └── utils/
│   │
│   ├── index.js
│   ├── package.json
│   └── .env
│
└── README.md
```

*Note: The structure above represents the main project organization. Update the tree to match your actual repository as development progresses.*

---

## Installation and Setup

Follow these steps to run the application locally.

### Prerequisites

Make sure you have installed:

- Node.js (LTS version recommended)
- npm
- MySQL Server
- Git
- Google Gemini API Key

### 1. Clone the Repository

```bash
git clone https://github.com/SemhalH/Chat_GPT-Clone.git
```

Navigate into the project directory:

```bash
cd chatgpt-clone
```

### 2. Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Install the dependencies:

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file inside the backend directory.

Add the following variables:

```env
PORT=3888

DB_HOST=localhost
DB_USER=user
DB_PASSWORD=mysql_password
DB_NAME=database_name
DB_PORT=3306

GEMINI_API_KEY=gemini_api_key
GEMINI_MODEL=gemini-2.0-flash-lite
```

Replace the placeholder values with your actual MySQL credentials and Gemini API key.

**Important:** Never upload your `.env` file or expose your API keys on GitHub.

### 4. Database Setup

Start your MySQL server and create a database:

```sql
CREATE DATABASE database_name
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;
```

Make sure the database tables required by the backend are created before running the application.

The database should support storing:

- User messages.
- AI-generated messages.
- Conversation relationships.
- Token usage information.

The `utf8mb4` character set is important for supporting emojis and other Unicode characters.

### 5. Start the Backend Server

Inside the backend directory, run:

```bash
npm start
```

The backend server runs at:

```text
http://localhost:3888
```

### 6. Frontend Setup

Open another terminal and navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the React development server:

```bash
npm run dev
```

The frontend will be available at:

```text
http://localhost:5173
```

---

## API Documentation

The backend exposes RESTful API endpoints for managing conversations.

**Base URL:**

```text
http://localhost:3888/api
```

### 1. Get Recent Conversations

Retrieves recent conversation messages from the database.

| Method | Endpoint              |
| ------ | --------------------- |
| GET    | `/chat/conversations` |

**Example request:**

```http
GET /api/chat/conversations
```

**Example response:**

```json
{
  "success": true,
  "message": "Conversations retrieved successfully",
  "data": {
    "conversations": []
  }
}
```

### 2. Create a Conversation

Submits a user question, sends it to Gemini AI, stores the user and assistant messages, and returns the generated response.

| Method | Endpoint              |
| ------ | --------------------- |
| POST   | `/chat/conversations` |

**Request body:**

```json
{
  "question": "What is JavaScript?"
}
```

**Example response structure:**

```json
{
  "success": true,
  "message": "Conversation posted successfully",
  "data": {
    "userConversation": {},
    "assistantConversation": {}
  }
}
```

---

## How the Application Works

1. The user enters a question in the React chat interface.
2. Axios sends the question to the Express backend.
3. The backend controller receives and validates the question.
4. The conversation service retrieves recent conversation history from MySQL.
5. The service sends the question and relevant conversation context to Google Gemini AI.
6. Gemini generates an AI response.
7. The backend stores both the user message and assistant response in MySQL.
8. The API returns the conversation data to the frontend.
9. React updates the chat interface and displays the response.

---

## Error Handling

The backend includes centralized error-handling middleware to manage application errors.

Examples include:

- Missing or invalid user questions.
- Database connection failures.
- Gemini API errors.
- Invalid API requests.
- Unexpected server errors.

---

## Security Considerations

- API keys and database credentials are stored in environment variables.
- Sensitive configuration files should not be committed to GitHub.
- CORS is configured to allow requests from the frontend development origin.
- Backend input validation is used to prevent invalid requests.

---

## Future Improvements

Potential features for future development include:

- User authentication and authorization.
- Individual user conversation history.
- Creating and deleting conversations.
- Renaming conversations.
- Editing and regenerating messages.
- Streaming AI responses.
- Markdown and code syntax highlighting.
- Copying AI-generated code.
- Dark and light themes.
- Responsive mobile interface.
- Improved conversation search.

---

## Contributors

This project is developed as a collaborative software development project.

| Name         | Role                 |
| ------------ | -------------------- |
| Project Team | Frontend Development |
| Project Team | Backend Development  |
| Project Team | Database Management  |
| Project Team | AI Integration       |

---

## License

This project is developed for educational and learning purposes.

---

**Built with React.js, Node.js, Express.js, MySQL, and Google Gemini AI.**
