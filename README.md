# Backend API Documentation

This document describes the structure and endpoints of the backend API. It covers the models used, the routes provided, and the server configuration along with the expected data formats and status codes.

---

## Models

### User Model
- **File:** `Model/User.js`
- **Description:** Represents the user with their basic profile information.
- **Fields:**
  - `username` (String)
  - `fullName` (String)
  - `profilePic` (String)
  - `bio` (String)
  - `followers` (Array of Strings)
  - `following` (Array of Strings)

### Post Model
- **File:** `Model/post.js`
- **Description:** Represents a post uploaded by a user.
- **Fields:**  
  *Note: There are duplicate declarations in the schema; ensure to remove duplicates in production.*
  - `caption` (String)
  - `imageUrl` (String)
  - `userId` (ObjectId, reference to `User`)
  - `createdAt` (Date, defaults to current date)
  - `image` (String)

### Reel Model
- **File:** `Model/Reel.js`
- **Description:** Represents a reel (short video) uploaded by a user.
- **Fields:**
  - `videoUrl` (String)
  - `caption` (String)
  - `userId` (ObjectId, reference to `User`)
  - `createdAt` (Date, defaults to current date)

---

## Routes & Endpoints

### 1. Posts Route

#### Endpoint: `/api/posts`
- **Methods:** POST
- **Description:**  
  Creates a new post.
- **Request Body:**  
  The following JSON object is expected:
  ```json
  {
    "caption": "Text caption for the post",
    "imageUrl": "URL string of the image",
    "userId": "MongoDB ObjectId of the user"
  }
  ```
- **Status Codes:**
  - **400 Bad Request:** If `caption`, `imageUrl`, or `userId` is missing.
  - **201 Created:** When the post is successfully created.
  - **500 Internal Server Error:** For any server-side issues.
- **Notes:**  
  There are two POST handlers in the code. Ensure that only one handler is active to avoid conflicts.

---

### 2. Profile Route

#### Endpoint: `/api/profile/:username`
- **Methods:** GET
- **Description:**  
  Retrieves a user's profile details and their posts based on the `username` parameter.
- **URL Parameters:**
  - `username` (String): The username of the user.
- **Response JSON Structure:**
  ```json
  {
    "user": { /* user object */ },
    "posts": [ /* array of post objects */ ]
  }
  ```
- **Status Codes:**
  - **404 Not Found:** If the user is not found.
  - **200 OK:** On successful retrieval.
  - **500 Internal Server Error:** For any server-side issues.

---

### 3. Search Route

#### Endpoint: `/api/search`
- **Methods:** GET
- **Description:**  
  Searches for users and posts matching a query.
- **Query Parameters:**
  - `q` (String): The search query.
- **Response JSON Structure:**
  ```json
  {
    "users": [ /* array of matching user objects */ ],
    "posts": [ /* array of matching post objects */ ]
  }
  ```
- **Status Codes:**
  - **200 OK:** On successful retrieval.
  - **500 Internal Server Error:** For any server-side issues.
- **Notes:**  
  If no query is provided, the endpoint returns empty arrays for both users and posts.

---

## Server Configuration

### Main Server File

#### File: `server.js`
- **Description:**  
  Initializes the Express server, connects to MongoDB, and sets up middleware and route endpoints.
- **Key Points:**
  - **CORS and JSON Parsing:** Enabled via `app.use(cors())` and `app.use(express.json())`.
  - **MongoDB Connection:** The server connects to MongoDB using the provided URI from environment variables and a fallback local connection.
  - **Port:** The server listens on port `5000`.
  - **Endpoints Loaded:**  
    - `/api/posts` – Handled by the posts route.
    - `/api/profile` – Handled by the profile route.
    - `/api/search` – Handled by the search route.
  - **Root Endpoint:**  
    - `GET /` returns a simple message (example: "hello word"). *Note: There is a typo in the code (`sednd` instead of `send`) that needs correction.*

- **Status Codes:**
  - **200 OK:** For a successful GET request on the root endpoint.
  - **500 Internal Server Error:** For issues during database connection or server execution.

---

## Data Requirements for Endpoints

- **/api/posts [POST]:**
  - **Required Fields:**
    - `caption` (String) – Text description for the post.
    - `imageUrl` (String) – URL to the image.
    - `userId` (String/ObjectId) – The identifier of the user creating the post.
- **/api/profile/:username [GET]:**
  - **Required Parameter:**
    - `username` (String) – The username to look up in the database.
- **/api/search [GET]:**
  - **Required Query Parameter:**
    - `q` (String) – The search term to filter users and posts.

---

## Running the Server

1. Ensure that your environment variables (like `MONGO_URI`) are set in a `.env` file.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   node server.js
   ```
   or if using Nodemon:
   ```bash
   nodemon server.js
   ```

The server listens on port `5000` as configured in the code.

---

This documentation details the fundamental API endpoints along with data requirements and expected status codes. Adjust the endpoints and models as needed based on your application’s evolution.