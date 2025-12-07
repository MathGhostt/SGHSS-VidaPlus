import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { FileText, Download, Calendar, Pill, Activity, Syringe, ArrowRight } from 'lucide-react'
import PatientNav from '@/components/PatientNav'
import { Link } from 'react-router-dom'

export default function MedicalHistory() {
  const medicalRecords = [
    {
      id: 1,
      date: '05/10/2025',
      doctor: 'Dra. Ana Costa',
      specialty: 'Clínica Geral',
      diagnosis: 'Consulta de rotina - Paciente saudável',
      type: 'Consulta'
    },
    {
      id: 2,
      date: '28/09/2025',
      doctor: 'Dr. Pedro Oliveira',
      specialty: 'Ortopedia',
      diagnosis: 'Dor lombar - Recomendado fisioterapia',
      type: 'Consulta'
    }
  ]

  const exams = [
    {
      id: 1,
      name: 'Hemograma Completo',
      date: '30/09/2025',
      status: 'Disponível',
      result: 'Normal'
    },
    {
      id: 2,
      name: 'Raio-X Coluna Lombar',
      date: '28/09/2025',
      status: 'Disponível',
      result: 'Sem alterações significativas'
    }
  ]

  const prescriptions = [
    {
      id: 1,
      date: '28/09/2025',
      doctor: 'Dr. Pedro Oliveira',
      medications: [
        { name: 'Ibuprofeno 600mg', dosage: '1 comprimido a cada 8 horas', duration: '7 dias' },
        { name: 'Relaxante Muscular', dosage: '1 comprimido antes de dormir', duration: '5 dias' }
      ]
    }
  ]

  const vaccines = [
    {
      id: 1,
      name: 'Influenza (Gripe)',
      date: '15/03/2025',
      nextDose: 'Anual - Março 2026'
    },
    {
      id: 2,
      name: 'COVID-19 (Dose de Reforço)',
      date: '10/01/2021',
      nextDose: 'Conforme orientação médica'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <PatientNav />
      
      <div className="max-w-3xl mx-auto p-4 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Histórico Médico</h1>
          <p className="text-gray-600 mt-1">Acesse seus prontuários e documentos</p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="prontuarios" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="prontuarios">Prontuários</TabsTrigger>
            <TabsTrigger value="exames">Exames</TabsTrigger>
            <TabsTrigger value="receitas">Receitas</TabsTrigger>
            <TabsTrigger value="vacinas">Vacinas</TabsTrigger>
          </TabsList>

          {/* Prontuários */}
          <TabsContent value="prontuarios" className="space-y-4">
            {medicalRecords.map((record) => (
              <Card key={record.id}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <FileText className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{record.type}</p>
                        <p className="text-sm text-gray-600">Data: {record.date}</p>
                        <p className="text-sm text-gray-600">Médico: {record.doctor} - {record.specialty}</p>
                        <p className="text-sm text-gray-900 mt-2">Diagnóstico: {record.diagnosis}</p>
                      </div>
                    </div>
                    <Button size="sm" variant="ghost">
                      <Download className="w-4 h-4" />
                      PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Exames */}
          <TabsContent value="exames" className="space-y-4">
            <Link to="/patient/exam-results">
              <Card className="bg-blue-50 border-blue-200 hover:bg-blue-100 transition-colors cursor-pointer">
                <CardContent className="p-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-blue-900">Ver Todos os Exames</h3>
                    <p className="text-sm text-blue-700">Acesse a página completa de resultados</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-blue-600" />
                </CardContent>
              </Card>
            </Link>
            {exams.map((exam) => (
              <Card key={exam.id}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <Activity className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{exam.name}</p>
                        <p className="text-sm text-gray-600">Data: {exam.date}</p>
                        <p className="text-sm text-gray-900 mt-2">Resultado: {exam.result}</p>
                        <span className="inline-block mt-2 px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                          {exam.status}
                        </span>
                      </div>
                    </div>
                    <Button size="sm" variant="ghost">
                      <Download className="w-4 h-4" />
                      PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Receitas */}
          <TabsContent value="receitas" className="space-y-4">
            <Link to="/patient/prescriptions">
              <Card className="bg-purple-50 border-purple-200 hover:bg-purple-100 transition-colors cursor-pointer">
                <CardContent className="p-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-purple-900">Ver Todas as Receitas</h3>
                    <p className="text-sm text-purple-700">Acesse a página completa de receitas médicas</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-purple-600" />
                </CardContent>
              </Card>
            </Link>
            {prescriptions.map((prescription) => (
              <Card key={prescription.id}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <Pill className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Receita Médica</p>
                        <p className="text-sm text-gray-600">Data: {prescription.date}</p>
                        <p className="text-sm text-gray-600">Médico: {prescription.doctor}</p>
                      </div>
                    </div>
                    <Button size="sm" variant="ghost">
                      <Download className="w-4 h-4" />
                      PDF
                    </Button>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-sm font-semibold text-gray-900 mb-2">Medicamentos:</p>
                    {prescription.medications.map((med, index) => (
                      <div key={index} className="mb-2 last:mb-0">
                        <p className="text-sm font-semibold text-gray-900">{med.name}</p>
                        <p className="text-xs text-gray-600">{med.dosage} - {med.duration}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Vacinas */}
          <TabsContent value="vacinas" className="space-y-4">
            {vaccines.map((vaccine) => (
              <Card key={vaccine.id}>
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <Syringe className="w-5 h-5 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">{vaccine.name}</p>
                      <p className="text-sm text-gray-600">Aplicada em: {vaccine.date}</p>
                      <p className="text-sm text-gray-600 mt-2">Próxima dose: {vaccine.nextDose}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

