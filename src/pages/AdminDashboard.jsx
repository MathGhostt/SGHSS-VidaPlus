import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Users, Calendar, Building, Activity, TrendingUp, LogOut } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function AdminDashboard() {
  const stats = [
    { label: 'Total de Pacientes', value: '2,547', change: '+12%', icon: Users, color: 'bg-blue-500' },
    { label: 'Consultas Hoje', value: '156', change: '+8%', icon: Calendar, color: 'bg-green-500' },
    { label: 'Médicos Ativos', value: '42', change: '+3', icon: Activity, color: 'bg-purple-500' },
    { label: 'Unidades', value: '8', change: 'Estável', icon: Building, color: 'bg-orange-500' }
  ]

  const recentActivities = [
    { id: 1, action: 'Novo paciente cadastrado', user: 'Maria Silva', time: '5 min atrás' },
    { id: 2, action: 'Consulta agendada', user: 'Dr. João Santos', time: '12 min atrás' },
    { id: 3, action: 'Exame realizado', user: 'Matheus França', time: '25 min atrás' },
    { id: 4, action: 'Médico cadastrado', user: 'Admin', time: '1 hora atrás' }
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
              <h1 className="font-semibold text-gray-900">Painel Administrativo</h1>
              <p className="text-xs text-gray-600">SGHSS - VidaPlus</p>
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
          <h2 className="text-2xl font-bold mb-2">Dashboard Administrativo</h2>
          <p className="text-blue-100">Visão geral do sistema de gestão hospitalar</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <Card key={stat.label}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className={`${stat.color} w-10 h-10 rounded-full flex items-center justify-center`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex items-center space-x-1 text-green-600 text-sm">
                      <TrendingUp className="w-4 h-4" />
                      <span>{stat.change}</span>
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activities */}
          <Card>
            <CardHeader>
              <CardTitle>Atividades Recentes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3 p-3 border rounded-lg">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900">{activity.action}</p>
                    <p className="text-sm text-gray-600">{activity.user}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Ações Rápidas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" variant="outline">
                <Users className="w-5 h-5 mr-2" />
                Gerenciar Pacientes
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Activity className="w-5 h-5 mr-2" />
                Gerenciar Médicos
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Calendar className="w-5 h-5 mr-2" />
                Visualizar Agenda
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Building className="w-5 h-5 mr-2" />
                Gerenciar Unidades
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Charts Placeholder */}
        <Card>
          <CardHeader>
            <CardTitle>Estatísticas do Mês</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-gray-100 rounded-lg">
              <p className="text-gray-600">Gráfico de consultas e atendimentos</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

