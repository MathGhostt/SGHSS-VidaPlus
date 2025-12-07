import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Pill, Download, Eye, Calendar, User } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Prescriptions() {
  const prescriptions = [
    {
      id: 1,
      date: '10/10/2025',
      doctor: 'Dr. João Silva',
      specialty: 'Cardiologia',
      medications: [
        { name: 'Losartana 50mg', dosage: '1 comprimido pela manhã', duration: '30 dias' },
        { name: 'Atenolol 25mg', dosage: '1 comprimido à noite', duration: '30 dias' }
      ],
      status: 'Ativa'
    },
    {
      id: 2,
      date: '05/10/2025',
      doctor: 'Dra. Maria Santos',
      specialty: 'Dermatologia',
      medications: [
        { name: 'Cetoconazol Creme 2%', dosage: 'Aplicar 2x ao dia', duration: '14 dias' }
      ],
      status: 'Ativa'
    },
    {
      id: 3,
      date: '20/09/2025',
      doctor: 'Dr. Pedro Oliveira',
      specialty: 'Ortopedia',
      medications: [
        { name: 'Ibuprofeno 600mg', dosage: '1 comprimido a cada 8h', duration: '7 dias' },
        { name: 'Omeprazol 20mg', dosage: '1 cápsula em jejum', duration: '7 dias' }
      ],
      status: 'Expirada'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/patient/medical-history" className="text-gray-600 hover:text-gray-900">
            ← Voltar
          </Link>
          <h1 className="font-semibold text-gray-900">Receitas Médicas</h1>
          <div className="w-16"></div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-4 space-y-4">
        {/* Summary Card */}
        <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-2">Suas Receitas</h3>
            <p className="text-purple-100 text-sm">
              {prescriptions.filter(p => p.status === 'Ativa').length} receitas ativas disponíveis
            </p>
          </CardContent>
        </Card>

        {/* Prescription List */}
        <div className="space-y-3">
          {prescriptions.map((prescription) => (
            <Card key={prescription.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start space-x-3 flex-1">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Pill className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 text-xs text-gray-600 mb-2">
                        <Calendar className="w-3 h-3" />
                        <span>{prescription.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm mb-3">
                        <User className="w-4 h-4 text-gray-600" />
                        <div>
                          <p className="font-semibold text-gray-900">{prescription.doctor}</p>
                          <p className="text-xs text-gray-600">{prescription.specialty}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    prescription.status === 'Ativa' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    {prescription.status}
                  </span>
                </div>

                {/* Medications */}
                <div className="bg-gray-50 rounded-lg p-3 mb-3">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Medicamentos:</h4>
                  <div className="space-y-2">
                    {prescription.medications.map((med, index) => (
                      <div key={index} className="border-l-2 border-purple-400 pl-3">
                        <p className="font-semibold text-sm text-gray-900">{med.name}</p>
                        <p className="text-xs text-gray-600">{med.dosage}</p>
                        <p className="text-xs text-gray-500">Duração: {med.duration}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button size="sm" className="flex-1" variant="outline">
                    <Eye className="w-4 h-4 mr-2" />
                    Visualizar
                  </Button>
                  <Button size="sm" className="flex-1">
                    <Download className="w-4 h-4 mr-2" />
                    Baixar PDF
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info Card */}
        <Card className="bg-amber-50 border-amber-200">
          <CardContent className="p-4">
            <h3 className="font-semibold text-amber-900 mb-2">Atenção</h3>
            <p className="text-sm text-amber-800">
              Sempre siga as orientações do seu médico. Não interrompa o tratamento sem orientação profissional.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

