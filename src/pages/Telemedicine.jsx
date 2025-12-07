import PatientNav from '../components/PatientNav'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Video, Clock, Calendar, CheckCircle, Info } from 'lucide-react'

export default function Telemedicine() {
  const availableSlots = [
    { time: '14:00', available: true },
    { time: '14:30', available: true },
    { time: '15:00', available: false },
    { time: '15:30', available: true },
    { time: '16:00', available: true },
    { time: '16:30', available: false },
  ]

  const upcomingTeleconsultations = [
    {
      id: 1,
      doctor: 'Dr. Roberto Lima',
      specialty: 'Clínica Geral',
      date: '12/10/2025',
      time: '15:00',
      status: 'scheduled'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <PatientNav />
      
      <div className="max-w-3xl mx-auto p-4 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Telemedicina</h1>
          <p className="text-gray-600 mt-1">Consultas médicas online</p>
        </div>

        {/* Info Card */}
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-4">
            <div className="flex items-start space-x-3">
              <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-blue-900">
                <p className="font-semibold mb-1">Como funciona a Teleconsulta?</p>
                <p>
                  Agende um horário disponível e receba o link da videochamada por e-mail. 
                  No horário marcado, clique no link para iniciar a consulta com o médico.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Próximas Teleconsultas */}
        {upcomingTeleconsultations.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Próximas Teleconsultas</h2>
            {upcomingTeleconsultations.map((consultation) => (
              <Card key={consultation.id} className="mb-3">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Video className="w-5 h-5 text-purple-600" />
                        <span className="font-semibold text-gray-900">Teleconsulta Agendada</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">
                        <strong>Médico:</strong> {consultation.doctor}
                      </p>
                      <p className="text-sm text-gray-600 mb-1">
                        <strong>Especialidade:</strong> {consultation.specialty}
                      </p>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{consultation.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{consultation.time}</span>
                        </div>
                      </div>
                    </div>
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                      <Video className="w-4 h-4 mr-1" />
                      Entrar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Agendar Nova Teleconsulta */}
        <Card>
          <CardHeader>
            <CardTitle>Agendar Nova Teleconsulta</CardTitle>
            <CardDescription>Escolha um horário disponível hoje</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-3 gap-2">
              {availableSlots.map((slot) => (
                <Button
                  key={slot.time}
                  variant={slot.available ? 'outline' : 'ghost'}
                  disabled={!slot.available}
                  className="w-full"
                >
                  {slot.time}
                </Button>
              ))}
            </div>
            <p className="text-sm text-gray-600 text-center">
              Horários disponíveis para atendimento com clínico geral
            </p>
          </CardContent>
        </Card>

        {/* Especialidades Disponíveis */}
        <Card>
          <CardHeader>
            <CardTitle>Especialidades Disponíveis</CardTitle>
            <CardDescription>Consultas online por especialidade</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {[
              'Clínica Geral',
              'Pediatria',
              'Dermatologia',
              'Psicologia',
              'Nutrição'
            ].map((specialty) => (
              <div key={specialty} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium text-gray-900">{specialty}</span>
                </div>
                <Button size="sm" variant="outline">Agendar</Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Benefícios */}
        <Card className="bg-gradient-to-r from-purple-50 to-blue-50">
          <CardHeader>
            <CardTitle>Benefícios da Teleconsulta</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-start space-x-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-gray-700">Atendimento rápido sem sair de casa</p>
            </div>
            <div className="flex items-start space-x-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-gray-700">Disponível 24h para urgências</p>
            </div>
            <div className="flex items-start space-x-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-gray-700">Receitas e atestados digitais</p>
            </div>
            <div className="flex items-start space-x-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-gray-700">Economia de tempo e deslocamento</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

