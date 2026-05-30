# DSA Lane

DSA Lane is a collaborative discussion platform designed for Data Structures and Algorithms (DSA) learners. It provides a space where users can post coding problems, share solutions, discuss approaches, ask doubts, and interact with the community through voting and discussion features.

The project was developed to create a focused environment for algorithmic problem-solving discussions while providing a clean and user-friendly experience.

---

## Live Demo

Frontend: 

Backend API: 
---

## Features

### User Authentication
- Secure user registration and login
- Password hashing for enhanced security
- JWT-based authentication
- Protected routes

### Discussion System
- Create new DSA-related posts
- Share coding problems and solutions
- Add detailed descriptions and explanations
- Community-driven discussions

### Community Interaction
- Upvote helpful posts
- Downvote irrelevant or incorrect content
- Real-time discussion engagement
- Delete own posts

### Password Generator
- Generate strong random passwords
- Improve account security
- Easy-to-use interface

### Responsive Design
- Mobile-friendly layout
- Tablet support
- Desktop optimized interface

### Modern UI
- Clean and intuitive design
- Consistent user experience
- Easy navigation

---

## Tech Stack

### Frontend
- React.js
- React Router
- Axios
- CSS

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas

### Authentication
- JSON Web Tokens (JWT)
- bcrypt

### Deployment
- Vercel (Frontend)
- Render (Backend)

---

## Project Structure

```text
dsa-lane/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── app.js
│   └── package.json
│
├── .gitignore
├── README.md
└── package.json
