import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ORGS = [
  {
    id: 1,
    title: 'Cancer Institute (WIA)',
    desc: 'As a pioneer in cancer registries since 2012, the Cancer Institute (WIA) serves as the primary technical partner for PBCCR.',
    points: ['Technical coordination of state-wide registries','Training for healthcare professionals','Quality control and data validation','Research collaboration and publication support'],
    img: 'https://api.builder.io/api/v1/image/assets/TEMP/2f22bfd862f8da157003dd58da1beb20fc540ff1?width=176',
  },
  {
    id: 2,
    title: 'Directorate of Public Health and Preventive Medicine (DPH and PM)',
    desc: 'DPH and PM oversees the public health infrastructure and supports PBCCR through government health data and district-level implementation.',
    points: ['Government health policy integration','District-level cancer surveillance','Public health data coordination','Resource allocation and support'],
    img: 'https://api.builder.io/api/v1/image/assets/TEMP/2f22bfd862f8da157003dd58da1beb20fc540ff1?width=176',
  },
  {
    id: 3,
    title: 'Directorate of Medical Education (DME)',
    desc: 'DME facilitates data collection from medical college hospitals and training institutions across Tamil Nadu.',
    points: ['Medical college hospital data integration','Academic research collaboration','Clinical training programs','Standardized reporting protocols'],
    img: 'https://api.builder.io/api/v1/image/assets/TEMP/2f22bfd862f8da157003dd58da1beb20fc540ff1?width=176',
  },
]

export default function InitiativesPage() {
  const [open, setOpen] = useState(1)
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pbr-banner-purple">
        <div>
          <h1 className="fw-bold text-white mb-3" style={{ fontSize: 'clamp(28px,5vw,56px)', letterSpacing: -1 }}>Our Initiatives</h1>
          <p className="text-white-50" style={{ maxWidth: 600, lineHeight: 1.7 }}>Key organizations supporting cancer data collection, analysis, and healthcare improvement across Tamil Nadu.</p>
        </div>
      </section>

      {/* Accordion */}
      <section className="py-5" style={{ background: 'linear-gradient(180deg,#9233C5 0%,#6F24AC 100%)' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <div className="d-flex flex-column gap-3">
            {ORGS.map((org) => (
              <div key={org.id} className="bg-white rounded-4 overflow-hidden shadow-sm">
                <button
                  className="w-100 p-4 d-flex justify-content-between align-items-center border-0 bg-transparent fw-bold text-start"
                  style={{ color: open === org.id ? '#8805A4' : '#1C1B23', fontSize: 17 }}
                  onClick={() => setOpen(open === org.id ? 0 : org.id)}
                >
                  <span>{org.title}</span>
                  <span style={{ fontSize: 22, transition: 'transform 0.3s', transform: open === org.id ? 'rotate(45deg)' : 'none', color: '#8805A4' }}>+</span>
                </button>
                {open === org.id && (
                  <div className="px-4 pb-4">
                    <hr className="mt-0 mb-3" />
                    <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>{org.desc}</p>
                    <ul className="list-unstyled mb-0">
                      {org.points.map((pt, i) => (
                        <li key={i} className="d-flex align-items-start gap-2 mb-2">
                          <span style={{ color: '#8805A4', fontWeight: 700, fontSize: 18, lineHeight: 1.2 }}>&#8226;</span>
                          <span className="text-secondary" style={{ lineHeight: 1.7 }}>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
