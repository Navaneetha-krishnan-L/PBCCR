import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="py-5 px-5" style={{ background: 'linear-gradient(135deg,#F6F2FD 0%,#EDE0FF 100%)' }}>
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <p className="fw-semibold mb-2" style={{ color: '#9333EA', letterSpacing: 1 }}>ABOUT PBCCR</p>
            <h1 className="fw-bold mb-4" style={{ fontSize: 'clamp(28px,4vw,48px)', background: 'linear-gradient(110deg,#621DA3 0%,#A038D0 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Empowering Cancer Care Through Data</h1>
            <p className="text-secondary mb-4" style={{ lineHeight: 1.9, textAlign: 'justify' }}>PBCCR is a comprehensive population-based childhood cancer registry committed to collecting, managing, and analyzing cancer data across Tamil Nadu to support better healthcare outcomes.</p>
            <div className="d-flex gap-3 flex-wrap">
              <Link to="/data-visualization" className="btn fw-bold rounded-pill px-5 py-2 text-white" style={{ background: '#9333EA' }}>View Data</Link>
              <Link to="/methods" className="btn btn-outline-secondary fw-bold rounded-pill px-5 py-2">Our Methods</Link>
            </div>
          </div>
          <div className="col-lg-6">
            <img src="https://api.builder.io/api/v1/image/assets/TEMP/cb2ada4b5cce2104c0cf97418a751b3b0b1ee0a0?width=640" alt="Healthcare" className="img-fluid rounded-4 shadow-sm" />
          </div>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="py-5 px-5 bg-light">
        <div className="row g-4">
          <div className="col-md-6">
            <div className="pbr-mission-card h-100">
              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="bg-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: 48, height: 48, flexShrink: 0 }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#8805A4"/></svg>
                </div>
                <h3 className="fw-bold mb-0">Our Mission</h3>
              </div>
              <p style={{ lineHeight: 1.9, color: 'rgba(255,255,255,0.90)', textAlign: 'justify' }}>Our mission is to improve cancer awareness, early detection, and treatment outcomes for children across Tamil Nadu by maintaining an accurate, comprehensive, and accessible cancer registry.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="pbr-vision-card h-100">
              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="bg-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: 48, height: 48, flexShrink: 0 }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" fill="#8805A4"/><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="#8805A4" strokeWidth="2" fill="none"/></svg>
                </div>
                <h3 className="fw-bold mb-0">Our Vision</h3>
              </div>
              <p style={{ lineHeight: 1.9, color: 'rgba(255,255,255,0.90)', textAlign: 'justify' }}>To be the leading childhood cancer data platform in South Asia, enabling data-driven healthcare policy, research, and clinical decisions that save children lives and improve their quality of life.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why PBCCR */}
      <section className="py-5 px-5 bg-white">
        <div className="row g-4 align-items-start">
          <div className="col-md-5">
            <div className="rounded-4 p-4 h-100" style={{ background: '#F6F2FD' }}>
              <h2 className="fw-bold mb-4" style={{ color: '#8805A4' }}>Why PBCCR?</h2>
              {['Standardized data collection methods','Real-time cancer incidence tracking','Multi-district coverage across Tamil Nadu','Supports healthcare policy decisions','Open access for researchers and clinicians'].map((item, i) => (
                <div key={i} className="d-flex align-items-start gap-3 mb-3">
                  <div className="rounded-circle bg-white d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: 32, height: 32, border: '2px solid #8805A4' }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7L5.5 10.5L12 3" stroke="#8805A4" strokeWidth="2" strokeLinecap="round"/></svg>
                  </div>
                  <p className="mb-0 fw-semibold" style={{ lineHeight: 1.6, paddingTop: 4 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-7">
            <h2 className="fw-bold mb-4" style={{ color: '#8805A4' }}>What We Do</h2>
            <div className="row g-3">
              {[{t:'Data Collection',d:'Systematic collection of cancer incidence data from hospitals, clinics, and health centers across Tamil Nadu.'},{t:'Data Analysis',d:'Advanced statistical analysis to identify trends, risk factors, and patterns in childhood cancer cases.'},{t:'Research Support',d:'Providing researchers and clinicians with accurate, up-to-date cancer data for evidence-based studies.'},{t:'Policy Guidance',d:'Informing government health policy with reliable epidemiological data on childhood cancer incidence.'}].map((item, i) => (
                <div key={i} className="col-md-6">
                  <div className="card border-0 rounded-4 p-4 h-100" style={{ background: '#F8F4FF' }}>
                    <div className="rounded-3 d-flex align-items-center justify-content-center mb-3" style={{ width: 44, height: 44, background: 'rgba(147,51,234,0.1)' }}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="2" width="16" height="16" rx="3" stroke="#9333EA" strokeWidth="1.5"/><path d="M6 10h8M6 7h8M6 13h5" stroke="#9333EA" strokeWidth="1.5" strokeLinecap="round"/></svg>
                    </div>
                    <h6 className="fw-bold mb-2">{item.t}</h6>
                    <p className="text-secondary small mb-0" style={{ lineHeight: 1.7 }}>{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-5 mx-4 mb-4 rounded-4" style={{ background: 'linear-gradient(90deg,#611EA3 0%,#9E37CE 100%)' }}>
        <h2 className="text-white fw-bold text-center mb-4">Our Sponsors</h2>
        <div className="row g-3 px-5">
          {['Cancer Institute (WIA)','DPH and PM','Directorate of Medical Education'].map((s, i) => (
            <div key={i} className="col-md-4">
              <div className="bg-white rounded-3 p-4 text-center shadow-sm">
                <p className="fw-bold mb-1" style={{ color: '#8805A4' }}>{s}</p>
                <p className="text-secondary small mb-0">Tamil Nadu, India</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}
