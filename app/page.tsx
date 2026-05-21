"use client"

import { useState, useEffect } from "react"

const backgrounds = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img4-i1J6irFRYjhzB5y00x73MwnWnDruDA.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img5-kKMfCpwzvtDv3LkP0SQZL0xpLj4Ekn.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img3-WKPKdJZSoSBxQ2CysUSG5kBRcP9wje.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img2-Mabu6kVgXrMgnTTRwDmPX9d4Zd7aTQ.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img6-uqEwuogFrkOixC0SKNTCyJeMWiBZX4.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imagem%202-gs3H5VFp8W5ywnSAH1KGdcIhfSS10A.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imagem%201-GNtZCqNq4vJHSYNRBtXGU74GDct4qH.jpg",
]

export default function DrakantosCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [currentBgIndex, setCurrentBgIndex] = useState(0)

  // Background slideshow
  useEffect(() => {
    const bgTimer = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % backgrounds.length)
    }, 5000)

    return () => clearInterval(bgTimer)
  }, [])

  // Countdown
  useEffect(() => {
    // 22/05/2026 às 10:00 da manhã (UTC-3)
    const launchDate = new Date("2026-05-22T10:00:00-03:00")

    const updateCountdown = () => {
      const now = new Date().getTime()
      const distance = launchDate.getTime() - now

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24))

        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        )

        const minutes = Math.floor(
          (distance % (1000 * 60 * 60)) / (1000 * 60)
        )

        const seconds = Math.floor(
          (distance % (1000 * 60)) / 1000
        )

        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
        })
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        })
      }
    }

    updateCountdown()

    const timer = setInterval(updateCountdown, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background slideshow */}
      <div className="absolute inset-0 bg-black">
        {backgrounds.map((bg, index) => (
          <div
            key={index}
            className="absolute inset-0 flex items-center justify-center transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(${(index - currentBgIndex) * 100}%)`,
            }}
          >
            <img
              src={bg}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-32 pb-16">
        {/* Title */}
        <div className="text-center mb-16">
          <p className="text-xl md:text-2xl text-amber-100 font-semibold drop-shadow-lg">
            Lançamento em breve
          </p>
        </div>

        {/* Countdown */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-8 mt-8">
          {/* Dias */}
          <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 md:p-6 text-center border border-amber-600/30">
            <div className="text-3xl md:text-5xl font-bold text-amber-300 mb-2">
              {timeLeft.days.toString().padStart(2, "0")}
            </div>

            <div className="text-sm md:text-base text-amber-100 uppercase tracking-wider">
              Dias
            </div>
          </div>

          {/* Horas */}
          <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 md:p-6 text-center border border-amber-600/30">
            <div className="text-3xl md:text-5xl font-bold text-amber-300 mb-2">
              {timeLeft.hours.toString().padStart(2, "0")}
            </div>

            <div className="text-sm md:text-base text-amber-100 uppercase tracking-wider">
              Horas
            </div>
          </div>

          {/* Minutos */}
          <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 md:p-6 text-center border border-amber-600/30">
            <div className="text-3xl md:text-5xl font-bold text-amber-300 mb-2">
              {timeLeft.minutes.toString().padStart(2, "0")}
            </div>

            <div className="text-sm md:text-base text-amber-100 uppercase tracking-wider">
              Minutos
            </div>
          </div>

          {/* Segundos */}
          <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 md:p-6 text-center border border-amber-600/30">
            <div className="text-3xl md:text-5xl font-bold text-amber-300 mb-2">
              {timeLeft.seconds.toString().padStart(2, "0")}
            </div>

            <div className="text-sm md:text-base text-amber-100 uppercase tracking-wider">
              Segundos
            </div>
          </div>
        </div>

        {/* Launch info */}
        <div className="text-center bg-black/60 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-amber-600/30">
          <p className="text-amber-100 text-lg md:text-xl mb-2">
            Data de Lançamento
          </p>

          <p className="text-amber-300 text-xl md:text-2xl font-bold">
            22 de Maio de 2026
          </p>

          <p className="text-amber-200 text-base md:text-lg">
            Às 10:00 da manhã (Brasília)
          </p>
        </div>

        {/* Footer */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
          <p className="text-amber-200/60 text-xs text-center">
            Criado por Dev Saulo
          </p>
        </div>
      </div>
    </div>
  )
}