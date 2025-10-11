import React from 'react'
import './ProcessSection.css'

const ProcessSection: React.FC = () => {
  const processSteps = [
    {
      number: '01',
      title: 'Pastikan kebutuhan anda'
    },
    {
      number: '02',
      title: 'Konsultasikan kepada kami'
    },
    {
      number: '03',
      title: 'Negosiasi dan Transfer DP'
    },
    {
      number: '04',
      title: 'Pengerjaan dan Pelunasan'
    }
  ]

  return (
    <section className="process-section" id="proses">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">PROSES PEMESANAN</div>
          <h2>Langkah - langkah memesan jasa bengkel las</h2>
        </div>
        
        <div className="process-steps">
          {processSteps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
