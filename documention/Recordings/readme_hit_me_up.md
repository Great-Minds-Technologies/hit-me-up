#  Great Minds Technologies – Hit Me Up

##  Table of Contents

1. [About the Project](#1-about-the-project)
   - 1.1 [Project Description](#11-project-description)
   - 1.2 [Built With](#12-built-with)
2. [Getting Started](#2-getting-started)
   - 2.1 [Prerequisites](#21-prerequisites)
   - 2.2 [How to Install](#22-how-to-install)
3. [Features and Usage](#3-features-and-usage)
   - [Screenshots & Explanations](#screenshots--explanations)
4. [Demonstration Video](#4-demonstration-video)
5. [Architecture / System Design](#5-architecture--system-design)
6. [Unit Testing and User Testing](#6-unit-testing-and-user-testing)
7. [Highlights and Challenges](#7-highlights-and-challenges)
8. [Roadmap – Future Improvements](#8-roadmap--future-improvements)
9. [Contributing and License](#9-contributing-and-license)
10. [Authors and Contact Info](#10-authors-and-contact-info)
11. [Acknowledgements](#11-acknowledgements)

---

## 1. About the Project

### 1.1 Project Description

**Hit Me Up** is a fictional, dark-humored web application for an underground hitman-for-hire network. The app allows users to create an account, log in securely, and browse or book hitmen services or purchase weapons. Styled with an edgy, underground aesthetic, it balances humor, creativity, and full-stack functionality.

This project was created to demonstrate advanced web development skills, specifically full-stack architecture, user authentication, dynamic routing, and professional UI/UX design.

**Who it's for:** Developers, students, or instructors exploring secure login systems, modern front-end architecture, and API integration.

**Why it exists:** As part of an educational assignment, this app satirically demonstrates how full-stack apps work while reinforcing professional development workflows.

### 1.2 Built With

**Frontend:**

- React.js
- React Router DOM
- JavaScript (ES6+)
- CSS
- Bootstrap & React-Bootstrap
- Axios

**Backend:**

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT (JSON Web Tokens)
- bcrypt

**API:**

   Our custom API was developed with Express.js and Mongoose, allowing us to define models, routes, and controller logic that handled data related to users, hitmen, and weapons.

  API supported full CRUD operations, enabling secure and dynamic interaction between the frontend and the database through RESTful endpoints.

   Authentication was handled via JWT, and password security was ensured using bcrypt, following best practices in real-world development environments.

   This shift reinforced our understanding of building secure, scalable, and production-ready APIs tailored to the needs of the application.

---

## 2. Getting Started

### 2.1 Prerequisites

- Node.js (v14+)
- npm
- MongoDB (local or hosted instance)
- Git

### 2.2 How to Install

1. **Clone the Repository**

```bash
git clone https://github.com/your-username/hit-me-up.git
```

2. **Install Frontend**

```bash
cd frontend
npm install
npm start
```

3. **Install Backend** Open a new terminal:

```bash
cd backend
npm install
npm start
```

---

## 3. Features and Usage

-  **User Authentication**: We implemented a secure sign-up and login system using JWT (JSON Web Tokens) for session management and bcrypt for hashing user passwords. This ensures that only authenticated users can access protected routes such as booking hitmen or viewing sensitive information. 
-  **Product Viewing**: Logged-in users can browse weapons and hitmen with pricing
-  **Dark-Themed UI**: The design embraces a dark, edgy visual identity to match the satirical, underground concept of the project. The styling uses a mix of custom CSS, React-Bootstrap, and minimal animations to maintain usability while establishing a strong brand personality. The layout is responsive and optimized for both desktop and mobile devices.
-  **Modular Architecture**: The frontend follows a component-based architecture, meaning each element (e.g., login form, product card, navigation bar) is encapsulated in its own file. This improves readability, scalability, and maintainability. The structure also allows for quick updates or the addition of new features with minimal disruption to existing code.
-  **React Router**: Seamless route management

### Screenshots & Explanations

&#x20;*User login page with clean, dark UI and secure form validation.*

&#x20;*Dashboard showing available services post-login.*

---

## 4. Demonstration Video

[🔗 Watch Here](https://drive.google.com/file/d/1GDPLpWfwR1_LXFcudjPadTlC7BAxB8dm/view?usp=sharing)

---

## 5. Architecture / System Design

- **Frontend**: Component-based architecture built with React
- **Routing**: React Router DOM for client-side route management
- **State Management**: Local state + JWT token storage in localStorage
- **Backend**: Express.js REST API
- **Database**: MongoDB with Mongoose ODM

---

## 6. Unit Testing and User Testing

- ✅ **Unit Testing**: Functions tested locally (form validation, API responses)
- 🧪 **User Testing**: Conducted by peers. Feedback informed improvements on UI responsiveness and error handling.

---

## 7. Highlights and Challenges

### Highlights

- Implemented full-stack JWT authentication
- Designed unique and consistent UI
- Modular and scalable codebase

### Challenges

- Integrating API calls and managing protected routes
- Aligning humor and edgy theme with accessible UI
- Backend route validation and error catching

---

## 8. Roadmap – Future Improvements

- Add payment gateway integration
- Admin dashboard for managing services
- Expanded weapon categories and user profiles
- Error logging and monitoring

---

## 9. Contributing and License

### 🤝 Contributing

We welcome contributions! Follow the steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Open a pull request

### 📄 License

**All rights reserved.** This project is for **educational use only**. Unauthorized use or reproduction is strictly prohibited.

---

## 10. Authors and Contact Info

- [Your Name] – Lead Developer – [your.email@example.com](mailto\:your.email@example.com)
- Collaborators: [Teammate 1], [Teammate 2]

Feel free to reach out for questions, feedback, or collaboration opportunities.

---

## 11. Acknowledgements

- Our lecturers and mentors for guidance
- OpenAI and MDN Web Docs
- Bootstrap and React documentation
- GitHub community
- Fellow classmates for testing and feedback

---

