import { useEffect, useRef } from 'react'
import {
  Chart, BarController, BarElement,
  CategoryScale, LinearScale, Tooltip, Legend
} from 'chart.js'
import { MOYENNE_FRANCE, OBJECTIF_PARIS } from '../utils/carbonCalculator'
import styles from '../styles/Resultats.module.css'

Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend)

export default function BarChart({ total }) {
  const canvasRef = useRef(null)
  const chartRef = useRef(null)

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy()
    }

    const ctx = canvasRef.current.getContext('2d')

    // on choisit la couleur selon si c'est au dessus ou en dessous de la moyenne
    const couleurUser = total > MOYENNE_FRANCE ? '#ef4444' : total > OBJECTIF_PARIS ? '#eab308' : '#16a34a'

    chartRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Toi', 'Moyenne France', 'Objectif Paris'],
        datasets: [{
          label: 'kg CO₂ / semaine',
          data: [total, MOYENNE_FRANCE, OBJECTIF_PARIS],
          backgroundColor: [couleurUser, '#94a3b8', '#16a34a'],
          borderRadius: 8
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: function(context) {
                return context.parsed.y.toFixed(1) + ' kg CO₂/semaine'
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: { color: 'rgba(0,0,0,0.05)' },
            ticks: {
              font: { size: 12 },
              callback: function(val) { return val + ' kg' }
            }
          },
          x: {
            grid: { display: false },
            ticks: { font: { size: 13, weight: '600' } }
          }
        }
      }
    })

    return () => {
      if (chartRef.current) chartRef.current.destroy()
    }
  }, [total])

  return (
    <div className={styles.chartCard}>
      <h3>Comparaison</h3>
      <div className={styles.chartWrapper}>
        <canvas ref={canvasRef}></canvas>
      </div>
    </div>
  )
}