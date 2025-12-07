import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, FileText, Video, Activity, Clock, MapPin, CreditCard, Pill, TestTube } from 'lucide-react'
import { Link } from 'react-router-dom'
import PatientNav from '@/components/PatientNav'

export default function PatientDashboard() {
  const upcomingAppointments = [
    {
      id: 1,
      doctor: 'Dr. João Silva',
      specialty: 'Cardiologia',
      date: '15/10/2025',
      time: '14:30',
      location: 'Hospital VidaPlus - Unidade Centro'
    },
    {
      id: 2,
      doctor: 'Dra. Maria Santos',
      specialty: 'Dermatologia',
      date: '20/10/2025',
      time: '10:00',
      location: 'Clínica VidaPlus - Unidade Norte'
    }
  ]

  const quickActions = [
    {
      title: 'Agendar Consulta',
      description: 'Marque uma nova consulta',
      icon: Calendar,
      link: '/patient/appointment',
      color: 'bg-blue-500'
    },
    {
      title: 'Histórico Médico',
      description: 'Veja seus prontuários',
      icon: FileText,
      link: '/patient/medical-history',
      color: 'bg-green-500'
    },
    {
      title: 'Teleconsulta',
      description: 'Consulta online',
      icon: Video,
      link: '/patient/telemedicine',
      color: 'bg-purple-500'
    },
    {
      title: 'Carteirinha',
      description: 'Carteirinha digital',
      icon: CreditCard,
      link: '/patient/digital-card',
      color: 'bg-indigo-500'
    },
    {
      title: 'Exames',
      description: 'Resultados disponíveis',
      icon: TestTube,
      link: '/patient/exam-results',
      color: 'bg-orange-500'
    },
    {
      title: 'Receitas',
      description: 'Receitas médicas',
      icon: Pill,
      link: '/patient/prescriptions',
      color: 'bg-pink-500'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <PatientNav />
      
      <div className="max-w-7xl mx-auto p-4 space-y-6">
        {/* Boas-vindas */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-6 text-white">
          <h1 className="text-2xl font-bold mb-2">Olá, Matheus!</h1>
          <p className="text-blue-100">Bem-vindo ao seu painel de saúde</p>
        </div>

        {/* Ações Rápidas */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Ações Rápidas</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickActions.map((action) => {
              const Icon = action.icon
              return (
                <Link key={action.title} to={action.link}>
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                    <CardContent className="p-4 flex flex-col items-center text-center space-y-2">
                      <div className={`${action.color} w-12 h-12 rounded-full flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm">{action.title}</h3>
                        <p className="text-xs text-gray-600 mt-1">{action.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Próximas Consultas */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Próximas Consultas</h2>
            <Link to="/patient/my-appointments">
              <Button variant="ghost" size="sm">Ver todas</Button>
            </Link>
          </div>
          <div className="space-y-3">
            {upcomingAppointments.map((appointment) => (
              <Card key={appointment.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{appointment.doctor}</h3>
                      <p className="text-sm text-gray-600">{appointment.specialty}</p>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{appointment.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{appointment.time}</span>
                        </div>
                      </div>
                      <div className="flex items-start space-x-1 mt-2 text-sm text-gray-500">
                        <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>{appointment.location}</span>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">Detalhes</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Avisos e Notificações */}
        <Card className="bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-blue-900">Lembrete Importante</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-blue-800 text-sm">
              Não se esqueça de realizar seus exames de rotina. Agende agora e mantenha sua saúde em dia!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

