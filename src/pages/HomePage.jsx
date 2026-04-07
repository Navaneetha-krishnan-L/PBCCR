import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
export default function HomePage(){
  return(
    <>
      <Navbar showLogin={true} />
      <section className="pbr-hero-home">
        <div className="d-flex align-items-center px-5 py-5 flex-grow-1 gap-4 flex-wrap">
          <div style={{maxWidth:520}}>
            <h1 className="fw-bold mb-3" style={{fontSize:'clamp(28px,4vw,44px)'}}><span style={{color:'#C482FF'}}>Childhood </span><span className="text-white">Cancer</span></h1>
            <p className="text-white-50" style={{lineHeight:2,textAlign:'justify'}}>Childhood cancer affects children aged 0–14 years, and sometimes up to 19 years. Early detection and proper treatment can save lives. Digital cancer data helps doctors track trends, improve treatment, and support better healthcare for children.</p>
          </div>
          <div className="ms-auto" style={{width:240,height:240,borderRadius:'50%',overflow:'hidden',border:'3px solid rgba(255,255,255,0.3)',flexShrink:0}}>
            <img src="https://api.builder.io/api/v1/image/assets/TEMP/59d0517e2bda9d000b9734fd3d69374974c3b63a?width=500" alt="Child" style={{width:'100%',height:'100%',objectFit:'cover'}} />
          </div>
        </div>
        <div className="pbr-stats-bar">
          <div className="row g-0 px-4 py-3">
            {[
              {src:'https://api.builder.io/api/v1/image/assets/TEMP/e9be6bc5dbcc1536c3ac65882698519109b6770d?width=102',t:'Recent Cancer Statistics'},
              {src:'https://api.builder.io/api/v1/image/assets/TEMP/f0cc9034c4368735a249d08b0bd1a65454e898ff?width=102',t:'Trend of Cancer Incidence'},
              {src:'https://api.builder.io/api/v1/image/assets/TEMP/88556b2e84e58ae9c9843ad51a85693a47e0b849?width=102',t:'Cancer Projection'},
            ].map((s,i)=>(
              <div className="col-md-4" key={i}>
                <div className="d-flex gap-3 align-items-start p-3">
                  <div className="pbr-stat-icon d-flex align-items-center justify-content-center">
                    <img src={s.src} alt="" style={{width:46,height:54,objectFit:'contain'}} />
                  </div>
                  <div>
                    <p className="text-white fw-bold text-uppercase mb-2" style={{fontSize:14,letterSpacing:1.2}}>{s.t}</p>
                    <p className="text-white-50 small mb-0" style={{lineHeight:1.7}}>Ugam is a voluntary support group which has been formed by Childhood Cancer Survivors from the After Completion of Therapy (ACT) clinic of Tata Memorial Hospital.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="d-flex align-items-center">
          <svg viewBox="0 0 572 364" fill="none" className="pbr-about-arrow" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M571.702 181.575L381.402 363.36L0.40116 363.781L0.548955 191.39L6.953e-05 0.63121L381.001 0.210403L571.702 181.575Z" fill="url(#ag2)"/>
            <text x="160" y="195" fill="#FDFAFF" fontSize="36" fontWeight="700" fontFamily="Inter" textAnchor="middle">ABOUT</text>
            <text x="160" y="250" fill="#FDFAFF" fontSize="36" fontWeight="700" fontFamily="Inter" textAnchor="middle">PBCCR</text>
            <defs><linearGradient id="ag2" x1="0" y1="182" x2="572" y2="181" gradientUnits="userSpaceOnUse"><stop stopColor="#530E95" stopOpacity="0.9"/><stop offset="1" stopColor="#8220BA"/></linearGradient></defs>
          </svg>
          <div className="flex-grow-1 p-5" style={{color:'#1C1B23',fontSize:15,lineHeight:2,textAlign:'justify'}}>
            <strong style={{color:'#540B98'}}>PBCCR (Population Based Cancer Care Registry)</strong> is a healthcare data platform designed to collect, manage, and analyze cancer-related information across different regions. It helps in understanding cancer patterns, trends, and risk factors within the population.<br/><br/>By using digital data systems, PBCCR supports doctors, researchers, and policymakers in improving early detection, planning effective treatments, and strengthening cancer care services.
          </div>
        </div>
      </section>
      <section className="pbr-grad-methods py-5 px-5">
        <div className="row align-items-center g-5">
          <div className="col-md-4">
            <div className="pbr-methods-img"><img src="https://api.builder.io/api/v1/image/assets/TEMP/64f7352d0222efe2fdf48ce78fdc452158740378?width=613" alt="Lab" className="w-100" style={{height:280,objectFit:'cover'}} /></div>
          </div>
          <div className="col-md-8 text-white">
            <p className="small fw-semibold text-uppercase opacity-75 mb-2" style={{letterSpacing:2}}>Our Approach</p>
            <h2 className="fw-bold text-uppercase mb-3" style={{letterSpacing:2,fontSize:'clamp(24px,3vw,38px)'}}>Methods</h2>
            <p style={{lineHeight:2,textAlign:'justify',opacity:0.95}}>We follow standardized methods and statistical approaches to collect, analyze, and present cancer data accurately. Our methodology ensures reliable insights across different regions and age groups.</p>
            <Link to="/methods" className="text-white fw-bold">Learn About Our Methods  →</Link>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="d-flex align-items-stretch">
          {[
            {img:'https://api.builder.io/api/v1/image/assets/TEMP/612c7ed7f42bab0588fc6a56b7568ce167d32a82?width=1000',title:'Cancer Institute (W.I.A)',desc:'Unifying data from 450+ medical centers into a single, high-fidelity national surveillance pipeline.',btn:'Partners'},
            {img:'https://api.builder.io/api/v1/image/assets/TEMP/d3ebc9a00890bb1335f6b29232b94c355cd6c12d?width=1000',title:'PBCCR Database',desc:'Incidence statistics by populations/cancers since 2012. Trend of cancers 2012-2021. Projected cancers 2022-2028.',btn:'List of Hospitals'},
          ].map((c,i)=>(
            <div className="flex-grow-1" key={i} style={{border:'1px solid #f0f0f0',borderRadius:28,margin:16,overflow:'hidden'}}>
              <img src={c.img} alt={c.title} className="w-100" style={{height:220,objectFit:'cover'}} />
              <div className="p-4">
                <h5 className="fw-semibold" style={{color:'#620EB1'}}>{c.title}</h5>
                <p className="small text-secondary" style={{lineHeight:1.6,textAlign:'justify'}}>{c.desc}</p>
                <button className="btn btn-sm fw-bold p-0 text-uppercase" style={{color:'#240742'}}>{ c.btn} ›</button>
              </div>
            </div>
          ))}
          <div className="pbr-init-shape">INITIATIVES<br/>AND<br/>DATABASES</div>
        </div>
      </section>
      <Footer />
    </>
  )
}