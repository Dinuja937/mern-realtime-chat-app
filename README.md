# 💬 Full Stack Real-Time Chat Application

A full-stack real-time chat application built using the MERN stack and Socket.IO. The application allows users to securely communicate with each other through instant messaging, view online users, and experience real-time updates without refreshing the page.

The project focuses on implementing real-time communication, user authentication, authorization, and state management in a modern web application.

---

## ✨ Live Demo

🔗 **[View Live Application](https://mern-realtime-chat-app-nz7m.onrender.com/login)**

---

## ✨ Features

### 🔐 Authentication & Authorization
* **JWT Authentication:** User registration and login using JSON Web Tokens.
* **Password Security:** Safe handling and hashing of passwords.
* **Protected Routes:** Restricts unauthorized access to secure pages.
* **Access Control:** Authentication-based access to core chat functionalities.

### ⚡ Real-Time Messaging
* **Socket.IO Integration:** Instant message delivery and event triggers.
* **Bidirectional Communication:** Low-latency real-time updates between connected clients.
* **Persistent Storage:** All chat messages stored securely in MongoDB.
* **Dynamic Chat UI:** Live conversation updates without refreshing the page.

### 🟢 Online User Status
* **Live Presence Tracking:** Real-time online and offline user status indicators.
* **Connection Management:** Socket.IO handles active socket IDs to track active users.
* **Automatic Updates:** Instantly updates user availability when connections open or close.

### 🎨 User Interface
* **Responsive Design:** Fully responsive layout built with Tailwind CSS & DaisyUI.
* **Interactive Chat Interface:** Clean view for browsing user lists and exchanging messages.
* **Global State:** State management powered by Zustand.

### ⚙️ Additional Features
* **Centralized Error Handling:** Consistent client and server-side handling.
* **RESTful API:** Structured API endpoints for non-realtime operations.
* **Cloud Storage:** Cloudinary integration for profile and image message uploads.
* **Environment Configuration:** Secure variables management across environments.

---

## 🚀 Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Frontend** | React.js, JavaScript |
| **Styling** | Tailwind CSS, DaisyUI |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose |
| **Real-Time Communication** | Socket.IO |
| **Authentication** | JSON Web Tokens (JWT) |
| **State Management** | Zustand |
| **Cloud Services** | Cloudinary |
| **Development Tools** | Git, GitHub, Postman |

---

## 🏗️ Application Architecture

The application follows a standard **Client-Server Architecture**:

* **Frontend:** React.js handles the user interface, state management (Zustand), and real-time client events.
* **Backend:** Node.js and Express.js handle API business logic, authentication, and HTTP routes.
* **Database:** MongoDB stores users, message histories, and metadata.
* **Real-Time Communication:** Socket.IO maintains a persistent WebSocket connection between client and server for instant message relay.
* **Authentication:** JWT tokens authenticate HTTP requests and socket connections.
* **Cloud Storage:** Cloudinary handles cloud image uploads and transformations.

---

## 📁 Project Structure

```text
fullstack-chat-app/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── lib/
│   │   └── index.js
│   │
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── constants/
│   │   ├── store/
│   │   ├── lib/
│   │   └── main.jsx
│   │
│   └── package.json
│
├── .gitignore
├── package.json
└── README.md
```

---

## 🛠️ Getting Started

Follow these instructions to set up and run the application locally.

### Prerequisites

Make sure you have the following installed or configured:
* Node.js (LTS version recommended)
* npm
* MongoDB database (Local installation or MongoDB Atlas)
* Cloudinary Account

### 1. Clone the Repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd <PROJECT_DIRECTORY>
```

### 2. Install Dependencies

Install root and workspace dependencies using:

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root directory and set the following environment variables:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5001
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

NODE_ENV=development
```

#### Environment Variable Breakdown

| Variable | Description |
| :--- | :--- |
| `MONGODB_URI` | MongoDB database connection URI string |
| `PORT` | Backend server port number (Default: 5001) |
| `JWT_SECRET` | Secret key used to sign authentication tokens |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary account name |
| `CLOUDINARY_API_KEY` | Cloudinary API access key |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret |
| `NODE_ENV` | Application running mode (`development` / `production`) |

> ⚠️ **Important:** Replace placeholder values with your actual credentials. Never commit `.env` files or expose keys publicly.

### 4. Build the Application

Build the frontend and prepare static production assets:

```bash
npm run build
```

### 5. Start the Application

Start the server using:

```bash
npm start
```

Once started, navigate to your browser at:
`http://localhost:5001`

---

## ⚙️ How the Application Works

1. **Authentication:** Users create an account or sign in. The backend verifies credentials and sets a JWT cookie/token.
2. **Socket Handshake:** Upon authentication, Socket.IO connects the client to the server and updates active user lists.
3. **Messaging:** Selecting a user fetches message history from MongoDB. New messages are emitted via Socket.IO for immediate display.
4. **Presence Tracking:** Connecting or disconnecting triggers dynamic socket events, automatically updating the online status across all active clients.

---

## 🛠️ Key Architectural Concepts

### Real-Time Communication with Socket.IO
Socket.IO facilitates low-latency, bidirectional communication:
* Establishes real-time connection channels.
* Emits instant message events directly to targeted users.
* Dynamically tracks socket connections to manage online status.

### State Management with Zustand
Zustand manages client-side application state efficiently:
* Tracks active/authenticated user profiles.
* Stores active conversations and selected recipient state.
* Syncs real-time messaging updates across components without extra renders.

---

## 🎯 Learning Outcomes

Developing this project provided hands-on experience in:
* Full-stack application development with the MERN stack.
* Implementing real-time event-driven architecture using **Socket.IO**.
* Managing global authentication and security using **JWT**.
* Handling persistent messaging models using **MongoDB & Mongoose**.
* Managing complex frontend client state with **Zustand**.
* Styling responsive component-driven UIs with **Tailwind CSS & DaisyUI**.

---

## 👩‍💻 Developer

**Dinuja Ranaweera**