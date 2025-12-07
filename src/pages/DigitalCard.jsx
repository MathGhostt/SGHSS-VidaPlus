import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { QrCode, Download, Share2, Activity } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function DigitalCard() {
  const patientData = {
    name: 'Matheus França Bulcão de Souza',
    cardNumber: '1234 5678 9012 3456',
    plan: 'VidaPlus Premium',
    validity: '12/2025',
    cpf: '123.456.789-00',
    birthDate: '24/01/2005'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/patient/dashboard" className="text-gray-600 hover:text-gray-900">
            ← Voltar
          </Link>
          <h1 className="font-semibold text-gray-900">Carteirinha Digital</h1>
          <div className="w-16"></div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-4 space-y-6">
        {/* Digital Card */}
        <div className="relative">
          <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-2xl p-6 text-white shadow-2xl">
            {/* Logo */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <Activity className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-bold text-lg">VidaPlus</p>
                  <p className="text-xs text-blue-100">Saúde & Bem-estar</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-blue-100">Plano</p>
                <p className="font-semibold">{patientData.plan}</p>
              </div>
            </div>

            {/* Card Number */}
            <div className="mb-6">
              <p className="text-xs text-blue-100 mb-1">Número da Carteirinha</p>
              <p className="text-2xl font-bold tracking-wider">{patientData.cardNumber}</p>
            </div>

            {/* Patient Info */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-xs text-blue-100 mb-1">Titular</p>
                <p className="font-semibold text-sm">{patientData.name}</p>
              </div>
              <div>
                <p className="text-xs text-blue-100 mb-1">Validade</p>
                <p className="font-semibold text-sm">{patientData.validity}</p>
              </div>
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <p className="text-blue-100">CPF</p>
                <p className="font-semibold">{patientData.cpf}</p>
              </div>
              <div>
                <p className="text-blue-100">Data de Nascimento</p>
                <p className="font-semibold">{patientData.birthDate}</p>
              </div>
            </div>

            {/* Decorative Pattern */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-5 rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-5 rounded-full -ml-16 -mb-16"></div>
          </div>

          {/* QR Code Section */}
          <div className="bg-white rounded-2xl p-6 -mt-10 mx-4 shadow-lg">
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <QrCode className="w-40 h-40 text-gray-400" />
              </div>
              <p className="text-sm text-gray-600 text-center">
                Apresente este QR Code no atendimento
              </p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Button className="h-14 flex flex-col items-center justify-center space-y-1" variant="outline">
            <Download className="w-5 h-5" />
            <span className="text-xs">Baixar PDF</span>
          </Button>
          <Button className="h-14 flex flex-col items-center justify-center space-y-1" variant="outline">
            <Share2 className="w-5 h-5" />
            <span className="text-xs">Compartilhar</span>
          </Button>
        </div>

        {/* Info Card */}
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold text-gray-900 mb-3">Informações do Plano</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Cobertura:</span>
                <span className="font-semibold text-gray-900">Nacional</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tipo:</span>
                <span className="font-semibold text-gray-900">Individual</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Acomodação:</span>
                <span className="font-semibold text-gray-900">Apartamento</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Carência:</span>
                <span className="font-semibold text-green-600">Cumprida</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Contact */}
        <Card className="bg-red-50 border-red-200">
          <CardContent className="p-4">
            <h3 className="font-semibold text-red-900 mb-2">Atendimento de Emergência</h3>
            <p className="text-sm text-red-800 mb-3">
              Em caso de urgência ou emergência, ligue para:
            </p>
            <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
              0800 123 4567
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

