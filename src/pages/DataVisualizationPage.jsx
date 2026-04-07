import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const ROWS=[
  {code:'I',no:'',name:'Lymphoid leukemias',m:12,f:8,t:10,asr:'4.2',cir:'3.1',cr:'0.4'},
  {code:'II',no:'',name:'Other leukemias',m:8,f:5,t:6,asr:'2.8',cir:'2.1',cr:'0.3'},
  {code:'III',no:'',name:'CNS tumours',m:15,f:11,t:13,asr:'5.6',cir:'4.2',cr:'0.6'},
  {code:'IV',no:'',name:'Lymphomas',m:9,f:6,t:7,asr:'3.2',cir:'2.5',cr:'0.3'},
  {code:'V',no:'',name:'Bone tumours',m:6,f:4,t:5,asr:'2.1',cir:'1.8',cr:'0.2'},
  {code:'VI',no:'',name:'Soft tissue sarcomas',m:7,f:5,t:6,asr:'2.4',cir:'2.0',cr:'0.2'},
  {code:'VII',no:'',name:'Renal tumours',m:4,f:3,t:3,asr:'1.4',cir:'1.1',cr:'0.1'},
  {code:'VIII',no:'',name:'Hepatic tumours',m:3,f:2,t:2,asr:'0.9',cir:'0.7',cr:'0.1'},
  {code:'IX',no:'',name:'Germ cell tumours',m:5,f:7,t:6,asr:'2.3',cir:'1.9',cr:'0.2'},
  {code:'X',no:'',name:'Carcinomas',m:2,f:3,t:2,asr:'0.9',cir:'0.8',cr:'0.1'},
]
export default function DataVisualizationPage(){
  const [ctype,setCtype]=useState('')
  const [gender,setGender]=useState('')
  const [year,setYear]=useState('')
  return(
    <>
      <Navbar />
      <section style={{background:'linear-gradient(180deg,rgba(158,47,205,0.95) 0%,rgba(88,17,157,0.95) 100%)',minHeight:600,padding:'32px 24px'}}>
        <div className="row g-4">
          <div className="col-lg-3">
            <div className="pbr-viz-panel">
              <h6 className="text-white text-center fw-semibold mb-4" style={{fontSize:16}}>Recent Cancer Incidence Data</h6>
              <div className="mb-3">
                <label className="small fw-semibold mb-1 d-block" style={{color:'#334155'}}>Cancer Type</label>
                <select className="pbr-viz-select" value={ctype} onChange={e=>setCtype(e.target.value)}><option value="">Select Cancer Type</option><option>Leukemia</option><option>CNS Tumour</option><option>Lymphoma</option></select>
              </div>
              <div className="mb-3">
                <label className="small fw-semibold mb-1 d-block" style={{color:'#334155'}}>Sub Cancer Type</label>
                <select className="pbr-viz-select"><option>Select Sub Cancer Type</option></select>
              </div>
              <div className="mb-3">
                <label className="small fw-semibold mb-1 d-block" style={{color:'#334155'}}>Gender</label>
                <select className="pbr-viz-select" value={gender} onChange={e=>setGender(e.target.value)}><option value="">All</option><option>Male</option><option>Female</option></select>
              </div>
              <div className="mb-3">
                <label className="small fw-semibold mb-1 d-block" style={{color:'#334155'}}>Year</label>
                <select className="pbr-viz-select" value={year} onChange={e=>setYear(e.target.value)}><option value="">Select Year</option>{[2018,2019,2020,2021,2022].map(y=>(<option key={y}>{y}</option>))}</select>
              </div>
              <div className="mb-3">
                <label className="small fw-semibold mb-1 d-block" style={{color:'#334155'}}>Age Group</label>
                <select className="pbr-viz-select"><option>All Ages</option><option>0-4</option><option>5-9</option><option>10-14</option><option>15-19</option></select>
              </div>
              <div className="mb-4">
                <label className="small fw-semibold mb-1 d-block" style={{color:'#334155'}}>District</label>
                <select className="pbr-viz-select"><option>All Districts</option><option>Chennai</option><option>Coimbatore</option><option>Madurai</option></select>
              </div>
              <div className="d-flex gap-2">
                <button className="btn flex-grow-1 fw-semibold text-white" style={{background:'rgba(255,255,255,0.2)',borderRadius:10,fontSize:12}}>Filter</button>
                <button className="btn bg-white fw-semibold" style={{borderRadius:10,fontSize:12,color:'#3C1245'}}>Export PDF</button>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="pbr-table-wrap">
              <div className="table-responsive">
                <table className="table table-hover mb-0" style={{fontSize:13}}>
                  <thead>
                    <tr style={{background:'#F8FAFC'}}>
                      <th className="py-3 px-3 text-secondary fw-semibold small">Code</th>
                      <th className="py-3 px-2 text-secondary fw-semibold small">No.</th>
                      <th className="py-3 px-3 text-secondary fw-semibold small">Cancer Type</th>
                      <th className="py-3 px-2 text-secondary fw-semibold small text-center">Male</th>
                      <th className="py-3 px-2 text-secondary fw-semibold small text-center">Female</th>
                      <th className="py-3 px-2 text-secondary fw-semibold small text-center">Total</th>
                      <th className="py-3 px-2 text-secondary fw-semibold small text-center">ASR</th>
                      <th className="py-3 px-2 text-secondary fw-semibold small text-center">CIR</th>
                      <th className="py-3 px-2 text-secondary fw-semibold small text-center">CR%</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ROWS.map((r,i)=>(
                      <tr key={i}>
                        <td className="px-3 py-2 fw-semibold" style={{color:'#334155'}}>{r.code}</td>
                        <td className="px-2 py-2" style={{color:'#334155'}}>{i+1}</td>
                        <td className="px-3 py-2" style={{color:'#334155'}}>{r.name}</td>
                        <td className="px-2 py-2 text-center" style={{color:'#334155'}}>{r.m}</td>
                        <td className="px-2 py-2 text-center" style={{color:'#334155'}}>{r.f}</td>
                        <td className="px-2 py-2 text-center fw-semibold" style={{color:'#334155'}}>{r.t}</td>
                        <td className="px-2 py-2 text-center" style={{color:'#334155'}}>{r.asr}</td>
                        <td className="px-2 py-2 text-center" style={{color:'#334155'}}>{r.cir}</td>
                        <td className="px-2 py-2 text-center" style={{color:'#334155'}}>{r.cr}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="d-flex align-items-center justify-content-between px-4 py-3 border-top">
                <span className="small text-secondary">1-10 of 38 districts</span>
                <div className="d-flex align-items-center gap-1">
                  <button className="btn btn-sm rounded-circle" style={{width:28,height:28,padding:0}}>&#8249;</button>
                  {[1,2,3,'...'].map((p,i)=>(<button key={i} className={'btn btn-sm rounded-circle'+(p===1?' text-white':' text-dark')} style={{width:28,height:28,padding:0,background:p===1?'#513FC6':'transparent'}}>{p}</button>))}
                  <button className="btn btn-sm rounded-circle" style={{width:28,height:28,padding:0}}>&#8250;</button>
                </div>
              </div>
            </div>
            <div className="mt-3 text-white">
              <p className="small mb-1"><span className="fw-semibold">Note:</span> ASR-Age Standardized Rate (ASR/10⁵) &nbsp; CIR-Crude Incidence Rate (CIR/10⁵) &nbsp; CR-Cumulative Risk% (CR%)</p>
              <p className="small opacity-75">Old district boundaries as per 2011 census; Chennai – includes 155 divisions covering 170 km²; Kanchipuram – includes Chengalpattu district + part of GCC areas.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}