"use client"

import { useState } from 'react'
import { Check, Flame, Star, ArrowRight, Sparkles, TrendingUp, Target } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export default function QuizResultsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-2 rounded-xl">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  NutriTrack
                </h1>
              </div>
            </Link>
          </div>
        </div>
      </header>

      {/* Results Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Success Message */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mb-4">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Parabéns! Analisamos seu perfil
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Com base nas suas respostas, identificamos o plano perfeito para você alcançar seus objetivos
          </p>
        </div>

        {/* Personalized Insights */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="border-emerald-200">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-2">
                <Target className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-lg">Seu Objetivo</CardTitle>
              <CardDescription>
                Perder peso de forma saudável e sustentável
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-emerald-200">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-2">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-lg">Seu Perfil</CardTitle>
              <CardDescription>
                Iniciante com alta motivação para mudança
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-emerald-200">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-2">
                <Star className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-lg">Recomendação</CardTitle>
              <CardDescription>
                Plano Pro - ideal para seus objetivos
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Recommended Plan */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Plano Recomendado Para Você
          </h3>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Plano Básico */}
          <Card className="border-2 border-gray-200 hover:shadow-xl transition-all opacity-75">
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
                    <Check className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/">
                <Button className="w-full mt-6 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700">
                  Selecionar Básico
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Plano Pro (Recomendado) */}
          <Card className="border-2 border-emerald-500 hover:shadow-2xl transition-all relative scale-105">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-1">
                RECOMENDADO PARA VOCÊ
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
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/">
                <Button className="w-full mt-6 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 shadow-lg">
                  Começar Teste Grátis (7 dias)
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <p className="text-xs text-center text-gray-500">
                Cancele quando quiser, sem perguntas
              </p>
            </CardContent>
          </Card>

          {/* Plano Premium */}
          <Card className="border-2 border-purple-200 hover:shadow-xl transition-all opacity-75">
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
                    <Check className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/">
                <Button className="w-full mt-6 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700">
                  Selecionar Premium
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Why This Plan */}
        <Card className="border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50">
          <CardHeader>
            <CardTitle className="text-xl">Por que o Plano Pro é ideal para você?</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">Ferramentas completas para iniciantes</p>
                  <p className="text-sm text-gray-600">Tudo que você precisa para começar com o pé direito, sem complicação</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">Análise detalhada de macronutrientes</p>
                  <p className="text-sm text-gray-600">Essencial para alcançar seus objetivos de perda de peso de forma saudável</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">Melhor custo-benefício</p>
                  <p className="text-sm text-gray-600">Recursos profissionais por um preço acessível, perfeito para quem está começando</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-emerald-600" />
              <span>7 dias grátis</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-emerald-600" />
              <span>Sem cartão necessário</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-emerald-600" />
              <span>Cancele quando quiser</span>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            Mais de 50.000 pessoas já transformaram sua saúde com o NutriTrack
          </p>
        </div>
      </main>
    </div>
  )
}
