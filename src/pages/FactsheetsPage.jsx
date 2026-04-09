import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const FACTSHEETS = [
  { yr: '2023', title: 'Tamil Nadu Childhood Cancer Report 2023', desc: 'Comprehensive analysis of childhood cancer incidence rates across all districts of Tamil Nadu for the year 2023.', tags: ['Incidence','Districts','2023'] },
  { yr: '2022', title: 'Cancer Incidence by Age Group 2022', desc: 'Detailed breakdown of cancer incidence rates categorized by age groups (0-4, 5-9, 10-14, 15-19) across the state.', tags: ['Age Group','Incidence','2022'] },
  { yr: '2021', title: 'Gender-Based Cancer Analysis 2021', desc: 'Analysis of gender disparities in childhood cancer incidence and outcomes across Tamil Nadu for 2021.', tags: ['Gender','Analysis','2021'] },
  { yr: '2020', title: 'Survival Rate Analysis 2020', desc: 'Five-year survival rate analysis for major childhood cancer types including leukemia, CNS tumors, and lymphomas.', tags: ['Survival','Outcomes','2020'] },
  { yr: '2019', title: 'Regional Cancer Patterns 2019', desc: 'Geographic distribution of childhood cancer cases across different regions and districts of Tamil Nadu.', tags: ['Regional','Districts','2019'] },
  { yr: '2018', title: 'PBCCR Annual Report 2018', desc: 'Complete annual report covering all cancer registry activities, data collection methods, and statistical findings.', tags: ['Annual Report','2018'] },
]

export default function FactsheetsPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pbr-banner">
        <h1 className="fw-bold mb-3" style={{ fontSize: 'clamp(24px,4vw,44px)' }}>Factsheets</h1>
        <p style={{ color: 'rgba(224,231,255,0.90)', maxWidth: 560, margin: '0 auto' }}>Download comprehensive cancer data reports and factsheets from the PBCCR registry.</p>
      </section>

      {/* Cards */}
      <section className="py-5 px-5 bg-light">
        <div className="row g-4">
          {FACTSHEETS.map((f, i) => (
            <div className="col-md-4" key={i}>
              <div className="card border-0 rounded-4 h-100 shadow-sm overflow-hidden">
                <div className="px-4 pt-4">
                  <span className="badge rounded-pill mb-3 fw-semibold" style={{ background: 'rgba(147,51,234,0.1)', color: '#7124AD', fontSize: 13 }}>{f.yr}</span>
                  <h6 className="fw-bold mb-2" style={{ lineHeight: 1.5 }}>{f.title}</h6>
                  <p className="text-secondary small mb-3" style={{ lineHeight: 1.7 }}>{f.desc}</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    {f.tags.map((tag) => (
                      <span key={tag} className="badge rounded-pill" style={{ background: '#F1F5F9', color: '#64748B', fontWeight: 500, fontSize: 11 }}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="px-4 pb-4 mt-auto">
                  <button className="btn w-100 fw-bold rounded-pill py-2 text-white" style={{ background: 'linear-gradient(90deg,#611DA2 0%,#9333EA 100%)' }}>
                    &#8659; Download PDF
                  </button>
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
