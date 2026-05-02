import { Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import DashboardPage from './pages/DashboardPage'
import NotificationsPage from './pages/NotificationsPage'
import NotesPage from './pages/NotesPage'
import TasksPage from './pages/TasksPage'
import EmailsPage from './pages/EmailsPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/notifications" element={<NotificationsPage />} />
      <Route path="/notes" element={<NotesPage />} />
      <Route path="/tasks" element={<TasksPage />} />
      <Route path="/emails" element={<EmailsPage />} />
    </Routes>
  )
}

export default App
