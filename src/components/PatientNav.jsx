import { Link, useLocation } from 'react-router-dom'
import { Home, Calendar, ClipboardList, FileText, Video, Bell, User, LogOut } from 'lucide-react'

export default function PatientNav() {
  const location = useLocation()

  const navItems = [
    { path: '/patient/dashboard', icon: Home, label: 'Início' },
    { path: '/patient/appointment', icon: Calendar, label: 'Agendar' },
    { path: '/patient/my-appointments', icon: ClipboardList, label: 'Consultas' },
    { path: '/patient/medical-history', icon: FileText, label: 'Histórico' },
    { path: '/patient/telemedicine', icon: Video, label: 'Telemedicina' },
  ]

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">VP</span>
          </div>
          <span className="font-semibold text-gray-900">VidaPlus</span>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-gray-100 rounded-full relative">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <Link to="/patient/profile" className="p-2 hover:bg-gray-100 rounded-full">
            <User className="w-5 h-5 text-gray-600" />
          </Link>
        </div>
      </div>

      {/* Bottom Navigation (Mobile) */}
      <div className="md:hidden flex justify-around border-t border-gray-200">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = location.pathname === item.path
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center py-2 px-3 ${
                isActive ? 'text-blue-600' : 'text-gray-600'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          )
        })}
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-center space-x-1 px-4 pb-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = location.pathname === item.path
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                isActive
                  ? 'bg-blue-100 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

