# LinkLy 🚀

> **AI-powered CRM for small businesses — designed for simplicity and maximum efficiency.**

[![Figma](https://img.shields.io/badge/Figma-Design-F24E1E?style=flat&logo=figma&logoColor=white)](https://www.figma.com/design/e5HhR7TYnWsvpKJBo1MKde/Untitled?node-id=9-2&t=w1wdrqYahbsPpSn5-1)
[![License](https://img.shields.io/badge/License-MIT-black?style=flat)](LICENSE)

LinkLy is a lightweight, modern Customer Relationship Management (CRM) platform designed specifically for micro and small businesses. We cut out the bloat of enterprise tools to give you a clean, intuitive, and blazing-fast interface to manage your tasks, contacts, emails, calendar, and analytics.

---

## 🎨 Design & Prototype

The entire application was meticulously designed before development to ensure a seamless and premium user experience.

🔗 **[View the Official Figma Design File](https://www.figma.com/design/e5HhR7TYnWsvpKJBo1MKde/Untitled?node-id=9-2&t=w1wdrqYahbsPpSn5-1)**

---

## 📸 Screenshots

Here is a glimpse of the LinkLy platform in action:

<div align="center">
  <img src="https://via.placeholder.com/800x450/000000/FFFFFF?text=LinkLy+Dashboard" alt="LinkLy Dashboard" width="800" />
  <p><i>The Analytics Dashboard providing a high-level overview of revenue and metrics.</i></p>
</div>

<br />

<div align="center">
  <img src="https://via.placeholder.com/800x450/111111/FFFFFF?text=Contact+Management" alt="Contact Management" width="800" />
  <p><i>The intuitive Contact Grid View and detailed user profiles.</i></p>
</div>

<br />

<div align="center">
  <img src="https://via.placeholder.com/800x450/222222/FFFFFF?text=Calendar+&+Scheduling" alt="Calendar and Scheduling" width="800" />
  <p><i>The built-in Calendar module for managing meetings and daily agendas.</i></p>
</div>

*(Note: Replace the placeholder URLs above with actual screenshots placed in your repository's `/public` or `/docs` folder!)*

---

## ✨ Key Features

- 📊 **Analytics Dashboard:** Visualize your active projects, revenue, and top companies with beautiful interactive charts.
- 👥 **Contact Management:** Organize your network with Grid, Kanban, and List views. Add customized details and sort by categories.
- 📧 **Built-in Email Client:** A fully functional mock email interface with rich-text replying and categorizations.
- 📅 **Calendar & Scheduling:** View your schedule by Month, Week, or Day. Easily add cross-referenced events.
- 📝 **Tasks & Notes:** Stay on top of your to-dos with dedicated Kanban boards and rich-text note-taking environments.
- 🔒 **Secure Authentication:** Full JWT-based Login and Signup flow backed by a MongoDB/Express server.
- ⚙️ **Comprehensive Settings:** Manage your account, billing, security, and notification preferences from a unified interface.

---

## 🛠️ Technology Stack

LinkLy is built using a modern, scalable MERN stack:

**Frontend:**
- [React.js](https://reactjs.org/) (Vite)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) (Iconography)
- [React Router DOM](https://reactrouter.com/)

**Backend:**
- [Node.js](https://nodejs.org/) & [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) (Mongoose)
- JWT (JSON Web Tokens) for Authentication
- Bcrypt.js for secure password hashing

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher)
- [MongoDB](https://www.mongodb.com/) (Local instance or Atlas Cluster)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jaydipvaliya/linkLy.git
   cd linkLy
   ```

2. **Setup the Backend**
   ```bash
   cd backend
   npm install
   ```
   Create a `.env` file in the `backend/` directory:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```
   Start the backend server:
   ```bash
   npm run dev
   ```

3. **Setup the Frontend**
   Open a new terminal window and navigate to the frontend:
   ```bash
   cd frontend
   npm install
   ```
   Start the frontend development server:
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the application running.

---

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
