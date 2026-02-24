import { useEffect, useRef } from 'react'
import { Chart, DoughnutController, ArcElement, Tooltip, Legend } from 'chart.js'
import styles from '../styles/Resultats.module.css'

// on enregistre les composants chart.js qu'on utilise
Chart.register(DoughnutController, ArcElement, Tooltip, Legend)

export default function DoughnutChart({ transport, alimentation, numerique }) {
  const canvasRef = useRef(null)
  const chartRef = useRef(null)

  useEffect(() => {
    // si un graphique existait deja, on le detruit
    if (chartRef.current) {
      chartRef.current.destroy()
    }

    const ctx = canvasRef.current.getContext('2d')

    chartRef.current = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Transport', 'Alimentation', 'Numérique'],
        datasets: [{
          data: [transport, alimentation, numerique],
          backgroundColor: ['#2563eb', '#e05d2c', '#7c3aed'],
          borderWidth: 0,
          hoverOffset: 8
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '65%',
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              padding: 20,
              font: { size: 14, family: 'Segoe UI' },
              usePointStyle: true
            }
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                return context.label + ' : ' + context.parsed.toFixed(2) + ' kg CO₂'
              }
            }
          }
        }
      }
    })

    // nettoyage quand le composant se demonte
    return () => {
      if (chartRef.current) chartRef.current.destroy()
    }
  }, [transport, alimentation, numerique])

  return (
    <div className={styles.chartCard}>
      <h3>Répartition par catégorie</h3>
      <div className={styles.chartWrapper}>
        <canvas ref={canvasRef}></canvas>
      </div>
    </div>
  )
}