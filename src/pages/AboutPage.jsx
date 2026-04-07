import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default function AboutPage(){
  const [slide,setSlide]=useState(0)
  return(
    <>
      <Navbar />
      <section className="about-hero">
        <div>
          <h1 className="about-hero-heading">Understanding Cancer Through Data</h1>
          <p className="about-hero-desc">PBCCR (Population Based Cancer Care Registry) is a digital platform designed to collect, manage, and analyze cancer-related data across different regions. It helps in understanding cancer patterns, trends, and risk factors to support better healthcare decisions.</p>
          <div className="about-hero-buttons">
            <button className="btn-primary">Data Visualization <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="white"/></svg></button>
            <button className="btn-outline">Contact Us</button>
          </div>
        </div>
        <div className="about-hero-img"><img src="https://api.builder.io/api/v1/image/assets/TEMP/ed9c69417224e009e0736af65413aace9917a893?width=1255" alt="Digital healthcare" /></div>
      </section>
      <section className="mission-vision">
        <div className="mission-card">
          <h2 className="card-title">Our Mission</h2>
          <p className="card-body">Our mission is to improve cancer awareness, early detection, and treatment outcomes by providing accurate and reliable data. We aim to support healthcare professionals, researchers, and policymakers with meaningful insights.</p>
          <a href="/methods" className="mission-link">Learn more about our methodology <svg width="22" height="11" viewBox="0 0 22 11" fill="none"><path d="M14.5 9L13.075 7.6L15.175 5.5H0V3.5H15.175L13.1 1.4L14.525 0L19 4.5L14.5 9Z" fill="white"/></svg></a>
        </div>
        <div className="vision-card">
          <h2 className="card-title">Our Vision</h2>
          <p className="card-body">To build a data-driven healthcare ecosystem where cancer can be detected early, treated effectively, and managed with better planning and awareness.</p>
        </div>
      </section>
      <section className="why-what-section">
        <div className="why-card">
          <div className="why-card-header"><div className="why-icon"><svg width="20" height="20" viewBox="0 0 20 30" fill="none"><path d="M9.71875 26.6562C11.2812 25.1771 12.5052 23.7552 13.3906 22.3906C14.276 21.026 14.7188 19.875 14.7188 18.9375C14.7188 17.5 14.2344 16.276 13.2656 15.2656C12.2969 14.2552 11.1146 13.75 9.71875 13.75C8.32292 13.75 7.14062 14.2552 6.17188 15.2656C5.20312 16.276 4.71875 17.5 4.71875 18.9375C4.71875 19.875 5.16146 21.026 6.04688 22.3906C6.93229 23.7552 8.15625 25.1771 9.71875 26.6562ZM9.71875 30C7.19792 27.8542 5.31771 25.8646 4.07812 24.0312C2.83854 22.1979 2.21875 20.5 2.21875 18.9375C2.21875 16.8125 2.94271 15 4.39062 13.5C5.83854 12 7.61458 11.25 9.71875 11.25C11.8229 11.25 13.599 12 15.0469 13.5C16.4948 15 17.2188 16.8125 17.2188 18.9375C17.2188 20.5 16.599 22.1979 15.3594 24.0312C14.1198 25.8646 12.2396 27.8542 9.71875 30Z" fill="#8805A4"/></svg></div><h3 className="why-title">Why PBCCR Matters</h3></div>
          <p className="why-desc">Accurate cancer data is essential for improving healthcare systems. PBCCR helps in identifying high-risk areas, tracking trends, and supporting early diagnosis.</p>
        </div>
        <div className="what-card">
          <div className="what-content"><h3 className="what-title">What We Do</h3><p className="what-desc">We collect population-based cancer data and transform it into useful insights through analysis and visualization. Our platform enables users to explore cancer statistics by age, region, and type, helping in better understanding and planning.</p></div>
          <div className="what-icons">
            {[{l:'Collection'},{l:'Analysis'},{l:'Insights'},{l:'Outcomes'}].map(i=>(<div key={i.l} className="what-icon-card"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect width="16" height="16" rx="3" fill="#8805A4" opacity="0.3"/></svg><span className="what-icon-label">{i.l}</span></div>))}
          </div>
        </div>
      </section>
      <section className="authorship-section">
        <h2 className="authorship-title">Authorship and Perspective</h2>
        <div className="carousel-wrapper">
          <button className="carousel-btn prev" onClick={()=>setSlide(Math.max(0,slide-1))}><svg width="7" height="11" viewBox="0 0 7 11" fill="none"><path d="M6 12L0 6L6 0L7.4 1.4L2.8 6L7.4 10.6L6 12Z" fill="#513FC6"/></svg></button>
          <div className="carousel-track">
            <div className="profile-card"><div className="profile-img-wrap"><img src="https://api.builder.io/api/v1/image/assets/TEMP/2d18608c84d5b04c8732533796edc51625e931b4?width=336" alt="Dr. Elena Rodriguez" /></div><div className="profile-name-box"><p className="profile-name">Dr. Elena Rodriguez</p><p className="profile-role">Head of Clinical Oncology</p></div></div>
            <div className="content-card"><div className="content-card-inner">Registry Analysis 2024: Trends in<br/><strong>Early Detection</strong></div></div>
          </div>
          <button className="carousel-btn next" onClick={()=>setSlide(slide+1)}><svg width="7" height="11" viewBox="0 0 7 11" fill="none"><path d="M4.6 6L0 1.4L1.4 0L7.4 6L1.4 12L0 10.6L4.6 6Z" fill="#513FC6"/></svg></button>
        </div>
      </section>
      <section className="sponsor-section">
        <h2 className="sponsor-title">Sponsor</h2>
        <div style={{background:'linear-gradient(90deg,#631EA6 0%,#A037D0 100%)',borderRadius:12,padding:8,display:'grid',gridTemplateColumns:'2fr repeat(5,1fr)',gap:10,overflow:'hidden'}}>
          <div style={{background:'#fff',borderRadius:12,display:'flex',overflow:'hidden'}}>
            <div style={{background:'#E8E6F9',padding:'16px 8px',display:'flex',alignItems:'center',justifyContent:'center',writingMode:'vertical-rl',transform:'rotate(180deg)',color:'#8805A4',fontWeight:700,fontSize:13,letterSpacing:1.5,textTransform:'uppercase'}}>WIA Cancer</div>
            <div style={{padding:'32px 24px'}}><h3 style={{color:'#8805A4',fontSize:26,fontWeight:800,marginBottom:10}}>Sponsor</h3><p style={{color:'#474554',fontSize:14,lineHeight:1.6}}>Explore our multidimensional clinical repository designed for precision oncology and longitudinal patient monitoring.</p></div>
          </div>
          {[1,2,3,4,5].map(i=>(<div key={i} style={{background:'#fff',borderRadius:12,display:'flex',alignItems:'center',justifyContent:'center',minHeight:180}}><p style={{writingMode:'vertical-rl',textTransform:'uppercase',fontSize:11,fontWeight:700,letterSpacing:1,color:'#8805A4',padding:'16px 8px'}}>Cancer Institute (W.I.A)</p></div>))}
        </div>
      </section>
      <Footer />
    </>
  )
}