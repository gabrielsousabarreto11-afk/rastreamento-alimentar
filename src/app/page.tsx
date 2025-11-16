"use client"

import { useState } from 'react'
import { Check, Zap, Shield, TrendingUp, Users, Star, ArrowRight, Flame, Apple, BarChart3, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Header/Navbar */}
      <header className="bg-white/80 backdrop-blur-md border-b border-emerald-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-2 rounded-xl">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  NutriTrack
                </h1>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Link href="/app">
                <Button variant="ghost" className="hidden sm:inline-flex">
                  Entrar
                </Button>
              </Link>
              <Link href="/quiz">
                <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg">
                  Começar Agora
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4 bg-emerald-100 text-emerald-700 hover:bg-emerald-200">
              <Star className="w-3 h-3 mr-1" />
              Mais de 50.000 usuários transformaram sua saúde
            </Badge>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Transforme sua alimentação com{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                inteligência artificial
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Rastreie calorias, macronutrientes e alcance seus objetivos de saúde com o aplicativo mais completo e intuitivo do mercado.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quiz">
                <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-xl text-lg px-8 py-6">
                  Fazer Quiz Gratuito
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-2 border-emerald-500 text-emerald-700 hover:bg-emerald-50 text-lg px-8 py-6">
                Ver Demonstração
              </Button>
            </div>

            <p className="text-sm text-gray-500 mt-6">
              ✓ Sem cartão de crédito necessário • ✓ Cancele quando quiser
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Tudo que você precisa para ter sucesso
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ferramentas poderosas e intuitivas para transformar sua relação com a comida
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-emerald-200 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-4">
                  <Apple className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Banco de Alimentos</CardTitle>
                <CardDescription>
                  Mais de 100.000 alimentos cadastrados com informações nutricionais completas
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-emerald-200 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Análise Inteligente</CardTitle>
                <CardDescription>
                  Gráficos e relatórios detalhados sobre seu progresso e padrões alimentares
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-emerald-200 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-4">
                  <Flame className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Metas Personalizadas</CardTitle>
                <CardDescription>
                  Objetivos adaptados ao seu perfil, estilo de vida e metas de saúde
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-emerald-200 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Registro Rápido</CardTitle>
                <CardDescription>
                  Adicione refeições em segundos com busca inteligente e histórico
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Resultados reais de pessoas reais
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Silva",
                result: "Perdeu 15kg em 4 meses",
                quote: "O NutriTrack mudou completamente minha relação com a comida. Agora sei exatamente o que estou comendo!",
                avatar: "MS"
              },
              {
                name: "João Santos",
                result: "Ganhou 8kg de massa muscular",
                quote: "Finalmente consegui bater minhas metas de proteína todos os dias. O app é muito fácil de usar!",
                avatar: "JS"
              },
              {
                name: "Ana Costa",
                result: "Melhorou energia e disposição",
                quote: "Não sabia que estava comendo tão mal. Com o NutriTrack aprendi a me alimentar de verdade.",
                avatar: "AC"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-emerald-200 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-emerald-600 font-medium">{testimonial.result}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Escolha o plano ideal para você
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Todos os planos incluem 7 dias de teste grátis. Cancele quando quiser.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Plano Básico */}
            <Card className="border-2 border-gray-200 hover:shadow-xl transition-all">
              <CardHeader>
                <CardTitle className="text-2xl">Básico</CardTitle>
                <CardDescription>Para quem está começando</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">R$ 29</span>
                  <span className="text-gray-600">/mês</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {[
                    "Rastreamento de calorias",
                    "Banco de alimentos básico",
                    "Registro de refeições",
                    "Metas diárias",
                    "Suporte por email"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-emerald-600" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/quiz" className="block">
                  <Button className="w-full mt-6 bg-gray-900 hover:bg-gray-800">
                    Começar Teste Grátis
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Plano Pro (Destaque) */}
            <Card className="border-2 border-emerald-500 hover:shadow-2xl transition-all relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-1">
                  MAIS POPULAR
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Pro</CardTitle>
                <CardDescription>Para resultados sérios</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    R$ 49
                  </span>
                  <span className="text-gray-600">/mês</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {[
                    "Tudo do plano Básico",
                    "Banco completo de alimentos",
                    "Análise de macronutrientes",
                    "Gráficos e relatórios",
                    "Receitas personalizadas",
                    "Scanner de código de barras",
                    "Suporte prioritário"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-emerald-600" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/quiz" className="block">
                  <Button className="w-full mt-6 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 shadow-lg">
                    Começar Teste Grátis
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Plano Premium */}
            <Card className="border-2 border-purple-200 hover:shadow-xl transition-all">
              <CardHeader>
                <CardTitle className="text-2xl">Premium</CardTitle>
                <CardDescription>Transformação completa</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">R$ 79</span>
                  <span className="text-gray-600">/mês</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {[
                    "Tudo do plano Pro",
                    "Consultoria nutricional",
                    "Plano alimentar personalizado",
                    "Acompanhamento semanal",
                    "Grupo VIP exclusivo",
                    "Acesso a nutricionistas",
                    "Suporte 24/7"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-purple-600" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/quiz" className="block">
                  <Button className="w-full mt-6 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700">
                    Começar Teste Grátis
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              💳 Aceitamos todos os cartões de crédito e PIX
            </p>
            <p className="text-sm text-gray-500">
              Todos os planos incluem 7 dias de teste grátis. Cancele quando quiser, sem perguntas.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Pronto para transformar sua saúde?
          </h3>
          <p className="text-xl text-emerald-50 mb-8">
            Faça nosso quiz gratuito e descubra qual plano é perfeito para você
          </p>
          <Link href="/quiz">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 text-lg px-8 py-6 shadow-xl">
              Fazer Quiz Gratuito
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-2 rounded-xl">
                  <Flame className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">NutriTrack</span>
              </div>
              <p className="text-sm text-gray-400">
                Transforme sua alimentação com inteligência artificial
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Produto</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Funcionalidades</a></li>
                <li><a href="#pricing" className="hover:text-emerald-400 transition-colors">Preços</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Contato</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacidade</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Termos</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 NutriTrack. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
