import { useState } from 'react'
import PatientNav from '../components/PatientNav'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Calendar } from '@/components/ui/calendar'
import { Stethoscope, MapPin, Clock, CheckCircle } from 'lucide-react'

export default function AppointmentBooking() {
  const [step, setStep] = useState(1)
  const [selectedSpecialty, setSelectedSpecialty] = useState('')
  const [selectedDoctor, setSelectedDoctor] = useState('')
  const [selectedUnit, setSelectedUnit] = useState('')
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedTime, setSelectedTime] = useState('')

  const specialties = [
    'Cardiologia',
    'Dermatologia',
    'Pediatria',
    'Ortopedia',
    'Ginecologia',
    'Oftalmologia'
  ]

  const doctors = {
    'Cardiologia': ['Dr. João Silva', 'Dra. Ana Costa'],
    'Dermatologia': ['Dra. Maria Santos', 'Dr. Pedro Oliveira'],
    'Pediatria': ['Dra. Lucia Ferreira', 'Dr. Carlos Mendes']
  }

  const units = [
    'Hospital VidaPlus - Unidade Centro',
    'Clínica VidaPlus - Unidade Norte',
    'Clínica VidaPlus - Unidade Sul'
  ]

  const availableTimes = [
    '08:00', '09:00', '10:00', '11:00',
    '14:00', '15:00', '16:00', '17:00'
  ]

  const handleConfirm = () => {
    setStep(4)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <PatientNav />
      
      <div className="max-w-3xl mx-auto p-4 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Agendar Consulta</h1>
          <p className="text-gray-600 mt-1">Escolha a especialidade, médico e horário</p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-between mb-8">
          {[1, 2, 3].map((num) => (
            <div key={num} className="flex items-center flex-1">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step >= num ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                {num}
              </div>
              {num < 3 && (
                <div className={`flex-1 h-1 mx-2 ${
                  step > num ? 'bg-blue-600' : 'bg-gray-200'
                }`}></div>
              )}
            </div>
          ))}
        </div>

        {/* Step 1: Especialidade e Médico */}
        {step === 1 && (
          <Card>
            <CardHeader>
              <CardTitle>Selecione a Especialidade e o Médico</CardTitle>
              <CardDescription>Escolha a área médica e o profissional</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Especialidade</Label>
                <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma especialidade" />
                  </SelectTrigger>
                  <SelectContent>
                    {specialties.map((specialty) => (
                      <SelectItem key={specialty} value={specialty}>
                        {specialty}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {selectedSpecialty && (
                <div className="space-y-2">
                  <Label>Médico</Label>
                  <Select value={selectedDoctor} onValueChange={setSelectedDoctor}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione um médico" />
                    </SelectTrigger>
                    <SelectContent>
                      {(doctors[selectedSpecialty] || []).map((doctor) => (
                        <SelectItem key={doctor} value={doctor}>
                          {doctor}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div className="space-y-2">
                <Label>Unidade</Label>
                <Select value={selectedUnit} onValueChange={setSelectedUnit}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma unidade" />
                  </SelectTrigger>
                  <SelectContent>
                    {units.map((unit) => (
                      <SelectItem key={unit} value={unit}>
                        {unit}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button 
                onClick={() => setStep(2)} 
                className="w-full"
                disabled={!selectedSpecialty || !selectedDoctor || !selectedUnit}
              >
                Próximo
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Data */}
        {step === 2 && (
          <Card>
            <CardHeader>
              <CardTitle>Selecione a Data</CardTitle>
              <CardDescription>Escolha o dia da consulta</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-center">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border"
                  disabled={(date) => date < new Date()}
                />
              </div>
              <div className="flex space-x-2">
                <Button onClick={() => setStep(1)} variant="outline" className="flex-1">
                  Voltar
                </Button>
                <Button onClick={() => setStep(3)} className="flex-1">
                  Próximo
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Horário */}
        {step === 3 && (
          <Card>
            <CardHeader>
              <CardTitle>Selecione o Horário</CardTitle>
              <CardDescription>Escolha um horário disponível</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-4 gap-2">
                {availableTimes.map((time) => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? 'default' : 'outline'}
                    onClick={() => setSelectedTime(time)}
                    className="w-full"
                  >
                    {time}
                  </Button>
                ))}
              </div>
              <div className="flex space-x-2">
                <Button onClick={() => setStep(2)} variant="outline" className="flex-1">
                  Voltar
                </Button>
                <Button 
                  onClick={handleConfirm} 
                  className="flex-1"
                  disabled={!selectedTime}
                >
                  Confirmar
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 4: Confirmação */}
        {step === 4 && (
          <Card className="border-green-200 bg-green-50">
            <CardContent className="p-6 text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-green-900">Consulta Agendada!</h2>
                <p className="text-green-700 mt-2">Sua consulta foi confirmada com sucesso</p>
              </div>
              <Card className="bg-white">
                <CardContent className="p-4 space-y-3 text-left">
                  <div className="flex items-center space-x-2">
                    <Stethoscope className="w-5 h-5 text-gray-600" />
                    <div>
                      <p className="text-sm text-gray-600">Médico</p>
                      <p className="font-semibold">{selectedDoctor}</p>
                      <p className="text-sm text-gray-600">{selectedSpecialty}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-gray-600" />
                    <div>
                      <p className="text-sm text-gray-600">Local</p>
                      <p className="font-semibold">{selectedUnit}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-gray-600" />
                    <div>
                      <p className="text-sm text-gray-600">Data e Hora</p>
                      <p className="font-semibold">
                        {selectedDate.toLocaleDateString('pt-BR')} às {selectedTime}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Button onClick={() => window.location.href = '/patient/dashboard'} className="w-full">
                Voltar ao Início
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

