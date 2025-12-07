import PatientNav from '../components/PatientNav'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Calendar, Clock, MapPin, X, CheckCircle, AlertCircle } from 'lucide-react'

export default function MyAppointments() {
  const upcomingAppointments = [
    {
      id: 1,
      doctor: 'Dr. João Silva',
      specialty: 'Cardiologia',
      date: '15/10/2025',
      time: '14:30',
      location: 'Hospital VidaPlus - Unidade Centro',
      status: 'confirmed'
    },
    {
      id: 2,
      doctor: 'Dra. Maria Santos',
      specialty: 'Dermatologia',
      date: '20/10/2025',
      time: '10:00',
      location: 'Clínica VidaPlus - Unidade Norte',
      status: 'confirmed'
    }
  ]

  const pastAppointments = [
    {
      id: 3,
      doctor: 'Dra. Ana Costa',
      specialty: 'Clínica Geral',
      date: '05/10/2025',
      time: '09:00',
      location: 'Hospital VidaPlus - Unidade Centro',
      status: 'completed'
    },
    {
      id: 4,
      doctor: 'Dr. Pedro Oliveira',
      specialty: 'Ortopedia',
      date: '28/09/2025',
      time: '15:30',
      location: 'Clínica VidaPlus - Unidade Sul',
      status: 'completed'
    }
  ]

  const cancelledAppointments = [
    {
      id: 5,
      doctor: 'Dr. Carlos Mendes',
      specialty: 'Pediatria',
      date: '12/09/2025',
      time: '11:00',
      location: 'Clínica VidaPlus - Unidade Norte',
      status: 'cancelled'
    }
  ]

  const AppointmentCard = ({ appointment, showActions = false }) => (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-1">
              <h3 className="font-semibold text-gray-900">{appointment.doctor}</h3>
              {appointment.status === 'confirmed' && (
                <CheckCircle className="w-4 h-4 text-green-500" />
              )}
              {appointment.status === 'cancelled' && (
                <AlertCircle className="w-4 h-4 text-red-500" />
              )}
            </div>
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
          {showActions && (
            <div className="flex flex-col space-y-2">
              <Button size="sm" variant="outline">Detalhes</Button>
              <Button size="sm" variant="destructive">
                <X className="w-4 h-4 mr-1" />
                Cancelar
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <PatientNav />
      
      <div className="max-w-3xl mx-auto p-4 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Minhas Consultas</h1>
          <p className="text-gray-600 mt-1">Gerencie seus agendamentos</p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="upcoming">Próximas</TabsTrigger>
            <TabsTrigger value="past">Realizadas</TabsTrigger>
            <TabsTrigger value="cancelled">Canceladas</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-3 mt-4">
            {upcomingAppointments.length > 0 ? (
              upcomingAppointments.map((appointment) => (
                <AppointmentCard key={appointment.id} appointment={appointment} showActions={true} />
              ))
            ) : (
              <Card>
                <CardContent className="p-8 text-center">
                  <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-600">Nenhuma consulta agendada</p>
                  <Button className="mt-4" onClick={() => window.location.href = '/patient/appointment'}>
                    Agendar Consulta
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="past" className="space-y-3 mt-4">
            {pastAppointments.length > 0 ? (
              pastAppointments.map((appointment) => (
                <AppointmentCard key={appointment.id} appointment={appointment} />
              ))
            ) : (
              <Card>
                <CardContent className="p-8 text-center">
                  <CheckCircle className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-600">Nenhuma consulta realizada</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="cancelled" className="space-y-3 mt-4">
            {cancelledAppointments.length > 0 ? (
              cancelledAppointments.map((appointment) => (
                <AppointmentCard key={appointment.id} appointment={appointment} />
              ))
            ) : (
              <Card>
                <CardContent className="p-8 text-center">
                  <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-600">Nenhuma consulta cancelada</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

