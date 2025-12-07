import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { User, Mail, Phone, MapPin, Calendar, CreditCard, Edit, LogOut, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function PatientProfile() {
  const patientData = {
    name: 'Matheus França Bulcão de Souza',
    email: '4579453@alunouninter.com',
    phone: '(11) 98765-4321',
    cpf: '123.456.789-00',
    birthDate: '24/01/2005',
    address: 'Avenida Paulo Faccini, 123 - Apto 45',
    city: 'Guarulhos - SP',
    zipCode: '01234-567',
    plan: 'VidaPlus Premium',
    cardNumber: '1234 5678 9012 3456',
    memberSince: 'Janeiro de 2020'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/patient/dashboard" className="text-gray-600 hover:text-gray-900">
            ← Voltar
          </Link>
          <h1 className="font-semibold text-gray-900">Meu Perfil</h1>
          <Link to="/" className="p-2 hover:bg-gray-100 rounded-full">
            <LogOut className="w-5 h-5 text-gray-600" />
          </Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-4 space-y-4">
        {/* Profile Header */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mb-4">
                <User className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">{patientData.name}</h2>
              <p className="text-sm text-gray-600 mb-4">Membro desde {patientData.memberSince}</p>
              <Button className="w-full max-w-xs">
                <Edit className="w-4 h-4 mr-2" />
                Editar Perfil
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Personal Information */}
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
              <User className="w-5 h-5 mr-2 text-blue-600" />
              Informações Pessoais
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-gray-400 mt-0.5" />
                <div className="flex-1">
                  <p className="text-xs text-gray-600">E-mail</p>
                  <p className="font-semibold text-gray-900">{patientData.email}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-gray-400 mt-0.5" />
                <div className="flex-1">
                  <p className="text-xs text-gray-600">Telefone</p>
                  <p className="font-semibold text-gray-900">{patientData.phone}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Calendar className="w-5 h-5 text-gray-400 mt-0.5" />
                <div className="flex-1">
                  <p className="text-xs text-gray-600">Data de Nascimento</p>
                  <p className="font-semibold text-gray-900">{patientData.birthDate}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="w-5 h-5 text-gray-400 mt-0.5" />
                <div className="flex-1">
                  <p className="text-xs text-gray-600">CPF</p>
                  <p className="font-semibold text-gray-900">{patientData.cpf}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Address */}
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-blue-600" />
              Endereço
            </h3>
            <div className="space-y-2">
              <p className="text-sm text-gray-900">{patientData.address}</p>
              <p className="text-sm text-gray-900">{patientData.city}</p>
              <p className="text-sm text-gray-600">CEP: {patientData.zipCode}</p>
            </div>
          </CardContent>
        </Card>

        {/* Plan Information */}
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
              <CreditCard className="w-5 h-5 mr-2 text-blue-600" />
              Plano de Saúde
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-600">Plano</p>
                <p className="font-semibold text-gray-900">{patientData.plan}</p>
              </div>
              <div>
                <p className="text-xs text-gray-600">Número da Carteirinha</p>
                <p className="font-semibold text-gray-900">{patientData.cardNumber}</p>
              </div>
              <Link to="/patient/digital-card">
                <Button variant="outline" className="w-full">
                  Ver Carteirinha Digital
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Settings */}
        <Card>
          <CardContent className="p-4 space-y-2">
            <Button variant="ghost" className="w-full justify-start">
              Alterar Senha
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Notificações
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Privacidade e Segurança
            </Button>
            <Button variant="ghost" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
              Excluir Conta
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

