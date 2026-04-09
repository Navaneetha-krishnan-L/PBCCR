import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ROWS = [
  { code: 'I',   name: 'Lymphoid leukemias',     m:12, f:8,  t:10, asr:'4.2', cir:'3.1', cr:'0.4' },
  { code: 'II',  name: 'Other leukemias',        m:8,  f:5,  t:6,  asr:'2.8', cir:'2.1', cr:'0.3' },
  { code: 'III', name: 'CNS tumours',            m:15, f:11, t:13, asr:'5.6', cir:'4.2', cr:'0.6' },
  { code: 'IV',  name: 'Lymphomas',              m:9,  f:6,  t:7,  asr:'3.2', cir:'2.5', cr:'0.3' },
  { code: 'V',   name: 'Bone tumours',           m:6,  f:4,  t:5,  asr:'2.1', cir:'1.8', cr:'0.2' },
  { code: 'VI',  name: 'Soft tissue sarcomas',   m:7,  f:5,  t:6,  asr:'2.4', cir:'2.0', cr:'0.2' },
  { code: 'VII', name: 'Renal tumours',          m:4,  f:3,  t:3,  asr:'1.4', cir:'1.1', cr:'0.1' },
  { code: 'VIII',name: 'Hepatic tumours',        m:3,  f:2,  t:2,  asr:'0.9', cir:'0.7', cr:'0.1' },
  { code: 'IX',  name: 'Germ cell tumours',      m:5,  f:7,  t:6,  asr:'2.3', cir:'1.9', cr:'0.2' },
  { code: 'X',   name: 'Carcinomas',             m:2,  f:3,  t:2,  asr:'0.9', cir:'0.8', cr:'0.1' },
]

export default function DataVisualizationPage() {
  const [ctype, setCtype] = useState('')
  const [gender, setGender] = useState('')
  const [year, setYear] = useState('')

  return (
    <>
      <Navbar />
      <div className="pbr-viz-bg">
        <div className="row g-4">

          {/* Filters */}
          <div className="col-lg-3">
            <div className="pbr-viz-panel">
              <h6 className="fw-bold mb-4 text-center" style={{ color: '#3C1245', fontSize: 15 }}>Recent Cancer Incidence Data</h6>

              {[{label:'Cancer Type',val:ctype,set:setCtype,opts:['Leukemia','CNS Tumour','Lymphoma','Bone Tumour']},{label:'Sub Cancer Type',val:'',set:()=>{},opts:['Lymphoid','Myeloid','Other']},{label:'Gender',val:gender,set:setGender,opts:['Male','Female']},{label:'Year',val:year,set:setYear,opts:['2018','2019','2020','2021','2022','2023']},{label:'Age Group',val:'',set:()=>{},opts:['0-4','5-9','10-14','15-19']},{label:'District',val:'',set:()=>{},opts:['Chennai','Coimbatore','Madurai','Tiruchirappalli']}].map((f) => (
                <div className="mb-3" key={f.label}>
                  <label className="form-label fw-semibold small" style={{ color: '#334155' }}>{f.label}</label>
                  <select className="form-select rounded-3 border-0" style={{ background: '#F8FAFC', fontSize: 13, color: '#6B7280' }} value={f.val} onChange={e => f.set(e.target.value)}>
                    <option value="">Select {f.label}</option>
                    {f.opts.map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
              ))}

              <div className="d-flex gap-2 mt-4">
                <button className="btn flex-grow-1 fw-semibold text-white rounded-3" style={{ background: '#8805A4', fontSize: 13 }}>Apply Filter</button>
                <button className="btn bg-white fw-semibold rounded-3" style={{ fontSize: 13, color: '#3C1245' }}>Export</button>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="col-lg-9">
            <div className="pbr-table-wrap">
              <div className="table-responsive">
                <table className="table table-hover mb-0" style={{ fontSize: 13 }}>
                  <thead style={{ background: '#F8FAFC' }}>
                    <tr>
                      {['Code','Cancer Type','Male','Female','Total','ASR','CIR','CR'].map(h => (
                        <th key={h} className="py-3 px-3 text-secondary fw-semibold small">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {ROWS.map((row, i) => (
                      <tr key={i}>
                        <td className="px-3 py-3">
                          <span className="badge rounded-circle d-inline-flex align-items-center justify-content-center" style={{ background: '#513FC6', width: 28, height: 28, fontSize: 10 }}>{row.code}</span>
                        </td>
                        <td className="px-3 py-3 fw-semibold">{row.name}</td>
                        <td className="px-3 py-3 text-center">{row.m}</td>
                        <td className="px-3 py-3 text-center">{row.f}</td>
                        <td className="px-3 py-3 text-center fw-bold">{row.t}</td>
                        <td className="px-3 py-3 text-center">{row.asr}</td>
                        <td className="px-3 py-3 text-center">{row.cir}</td>
                        <td className="px-3 py-3 text-center">{row.cr}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="d-flex align-items-center justify-content-between px-4 py-3 border-top">
                <p className="text-secondary small mb-0">Showing 10 of 48 cancer types</p>
                <div className="d-flex gap-2">
                  {[1,2,3,4,5].map(p => (
                    <button key={p} className="btn btn-sm rounded-circle fw-bold" style={{ width: 34, height: 34, background: p===1?'#513FC6':'#F1F5F9', color: p===1?'#fff':'#475569' }}>{p}</button>
                  ))}
                </div>
              </div>
              <div className="px-4 py-3 border-top bg-light">
                <p className="text-secondary small mb-0"><strong>Notes:</strong> ASR = Age-Standardized Rate per 100,000 &nbsp;|&nbsp; CIR = Cumulative Incidence Rate &nbsp;|&nbsp; CR = Crude Rate per 100,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
