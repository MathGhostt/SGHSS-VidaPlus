import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, Users, Clock, FileText, Activity, LogOut } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function DoctorDashboard() {
  const todayAppointments = [
    {
      id: 1,
      patient: 'João Silva',
      time: '09:00',
      type: 'Consulta de Rotina',
      status: 'waiting'
    },
    {
      id: 2,
      patient: 'Matheus França',
      time: '10:30',
      type: 'Retorno',
      status: 'confirmed'
    },
    {
      id: 3,
      patient: 'Pedro Oliveira',
      time: '14:00',
      type: 'Primeira Consulta',
      status: 'confirmed'
    }
  ]

  const stats = [
    { label: 'Consultas Hoje', value: '3', icon: Calendar, color: 'bg-blue-500' },
    { label: 'Pacientes Ativos', value: '124', icon: Users, color: 'bg-green-500' },
    { label: 'Aguardando', value: '2', icon: Clock, color: 'bg-orange-500' },
    { label: 'Prontuários', value: '45', icon: FileText, color: 'bg-purple-500' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="font-semibold text-gray-900">Dr. João Silva</h1>
              <p className="text-xs text-gray-600">Cardiologia</p>
            </div>
          </div>
          <Link to="/" className="p-2 hover:bg-gray-100 rounded-full">
            <LogOut className="w-5 h-5 text-gray-600" />
          </Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-4 space-y-6">
        {/* Welcome */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-6 text-white">
          <h2 className="text-2xl font-bold mb-2">Bem-vindo, Dr. João!</h2>
          <p className="text-blue-100">Você tem 3 consultas agendadas para hoje</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <Card key={stat.label}>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className={`${stat.color} w-10 h-10 rounded-full flex items-center justify-center`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <p className="text-xs text-gray-600">{stat.label}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Today's Appointments */}
        <Card>
          <CardHeader>
            <CardTitle>Consultas de Hoje</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {todayAppointments.map((appointment) => (
              <div key={appointment.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                <div className="flex items-center space-x-3">
                  <div className="flex flex-col items-center">
                    <Clock className="w-5 h-5 text-gray-600 mb-1" />
                    <span className="text-sm font-semibold text-gray-900">{appointment.time}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{appointment.patient}</p>
                    <p className="text-sm text-gray-600">{appointment.type}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {appointment.status === 'waiting' && (
                    <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full">
                      Aguardando
                    </span>
                  )}
                  {appointment.status === 'confirmed' && (
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                      Confirmado
                    </span>
                  )}
                  <Button size="sm">Atender</Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Button className="h-20 flex flex-col items-center justify-center space-y-2">
            <Calendar className="w-6 h-6" />
            <span>Agenda</span>
          </Button>
          <Button className="h-20 flex flex-col items-center justify-center space-y-2" variant="outline">
            <Users className="w-6 h-6" />
            <span>Pacientes</span>
          </Button>
          <Button className="h-20 flex flex-col items-center justify-center space-y-2" variant="outline">
            <FileText className="w-6 h-6" />
            <span>Prontuários</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

