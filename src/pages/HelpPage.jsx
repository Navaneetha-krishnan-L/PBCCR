import './HelpPage.css'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const GUIDES = [
  'Navigate through the menu to explore different sections like Data, Dashboard, and Methods.',
  'Use the search bar to quickly find specific cancer data or reports.',
  'Click on your profile to manage your account details and preferences.',
  'Visit the Methods section to understand how the data is collected and calculated.',
]

const FAQS = [
  { id: 1, q: 'What is PBCCR?', a: 'PBCCR (Population Based Childhood Cancer Registry) is a digital cancer registry that collects and analyzes cancer data for better healthcare planning in Tamil Nadu.' },
  { id: 2, q: 'Who can use this platform?', a: 'Healthcare professionals, researchers, policymakers, and public health administrators can use this platform to access cancer data and statistics.' },
  { id: 3, q: 'How is the data collected?', a: 'Data is collected from hospitals, clinics, and medical institutions across Tamil Nadu using standardized reporting forms and electronic data submission.' },
  { id: 4, q: 'Is the data publicly accessible?', a: 'Aggregated and anonymized data is publicly available. Detailed patient-level data requires institutional authorization.' },
  { id: 5, q: 'How do I download factsheets?', a: 'Navigate to the Factsheets section and click the Download PDF button on any factsheet card to download it.' },
]

export default function HelpPage() {
  const [faq, setFaq] = useState(1)
  return (
    <>
      <Navbar />

      {/* Hero */}
      <div className="pbr-help-hero">
        <div className="rounded-4 overflow-hidden flex-shrink-0" style={{ width: 'clamp(240px,35%,440px)', height: 280 }}>
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/a52376c9452b61dfc531a2563a9ec98e9a69fce0?width=952" alt="Doctor" className="w-100 h-100" style={{ objectFit: 'cover' }} />
        </div>
        <div className="flex-grow-1">
          <h1 className="fw-bold mb-3" style={{ color: '#8805A4', fontSize: 'clamp(24px,4vw,44px)' }}>Help and Support</h1>
          <p className="text-secondary mb-0" style={{ lineHeight: 1.8, maxWidth: 520 }}>Find answers to common questions, learn how to use the platform, and get support from the PBCCR team.</p>
        </div>
      </div>

      {/* Guide Cards */}
      <section className="py-5 px-5 bg-light">
        <h2 className="fw-bold text-center mb-2">Quick Start Guide</h2>
        <p className="text-center text-secondary mb-5">Follow these steps to get started with PBCCR</p>
        <div className="row g-4">
          {GUIDES.map((g, i) => (
            <div className="col-md-3" key={i}>
              <div className="card border-0 rounded-4 h-100 shadow-sm p-4">
                <div className="d-flex align-items-center justify-content-center rounded-3 mb-3" style={{ width: 48, height: 48, background: 'rgba(147,51,234,0.12)' }}>
                  <span className="fw-bold" style={{ color: '#9333EA', fontSize: 20 }}>{i + 1}</span>
                </div>
                <p className="mb-0 fw-semibold text-secondary" style={{ lineHeight: 1.7, fontSize: 14 }}>{g}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="pbr-faq-bg">
        <h2 className="text-white text-center fw-bold mb-2">Frequently Asked Questions</h2>
        <p className="text-white-50 text-center mb-5">Find quick answers to common inquiries about our platform</p>
        <div className="d-flex flex-column gap-3" style={{ maxWidth: 760, margin: '0 auto' }}>
          {FAQS.map((f) => (
            <div key={f.id} className="bg-white rounded-4 overflow-hidden">
              <button
                className="w-100 p-4 d-flex justify-content-between align-items-center border-0 bg-transparent fw-bold text-start"
                style={{ color: faq === f.id ? '#8805A4' : '#1C1B23', fontSize: 15 }}
                onClick={() => setFaq(faq === f.id ? 0 : f.id)}
              >
                <span>{f.q}</span>
                <span style={{ fontSize: 22, color: '#8805A4', transition: 'transform 0.3s', transform: faq === f.id ? 'rotate(45deg)' : 'none' }}>+</span>
              </button>
              {faq === f.id && (
                <div className="px-4 pb-4">
                  <hr className="mt-0 mb-3" />
                  <p className="text-secondary mb-0" style={{ lineHeight: 1.8 }}>{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}
