import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const ITEMS=[
  {id:1,title:'Cancer Institute (WIA)',desc:'As a pioneer in cancer registries since 2012, the Cancer Institute (WIA) serves as the primary technical partner for PBCCR. Their expertise drives the standard for oncology data management.',list:['Technical coordination of state-wide registries','Training for healthcare professionals'],img:'https://api.builder.io/api/v1/image/assets/TEMP/b75efdad4a4561838f9072a4fed41dccef97e885?width=944'},
  {id:2,title:'DPH&PM',desc:'The Directorate of Public Health and Preventive Medicine coordinates public health programs, disease surveillance, and prevention efforts across Tamil Nadu, working in close partnership with PBCCR.',list:[],img:null},
  {id:3,title:'Directorate of Medical Education (DME)',desc:'The DME oversees medical education across Tamil Nadu government institutions, providing the academic and training backbone that supports PBCCR capabilities.',list:[],img:null},
]
export default function InitiativesPage(){
  const [open,setOpen]=useState(1)
  return(
    <>
      <Navbar />
      <section className="initiatives-hero"><div><h1>Our Initiatives</h1><p className="initiatives-hero-sub">Key organizations supporting cancer data collection and healthcare improvement across the region.</p></div></section>
      <section className="initiatives-accordion">
        {ITEMS.map(item=>(
          <div className="accordion-item" key={item.id}>
            <div className={"accordion-header"+(open===item.id?' open':'')} onClick={()=>setOpen(open===item.id?null:item.id)}>
              <div className="accordion-header-left">
                <div className="accordion-icon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="9" stroke="#8805A4" strokeWidth="2"/></svg></div>
                <h3 className="accordion-title">{item.title}</h3>
              </div>
              <svg className="accordion-chevron" width="12" height="8" viewBox="0 0 12 8" fill="none">{open===item.id?<path d="M6 0L12 6L10.6 7.4L6 2.8L1.4 7.4L0 6L6 0Z" fill="#513FC6"/>:<path d="M6 7.4L0 1.4L1.4 0L6 4.6L10.6 0L12 1.4L6 7.4Z" fill="#787585"/>}</svg>
            </div>
            {open===item.id&&(
              <div className={"accordion-body"+(item.img?'':' single')}>
                <div>
                  <p className="accordion-text">{item.desc}</p>
                  {item.list.length>0&&<ul className="accordion-list">{item.list.map(l=>(<li key={l} className="accordion-list-item"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" stroke="#513FC6" strokeWidth="1.5"/><path d="M3.5 6l1.7 1.7L8.5 4.5" stroke="#513FC6" strokeWidth="1.5" strokeLinecap="round"/></svg>{l}</li>))}</ul>}
                </div>
                {item.img&&<div className="accordion-img"><img src={item.img} alt={item.title}/><div className="accordion-img-overlay"/></div>}
              </div>
            )}
          </div>
        ))}
      </section>
      <Footer />
    </>
  )
}