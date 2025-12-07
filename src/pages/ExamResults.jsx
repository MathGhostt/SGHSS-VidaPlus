import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileText, Download, Eye, Calendar, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ExamResults() {
  const exams = [
    {
      id: 1,
      name: 'Hemograma Completo',
      date: '10/10/2025',
      laboratory: 'Laboratório VidaPlus - Unidade Centro',
      status: 'Disponível',
      type: 'Sangue',
      doctor: 'Dr. João Silva'
    },
    {
      id: 2,
      name: 'Raio-X de Tórax',
      date: '05/10/2025',
      laboratory: 'Centro de Imagem VidaPlus',
      status: 'Disponível',
      type: 'Imagem',
      doctor: 'Dra. Maria Santos'
    },
    {
      id: 3,
      name: 'Glicemia de Jejum',
      date: '28/09/2025',
      laboratory: 'Laboratório VidaPlus - Unidade Norte',
      status: 'Disponível',
      type: 'Sangue',
      doctor: 'Dr. Pedro Oliveira'
    },
    {
      id: 4,
      name: 'Ultrassonografia Abdominal',
      date: '15/09/2025',
      laboratory: 'Centro de Imagem VidaPlus',
      status: 'Disponível',
      type: 'Imagem',
      doctor: 'Dr. João Silva'
    }
  ]

  const getTypeColor = (type) => {
    switch (type) {
      case 'Sangue':
        return 'bg-red-100 text-red-700'
      case 'Imagem':
        return 'bg-blue-100 text-blue-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/patient/medical-history" className="text-gray-600 hover:text-gray-900">
            ← Voltar
          </Link>
          <h1 className="font-semibold text-gray-900">Resultados de Exames</h1>
          <div className="w-16"></div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-4 space-y-4">
        {/* Summary Card */}
        <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-2">Seus Exames</h3>
            <p className="text-blue-100 text-sm">
              Você tem {exams.length} resultados de exames disponíveis para visualização
            </p>
          </CardContent>
        </Card>

        {/* Exam List */}
        <div className="space-y-3">
          {exams.map((exam) => (
            <Card key={exam.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start space-x-3 flex-1">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">{exam.name}</h3>
                      <div className="flex items-center space-x-2 text-xs text-gray-600 mb-2">
                        <Calendar className="w-3 h-3" />
                        <span>{exam.date}</span>
                        <span className={`px-2 py-0.5 rounded-full ${getTypeColor(exam.type)}`}>
                          {exam.type}
                        </span>
                      </div>
                      <div className="flex items-start space-x-1 text-xs text-gray-600 mb-2">
                        <MapPin className="w-3 h-3 mt-0.5 flex-shrink-0" />
                        <span>{exam.laboratory}</span>
                      </div>
                      <p className="text-xs text-gray-600">
                        Solicitado por: <span className="font-semibold">{exam.doctor}</span>
                      </p>
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                    {exam.status}
                  </span>
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
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-4">
            <h3 className="font-semibold text-blue-900 mb-2">Informação Importante</h3>
            <p className="text-sm text-blue-800">
              Os resultados de exames ficam disponíveis por 90 dias. Faça o download para manter uma cópia permanente.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

