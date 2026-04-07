import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const MODS=[
  {bg:'#E5E0EC',title:'Cancer Rates',desc:'Cancer rates are calculated to compare data across regions and populations. These are usually expressed per 100,000 people to ensure uniform analysis.'},
  {bg:'#E4DFFF',title:'Cancer Case Definition',desc:'All cancer cases recorded in PBCCR follow internationally accepted medical classification standards. Only confirmed cases are included to ensure data reliability and consistency.'},
  {bg:'#E6DEFF',title:'Age Group Classification',desc:'Cancer data is categorized into different age groups to understand patterns across populations. According to standard guidelines, childhood cancer is defined as cases occurring between ages 0–19 years.'},
  {bg:'#DBE2FA',title:'Cancer Incidence',desc:'Incidence refers to the number of new cancer cases diagnosed within a specific population during a defined time period. It helps in identifying trends and understanding the spread of cancer.'},
]
export default function MethodsPage(){
  return(
    <>
      <Navbar />
      <section className="methods-hero">
        <h1>Methods &amp; Data Calculations</h1>
        <p className="methods-hero-sub">Understanding how cancer data is collected, processed, and analyzed in PBCCR.</p>
        <p className="methods-hero-desc">PBCCR uses standardized statistical methods to collect, analyze, and present cancer data. These methods ensure accuracy, consistency, and meaningful insights that support healthcare planning and research.</p>
      </section>
      <section className="methods-modules">
        {MODS.map(m=>(
          <div className="method-module" key={m.title}>
            <div className="method-module-header">
              <div className="method-icon" style={{background:m.bg}}><svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2 18C1.45 18 0.979 17.804 0.588 17.413C0.196 17.021 0 16.55 0 16V2C0 1.45 0.196 0.979 0.588 0.588C0.979 0.196 1.45 0 2 0H16C16.55 0 17.021 0.196 17.413 0.588C17.804 0.979 18 1.45 18 2V16C18 16.55 17.804 17.021 17.413 17.413C17.021 17.804 16.55 18 16 18H2ZM2 16H16V2H2V16Z" fill="#8805A4"/></svg></div>
              <h3 className="method-title">{m.title}</h3>
            </div>
            <p className="method-desc">{m.desc}</p>
          </div>
        ))}
      </section>
      <section className="formulas-section">
        <h2 className="formulas-heading">Standard Mathematical Formulas</h2>
        <p className="formulas-sub">Precise calculations used for generating standardized cancer statistics across all PBCCR registries.</p>
        <div className="formulas-grid">
          <div className="formula-card">
            <div><p className="formula-label">Calculations I</p><h3 className="formula-title">Crude Incidence Rate (CIR)</h3><p className="formula-desc">Represents the total number of new cancer cases in a specified population during a year, relative to the size of that population.</p></div>
            <div className="formula-box"><div className="formula-fraction"><span className="formula-num">New Cancer Cases</span><span className="formula-den">Total Population</span></div><p className="formula-mult">× 100,000</p></div>
          </div>
          <div className="formula-card">
            <div><p className="formula-label">Calculations II</p><h3 className="formula-title">Age-Specific Rate (ASpR)</h3><p className="formula-desc">Provides incidence data for a specific age group, allowing for detailed demographic comparisons and risk assessment.</p></div>
            <div className="formula-box"><div className="formula-fraction"><span className="formula-num">Cases in Age Group</span><span className="formula-den">Pop. of Age Group</span></div><p className="formula-mult">× 100,000</p></div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}