# LinkLy 🚀

## Important Links

* **Figma Link:** [View Design](https://www.figma.com/design/e5HhR7TYnWsvpKJBo1MKde/Untitled?node-id=9-2&t=w1wdrqYahbsPpSn5-1)
* **Live Deployed Project Link:** [LinkLy Dashboard](https://link-ly-dusky.vercel.app/)
* **Postman Documentation Link:** [Add Postman Link Here](#)
* **Backend Deployed Link:** [Add Backend Link Here](#)
* **YouTube Demo Link:** [Add YouTube Link Here](#)

---

## Problem Statement

Small businesses and freelancers often struggle to manage their customer relationships, tasks, and communications effectively. Enterprise-level CRM solutions are usually too complex, expensive, and bloated with unnecessary features, leading to a steep learning curve and inefficient workflows for smaller teams. There is a need for a lightweight, intuitive, and modern CRM platform that focuses on core functionalities without compromising on design and performance.

---

## Solution

LinkLy provides a streamlined, AI-powered CRM platform designed specifically for maximum efficiency and simplicity. By cutting out enterprise bloat, LinkLy offers an intuitive, blazing-fast interface where users can seamlessly manage contacts, track tasks, view analytics, and organize their calendar. It brings essential CRM features into one unified, beautifully designed dashboard.

---

## Features

- 📊 **Analytics Dashboard:** Visualize your active projects, revenue, and top companies with beautiful interactive charts.
- 👥 **Contact Management:** Organize your network with Grid, Kanban, and List views. Add customized details and sort by categories.
- 📧 **Built-in Email Client:** A fully functional mock email interface with rich-text replying and categorizations.
- 📅 **Calendar & Scheduling:** View your schedule by Month, Week, or Day. Easily add cross-referenced events.
- 📝 **Tasks & Notes:** Stay on top of your to-dos with dedicated Kanban boards and rich-text note-taking environments.
- 🔒 **Secure Authentication:** Full JWT-based Login and Signup flow backed by a MongoDB/Express server.
- ⚙️ **Comprehensive Settings:** Manage your account, billing, security, and notification preferences from a unified interface.

---

## Tech Stack

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

## Proper Folder Structure

```text
linkLy/
├── backend/
│   ├── config/          # Database configuration
│   ├── controllers/     # Route logic
│   ├── middlewares/     # Custom middlewares (auth, errors)
│   ├── models/          # Mongoose database schemas
│   ├── routes/          # Express routing
│   ├── .env             # Environment variables
│   ├── index.js         # Entry point for the backend server
│   └── package.json     # Backend dependencies
├── frontend/
│   ├── public/          # Static assets
│   ├── src/
│   │   ├── assets/      # Images, icons, and fonts
│   │   ├── components/  # Reusable React components
│   │   ├── context/     # React Context API for state management
│   │   ├── pages/       # Application route pages
│   │   ├── App.jsx      # Main application component
│   │   ├── index.css    # Global Tailwind styles
│   │   └── main.jsx     # Frontend entry point
│   ├── index.html       # HTML template
│   ├── tailwind.config.js # Tailwind CSS configuration
│   ├── vite.config.js   # Vite configuration
│   └── package.json     # Frontend dependencies
├── .gitignore
└── README.md
```

---

## Project Screenshots/Images

Here is a glimpse of the LinkLy platform in action:

<div align="center">
  <img src="frontend/public/screenshots/landing-page.png" alt="LinkLy Landing Page" width="800" />
  <p><i>The LinkLy Landing Page.</i></p>
</div>

<br />

<div align="center">
  <img src="frontend/public/screenshots/dashboard.png" alt="LinkLy Dashboard" width="800" />
  <p><i>The Analytics Dashboard providing a high-level overview of revenue and metrics.</i></p>
</div>

<br />

<div align="center">
  <img src="frontend/public/screenshots/about-page.png" alt="LinkLy About Page" width="800" />
  <p><i>The About Page and Team Overview.</i></p>
</div>

*(Note: Please save the screenshots you provided into the `frontend/public/screenshots/` folder with the names `landing-page.png`, `dashboard.png`, and `about-page.png` respectively so they show up on GitHub!)*
