"use client"

import { useState } from 'react'
import { ArrowRight, ArrowLeft, Check, Flame, Target, Activity, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface QuizAnswer {
  question: string
  answer: string
}

export default function QuizPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<QuizAnswer[]>([])
  const [selectedAnswer, setSelectedAnswer] = useState('')

  const questions = [
    {
      id: 'goal',
      question: 'Qual é seu principal objetivo?',
      options: [
        { value: 'lose', label: 'Perder peso', icon: TrendingUp },
        { value: 'gain', label: 'Ganhar massa muscular', icon: Activity },
        { value: 'maintain', label: 'Manter peso saudável', icon: Target },
        { value: 'health', label: 'Melhorar saúde geral', icon: Flame }
      ]
    },
    {
      id: 'activity',
      question: 'Qual seu nível de atividade física?',
      options: [
        { value: 'sedentary', label: 'Sedentário (pouco ou nenhum exercício)', icon: null },
        { value: 'light', label: 'Leve (exercício 1-3 dias/semana)', icon: null },
        { value: 'moderate', label: 'Moderado (exercício 3-5 dias/semana)', icon: null },
        { value: 'intense', label: 'Intenso (exercício 6-7 dias/semana)', icon: null }
      ]
    },
    {
      id: 'experience',
      question: 'Você já tentou controlar sua alimentação antes?',
      options: [
        { value: 'never', label: 'Nunca tentei', icon: null },
        { value: 'tried', label: 'Sim, mas desisti', icon: null },
        { value: 'sometimes', label: 'Sim, com resultados parciais', icon: null },
        { value: 'experienced', label: 'Sim, tenho experiência', icon: null }
      ]
    },
    {
      id: 'challenge',
      question: 'Qual sua maior dificuldade com alimentação?',
      options: [
        { value: 'tracking', label: 'Não sei contar calorias', icon: null },
        { value: 'planning', label: 'Dificuldade em planejar refeições', icon: null },
        { value: 'consistency', label: 'Falta de consistência', icon: null },
        { value: 'knowledge', label: 'Falta de conhecimento nutricional', icon: null }
      ]
    },
    {
      id: 'commitment',
      question: 'Quanto tempo você pode dedicar por dia?',
      options: [
        { value: '5min', label: 'Menos de 5 minutos', icon: null },
        { value: '10min', label: '5-10 minutos', icon: null },
        { value: '20min', label: '10-20 minutos', icon: null },
        { value: '30min', label: 'Mais de 20 minutos', icon: null }
      ]
    }
  ]

  const progress = ((currentStep + 1) / questions.length) * 100

  const handleNext = () => {
    if (selectedAnswer) {
      const newAnswers = [...answers]
      newAnswers[currentStep] = {
        question: questions[currentStep].question,
        answer: selectedAnswer
      }
      setAnswers(newAnswers)
      
      if (currentStep < questions.length - 1) {
        setCurrentStep(currentStep + 1)
        setSelectedAnswer(newAnswers[currentStep + 1]?.answer || '')
      } else {
        // Quiz completo - redirecionar para página de resultados
        router.push('/quiz/results')
      }
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      setSelectedAnswer(answers[currentStep - 1]?.answer || '')
    }
  }

  const currentQuestion = questions[currentStep]

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

      {/* Quiz Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">
              Pergunta {currentStep + 1} de {questions.length}
            </span>
            <span className="text-sm font-medium text-emerald-600">
              {Math.round(progress)}% completo
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="border-2 border-emerald-200 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl text-gray-900">
              {currentQuestion.question}
            </CardTitle>
            <CardDescription className="text-base">
              Selecione a opção que melhor descreve você
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
              <div className="space-y-3">
                {currentQuestion.options.map((option) => (
                  <div key={option.value}>
                    <RadioGroupItem
                      value={option.value}
                      id={option.value}
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor={option.value}
                      className="flex items-center gap-4 p-4 rounded-lg border-2 border-gray-200 cursor-pointer transition-all hover:border-emerald-300 hover:bg-emerald-50 peer-data-[state=checked]:border-emerald-500 peer-data-[state=checked]:bg-emerald-50"
                    >
                      {option.icon && (
                        <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <option.icon className="w-5 h-5 text-white" />
                        </div>
                      )}
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{option.label}</p>
                      </div>
                      <div className="w-5 h-5 rounded-full border-2 border-gray-300 peer-data-[state=checked]:border-emerald-500 peer-data-[state=checked]:bg-emerald-500 flex items-center justify-center">
                        {selectedAnswer === option.value && (
                          <Check className="w-3 h-3 text-white" />
                        )}
                      </div>
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-8">
              {currentStep > 0 && (
                <Button
                  variant="outline"
                  onClick={handleBack}
                  className="flex-1 border-2 border-gray-300"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Voltar
                </Button>
              )}
              <Button
                onClick={handleNext}
                disabled={!selectedAnswer}
                className={`flex-1 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white ${
                  currentStep === 0 ? 'w-full' : ''
                }`}
              >
                {currentStep === questions.length - 1 ? 'Ver Resultados' : 'Próxima'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Trust Indicators */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 mb-2">
            ✓ 100% gratuito • ✓ Sem compromisso • ✓ Resultados personalizados
          </p>
          <p className="text-xs text-gray-500">
            Mais de 50.000 pessoas já fizeram este quiz
          </p>
        </div>
      </main>
    </div>
  )
}
