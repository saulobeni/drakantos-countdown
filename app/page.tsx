"use client"

import { useState, useEffect } from "react"

export default function DrakantosCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Data de lançamento: 25/07/2025 às 10:00 (horário de Brasília - UTC-3)
    const launchDate = new Date("2025-07-25T10:00:00-03:00")

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = launchDate.getTime() - now

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/drakantos-bg.jpg')",
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-32 pb-16">
        {/* Title positioned below DRAKANTOS logo in background */}
        <div className="text-center mb-16">
          <p className="text-xl md:text-2xl text-amber-100 font-semibold drop-shadow-lg">Lançamento em breve</p>
        </div>

        {/* Countdown - moved further down */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-8 mt-8">
          <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 md:p-6 text-center border border-amber-600/30">
            <div className="text-3xl md:text-5xl font-bold text-amber-300 mb-2">
              {timeLeft.days.toString().padStart(2, "0")}
            </div>
            <div className="text-sm md:text-base text-amber-100 uppercase tracking-wider">Dias</div>
          </div>

          <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 md:p-6 text-center border border-amber-600/30">
            <div className="text-3xl md:text-5xl font-bold text-amber-300 mb-2">
              {timeLeft.hours.toString().padStart(2, "0")}
            </div>
            <div className="text-sm md:text-base text-amber-100 uppercase tracking-wider">Horas</div>
          </div>

          <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 md:p-6 text-center border border-amber-600/30">
            <div className="text-3xl md:text-5xl font-bold text-amber-300 mb-2">
              {timeLeft.minutes.toString().padStart(2, "0")}
            </div>
            <div className="text-sm md:text-base text-amber-100 uppercase tracking-wider">Minutos</div>
          </div>

          <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 md:p-6 text-center border border-amber-600/30">
            <div className="text-3xl md:text-5xl font-bold text-amber-300 mb-2">
              {timeLeft.seconds.toString().padStart(2, "0")}
            </div>
            <div className="text-sm md:text-base text-amber-100 uppercase tracking-wider">Segundos</div>
          </div>
        </div>

        {/* Launch Date Info */}
        <div className="text-center bg-black/60 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-amber-600/30">
          <p className="text-amber-100 text-lg md:text-xl mb-2">Data de Lançamento</p>
          <p className="text-amber-300 text-xl md:text-2xl font-bold">25 de Julho de 2025</p>
          <p className="text-amber-200 text-base md:text-lg">10:00 - Horário de Brasília</p>
        </div>

        {/* Footer */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
          <p className="text-amber-200/60 text-xs text-center">Criado por Dev Saulo</p>
        </div>
      </div>
    </div>
  )
}
