import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const FAQS=[
  {id:1,q:'What is PBCCR?',a:'PBCCR is a digital cancer registry that collects and analyzes cancer data for better healthcare planning.'},
  {id:2,q:'Who can use this platform?',a:'Healthcare professionals, researchers, policymakers, and public health administrators can use this platform to access cancer statistics and insights.'},
  {id:3,q:'Is the data reliable?',a:'Yes. All cancer cases recorded in PBCCR follow internationally accepted medical classification standards. Only confirmed cases are included to ensure data reliability and consistency.'},
]
const CARDS=[
  {text:'Navigate through the menu to explore different sections like Data, Dashboard, and Methods.'},
  {text:'Use the search bar to quickly find specific cancer data or reports.'},
  {text:'Click on profile to access your details.'},
  {text:'Visit the Methods section to understand how the data is collected and analyzed.'},
]
export default function HelpPage(){
  const [faq,setFaq]=useState(1)
  return(
    <>
      <Navbar />
      <section className="help-hero">
        <div className="help-hero-img"><img src="https://api.builder.io/api/v1/image/assets/TEMP/a52376c9452b61dfc531a2563a9ec98e9a69fce0?width=952" alt="Doctor" /></div>
        <div className="help-hero-content">
          <h1 className="help-hero-title">Help &amp; Support</h1>
          <p className="help-hero-tagline">We're here to help you understand and use PBCCR effectively</p>
          <p className="help-hero-desc">Welcome to the PBCCR Help Center. This platform is designed to provide cancer data insights and support awareness. If you have any questions about using the system, accessing data, or understanding reports, you can find guidance here.</p>
        </div>
      </section>
      <div className="help-cards">
        {CARDS.map((c,i)=>(
          <div className="help-card" key={i}>
            <div className="help-card-icon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="9" stroke="#8805A4" strokeWidth="2"/><path d="M10 6v4M10 14h.01" stroke="#8805A4" strokeWidth="2" strokeLinecap="round"/></svg></div>
            <p className="help-card-text">{c.text}</p>
          </div>
        ))}
      </div>
      <section className="faq-section">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-sub">Find quick answers to common inquiries about our platform</p>
        <div className="faq-list">
          {FAQS.map(f=>(
            <div key={f.id} className={"faq-item"+(faq!==f.id?' closed':'')}>
              <div className="faq-question" onClick={()=>setFaq(faq===f.id?null:f.id)}>
                <span className="faq-question-text">{f.q}</span>
                <svg width="9" height="6" viewBox="0 0 12 8" fill="none">{faq===f.id?<path d="M6 0L12 6L10.6 7.4L6 2.8L1.4 7.4L0 6L6 0Z" fill="#1C1B23"/>:<path d="M6 7.4L0 1.4L1.4 0L6 4.6L10.6 0L12 1.4L6 7.4Z" fill="#1C1B23"/>}</svg>
              </div>
              {faq===f.id&&<div className="faq-answer">{f.a}</div>}
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  )
}