import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// Páginas
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import PatientDashboard from './pages/PatientDashboard'
import AppointmentBooking from './pages/AppointmentBooking'
import MyAppointments from './pages/MyAppointments'
import MedicalHistory from './pages/MedicalHistory'
import Telemedicine from './pages/Telemedicine'
import DoctorDashboard from './pages/DoctorDashboard'
import AdminDashboard from './pages/AdminDashboard'
import DigitalCard from './pages/DigitalCard'
import ExamResults from './pages/ExamResults'
import Prescriptions from './pages/Prescriptions'
import PatientProfile from './pages/PatientProfile'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/patient/dashboard" element={<PatientDashboard />} />
          <Route path="/patient/appointment" element={<AppointmentBooking />} />
          <Route path="/patient/my-appointments" element={<MyAppointments />} />
          <Route path="/patient/medical-history" element={<MedicalHistory />} />
          <Route path="/patient/telemedicine" element={<Telemedicine />} />
          <Route path="/patient/digital-card" element={<DigitalCard />} />
          <Route path="/patient/exam-results" element={<ExamResults />} />
          <Route path="/patient/prescriptions" element={<Prescriptions />} />
          <Route path="/patient/profile" element={<PatientProfile />} />
          <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

