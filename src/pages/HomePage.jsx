import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default function HomePage(){
  return(
    <>
      <Navbar showLogin={true} />
      <section className="hero-home">
        <div className="hero-home-content">
          <div className="hero-home-left">
            <h1 className="hero-home-title"><span className="highlight">Childhood </span><span className="white">Cancer</span></h1>
            <p className="hero-home-desc">Childhood cancer affects children aged 0–14 years, and sometimes up to 19 years. Early detection and proper treatment can save lives. Digital cancer data helps doctors track trends, improve treatment, and support better healthcare for children.</p>
          </div>
          <div className="hero-home-circle"><img src="https://api.builder.io/api/v1/image/assets/TEMP/59d0517e2bda9d000b9734fd3d69374974c3b63a?width=500" alt="Child and parent" /></div>
        </div>
        <div className="hero-stats-bar">
          <div className="stat-item"><div className="stat-icon-wrap"><img src="https://api.builder.io/api/v1/image/assets/TEMP/e9be6bc5dbcc1536c3ac65882698519109b6770d?width=102" alt="" /></div><div className="stat-content"><p className="stat-title">Recent Cancer Statistics</p><p className="stat-desc">Ugam is a voluntary support group which has been formed by Childhood Cancer Survivors from the After Completion of Therapy (ACT) clinic of Tata Memorial Hospital.</p></div></div>
          <div className="stat-item"><div className="stat-icon-wrap"><img src="https://api.builder.io/api/v1/image/assets/TEMP/f0cc9034c4368735a249d08b0bd1a65454e898ff?width=102" alt="" /></div><div className="stat-content"><p className="stat-title">Trend of Cancer Incidence</p><p className="stat-desc">Ugam is a voluntary support group which has been formed by Childhood Cancer Survivors from the After Completion of Therapy (ACT) clinic of Tata Memorial Hospital.</p></div></div>
          <div className="stat-item"><div className="stat-icon-wrap"><img src="https://api.builder.io/api/v1/image/assets/TEMP/88556b2e84e58ae9c9843ad51a85693a47e0b849?width=102" alt="" /></div><div className="stat-content"><p className="stat-title">Cancer Projection</p><p className="stat-desc">Ugam is a voluntary support group which has been formed by Childhood Cancer Survivors from the After Completion of Therapy (ACT) clinic of Tata Memorial Hospital.</p></div></div>
        </div>
      </section>
      <section className="about-pbccr-section">
        <svg viewBox="0 0 572 364" fill="none" className="about-pbccr-arrow" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M571.702 181.575L381.402 363.36L0.40116 363.781L0.548955 191.39L6.953e-05 0.63121L381.001 0.210403L571.702 181.575Z" fill="url(#ag)"/>
          <text x="160" y="195" fill="#FDFAFF" fontSize="38" fontWeight="700" fontFamily="Inter" textAnchor="middle">ABOUT</text>
          <text x="160" y="250" fill="#FDFAFF" fontSize="38" fontWeight="700" fontFamily="Inter" textAnchor="middle">PBCCR</text>
          <defs><linearGradient id="ag" x1="0" y1="182" x2="572" y2="181" gradientUnits="userSpaceOnUse"><stop stopColor="#530E95" stopOpacity="0.9"/><stop offset="1" stopColor="#8220BA"/></linearGradient></defs>
        </svg>
        <div className="about-pbccr-text"><strong>PBCCR (Population Based Cancer Care Registry)</strong> is a healthcare data platform designed to collect, manage, and analyze cancer-related information across different regions. It helps in understanding cancer patterns, trends, and risk factors within the population.<br/><br/>By using digital data systems, PBCCR supports doctors, researchers, and policymakers in improving early detection, planning effective treatments, and strengthening cancer care services.</div>
      </section>
      <section className="methods-section-home">
        <div className="methods-img-card"><img src="https://api.builder.io/api/v1/image/assets/TEMP/64f7352d0222efe2fdf48ce78fdc452158740378?width=613" alt="Cancer Research Laboratory" /></div>
        <div className="methods-content">
          <p className="methods-label">Our Approach</p>
          <h2 className="methods-title-home">Methods</h2>
          <p className="methods-desc-home">We follow standardized methods and statistical approaches to collect, analyze, and present cancer data accurately. Our methodology ensures reliable insights across different regions and age groups. To understand how we collect data, calculate rates, and generate meaningful reports, click below.</p>
          <a href="/methods" className="methods-link-home">Learn About Our Methods  →</a>
        </div>
      </section>
      <section className="initiatives-section-home">
        <div className="init-card"><img className="init-card-img" src="https://api.builder.io/api/v1/image/assets/TEMP/612c7ed7f42bab0588fc6a56b7568ce167d32a82?width=1000" alt="Cancer Institute" /><div className="init-card-body"><p className="init-card-title">Cancer Institute (W.I.A)</p><p className="init-card-desc">Unifying data from 450+ medical centers into a single, high-fidelity national surveillance pipeline.</p><button className="init-card-btn">Partners <svg width="8" height="14" viewBox="0 0 8 14" fill="none"><path d="M1.206 13.5887L0 12.3827L5.58836 6.79436L0 1.206L1.206 0L8.00036 6.79436L1.206 13.5887Z" fill="#240742"/></svg></button></div></div>
        <div className="init-card"><img className="init-card-img" src="https://api.builder.io/api/v1/image/assets/TEMP/d3ebc9a00890bb1335f6b29232b94c355cd6c12d?width=1000" alt="PBCCR Database" /><div className="init-card-body"><p className="init-card-title" style={{color:'#540B98'}}>PBCCR Database</p><p className="init-card-desc">Incidence statistics by populations/cancers since 2012. Trend of cancers 2012-2021. Projected cancers 2022-2028. Age @ diagnosis, Gender, Incidence year, Residence district...</p><button className="init-card-btn">List of Hospitals <svg width="8" height="14" viewBox="0 0 8 14" fill="none"><path d="M1.206 13.5887L0 12.3827L5.58836 6.79436L0 1.206L1.206 0L8.00036 6.79436L1.206 13.5887Z" fill="#240742"/></svg></button></div></div>
        <div className="init-right-shape"><span>INITIATIVES<br/>AND<br/>DATABASES</span></div>
      </section>
      <Footer />
    </>
  )
}