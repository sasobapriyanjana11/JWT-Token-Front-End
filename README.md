# JWT Authentication Frontend

## Overview
This project is a frontend implementation for user authentication using JSON Web Tokens (JWT). It is built with HTML, CSS, JavaScript, Bootstrap, and AJAX. The frontend interacts with a backend service that generates and verifies JWT tokens.

## Features
- User login form
- JWT token storage in `localStorage`
- Protected routes that require JWT authentication
- AJAX requests to the backend with JWT tokens

## Technology Stack
- **HTML**: Structure of the web pages.
- **CSS & Bootstrap**: Styling and responsive design.
- **JavaScript**: Handling user interactions and making AJAX requests.
- **AJAX**: Communicating with the backend API for authentication and data retrieval.

## Getting Started
1. Clone the repository:
    ```bash
    git clone https://github.com/sasobapriyanjana11/JWT-Token-Front-End.git
    ```
2. Open the project in your code editor.
3. Set up your backend server to issue JWT tokens on successful login.
4. Link your frontend with the backend by setting the correct API endpoint in the JavaScript file.

## Usage

### Login
1. Fill in the login form with your credentials.
2. On successful login, the JWT token will be stored in `localStorage`.
3. This token will be included in the `Authorization` header for all subsequent requests to protected routes.

