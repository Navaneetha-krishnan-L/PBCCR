import './HomePage.css'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const STATS = [
  { img: 'https://api.builder.io/api/v1/image/assets/TEMP/e9be6bc5dbcc1536c3ac65882698519109b6770d?width=102', title: 'Recent Cancer Statistics' },
  { img: 'https://api.builder.io/api/v1/image/assets/TEMP/f0cc9034c4368735a249d08b0bd1a65454e898ff?width=102', title: 'Trend of Cancer Incidence' },
  { img: 'https://api.builder.io/api/v1/image/assets/TEMP/88556b2e84e58ae9c9843ad51a85693a47e0b849?width=102', title: 'Cancer Projection' },
]

export default function HomePage() {
  return (
    <>
      <Navbar showLogin={true} />

      {/* Hero */}
      <section className="pbr-hero">
        <div className="d-flex align-items-center px-5 py-5 flex-grow-1 gap-4 flex-wrap">
          <div style={{ maxWidth: 520 }}>
            <h1 className="fw-bold mb-3" style={{ fontSize: 'clamp(28px,4vw,50px)' }}>
              <span style={{ color: '#C482FF' }}>Childhood </span>
              <span className="text-white">Cancer</span>
            </h1>
            <p className="text-white-50 mb-4" style={{ lineHeight: 2, textAlign: 'justify' }}>
              Childhood cancer affects children aged 0-14 years, and sometimes up to 19 years. Early detection and proper treatment can save lives. Digital cancer data helps doctors track trends, improve treatment, and support better decisions.
            </p>
            <div className="d-flex gap-3 flex-wrap">
              <Link to="/data-visualization" className="btn fw-bold rounded-pill px-4 py-2 text-white" style={{ background: '#9333EA' }}>View Data</Link>
              <Link to="/about" className="btn btn-outline-light fw-bold rounded-pill px-4 py-2">Learn More</Link>
            </div>
          </div>
          <div className="ms-auto" style={{ width: 240, height: 240, borderRadius: '50%', overflow: 'hidden', border: '3px solid rgba(255,255,255,0.3)', flexShrink: 0 }}>
            <img src="https://api.builder.io/api/v1/image/assets/TEMP/59d0517e2bda9d000b9734fd3d69374974c3b63a?width=500" alt="Child" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
        <div className="pbr-stats-bar">
          <div className="row g-0 px-4 py-3">
            {STATS.map((s, i) => (
              <div className="col-md-4" key={i}>
                <div className="d-flex gap-3 align-items-start p-3">
                  <div className="pbr-stat-icon"><img src={s.img} alt="" style={{ width: 46, height: 54, objectFit: 'contain' }} /></div>
                  <div>
                    <p className="text-white fw-bold text-uppercase mb-2" style={{ fontSize: 13, letterSpacing: 1.2 }}>{s.title}</p>
                    <p className="text-white-50 small mb-0" style={{ lineHeight: 1.7 }}>Comprehensive data on childhood cancer trends and statistics across Tamil Nadu.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About PBCCR */}
      <section className="py-5 bg-white">
        <div className="container-fluid px-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-4">
              <div className="rounded-4 d-flex align-items-center justify-content-center text-white fw-bold p-5" style={{ background: 'linear-gradient(90deg,#530E95 0%,#8220BA 100%)', minHeight: 200, fontSize: 'clamp(24px,3vw,40px)', textAlign: 'center', lineHeight: 1.4, textTransform: 'uppercase' }}>
                ABOUT<br/>PBCCR
              </div>
            </div>
            <div className="col-lg-8">
              <p className="mb-3" style={{ lineHeight: 2, textAlign: 'justify', fontSize: 15 }}>
                <strong style={{ color: '#540B98' }}>PBCCR (Population Based Childhood Cancer Registry)</strong> is a healthcare data platform designed to collect, manage, and analyze cancer-related information across different regions of Tamil Nadu.
              </p>
              <p className="text-secondary mb-4" style={{ lineHeight: 2, textAlign: 'justify', fontSize: 15 }}>It helps in understanding cancer patterns, trends, and risk factors within populations, particularly focusing on childhood cancer. PBCCR provides real-time data for healthcare professionals, researchers, and policymakers.</p>
              <Link to="/about" className="btn fw-bold rounded-pill px-5 py-2 text-white" style={{ background: '#9333EA' }}>Know More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Methods */}
      <section className="py-5" style={{ background: 'linear-gradient(180deg,rgba(73,11,146,0.90) 0%,#A02FCF 100%)' }}>
        <div className="container-fluid px-5">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <h2 className="fw-bold text-white mb-3" style={{ fontSize: 'clamp(24px,3vw,42px)' }}>Methods</h2>
              <p className="text-white-50 mb-4" style={{ lineHeight: 1.8 }}>PBCCR uses standardized statistical methods to collect, analyze, and present cancer data ensuring accuracy and meaningful insights for healthcare planning.</p>
              <Link to="/methods" className="btn bg-white fw-bold rounded-pill px-5 py-2" style={{ color: '#7124AD' }}>Read More</Link>
            </div>
            <div className="col-lg-6">
              <div className="rounded-4 overflow-hidden" style={{ border: '6px solid #fff', boxShadow: '0 19px 38px -9px rgba(0,0,0,0.25)' }}>
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/4c46b2aca3a7f59e03ecce1e1a8c0cf9d63fdfa3?width=640" alt="Lab Research" className="w-100" style={{ height: 280, objectFit: 'cover', display: 'block' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives + Databases */}
      <section className="py-5 bg-light">
        <div className="container-fluid px-5">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card border-0 rounded-4 h-100 shadow-sm p-5">
                <h3 className="fw-bold mb-3" style={{ color: '#8805A4' }}>Initiatives</h3>
                <p className="text-secondary mb-4" style={{ lineHeight: 1.8 }}>Discover the key organizations and programs working to improve childhood cancer care and data collection across Tamil Nadu.</p>
                <Link to="/initiatives" className="btn fw-bold rounded-pill px-4 py-2 text-white" style={{ background: '#9333EA', width: 'fit-content' }}>Explore Initiatives</Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card border-0 rounded-4 h-100 shadow-sm p-5">
                <h3 className="fw-bold mb-3" style={{ color: '#8805A4' }}>Databases</h3>
                <p className="text-secondary mb-4" style={{ lineHeight: 1.8 }}>Access comprehensive cancer databases with detailed statistics, factsheets, and research publications from PBCCR.</p>
                <Link to="/factsheets" className="btn fw-bold rounded-pill px-4 py-2 text-white" style={{ background: '#9333EA', width: 'fit-content' }}>View Databases</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
