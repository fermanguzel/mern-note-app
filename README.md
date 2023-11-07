# MERN Note App

A MERN (MongoDB, Express, React, Node.js) application for taking and managing notes. This application allows users to create, view, update, and delete notes.

## Features

- User Registration and Authentication.
- Create, Read, Update, and Delete notes.
- Rich text editor for note creation.
- User-specific notes.
- Responsive design for both desktop and mobile devices.

## Technologies Used

- **Frontend:**
  - React.js
  - Redux for state management
  - Axios for making API requests
  - React Quill for the rich text editor
  - Bootstrap for styling
- **Backend:**
  - Node.js
  - Express.js
  - MongoDB for data storage
  - JWT for user authentication
  - Bcrypt for password hashing
- **Deployment:**
  - Heroku for the backend
  - Netlify for the frontend
- **Other Tools:**
  - Git and GitHub for version control

## Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/fermanguzel/mern-note-app.git
    cd mern-note-app
    ```

2.  Install the dependencies for both the server and the client:

    ```bash
    cd client
    npm install
    cd ../server
    npm install
    ```

3.  Create a .env file in the server directory and add the following configuration:

    MONGO_URI=your_mongodb_uri
    SECRET_KEY=your_secret_key

4.  Start the development server for both the client and backend:

    cd frontend
    npm start
    cd backend
    npm start

5.  The app will be available at http://localhost:3000.

## Usage

1. Register or log in to start using the note-taking app.
2. Create, edit, and delete your notes.
3. Enjoy the rich text editor for a better note-taking experience.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

If you have any questions or want to get in touch, you can reach out to me at [fermanguzel@gmail.com].
