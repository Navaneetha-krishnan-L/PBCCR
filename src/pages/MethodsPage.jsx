import './MethodsPage.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const MODULES = [
  { bg: '#E5E0EC', title: 'Cancer Rates', desc: 'Cancer rates are calculated to compare data across regions and populations. These are usually expressed per 100,000 people to ensure uniform analysis.' },
  { bg: '#E4DFFF', title: 'Cancer Case Definition', desc: 'All cancer cases recorded in PBCCR follow internationally accepted medical classification standards. Only confirmed cases are included.' },
  { bg: '#E6DEFF', title: 'Age Group Classification', desc: 'Cancer data is categorized into different age groups. Childhood cancer is defined as cases occurring between ages 0-19 years.' },
  { bg: '#DBE2FA', title: 'Cancer Incidence', desc: 'Incidence refers to the number of new cancer cases diagnosed within a specific population during a defined time period.' },
]

const FORMULAS = [
  { label: 'Calculations I', title: 'Crude Incidence Rate (CIR)', desc: 'Represents the total number of new cancer cases in a specified population during a year, relative to the size of that population.', num: 'New Cancer Cases', den: 'Total Population' },
  { label: 'Calculations II', title: 'Age-Specific Rate (ASpR)', desc: 'Provides incidence data for a specific age group, allowing for detailed demographic comparisons and risk assessment.', num: 'Cases in Age Group', den: 'Pop. of Age Group' },
]

export default function MethodsPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pbr-banner text-center">
        <h1 className="fw-bold mb-3" style={{ fontSize: 'clamp(24px,4vw,44px)' }}>Methods and Data Calculations</h1>
        <p style={{ color: 'rgba(224,231,255,0.90)', maxWidth: 580, margin: '0 auto 12px' }}>Understanding how cancer data is collected, processed, and analyzed in PBCCR.</p>
        <p style={{ color: 'rgba(238,242,255,0.80)', maxWidth: 820, margin: '0 auto', lineHeight: 1.8 }}>PBCCR uses standardized statistical methods to collect, analyze, and present cancer data. These methods ensure accuracy, consistency, and meaningful insights that support healthcare planning and research.</p>
      </section>

      {/* Modules */}
      <section className="py-5 px-5" style={{ background: '#FCF8FF' }}>
        <h2 className="fw-bold text-center mb-2" style={{ color: '#8805A4' }}>Data Collection Methods</h2>
        <p className="text-center text-secondary mb-5">Standardized approaches used across all PBCCR registries.</p>
        <div className="row g-4">
          {MODULES.map((m) => (
            <div className="col-md-6" key={m.title}>
              <div className="d-flex align-items-start gap-3 p-4 rounded-4 bg-white shadow-sm h-100">
                <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: 52, height: 52, background: m.bg }}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="1" y="1" width="16" height="16" rx="2" stroke="#8805A4" strokeWidth="1.5" fill="none"/><path d="M5 9h8M5 6h8M5 12h5" stroke="#8805A4" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </div>
                <div>
                  <h5 className="fw-bold mb-2">{m.title}</h5>
                  <p className="text-secondary mb-0" style={{ lineHeight: 1.8, textAlign: 'justify' }}>{m.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Formulas */}
      <section className="py-5 px-5 bg-white">
        <h2 className="fw-bold text-center mb-2">Standard Mathematical Formulas</h2>
        <p className="text-center text-secondary mb-5">Precise calculations used for generating standardized cancer statistics across all PBCCR registries.</p>
        <div className="row g-4">
          {FORMULAS.map((f) => (
            <div className="col-md-6" key={f.title}>
              <div className="pbr-formula-card h-100 d-flex flex-column">
                <div className="flex-grow-1">
                  <p className="small fw-semibold text-uppercase mb-2" style={{ color: '#8805A4', letterSpacing: 1.2 }}>{f.label}</p>
                  <h4 className="fw-bold mb-2">{f.title}</h4>
                  <p className="text-secondary mb-4" style={{ lineHeight: 1.8 }}>{f.desc}</p>
                </div>
                <div className="pbr-formula-box">
                  <span className="pbr-formula-num">{f.num}</span>
                  <span className="pbr-formula-den">{f.den}</span>
                  <p className="fw-bold mb-0 mt-3" style={{ color: '#8805A4', fontSize: 22 }}>&#215; 100,000</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}
